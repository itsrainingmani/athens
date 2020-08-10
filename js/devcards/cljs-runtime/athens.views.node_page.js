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
return cljs.core.boolean$((function (){try{var vec__57204 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57204,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57204,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57204,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e57203){if((e57203 instanceof Object)){
var _ = e57203;
return false;
} else {
throw e57203;

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
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__57207 = block;
var map__57207__$1 = (((((!((map__57207 == null))))?(((((map__57207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57207):map__57207);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57207__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57207__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57207__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57207__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__57208 = cljs.core.deref(state);
var map__57208__$1 = (((((!((map__57208 == null))))?(((((map__57208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57208):map__57208);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57208__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57208__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57208__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__57211 = e.target.value;
var G__57212 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__57211,G__57212) : athens.views.node_page.db_handler.call(null,G__57211,G__57212));
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57213(s__57214){
return (new cljs.core.LazySeq(null,(function (){
var s__57214__$1 = s__57214;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57214__$1);
if(temp__5735__auto__){
var s__57214__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57214__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57214__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57216 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57215 = (0);
while(true){
if((i__57215 < size__4528__auto__)){
var map__57217 = cljs.core._nth(c__4527__auto__,i__57215);
var map__57217__$1 = (((((!((map__57217 == null))))?(((((map__57217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57217):map__57217);
var child = map__57217__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57217__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57216,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__57349 = (i__57215 + (1));
i__57215 = G__57349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57216),athens$views$node_page$node_page_el_$_iter__57213(cljs.core.chunk_rest(s__57214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57216),null);
}
} else {
var map__57219 = cljs.core.first(s__57214__$2);
var map__57219__$1 = (((((!((map__57219 == null))))?(((((map__57219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57219):map__57219);
var child = map__57219__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57219__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__57213(cljs.core.rest(s__57214__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57221(s__57222){
return (new cljs.core.LazySeq(null,(function (){
var s__57222__$1 = s__57222;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57222__$1);
if(temp__5735__auto__){
var s__57222__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57222__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57222__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57224 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57223 = (0);
while(true){
if((i__57223 < size__4528__auto__)){
var vec__57225 = cljs.core._nth(c__4527__auto__,i__57223);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57225,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57225,(1),null);
cljs.core.chunk_append(b__57224,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57223,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228(s__57229){
return (new cljs.core.LazySeq(null,((function (i__57223,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57229__$1 = s__57229;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57229__$1);
if(temp__5735__auto____$1){
var s__57229__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57229__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57229__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57231 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57230 = (0);
while(true){
if((i__57230 < size__4528__auto____$1)){
var vec__57232 = cljs.core._nth(c__4527__auto____$1,i__57230);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57232,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57232,(1),null);
cljs.core.chunk_append(b__57231,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57230,i__57223,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57230,i__57223,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57230,i__57223,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235(s__57236){
return (new cljs.core.LazySeq(null,((function (i__57230,i__57223,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57236__$1 = s__57236;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57236__$1);
if(temp__5735__auto____$2){
var s__57236__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57236__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57236__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57238 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57237 = (0);
while(true){
if((i__57237 < size__4528__auto____$2)){
var map__57239 = cljs.core._nth(c__4527__auto____$2,i__57237);
var map__57239__$1 = (((((!((map__57239 == null))))?(((((map__57239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57239):map__57239);
var block__$1 = map__57239__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57239__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57239__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57238,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57237,i__57230,i__57223,map__57239,map__57239__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57238,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235_$_iter__57241(s__57242){
return (new cljs.core.LazySeq(null,((function (i__57237,i__57230,i__57223,map__57239,map__57239__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57238,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57242__$1 = s__57242;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57242__$1);
if(temp__5735__auto____$3){
var s__57242__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57242__$2)){
var c__4527__auto____$3 = cljs.core.chunk_first(s__57242__$2);
var size__4528__auto____$3 = cljs.core.count(c__4527__auto____$3);
var b__57244 = cljs.core.chunk_buffer(size__4528__auto____$3);
if((function (){var i__57243 = (0);
while(true){
if((i__57243 < size__4528__auto____$3)){
var map__57245 = cljs.core._nth(c__4527__auto____$3,i__57243);
var map__57245__$1 = (((((!((map__57245 == null))))?(((((map__57245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57245):map__57245);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57245__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57245__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57245__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57244,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57243,i__57237,i__57230,i__57223,map__57245,map__57245__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57244,s__57242__$2,temp__5735__auto____$3,map__57239,map__57239__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57238,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57243,i__57237,i__57230,i__57223,map__57245,map__57245__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57244,s__57242__$2,temp__5735__auto____$3,map__57239,map__57239__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57238,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57350 = (i__57243 + (1));
i__57243 = G__57350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57244),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235_$_iter__57241(cljs.core.chunk_rest(s__57242__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57244),null);
}
} else {
var map__57247 = cljs.core.first(s__57242__$2);
var map__57247__$1 = (((((!((map__57247 == null))))?(((((map__57247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57247):map__57247);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57247__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57247__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57247__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57237,i__57230,i__57223,map__57247,map__57247__$1,title__$1,string,uid__$2,s__57242__$2,temp__5735__auto____$3,map__57239,map__57239__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57238,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57237,i__57230,i__57223,map__57247,map__57247__$1,title__$1,string,uid__$2,s__57242__$2,temp__5735__auto____$3,map__57239,map__57239__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57238,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235_$_iter__57241(cljs.core.rest(s__57242__$2)));
}
} else {
return null;
}
break;
}
});})(i__57237,i__57230,i__57223,map__57239,map__57239__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57238,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57237,i__57230,i__57223,map__57239,map__57239__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57238,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57351 = (i__57237 + (1));
i__57237 = G__57351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57238),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235(cljs.core.chunk_rest(s__57236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57238),null);
}
} else {
var map__57249 = cljs.core.first(s__57236__$2);
var map__57249__$1 = (((((!((map__57249 == null))))?(((((map__57249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57249):map__57249);
var block__$1 = map__57249__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57249__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57249__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57230,i__57223,map__57249,map__57249__$1,block__$1,uid__$1,parents,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235_$_iter__57251(s__57252){
return (new cljs.core.LazySeq(null,((function (i__57230,i__57223,map__57249,map__57249__$1,block__$1,uid__$1,parents,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57252__$1 = s__57252;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57252__$1);
if(temp__5735__auto____$3){
var s__57252__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57252__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57252__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57254 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57253 = (0);
while(true){
if((i__57253 < size__4528__auto____$2)){
var map__57255 = cljs.core._nth(c__4527__auto____$2,i__57253);
var map__57255__$1 = (((((!((map__57255 == null))))?(((((map__57255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57255):map__57255);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57254,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57253,i__57230,i__57223,map__57255,map__57255__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57254,s__57252__$2,temp__5735__auto____$3,map__57249,map__57249__$1,block__$1,uid__$1,parents,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57253,i__57230,i__57223,map__57255,map__57255__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57254,s__57252__$2,temp__5735__auto____$3,map__57249,map__57249__$1,block__$1,uid__$1,parents,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57352 = (i__57253 + (1));
i__57253 = G__57352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57254),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235_$_iter__57251(cljs.core.chunk_rest(s__57252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57254),null);
}
} else {
var map__57257 = cljs.core.first(s__57252__$2);
var map__57257__$1 = (((((!((map__57257 == null))))?(((((map__57257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57257):map__57257);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57257__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57257__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57257__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57230,i__57223,map__57257,map__57257__$1,title__$1,string,uid__$2,s__57252__$2,temp__5735__auto____$3,map__57249,map__57249__$1,block__$1,uid__$1,parents,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57230,i__57223,map__57257,map__57257__$1,title__$1,string,uid__$2,s__57252__$2,temp__5735__auto____$3,map__57249,map__57249__$1,block__$1,uid__$1,parents,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235_$_iter__57251(cljs.core.rest(s__57252__$2)));
}
} else {
return null;
}
break;
}
});})(i__57230,i__57223,map__57249,map__57249__$1,block__$1,uid__$1,parents,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57230,i__57223,map__57249,map__57249__$1,block__$1,uid__$1,parents,s__57236__$2,temp__5735__auto____$2,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57235(cljs.core.rest(s__57236__$2)));
}
} else {
return null;
}
break;
}
});})(i__57230,i__57223,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57230,i__57223,vec__57232,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57231,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57353 = (i__57230 + (1));
i__57230 = G__57353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57231),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228(cljs.core.chunk_rest(s__57229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57231),null);
}
} else {
var vec__57259 = cljs.core.first(s__57229__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57259,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57259,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57223,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57223,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57223,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262(s__57263){
return (new cljs.core.LazySeq(null,((function (i__57223,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57263__$1 = s__57263;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57263__$1);
if(temp__5735__auto____$2){
var s__57263__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57263__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57263__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57265 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57264 = (0);
while(true){
if((i__57264 < size__4528__auto____$1)){
var map__57266 = cljs.core._nth(c__4527__auto____$1,i__57264);
var map__57266__$1 = (((((!((map__57266 == null))))?(((((map__57266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57266):map__57266);
var block__$1 = map__57266__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57265,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57264,i__57223,map__57266,map__57266__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57265,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262_$_iter__57268(s__57269){
return (new cljs.core.LazySeq(null,((function (i__57264,i__57223,map__57266,map__57266__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57265,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57269__$1 = s__57269;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57269__$1);
if(temp__5735__auto____$3){
var s__57269__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57269__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57269__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57271 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57270 = (0);
while(true){
if((i__57270 < size__4528__auto____$2)){
var map__57272 = cljs.core._nth(c__4527__auto____$2,i__57270);
var map__57272__$1 = (((((!((map__57272 == null))))?(((((map__57272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57272):map__57272);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57272__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57272__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57272__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57271,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57270,i__57264,i__57223,map__57272,map__57272__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$3,map__57266,map__57266__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57265,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57270,i__57264,i__57223,map__57272,map__57272__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$3,map__57266,map__57266__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57265,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57354 = (i__57270 + (1));
i__57270 = G__57354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57271),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262_$_iter__57268(cljs.core.chunk_rest(s__57269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57271),null);
}
} else {
var map__57274 = cljs.core.first(s__57269__$2);
var map__57274__$1 = (((((!((map__57274 == null))))?(((((map__57274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57274):map__57274);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57274__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57274__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57274__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57264,i__57223,map__57274,map__57274__$1,title__$1,string,uid__$2,s__57269__$2,temp__5735__auto____$3,map__57266,map__57266__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57265,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57264,i__57223,map__57274,map__57274__$1,title__$1,string,uid__$2,s__57269__$2,temp__5735__auto____$3,map__57266,map__57266__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57265,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262_$_iter__57268(cljs.core.rest(s__57269__$2)));
}
} else {
return null;
}
break;
}
});})(i__57264,i__57223,map__57266,map__57266__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57265,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57264,i__57223,map__57266,map__57266__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57265,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57355 = (i__57264 + (1));
i__57264 = G__57355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57265),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262(cljs.core.chunk_rest(s__57263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57265),null);
}
} else {
var map__57276 = cljs.core.first(s__57263__$2);
var map__57276__$1 = (((((!((map__57276 == null))))?(((((map__57276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57276):map__57276);
var block__$1 = map__57276__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57276__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57276__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57223,map__57276,map__57276__$1,block__$1,uid__$1,parents,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262_$_iter__57278(s__57279){
return (new cljs.core.LazySeq(null,((function (i__57223,map__57276,map__57276__$1,block__$1,uid__$1,parents,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57279__$1 = s__57279;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57279__$1);
if(temp__5735__auto____$3){
var s__57279__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57279__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57279__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57281 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57280 = (0);
while(true){
if((i__57280 < size__4528__auto____$1)){
var map__57282 = cljs.core._nth(c__4527__auto____$1,i__57280);
var map__57282__$1 = (((((!((map__57282 == null))))?(((((map__57282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57282):map__57282);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57281,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57280,i__57223,map__57282,map__57282__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57281,s__57279__$2,temp__5735__auto____$3,map__57276,map__57276__$1,block__$1,uid__$1,parents,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57280,i__57223,map__57282,map__57282__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57281,s__57279__$2,temp__5735__auto____$3,map__57276,map__57276__$1,block__$1,uid__$1,parents,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57356 = (i__57280 + (1));
i__57280 = G__57356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57281),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262_$_iter__57278(cljs.core.chunk_rest(s__57279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57281),null);
}
} else {
var map__57284 = cljs.core.first(s__57279__$2);
var map__57284__$1 = (((((!((map__57284 == null))))?(((((map__57284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57284):map__57284);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57284__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57284__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57284__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57223,map__57284,map__57284__$1,title__$1,string,uid__$2,s__57279__$2,temp__5735__auto____$3,map__57276,map__57276__$1,block__$1,uid__$1,parents,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57223,map__57284,map__57284__$1,title__$1,string,uid__$2,s__57279__$2,temp__5735__auto____$3,map__57276,map__57276__$1,block__$1,uid__$1,parents,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262_$_iter__57278(cljs.core.rest(s__57279__$2)));
}
} else {
return null;
}
break;
}
});})(i__57223,map__57276,map__57276__$1,block__$1,uid__$1,parents,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57223,map__57276,map__57276__$1,block__$1,uid__$1,parents,s__57263__$2,temp__5735__auto____$2,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228_$_iter__57262(cljs.core.rest(s__57263__$2)));
}
} else {
return null;
}
break;
}
});})(i__57223,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57223,vec__57259,group_title,group,s__57229__$2,temp__5735__auto____$1,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57228(cljs.core.rest(s__57229__$2)));
}
} else {
return null;
}
break;
}
});})(i__57223,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57223,vec__57225,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57224,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null));

var G__57357 = (i__57223 + (1));
i__57223 = G__57357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57224),athens$views$node_page$node_page_el_$_iter__57221(cljs.core.chunk_rest(s__57222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57224),null);
}
} else {
var vec__57286 = cljs.core.first(s__57222__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57286,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57286,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289(s__57290){
return (new cljs.core.LazySeq(null,(function (){
var s__57290__$1 = s__57290;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57290__$1);
if(temp__5735__auto____$1){
var s__57290__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57290__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57290__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57292 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57291 = (0);
while(true){
if((i__57291 < size__4528__auto__)){
var vec__57293 = cljs.core._nth(c__4527__auto__,i__57291);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57293,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57293,(1),null);
cljs.core.chunk_append(b__57292,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57291,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57291,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57291,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296(s__57297){
return (new cljs.core.LazySeq(null,((function (i__57291,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57297__$1 = s__57297;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57297__$1);
if(temp__5735__auto____$2){
var s__57297__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57297__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57297__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57299 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57298 = (0);
while(true){
if((i__57298 < size__4528__auto____$1)){
var map__57300 = cljs.core._nth(c__4527__auto____$1,i__57298);
var map__57300__$1 = (((((!((map__57300 == null))))?(((((map__57300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57300):map__57300);
var block__$1 = map__57300__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57300__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57300__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57299,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57298,i__57291,map__57300,map__57300__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57299,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296_$_iter__57302(s__57303){
return (new cljs.core.LazySeq(null,((function (i__57298,i__57291,map__57300,map__57300__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57299,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57303__$1 = s__57303;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57303__$1);
if(temp__5735__auto____$3){
var s__57303__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57303__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57303__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57305 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57304 = (0);
while(true){
if((i__57304 < size__4528__auto____$2)){
var map__57306 = cljs.core._nth(c__4527__auto____$2,i__57304);
var map__57306__$1 = (((((!((map__57306 == null))))?(((((map__57306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57306):map__57306);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57306__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57306__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57306__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57305,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57304,i__57298,i__57291,map__57306,map__57306__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57305,s__57303__$2,temp__5735__auto____$3,map__57300,map__57300__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57299,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57304,i__57298,i__57291,map__57306,map__57306__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57305,s__57303__$2,temp__5735__auto____$3,map__57300,map__57300__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57299,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57358 = (i__57304 + (1));
i__57304 = G__57358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57305),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296_$_iter__57302(cljs.core.chunk_rest(s__57303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57305),null);
}
} else {
var map__57308 = cljs.core.first(s__57303__$2);
var map__57308__$1 = (((((!((map__57308 == null))))?(((((map__57308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57308):map__57308);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57308__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57308__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57308__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57298,i__57291,map__57308,map__57308__$1,title__$1,string,uid__$2,s__57303__$2,temp__5735__auto____$3,map__57300,map__57300__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57299,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57298,i__57291,map__57308,map__57308__$1,title__$1,string,uid__$2,s__57303__$2,temp__5735__auto____$3,map__57300,map__57300__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57299,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296_$_iter__57302(cljs.core.rest(s__57303__$2)));
}
} else {
return null;
}
break;
}
});})(i__57298,i__57291,map__57300,map__57300__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57299,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57298,i__57291,map__57300,map__57300__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57299,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57359 = (i__57298 + (1));
i__57298 = G__57359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57299),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296(cljs.core.chunk_rest(s__57297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57299),null);
}
} else {
var map__57310 = cljs.core.first(s__57297__$2);
var map__57310__$1 = (((((!((map__57310 == null))))?(((((map__57310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57310):map__57310);
var block__$1 = map__57310__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57310__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57310__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57291,map__57310,map__57310__$1,block__$1,uid__$1,parents,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296_$_iter__57312(s__57313){
return (new cljs.core.LazySeq(null,((function (i__57291,map__57310,map__57310__$1,block__$1,uid__$1,parents,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57313__$1 = s__57313;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57313__$1);
if(temp__5735__auto____$3){
var s__57313__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57313__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57313__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57315 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57314 = (0);
while(true){
if((i__57314 < size__4528__auto____$1)){
var map__57316 = cljs.core._nth(c__4527__auto____$1,i__57314);
var map__57316__$1 = (((((!((map__57316 == null))))?(((((map__57316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57316):map__57316);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57316__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57316__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57316__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57315,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57314,i__57291,map__57316,map__57316__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57315,s__57313__$2,temp__5735__auto____$3,map__57310,map__57310__$1,block__$1,uid__$1,parents,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57314,i__57291,map__57316,map__57316__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57315,s__57313__$2,temp__5735__auto____$3,map__57310,map__57310__$1,block__$1,uid__$1,parents,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57360 = (i__57314 + (1));
i__57314 = G__57360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57315),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296_$_iter__57312(cljs.core.chunk_rest(s__57313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57315),null);
}
} else {
var map__57318 = cljs.core.first(s__57313__$2);
var map__57318__$1 = (((((!((map__57318 == null))))?(((((map__57318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57318):map__57318);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57318__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57318__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57318__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57291,map__57318,map__57318__$1,title__$1,string,uid__$2,s__57313__$2,temp__5735__auto____$3,map__57310,map__57310__$1,block__$1,uid__$1,parents,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57291,map__57318,map__57318__$1,title__$1,string,uid__$2,s__57313__$2,temp__5735__auto____$3,map__57310,map__57310__$1,block__$1,uid__$1,parents,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296_$_iter__57312(cljs.core.rest(s__57313__$2)));
}
} else {
return null;
}
break;
}
});})(i__57291,map__57310,map__57310__$1,block__$1,uid__$1,parents,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57291,map__57310,map__57310__$1,block__$1,uid__$1,parents,s__57297__$2,temp__5735__auto____$2,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57296(cljs.core.rest(s__57297__$2)));
}
} else {
return null;
}
break;
}
});})(i__57291,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57291,vec__57293,group_title,group,c__4527__auto__,size__4528__auto__,b__57292,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57361 = (i__57291 + (1));
i__57291 = G__57361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57292),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289(cljs.core.chunk_rest(s__57290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57292),null);
}
} else {
var vec__57320 = cljs.core.first(s__57290__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323(s__57324){
return (new cljs.core.LazySeq(null,(function (){
var s__57324__$1 = s__57324;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57324__$1);
if(temp__5735__auto____$2){
var s__57324__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57324__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57324__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57326 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57325 = (0);
while(true){
if((i__57325 < size__4528__auto__)){
var map__57327 = cljs.core._nth(c__4527__auto__,i__57325);
var map__57327__$1 = (((((!((map__57327 == null))))?(((((map__57327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57327):map__57327);
var block__$1 = map__57327__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57327__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57327__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57326,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57325,map__57327,map__57327__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57326,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323_$_iter__57329(s__57330){
return (new cljs.core.LazySeq(null,((function (i__57325,map__57327,map__57327__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57326,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
var s__57330__$1 = s__57330;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57330__$1);
if(temp__5735__auto____$3){
var s__57330__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57330__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57330__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57332 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57331 = (0);
while(true){
if((i__57331 < size__4528__auto____$1)){
var map__57333 = cljs.core._nth(c__4527__auto____$1,i__57331);
var map__57333__$1 = (((((!((map__57333 == null))))?(((((map__57333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57333):map__57333);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57333__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57333__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57333__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57332,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57331,i__57325,map__57333,map__57333__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$3,map__57327,map__57327__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57326,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57331,i__57325,map__57333,map__57333__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$3,map__57327,map__57327__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57326,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57362 = (i__57331 + (1));
i__57331 = G__57362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57332),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323_$_iter__57329(cljs.core.chunk_rest(s__57330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57332),null);
}
} else {
var map__57335 = cljs.core.first(s__57330__$2);
var map__57335__$1 = (((((!((map__57335 == null))))?(((((map__57335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57335):map__57335);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57335__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57335__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57335__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57325,map__57335,map__57335__$1,title__$1,string,uid__$2,s__57330__$2,temp__5735__auto____$3,map__57327,map__57327__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57326,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57325,map__57335,map__57335__$1,title__$1,string,uid__$2,s__57330__$2,temp__5735__auto____$3,map__57327,map__57327__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57326,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323_$_iter__57329(cljs.core.rest(s__57330__$2)));
}
} else {
return null;
}
break;
}
});})(i__57325,map__57327,map__57327__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57326,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
,null,null));
});})(i__57325,map__57327,map__57327__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57326,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57363 = (i__57325 + (1));
i__57325 = G__57363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57326),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323(cljs.core.chunk_rest(s__57324__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57326),null);
}
} else {
var map__57337 = cljs.core.first(s__57324__$2);
var map__57337__$1 = (((((!((map__57337 == null))))?(((((map__57337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57337):map__57337);
var block__$1 = map__57337__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57337__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57337__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (map__57337,map__57337__$1,block__$1,uid__$1,parents,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323_$_iter__57339(s__57340){
return (new cljs.core.LazySeq(null,(function (){
var s__57340__$1 = s__57340;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57340__$1);
if(temp__5735__auto____$3){
var s__57340__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57340__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57340__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57342 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57341 = (0);
while(true){
if((i__57341 < size__4528__auto__)){
var map__57343 = cljs.core._nth(c__4527__auto__,i__57341);
var map__57343__$1 = (((((!((map__57343 == null))))?(((((map__57343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57343):map__57343);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57343__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57343__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57343__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57342,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57341,map__57343,map__57343__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57342,s__57340__$2,temp__5735__auto____$3,map__57337,map__57337__$1,block__$1,uid__$1,parents,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57341,map__57343,map__57343__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57342,s__57340__$2,temp__5735__auto____$3,map__57337,map__57337__$1,block__$1,uid__$1,parents,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57364 = (i__57341 + (1));
i__57341 = G__57364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57342),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323_$_iter__57339(cljs.core.chunk_rest(s__57340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57342),null);
}
} else {
var map__57345 = cljs.core.first(s__57340__$2);
var map__57345__$1 = (((((!((map__57345 == null))))?(((((map__57345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57345):map__57345);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57345__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57345__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57345__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57345,map__57345__$1,title__$1,string,uid__$2,s__57340__$2,temp__5735__auto____$3,map__57337,map__57337__$1,block__$1,uid__$1,parents,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__57345,map__57345__$1,title__$1,string,uid__$2,s__57340__$2,temp__5735__auto____$3,map__57337,map__57337__$1,block__$1,uid__$1,parents,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323_$_iter__57339(cljs.core.rest(s__57340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__57337,map__57337__$1,block__$1,uid__$1,parents,s__57324__$2,temp__5735__auto____$2,vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289_$_iter__57323(cljs.core.rest(s__57324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57320,group_title,group,s__57290__$2,temp__5735__auto____$1,vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57221_$_iter__57289(cljs.core.rest(s__57290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57286,linked_or_unlinked,refs,s__57222__$2,temp__5735__auto__,map__57207,map__57207__$1,title,is_shortcut_QMARK_,children,uid,map__57208,map__57208__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__57221(cljs.core.rest(s__57222__$2)));
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
var map__57347 = athens.db.get_node_document(ident);
var map__57347__$1 = (((((!((map__57347 == null))))?(((((map__57347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57347):map__57347);
var node = map__57347__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword("node","title","node/title",628940777));
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
