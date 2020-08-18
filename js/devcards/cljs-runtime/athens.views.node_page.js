goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.util');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('athens.views.dropdown');
goog.require('athens.views.filters');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
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
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__57252 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57252,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57252,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57252,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e57251){if((e57251 instanceof Object)){
var _ = e57251;
return false;
} else {
throw e57251;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.get_added = (function athens$views$node_page$get_added(s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__57255){
var vec__57256 = p__57255;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57256,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"added","added",2057651688));
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(s));
});
athens.views.node_page.get_excluded = (function athens$views$node_page$get_excluded(s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__57259){
var vec__57260 = p__57259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57260,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"excluded","excluded",-715952088));
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(s));
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null,new cljs.core.Keyword("lf","show","lf/show",-576708583),false,new cljs.core.Keyword("lf","x","lf/x",2099359651),null,new cljs.core.Keyword("lf","y","lf/y",-1757872454),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__57263 = block;
var map__57263__$1 = (((((!((map__57263 == null))))?(((((map__57263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57263):map__57263);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__57264 = cljs.core.deref(state);
var map__57264__$1 = (((((!((map__57264 == null))))?(((((map__57264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57264):map__57264);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid,e);
})], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__57267 = e.target.value;
var G__57268 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__57267,G__57268) : athens.views.node_page.db_handler.call(null,G__57267,G__57268));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57269(s__57270){
return (new cljs.core.LazySeq(null,(function (){
var s__57270__$1 = s__57270;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57270__$1);
if(temp__5735__auto__){
var s__57270__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57270__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57270__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57272 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57271 = (0);
while(true){
if((i__57271 < size__4528__auto__)){
var map__57273 = cljs.core._nth(c__4527__auto__,i__57271);
var map__57273__$1 = (((((!((map__57273 == null))))?(((((map__57273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57273):map__57273);
var child = map__57273__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57273__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57272,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__57405 = (i__57271 + (1));
i__57271 = G__57405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57272),athens$views$node_page$node_page_el_$_iter__57269(cljs.core.chunk_rest(s__57270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57272),null);
}
} else {
var map__57275 = cljs.core.first(s__57270__$2);
var map__57275__$1 = (((((!((map__57275 == null))))?(((((map__57275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57275):map__57275);
var child = map__57275__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57275__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__57269(cljs.core.rest(s__57270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57277(s__57278){
return (new cljs.core.LazySeq(null,(function (){
var s__57278__$1 = s__57278;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57278__$1);
if(temp__5735__auto__){
var s__57278__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57278__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57278__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57280 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57279 = (0);
while(true){
if((i__57279 < size__4528__auto__)){
var vec__57281 = cljs.core._nth(c__4527__auto__,i__57279);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57281,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57281,(1),null);
cljs.core.chunk_append(b__57280,(cljs.core.truth_(cljs.core.not_empty(refs))?(function (){var filter_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"lex","lex",1572323917),new cljs.core.Keyword(null,"items","items",1031954938),athens.db.construct_links(title),new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57279,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("lf","show","lf/show",-576708583),cljs.core.not(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
});})(i__57279,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null),(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"width","width",-384071477),"18rem",new cljs.core.Keyword(null,"left","left",-399115937),"-1050%",new cljs.core.Keyword(null,"top","top",-1856271961),"0%"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filters.filters_el,uid,filter_state], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57279,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284(s__57285){
return (new cljs.core.LazySeq(null,((function (i__57279,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57285__$1 = s__57285;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57285__$1);
if(temp__5735__auto____$1){
var s__57285__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57285__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57285__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57287 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57286 = (0);
while(true){
if((i__57286 < size__4528__auto____$1)){
var vec__57288 = cljs.core._nth(c__4527__auto____$1,i__57286);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57288,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57288,(1),null);
cljs.core.chunk_append(b__57287,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57286,i__57279,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57286,i__57279,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$2(console.log(athens.views.node_page.get_added(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(filter_state))),(function (){var iter__4529__auto__ = ((function (i__57286,i__57279,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291(s__57292){
return (new cljs.core.LazySeq(null,((function (i__57286,i__57279,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57292__$1 = s__57292;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57292__$1);
if(temp__5735__auto____$2){
var s__57292__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57292__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57292__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57294 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57293 = (0);
while(true){
if((i__57293 < size__4528__auto____$2)){
var map__57295 = cljs.core._nth(c__4527__auto____$2,i__57293);
var map__57295__$1 = (((((!((map__57295 == null))))?(((((map__57295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57295):map__57295);
var block__$1 = map__57295__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57295__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57295__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57294,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57293,i__57286,i__57279,map__57295,map__57295__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57294,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291_$_iter__57297(s__57298){
return (new cljs.core.LazySeq(null,((function (i__57293,i__57286,i__57279,map__57295,map__57295__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57294,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57298__$1 = s__57298;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57298__$1);
if(temp__5735__auto____$3){
var s__57298__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57298__$2)){
var c__4527__auto____$3 = cljs.core.chunk_first(s__57298__$2);
var size__4528__auto____$3 = cljs.core.count(c__4527__auto____$3);
var b__57300 = cljs.core.chunk_buffer(size__4528__auto____$3);
if((function (){var i__57299 = (0);
while(true){
if((i__57299 < size__4528__auto____$3)){
var map__57301 = cljs.core._nth(c__4527__auto____$3,i__57299);
var map__57301__$1 = (((((!((map__57301 == null))))?(((((map__57301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57301):map__57301);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57301__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57301__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57301__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57300,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57299,i__57293,i__57286,i__57279,map__57301,map__57301__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57300,s__57298__$2,temp__5735__auto____$3,map__57295,map__57295__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57294,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57299,i__57293,i__57286,i__57279,map__57301,map__57301__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57300,s__57298__$2,temp__5735__auto____$3,map__57295,map__57295__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57294,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57406 = (i__57299 + (1));
i__57299 = G__57406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57300),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291_$_iter__57297(cljs.core.chunk_rest(s__57298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57300),null);
}
} else {
var map__57303 = cljs.core.first(s__57298__$2);
var map__57303__$1 = (((((!((map__57303 == null))))?(((((map__57303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57303):map__57303);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57303__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57303__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57303__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57293,i__57286,i__57279,map__57303,map__57303__$1,title__$1,string,uid__$2,s__57298__$2,temp__5735__auto____$3,map__57295,map__57295__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57294,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57293,i__57286,i__57279,map__57303,map__57303__$1,title__$1,string,uid__$2,s__57298__$2,temp__5735__auto____$3,map__57295,map__57295__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57294,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291_$_iter__57297(cljs.core.rest(s__57298__$2)));
}
} else {
return null;
}
break;
}
});})(i__57293,i__57286,i__57279,map__57295,map__57295__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57294,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57293,i__57286,i__57279,map__57295,map__57295__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57294,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57407 = (i__57293 + (1));
i__57293 = G__57407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57294),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291(cljs.core.chunk_rest(s__57292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57294),null);
}
} else {
var map__57305 = cljs.core.first(s__57292__$2);
var map__57305__$1 = (((((!((map__57305 == null))))?(((((map__57305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57305):map__57305);
var block__$1 = map__57305__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57305__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57305__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57286,i__57279,map__57305,map__57305__$1,block__$1,uid__$1,parents,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291_$_iter__57307(s__57308){
return (new cljs.core.LazySeq(null,((function (i__57286,i__57279,map__57305,map__57305__$1,block__$1,uid__$1,parents,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57308__$1 = s__57308;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57308__$1);
if(temp__5735__auto____$3){
var s__57308__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57308__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57308__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57310 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57309 = (0);
while(true){
if((i__57309 < size__4528__auto____$2)){
var map__57311 = cljs.core._nth(c__4527__auto____$2,i__57309);
var map__57311__$1 = (((((!((map__57311 == null))))?(((((map__57311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57311):map__57311);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57311__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57311__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57311__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57310,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57309,i__57286,i__57279,map__57311,map__57311__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57310,s__57308__$2,temp__5735__auto____$3,map__57305,map__57305__$1,block__$1,uid__$1,parents,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57309,i__57286,i__57279,map__57311,map__57311__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57310,s__57308__$2,temp__5735__auto____$3,map__57305,map__57305__$1,block__$1,uid__$1,parents,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57408 = (i__57309 + (1));
i__57309 = G__57408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57310),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291_$_iter__57307(cljs.core.chunk_rest(s__57308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57310),null);
}
} else {
var map__57313 = cljs.core.first(s__57308__$2);
var map__57313__$1 = (((((!((map__57313 == null))))?(((((map__57313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57313):map__57313);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57286,i__57279,map__57313,map__57313__$1,title__$1,string,uid__$2,s__57308__$2,temp__5735__auto____$3,map__57305,map__57305__$1,block__$1,uid__$1,parents,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57286,i__57279,map__57313,map__57313__$1,title__$1,string,uid__$2,s__57308__$2,temp__5735__auto____$3,map__57305,map__57305__$1,block__$1,uid__$1,parents,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291_$_iter__57307(cljs.core.rest(s__57308__$2)));
}
} else {
return null;
}
break;
}
});})(i__57286,i__57279,map__57305,map__57305__$1,block__$1,uid__$1,parents,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57286,i__57279,map__57305,map__57305__$1,block__$1,uid__$1,parents,s__57292__$2,temp__5735__auto____$2,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57291(cljs.core.rest(s__57292__$2)));
}
} else {
return null;
}
break;
}
});})(i__57286,i__57279,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57286,i__57279,vec__57288,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57287,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57409 = (i__57286 + (1));
i__57286 = G__57409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57287),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284(cljs.core.chunk_rest(s__57285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57287),null);
}
} else {
var vec__57315 = cljs.core.first(s__57285__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57315,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57315,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57279,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57279,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$2(console.log(athens.views.node_page.get_added(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(filter_state))),(function (){var iter__4529__auto__ = ((function (i__57279,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318(s__57319){
return (new cljs.core.LazySeq(null,((function (i__57279,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57319__$1 = s__57319;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57319__$1);
if(temp__5735__auto____$2){
var s__57319__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57319__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57319__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57321 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57320 = (0);
while(true){
if((i__57320 < size__4528__auto____$1)){
var map__57322 = cljs.core._nth(c__4527__auto____$1,i__57320);
var map__57322__$1 = (((((!((map__57322 == null))))?(((((map__57322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57322):map__57322);
var block__$1 = map__57322__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57321,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57320,i__57279,map__57322,map__57322__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57321,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318_$_iter__57324(s__57325){
return (new cljs.core.LazySeq(null,((function (i__57320,i__57279,map__57322,map__57322__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57321,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57325__$1 = s__57325;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57325__$1);
if(temp__5735__auto____$3){
var s__57325__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57325__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57325__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57327 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57326 = (0);
while(true){
if((i__57326 < size__4528__auto____$2)){
var map__57328 = cljs.core._nth(c__4527__auto____$2,i__57326);
var map__57328__$1 = (((((!((map__57328 == null))))?(((((map__57328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57328):map__57328);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57328__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57328__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57328__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57327,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57326,i__57320,i__57279,map__57328,map__57328__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57327,s__57325__$2,temp__5735__auto____$3,map__57322,map__57322__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57321,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57326,i__57320,i__57279,map__57328,map__57328__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57327,s__57325__$2,temp__5735__auto____$3,map__57322,map__57322__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57321,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57418 = (i__57326 + (1));
i__57326 = G__57418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57327),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318_$_iter__57324(cljs.core.chunk_rest(s__57325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57327),null);
}
} else {
var map__57330 = cljs.core.first(s__57325__$2);
var map__57330__$1 = (((((!((map__57330 == null))))?(((((map__57330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57330):map__57330);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57330__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57330__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57330__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57320,i__57279,map__57330,map__57330__$1,title__$1,string,uid__$2,s__57325__$2,temp__5735__auto____$3,map__57322,map__57322__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57321,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57320,i__57279,map__57330,map__57330__$1,title__$1,string,uid__$2,s__57325__$2,temp__5735__auto____$3,map__57322,map__57322__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57321,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318_$_iter__57324(cljs.core.rest(s__57325__$2)));
}
} else {
return null;
}
break;
}
});})(i__57320,i__57279,map__57322,map__57322__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57321,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57320,i__57279,map__57322,map__57322__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57321,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57419 = (i__57320 + (1));
i__57320 = G__57419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57321),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318(cljs.core.chunk_rest(s__57319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57321),null);
}
} else {
var map__57332 = cljs.core.first(s__57319__$2);
var map__57332__$1 = (((((!((map__57332 == null))))?(((((map__57332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57332):map__57332);
var block__$1 = map__57332__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57332__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57332__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57279,map__57332,map__57332__$1,block__$1,uid__$1,parents,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318_$_iter__57334(s__57335){
return (new cljs.core.LazySeq(null,((function (i__57279,map__57332,map__57332__$1,block__$1,uid__$1,parents,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57335__$1 = s__57335;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57335__$1);
if(temp__5735__auto____$3){
var s__57335__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57335__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57335__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57337 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57336 = (0);
while(true){
if((i__57336 < size__4528__auto____$1)){
var map__57338 = cljs.core._nth(c__4527__auto____$1,i__57336);
var map__57338__$1 = (((((!((map__57338 == null))))?(((((map__57338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57338):map__57338);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57338__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57338__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57338__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57336,i__57279,map__57338,map__57338__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57337,s__57335__$2,temp__5735__auto____$3,map__57332,map__57332__$1,block__$1,uid__$1,parents,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57336,i__57279,map__57338,map__57338__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57337,s__57335__$2,temp__5735__auto____$3,map__57332,map__57332__$1,block__$1,uid__$1,parents,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57421 = (i__57336 + (1));
i__57336 = G__57421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57337),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318_$_iter__57334(cljs.core.chunk_rest(s__57335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57337),null);
}
} else {
var map__57340 = cljs.core.first(s__57335__$2);
var map__57340__$1 = (((((!((map__57340 == null))))?(((((map__57340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57340):map__57340);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57340__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57340__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57340__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57279,map__57340,map__57340__$1,title__$1,string,uid__$2,s__57335__$2,temp__5735__auto____$3,map__57332,map__57332__$1,block__$1,uid__$1,parents,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57279,map__57340,map__57340__$1,title__$1,string,uid__$2,s__57335__$2,temp__5735__auto____$3,map__57332,map__57332__$1,block__$1,uid__$1,parents,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318_$_iter__57334(cljs.core.rest(s__57335__$2)));
}
} else {
return null;
}
break;
}
});})(i__57279,map__57332,map__57332__$1,block__$1,uid__$1,parents,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57279,map__57332,map__57332__$1,block__$1,uid__$1,parents,s__57319__$2,temp__5735__auto____$2,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284_$_iter__57318(cljs.core.rest(s__57319__$2)));
}
} else {
return null;
}
break;
}
});})(i__57279,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57279,vec__57315,group_title,group,s__57285__$2,temp__5735__auto____$1,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57284(cljs.core.rest(s__57285__$2)));
}
} else {
return null;
}
break;
}
});})(i__57279,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57279,filter_state,vec__57281,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57280,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null);
})():null));

var G__57422 = (i__57279 + (1));
i__57279 = G__57422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57280),athens$views$node_page$node_page_el_$_iter__57277(cljs.core.chunk_rest(s__57278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57280),null);
}
} else {
var vec__57342 = cljs.core.first(s__57278__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57342,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57342,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?(function (){var filter_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"lex","lex",1572323917),new cljs.core.Keyword(null,"items","items",1031954938),athens.db.construct_links(title),new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("lf","show","lf/show",-576708583),cljs.core.not(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
});})(filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null),(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"width","width",-384071477),"18rem",new cljs.core.Keyword(null,"left","left",-399115937),"-1050%",new cljs.core.Keyword(null,"top","top",-1856271961),"0%"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filters.filters_el,uid,filter_state], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345(s__57346){
return (new cljs.core.LazySeq(null,(function (){
var s__57346__$1 = s__57346;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57346__$1);
if(temp__5735__auto____$1){
var s__57346__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57346__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57346__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57348 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57347 = (0);
while(true){
if((i__57347 < size__4528__auto__)){
var vec__57349 = cljs.core._nth(c__4527__auto__,i__57347);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57349,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57349,(1),null);
cljs.core.chunk_append(b__57348,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57347,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57347,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$2(console.log(athens.views.node_page.get_added(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(filter_state))),(function (){var iter__4529__auto__ = ((function (i__57347,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352(s__57353){
return (new cljs.core.LazySeq(null,((function (i__57347,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57353__$1 = s__57353;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57353__$1);
if(temp__5735__auto____$2){
var s__57353__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57353__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57353__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57355 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57354 = (0);
while(true){
if((i__57354 < size__4528__auto____$1)){
var map__57356 = cljs.core._nth(c__4527__auto____$1,i__57354);
var map__57356__$1 = (((((!((map__57356 == null))))?(((((map__57356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57356):map__57356);
var block__$1 = map__57356__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57356__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57356__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57355,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57354,i__57347,map__57356,map__57356__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57355,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352_$_iter__57358(s__57359){
return (new cljs.core.LazySeq(null,((function (i__57354,i__57347,map__57356,map__57356__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57355,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57359__$1 = s__57359;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57359__$1);
if(temp__5735__auto____$3){
var s__57359__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57359__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57359__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57361 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57360 = (0);
while(true){
if((i__57360 < size__4528__auto____$2)){
var map__57362 = cljs.core._nth(c__4527__auto____$2,i__57360);
var map__57362__$1 = (((((!((map__57362 == null))))?(((((map__57362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57362):map__57362);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57362__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57362__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57362__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57361,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57360,i__57354,i__57347,map__57362,map__57362__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57361,s__57359__$2,temp__5735__auto____$3,map__57356,map__57356__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57355,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57360,i__57354,i__57347,map__57362,map__57362__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57361,s__57359__$2,temp__5735__auto____$3,map__57356,map__57356__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57355,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57423 = (i__57360 + (1));
i__57360 = G__57423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57361),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352_$_iter__57358(cljs.core.chunk_rest(s__57359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57361),null);
}
} else {
var map__57364 = cljs.core.first(s__57359__$2);
var map__57364__$1 = (((((!((map__57364 == null))))?(((((map__57364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57364):map__57364);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57364__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57364__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57364__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57354,i__57347,map__57364,map__57364__$1,title__$1,string,uid__$2,s__57359__$2,temp__5735__auto____$3,map__57356,map__57356__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57355,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57354,i__57347,map__57364,map__57364__$1,title__$1,string,uid__$2,s__57359__$2,temp__5735__auto____$3,map__57356,map__57356__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57355,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352_$_iter__57358(cljs.core.rest(s__57359__$2)));
}
} else {
return null;
}
break;
}
});})(i__57354,i__57347,map__57356,map__57356__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57355,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57354,i__57347,map__57356,map__57356__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57355,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57424 = (i__57354 + (1));
i__57354 = G__57424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57355),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352(cljs.core.chunk_rest(s__57353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57355),null);
}
} else {
var map__57366 = cljs.core.first(s__57353__$2);
var map__57366__$1 = (((((!((map__57366 == null))))?(((((map__57366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57366):map__57366);
var block__$1 = map__57366__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57366__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57366__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57347,map__57366,map__57366__$1,block__$1,uid__$1,parents,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352_$_iter__57368(s__57369){
return (new cljs.core.LazySeq(null,((function (i__57347,map__57366,map__57366__$1,block__$1,uid__$1,parents,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57369__$1 = s__57369;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57369__$1);
if(temp__5735__auto____$3){
var s__57369__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57369__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57369__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57371 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57370 = (0);
while(true){
if((i__57370 < size__4528__auto____$1)){
var map__57372 = cljs.core._nth(c__4527__auto____$1,i__57370);
var map__57372__$1 = (((((!((map__57372 == null))))?(((((map__57372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57372):map__57372);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57372__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57372__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57372__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57371,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57370,i__57347,map__57372,map__57372__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57371,s__57369__$2,temp__5735__auto____$3,map__57366,map__57366__$1,block__$1,uid__$1,parents,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57370,i__57347,map__57372,map__57372__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57371,s__57369__$2,temp__5735__auto____$3,map__57366,map__57366__$1,block__$1,uid__$1,parents,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57425 = (i__57370 + (1));
i__57370 = G__57425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57371),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352_$_iter__57368(cljs.core.chunk_rest(s__57369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57371),null);
}
} else {
var map__57374 = cljs.core.first(s__57369__$2);
var map__57374__$1 = (((((!((map__57374 == null))))?(((((map__57374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57374):map__57374);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57374__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57374__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57374__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57347,map__57374,map__57374__$1,title__$1,string,uid__$2,s__57369__$2,temp__5735__auto____$3,map__57366,map__57366__$1,block__$1,uid__$1,parents,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57347,map__57374,map__57374__$1,title__$1,string,uid__$2,s__57369__$2,temp__5735__auto____$3,map__57366,map__57366__$1,block__$1,uid__$1,parents,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352_$_iter__57368(cljs.core.rest(s__57369__$2)));
}
} else {
return null;
}
break;
}
});})(i__57347,map__57366,map__57366__$1,block__$1,uid__$1,parents,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57347,map__57366,map__57366__$1,block__$1,uid__$1,parents,s__57353__$2,temp__5735__auto____$2,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57352(cljs.core.rest(s__57353__$2)));
}
} else {
return null;
}
break;
}
});})(i__57347,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57347,vec__57349,group_title,group,c__4527__auto__,size__4528__auto__,b__57348,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57426 = (i__57347 + (1));
i__57347 = G__57426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57348),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345(cljs.core.chunk_rest(s__57346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57348),null);
}
} else {
var vec__57376 = cljs.core.first(s__57346__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57376,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57376,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$2(console.log(athens.views.node_page.get_added(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(filter_state))),(function (){var iter__4529__auto__ = ((function (vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379(s__57380){
return (new cljs.core.LazySeq(null,(function (){
var s__57380__$1 = s__57380;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57380__$1);
if(temp__5735__auto____$2){
var s__57380__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57380__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57380__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57382 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57381 = (0);
while(true){
if((i__57381 < size__4528__auto__)){
var map__57383 = cljs.core._nth(c__4527__auto__,i__57381);
var map__57383__$1 = (((((!((map__57383 == null))))?(((((map__57383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57383):map__57383);
var block__$1 = map__57383__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57383__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57383__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57382,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57381,map__57383,map__57383__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57382,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379_$_iter__57385(s__57386){
return (new cljs.core.LazySeq(null,((function (i__57381,map__57383,map__57383__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57382,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
var s__57386__$1 = s__57386;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57386__$1);
if(temp__5735__auto____$3){
var s__57386__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57386__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57386__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57388 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57387 = (0);
while(true){
if((i__57387 < size__4528__auto____$1)){
var map__57389 = cljs.core._nth(c__4527__auto____$1,i__57387);
var map__57389__$1 = (((((!((map__57389 == null))))?(((((map__57389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57389):map__57389);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57389__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57389__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57389__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57388,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57387,i__57381,map__57389,map__57389__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57388,s__57386__$2,temp__5735__auto____$3,map__57383,map__57383__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57382,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57387,i__57381,map__57389,map__57389__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57388,s__57386__$2,temp__5735__auto____$3,map__57383,map__57383__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57382,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57427 = (i__57387 + (1));
i__57387 = G__57427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57388),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379_$_iter__57385(cljs.core.chunk_rest(s__57386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57388),null);
}
} else {
var map__57391 = cljs.core.first(s__57386__$2);
var map__57391__$1 = (((((!((map__57391 == null))))?(((((map__57391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57391):map__57391);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57391__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57391__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57391__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57381,map__57391,map__57391__$1,title__$1,string,uid__$2,s__57386__$2,temp__5735__auto____$3,map__57383,map__57383__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57382,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57381,map__57391,map__57391__$1,title__$1,string,uid__$2,s__57386__$2,temp__5735__auto____$3,map__57383,map__57383__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57382,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379_$_iter__57385(cljs.core.rest(s__57386__$2)));
}
} else {
return null;
}
break;
}
});})(i__57381,map__57383,map__57383__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57382,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
,null,null));
});})(i__57381,map__57383,map__57383__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57382,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57428 = (i__57381 + (1));
i__57381 = G__57428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57382),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379(cljs.core.chunk_rest(s__57380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57382),null);
}
} else {
var map__57393 = cljs.core.first(s__57380__$2);
var map__57393__$1 = (((((!((map__57393 == null))))?(((((map__57393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57393):map__57393);
var block__$1 = map__57393__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57393__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57393__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (map__57393,map__57393__$1,block__$1,uid__$1,parents,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379_$_iter__57395(s__57396){
return (new cljs.core.LazySeq(null,(function (){
var s__57396__$1 = s__57396;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57396__$1);
if(temp__5735__auto____$3){
var s__57396__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57396__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57396__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57398 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57397 = (0);
while(true){
if((i__57397 < size__4528__auto__)){
var map__57399 = cljs.core._nth(c__4527__auto__,i__57397);
var map__57399__$1 = (((((!((map__57399 == null))))?(((((map__57399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57399):map__57399);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57399__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57399__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57399__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57398,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57397,map__57399,map__57399__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57398,s__57396__$2,temp__5735__auto____$3,map__57393,map__57393__$1,block__$1,uid__$1,parents,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57397,map__57399,map__57399__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57398,s__57396__$2,temp__5735__auto____$3,map__57393,map__57393__$1,block__$1,uid__$1,parents,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57429 = (i__57397 + (1));
i__57397 = G__57429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57398),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379_$_iter__57395(cljs.core.chunk_rest(s__57396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57398),null);
}
} else {
var map__57401 = cljs.core.first(s__57396__$2);
var map__57401__$1 = (((((!((map__57401 == null))))?(((((map__57401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57401):map__57401);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57401__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57401__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57401__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57401,map__57401__$1,title__$1,string,uid__$2,s__57396__$2,temp__5735__auto____$3,map__57393,map__57393__$1,block__$1,uid__$1,parents,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__57401,map__57401__$1,title__$1,string,uid__$2,s__57396__$2,temp__5735__auto____$3,map__57393,map__57393__$1,block__$1,uid__$1,parents,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379_$_iter__57395(cljs.core.rest(s__57396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__57393,map__57393__$1,block__$1,uid__$1,parents,s__57380__$2,temp__5735__auto____$2,vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345_$_iter__57379(cljs.core.rest(s__57380__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57376,group_title,group,s__57346__$2,temp__5735__auto____$1,filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57277_$_iter__57345(cljs.core.rest(s__57346__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(filter_state,vec__57342,linked_or_unlinked,refs,s__57278__$2,temp__5735__auto__,map__57263,map__57263__$1,title,is_shortcut_QMARK_,children,uid,map__57264,map__57264__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null);
})():null),athens$views$node_page$node_page_el_$_iter__57277(cljs.core.rest(s__57278__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ref_groups);
})())], null);
});
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__57403 = athens.db.get_node_document(ident);
var map__57403__$1 = (((((!((map__57403 == null))))?(((((map__57403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57403):map__57403);
var node = map__57403__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57403__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57403__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
