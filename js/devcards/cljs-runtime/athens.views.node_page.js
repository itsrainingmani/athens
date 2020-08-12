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
athens.views.node_page.items = cljs.core.PersistentHashMap.fromArrays(["Donec","Amet","Eu","Est","Elitudomin mesucen defibocutruon","Quam","Diam","Metus","Ipsum","Vitae","Erat","At","Elit","Turpis","Magnis","Mi"],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(6)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(6),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"added","added",2057651688)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(29)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"excluded","excluded",-715952088)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(130),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"excluded","excluded",-715952088)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(30)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(97)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(10),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"added","added",2057651688)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(7),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"added","added",2057651688)], null)]);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__57237 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57237,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57237,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57237,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e57236){if((e57236 instanceof Object)){
var _ = e57236;
return false;
} else {
throw e57236;

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
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null,new cljs.core.Keyword("lf","show","lf/show",-576708583),false,new cljs.core.Keyword("lf","x","lf/x",2099359651),null,new cljs.core.Keyword("lf","y","lf/y",-1757872454),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__57240 = block;
var map__57240__$1 = (((((!((map__57240 == null))))?(((((map__57240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57240):map__57240);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__57241 = cljs.core.deref(state);
var map__57241__$1 = (((((!((map__57241 == null))))?(((((map__57241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57241):map__57241);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57241__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57241__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57241__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__57244 = e.target.value;
var G__57245 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__57244,G__57245) : athens.views.node_page.db_handler.call(null,G__57244,G__57245));
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57246(s__57247){
return (new cljs.core.LazySeq(null,(function (){
var s__57247__$1 = s__57247;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57247__$1);
if(temp__5735__auto__){
var s__57247__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57247__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57247__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57249 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57248 = (0);
while(true){
if((i__57248 < size__4528__auto__)){
var map__57250 = cljs.core._nth(c__4527__auto__,i__57248);
var map__57250__$1 = (((((!((map__57250 == null))))?(((((map__57250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57250):map__57250);
var child = map__57250__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57250__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57249,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__57382 = (i__57248 + (1));
i__57248 = G__57382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57249),athens$views$node_page$node_page_el_$_iter__57246(cljs.core.chunk_rest(s__57247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57249),null);
}
} else {
var map__57252 = cljs.core.first(s__57247__$2);
var map__57252__$1 = (((((!((map__57252 == null))))?(((((map__57252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57252):map__57252);
var child = map__57252__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57252__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__57246(cljs.core.rest(s__57247__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57254(s__57255){
return (new cljs.core.LazySeq(null,(function (){
var s__57255__$1 = s__57255;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57255__$1);
if(temp__5735__auto__){
var s__57255__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57255__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57255__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57257 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57256 = (0);
while(true){
if((i__57256 < size__4528__auto__)){
var vec__57258 = cljs.core._nth(c__4527__auto__,i__57256);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57258,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57258,(1),null);
cljs.core.chunk_append(b__57257,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57256,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("lf","show","lf/show",-576708583),cljs.core.not(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
});})(i__57256,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null),(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"width","width",-384071477),"18rem",new cljs.core.Keyword(null,"left","left",-399115937),"-1050%",new cljs.core.Keyword(null,"top","top",-1856271961),"0%"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filters.filters_el,uid,athens.db.construct_links(title)], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57256,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261(s__57262){
return (new cljs.core.LazySeq(null,((function (i__57256,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57262__$1 = s__57262;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57262__$1);
if(temp__5735__auto____$1){
var s__57262__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57262__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57262__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57264 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57263 = (0);
while(true){
if((i__57263 < size__4528__auto____$1)){
var vec__57265 = cljs.core._nth(c__4527__auto____$1,i__57263);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57265,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57265,(1),null);
cljs.core.chunk_append(b__57264,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57263,i__57256,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57263,i__57256,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57263,i__57256,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268(s__57269){
return (new cljs.core.LazySeq(null,((function (i__57263,i__57256,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57269__$1 = s__57269;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57269__$1);
if(temp__5735__auto____$2){
var s__57269__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57269__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57269__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57271 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57270 = (0);
while(true){
if((i__57270 < size__4528__auto____$2)){
var map__57272 = cljs.core._nth(c__4527__auto____$2,i__57270);
var map__57272__$1 = (((((!((map__57272 == null))))?(((((map__57272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57272):map__57272);
var block__$1 = map__57272__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57272__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57272__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57271,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57270,i__57263,i__57256,map__57272,map__57272__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268_$_iter__57274(s__57275){
return (new cljs.core.LazySeq(null,((function (i__57270,i__57263,i__57256,map__57272,map__57272__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57275__$1 = s__57275;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57275__$1);
if(temp__5735__auto____$3){
var s__57275__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57275__$2)){
var c__4527__auto____$3 = cljs.core.chunk_first(s__57275__$2);
var size__4528__auto____$3 = cljs.core.count(c__4527__auto____$3);
var b__57277 = cljs.core.chunk_buffer(size__4528__auto____$3);
if((function (){var i__57276 = (0);
while(true){
if((i__57276 < size__4528__auto____$3)){
var map__57278 = cljs.core._nth(c__4527__auto____$3,i__57276);
var map__57278__$1 = (((((!((map__57278 == null))))?(((((map__57278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57278):map__57278);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57278__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57278__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57278__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57276,i__57270,i__57263,i__57256,map__57278,map__57278__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57277,s__57275__$2,temp__5735__auto____$3,map__57272,map__57272__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57276,i__57270,i__57263,i__57256,map__57278,map__57278__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57277,s__57275__$2,temp__5735__auto____$3,map__57272,map__57272__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57391 = (i__57276 + (1));
i__57276 = G__57391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57277),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268_$_iter__57274(cljs.core.chunk_rest(s__57275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57277),null);
}
} else {
var map__57280 = cljs.core.first(s__57275__$2);
var map__57280__$1 = (((((!((map__57280 == null))))?(((((map__57280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57280):map__57280);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57270,i__57263,i__57256,map__57280,map__57280__$1,title__$1,string,uid__$2,s__57275__$2,temp__5735__auto____$3,map__57272,map__57272__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57270,i__57263,i__57256,map__57280,map__57280__$1,title__$1,string,uid__$2,s__57275__$2,temp__5735__auto____$3,map__57272,map__57272__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268_$_iter__57274(cljs.core.rest(s__57275__$2)));
}
} else {
return null;
}
break;
}
});})(i__57270,i__57263,i__57256,map__57272,map__57272__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57270,i__57263,i__57256,map__57272,map__57272__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57271,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57392 = (i__57270 + (1));
i__57270 = G__57392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57271),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268(cljs.core.chunk_rest(s__57269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57271),null);
}
} else {
var map__57282 = cljs.core.first(s__57269__$2);
var map__57282__$1 = (((((!((map__57282 == null))))?(((((map__57282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57282):map__57282);
var block__$1 = map__57282__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57263,i__57256,map__57282,map__57282__$1,block__$1,uid__$1,parents,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268_$_iter__57284(s__57285){
return (new cljs.core.LazySeq(null,((function (i__57263,i__57256,map__57282,map__57282__$1,block__$1,uid__$1,parents,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57285__$1 = s__57285;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57285__$1);
if(temp__5735__auto____$3){
var s__57285__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57285__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57285__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57287 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57286 = (0);
while(true){
if((i__57286 < size__4528__auto____$2)){
var map__57288 = cljs.core._nth(c__4527__auto____$2,i__57286);
var map__57288__$1 = (((((!((map__57288 == null))))?(((((map__57288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57288):map__57288);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57287,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57286,i__57263,i__57256,map__57288,map__57288__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57287,s__57285__$2,temp__5735__auto____$3,map__57282,map__57282__$1,block__$1,uid__$1,parents,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57286,i__57263,i__57256,map__57288,map__57288__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57287,s__57285__$2,temp__5735__auto____$3,map__57282,map__57282__$1,block__$1,uid__$1,parents,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57394 = (i__57286 + (1));
i__57286 = G__57394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57287),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268_$_iter__57284(cljs.core.chunk_rest(s__57285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57287),null);
}
} else {
var map__57290 = cljs.core.first(s__57285__$2);
var map__57290__$1 = (((((!((map__57290 == null))))?(((((map__57290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57290):map__57290);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57263,i__57256,map__57290,map__57290__$1,title__$1,string,uid__$2,s__57285__$2,temp__5735__auto____$3,map__57282,map__57282__$1,block__$1,uid__$1,parents,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57263,i__57256,map__57290,map__57290__$1,title__$1,string,uid__$2,s__57285__$2,temp__5735__auto____$3,map__57282,map__57282__$1,block__$1,uid__$1,parents,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268_$_iter__57284(cljs.core.rest(s__57285__$2)));
}
} else {
return null;
}
break;
}
});})(i__57263,i__57256,map__57282,map__57282__$1,block__$1,uid__$1,parents,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57263,i__57256,map__57282,map__57282__$1,block__$1,uid__$1,parents,s__57269__$2,temp__5735__auto____$2,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57268(cljs.core.rest(s__57269__$2)));
}
} else {
return null;
}
break;
}
});})(i__57263,i__57256,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57263,i__57256,vec__57265,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57264,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57395 = (i__57263 + (1));
i__57263 = G__57395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57264),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261(cljs.core.chunk_rest(s__57262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57264),null);
}
} else {
var vec__57292 = cljs.core.first(s__57262__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57292,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57292,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57256,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57256,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57256,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295(s__57296){
return (new cljs.core.LazySeq(null,((function (i__57256,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57296__$1 = s__57296;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57296__$1);
if(temp__5735__auto____$2){
var s__57296__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57296__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57296__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57298 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57297 = (0);
while(true){
if((i__57297 < size__4528__auto____$1)){
var map__57299 = cljs.core._nth(c__4527__auto____$1,i__57297);
var map__57299__$1 = (((((!((map__57299 == null))))?(((((map__57299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57299):map__57299);
var block__$1 = map__57299__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57299__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57299__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57298,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57297,i__57256,map__57299,map__57299__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57298,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295_$_iter__57301(s__57302){
return (new cljs.core.LazySeq(null,((function (i__57297,i__57256,map__57299,map__57299__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57298,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57302__$1 = s__57302;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57302__$1);
if(temp__5735__auto____$3){
var s__57302__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57302__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57302__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57304 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57303 = (0);
while(true){
if((i__57303 < size__4528__auto____$2)){
var map__57305 = cljs.core._nth(c__4527__auto____$2,i__57303);
var map__57305__$1 = (((((!((map__57305 == null))))?(((((map__57305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57305):map__57305);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57305__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57305__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57305__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57304,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57303,i__57297,i__57256,map__57305,map__57305__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57304,s__57302__$2,temp__5735__auto____$3,map__57299,map__57299__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57298,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57303,i__57297,i__57256,map__57305,map__57305__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57304,s__57302__$2,temp__5735__auto____$3,map__57299,map__57299__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57298,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57396 = (i__57303 + (1));
i__57303 = G__57396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57304),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295_$_iter__57301(cljs.core.chunk_rest(s__57302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57304),null);
}
} else {
var map__57307 = cljs.core.first(s__57302__$2);
var map__57307__$1 = (((((!((map__57307 == null))))?(((((map__57307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57307):map__57307);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57307__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57307__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57307__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57297,i__57256,map__57307,map__57307__$1,title__$1,string,uid__$2,s__57302__$2,temp__5735__auto____$3,map__57299,map__57299__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57298,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57297,i__57256,map__57307,map__57307__$1,title__$1,string,uid__$2,s__57302__$2,temp__5735__auto____$3,map__57299,map__57299__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57298,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295_$_iter__57301(cljs.core.rest(s__57302__$2)));
}
} else {
return null;
}
break;
}
});})(i__57297,i__57256,map__57299,map__57299__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57298,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57297,i__57256,map__57299,map__57299__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57298,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57397 = (i__57297 + (1));
i__57297 = G__57397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57298),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295(cljs.core.chunk_rest(s__57296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57298),null);
}
} else {
var map__57309 = cljs.core.first(s__57296__$2);
var map__57309__$1 = (((((!((map__57309 == null))))?(((((map__57309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57309):map__57309);
var block__$1 = map__57309__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57309__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57309__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57256,map__57309,map__57309__$1,block__$1,uid__$1,parents,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295_$_iter__57311(s__57312){
return (new cljs.core.LazySeq(null,((function (i__57256,map__57309,map__57309__$1,block__$1,uid__$1,parents,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57312__$1 = s__57312;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57312__$1);
if(temp__5735__auto____$3){
var s__57312__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57312__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57312__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57314 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57313 = (0);
while(true){
if((i__57313 < size__4528__auto____$1)){
var map__57315 = cljs.core._nth(c__4527__auto____$1,i__57313);
var map__57315__$1 = (((((!((map__57315 == null))))?(((((map__57315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57315):map__57315);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57315__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57315__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57315__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57314,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57313,i__57256,map__57315,map__57315__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57314,s__57312__$2,temp__5735__auto____$3,map__57309,map__57309__$1,block__$1,uid__$1,parents,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57313,i__57256,map__57315,map__57315__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57314,s__57312__$2,temp__5735__auto____$3,map__57309,map__57309__$1,block__$1,uid__$1,parents,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57398 = (i__57313 + (1));
i__57313 = G__57398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57314),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295_$_iter__57311(cljs.core.chunk_rest(s__57312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57314),null);
}
} else {
var map__57317 = cljs.core.first(s__57312__$2);
var map__57317__$1 = (((((!((map__57317 == null))))?(((((map__57317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57317):map__57317);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57317__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57317__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57317__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57256,map__57317,map__57317__$1,title__$1,string,uid__$2,s__57312__$2,temp__5735__auto____$3,map__57309,map__57309__$1,block__$1,uid__$1,parents,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57256,map__57317,map__57317__$1,title__$1,string,uid__$2,s__57312__$2,temp__5735__auto____$3,map__57309,map__57309__$1,block__$1,uid__$1,parents,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295_$_iter__57311(cljs.core.rest(s__57312__$2)));
}
} else {
return null;
}
break;
}
});})(i__57256,map__57309,map__57309__$1,block__$1,uid__$1,parents,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57256,map__57309,map__57309__$1,block__$1,uid__$1,parents,s__57296__$2,temp__5735__auto____$2,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261_$_iter__57295(cljs.core.rest(s__57296__$2)));
}
} else {
return null;
}
break;
}
});})(i__57256,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57256,vec__57292,group_title,group,s__57262__$2,temp__5735__auto____$1,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57261(cljs.core.rest(s__57262__$2)));
}
} else {
return null;
}
break;
}
});})(i__57256,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57256,vec__57258,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57257,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null));

var G__57399 = (i__57256 + (1));
i__57256 = G__57399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57257),athens$views$node_page$node_page_el_$_iter__57254(cljs.core.chunk_rest(s__57255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57257),null);
}
} else {
var vec__57319 = cljs.core.first(s__57255__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57319,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57319,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("lf","show","lf/show",-576708583),cljs.core.not(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
});})(vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null),(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"width","width",-384071477),"18rem",new cljs.core.Keyword(null,"left","left",-399115937),"-1050%",new cljs.core.Keyword(null,"top","top",-1856271961),"0%"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filters.filters_el,uid,athens.db.construct_links(title)], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322(s__57323){
return (new cljs.core.LazySeq(null,(function (){
var s__57323__$1 = s__57323;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57323__$1);
if(temp__5735__auto____$1){
var s__57323__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57323__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57323__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57325 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57324 = (0);
while(true){
if((i__57324 < size__4528__auto__)){
var vec__57326 = cljs.core._nth(c__4527__auto__,i__57324);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57326,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57326,(1),null);
cljs.core.chunk_append(b__57325,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57324,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57324,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57324,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329(s__57330){
return (new cljs.core.LazySeq(null,((function (i__57324,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57330__$1 = s__57330;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57330__$1);
if(temp__5735__auto____$2){
var s__57330__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57330__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57330__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57332 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57331 = (0);
while(true){
if((i__57331 < size__4528__auto____$1)){
var map__57333 = cljs.core._nth(c__4527__auto____$1,i__57331);
var map__57333__$1 = (((((!((map__57333 == null))))?(((((map__57333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57333):map__57333);
var block__$1 = map__57333__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57333__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57333__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57332,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57331,i__57324,map__57333,map__57333__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329_$_iter__57335(s__57336){
return (new cljs.core.LazySeq(null,((function (i__57331,i__57324,map__57333,map__57333__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57336__$1 = s__57336;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57336__$1);
if(temp__5735__auto____$3){
var s__57336__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57336__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57336__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57338 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57337 = (0);
while(true){
if((i__57337 < size__4528__auto____$2)){
var map__57339 = cljs.core._nth(c__4527__auto____$2,i__57337);
var map__57339__$1 = (((((!((map__57339 == null))))?(((((map__57339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57339):map__57339);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57339__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57339__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57339__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57338,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57337,i__57331,i__57324,map__57339,map__57339__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57338,s__57336__$2,temp__5735__auto____$3,map__57333,map__57333__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57337,i__57331,i__57324,map__57339,map__57339__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57338,s__57336__$2,temp__5735__auto____$3,map__57333,map__57333__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57400 = (i__57337 + (1));
i__57337 = G__57400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57338),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329_$_iter__57335(cljs.core.chunk_rest(s__57336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57338),null);
}
} else {
var map__57341 = cljs.core.first(s__57336__$2);
var map__57341__$1 = (((((!((map__57341 == null))))?(((((map__57341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57341):map__57341);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57331,i__57324,map__57341,map__57341__$1,title__$1,string,uid__$2,s__57336__$2,temp__5735__auto____$3,map__57333,map__57333__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57331,i__57324,map__57341,map__57341__$1,title__$1,string,uid__$2,s__57336__$2,temp__5735__auto____$3,map__57333,map__57333__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329_$_iter__57335(cljs.core.rest(s__57336__$2)));
}
} else {
return null;
}
break;
}
});})(i__57331,i__57324,map__57333,map__57333__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57331,i__57324,map__57333,map__57333__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57332,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57401 = (i__57331 + (1));
i__57331 = G__57401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57332),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329(cljs.core.chunk_rest(s__57330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57332),null);
}
} else {
var map__57343 = cljs.core.first(s__57330__$2);
var map__57343__$1 = (((((!((map__57343 == null))))?(((((map__57343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57343):map__57343);
var block__$1 = map__57343__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57343__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57343__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57324,map__57343,map__57343__$1,block__$1,uid__$1,parents,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329_$_iter__57345(s__57346){
return (new cljs.core.LazySeq(null,((function (i__57324,map__57343,map__57343__$1,block__$1,uid__$1,parents,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57346__$1 = s__57346;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57346__$1);
if(temp__5735__auto____$3){
var s__57346__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57346__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57346__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57348 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57347 = (0);
while(true){
if((i__57347 < size__4528__auto____$1)){
var map__57349 = cljs.core._nth(c__4527__auto____$1,i__57347);
var map__57349__$1 = (((((!((map__57349 == null))))?(((((map__57349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57349):map__57349);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57348,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57347,i__57324,map__57349,map__57349__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57348,s__57346__$2,temp__5735__auto____$3,map__57343,map__57343__$1,block__$1,uid__$1,parents,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57347,i__57324,map__57349,map__57349__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57348,s__57346__$2,temp__5735__auto____$3,map__57343,map__57343__$1,block__$1,uid__$1,parents,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57402 = (i__57347 + (1));
i__57347 = G__57402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57348),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329_$_iter__57345(cljs.core.chunk_rest(s__57346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57348),null);
}
} else {
var map__57351 = cljs.core.first(s__57346__$2);
var map__57351__$1 = (((((!((map__57351 == null))))?(((((map__57351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57351):map__57351);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57324,map__57351,map__57351__$1,title__$1,string,uid__$2,s__57346__$2,temp__5735__auto____$3,map__57343,map__57343__$1,block__$1,uid__$1,parents,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57324,map__57351,map__57351__$1,title__$1,string,uid__$2,s__57346__$2,temp__5735__auto____$3,map__57343,map__57343__$1,block__$1,uid__$1,parents,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329_$_iter__57345(cljs.core.rest(s__57346__$2)));
}
} else {
return null;
}
break;
}
});})(i__57324,map__57343,map__57343__$1,block__$1,uid__$1,parents,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57324,map__57343,map__57343__$1,block__$1,uid__$1,parents,s__57330__$2,temp__5735__auto____$2,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57329(cljs.core.rest(s__57330__$2)));
}
} else {
return null;
}
break;
}
});})(i__57324,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57324,vec__57326,group_title,group,c__4527__auto__,size__4528__auto__,b__57325,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57403 = (i__57324 + (1));
i__57324 = G__57403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57325),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322(cljs.core.chunk_rest(s__57323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57325),null);
}
} else {
var vec__57353 = cljs.core.first(s__57323__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57353,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57353,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356(s__57357){
return (new cljs.core.LazySeq(null,(function (){
var s__57357__$1 = s__57357;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57357__$1);
if(temp__5735__auto____$2){
var s__57357__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57357__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57357__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57359 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57358 = (0);
while(true){
if((i__57358 < size__4528__auto__)){
var map__57360 = cljs.core._nth(c__4527__auto__,i__57358);
var map__57360__$1 = (((((!((map__57360 == null))))?(((((map__57360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57360):map__57360);
var block__$1 = map__57360__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57360__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57360__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57359,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57358,map__57360,map__57360__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57359,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356_$_iter__57362(s__57363){
return (new cljs.core.LazySeq(null,((function (i__57358,map__57360,map__57360__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57359,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
var s__57363__$1 = s__57363;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57363__$1);
if(temp__5735__auto____$3){
var s__57363__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57363__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57363__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57365 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57364 = (0);
while(true){
if((i__57364 < size__4528__auto____$1)){
var map__57366 = cljs.core._nth(c__4527__auto____$1,i__57364);
var map__57366__$1 = (((((!((map__57366 == null))))?(((((map__57366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57366):map__57366);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57366__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57366__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57366__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57365,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57364,i__57358,map__57366,map__57366__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57365,s__57363__$2,temp__5735__auto____$3,map__57360,map__57360__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57359,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57364,i__57358,map__57366,map__57366__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57365,s__57363__$2,temp__5735__auto____$3,map__57360,map__57360__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57359,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57404 = (i__57364 + (1));
i__57364 = G__57404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57365),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356_$_iter__57362(cljs.core.chunk_rest(s__57363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57365),null);
}
} else {
var map__57368 = cljs.core.first(s__57363__$2);
var map__57368__$1 = (((((!((map__57368 == null))))?(((((map__57368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57368):map__57368);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57368__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57368__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57368__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57358,map__57368,map__57368__$1,title__$1,string,uid__$2,s__57363__$2,temp__5735__auto____$3,map__57360,map__57360__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57359,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57358,map__57368,map__57368__$1,title__$1,string,uid__$2,s__57363__$2,temp__5735__auto____$3,map__57360,map__57360__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57359,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356_$_iter__57362(cljs.core.rest(s__57363__$2)));
}
} else {
return null;
}
break;
}
});})(i__57358,map__57360,map__57360__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57359,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
,null,null));
});})(i__57358,map__57360,map__57360__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57359,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57405 = (i__57358 + (1));
i__57358 = G__57405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57359),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356(cljs.core.chunk_rest(s__57357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57359),null);
}
} else {
var map__57370 = cljs.core.first(s__57357__$2);
var map__57370__$1 = (((((!((map__57370 == null))))?(((((map__57370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57370):map__57370);
var block__$1 = map__57370__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57370__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57370__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (map__57370,map__57370__$1,block__$1,uid__$1,parents,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356_$_iter__57372(s__57373){
return (new cljs.core.LazySeq(null,(function (){
var s__57373__$1 = s__57373;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57373__$1);
if(temp__5735__auto____$3){
var s__57373__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57373__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57373__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57375 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57374 = (0);
while(true){
if((i__57374 < size__4528__auto__)){
var map__57376 = cljs.core._nth(c__4527__auto__,i__57374);
var map__57376__$1 = (((((!((map__57376 == null))))?(((((map__57376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57376):map__57376);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57376__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57376__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57376__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57375,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57374,map__57376,map__57376__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57375,s__57373__$2,temp__5735__auto____$3,map__57370,map__57370__$1,block__$1,uid__$1,parents,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57374,map__57376,map__57376__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57375,s__57373__$2,temp__5735__auto____$3,map__57370,map__57370__$1,block__$1,uid__$1,parents,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57406 = (i__57374 + (1));
i__57374 = G__57406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57375),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356_$_iter__57372(cljs.core.chunk_rest(s__57373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57375),null);
}
} else {
var map__57378 = cljs.core.first(s__57373__$2);
var map__57378__$1 = (((((!((map__57378 == null))))?(((((map__57378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57378):map__57378);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57378__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57378__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57378__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57378,map__57378__$1,title__$1,string,uid__$2,s__57373__$2,temp__5735__auto____$3,map__57370,map__57370__$1,block__$1,uid__$1,parents,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__57378,map__57378__$1,title__$1,string,uid__$2,s__57373__$2,temp__5735__auto____$3,map__57370,map__57370__$1,block__$1,uid__$1,parents,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356_$_iter__57372(cljs.core.rest(s__57373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__57370,map__57370__$1,block__$1,uid__$1,parents,s__57357__$2,temp__5735__auto____$2,vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322_$_iter__57356(cljs.core.rest(s__57357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57353,group_title,group,s__57323__$2,temp__5735__auto____$1,vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57254_$_iter__57322(cljs.core.rest(s__57323__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57319,linked_or_unlinked,refs,s__57255__$2,temp__5735__auto__,map__57240,map__57240__$1,title,is_shortcut_QMARK_,children,uid,map__57241,map__57241__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__57254(cljs.core.rest(s__57255__$2)));
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
var map__57380 = athens.db.get_node_document(ident);
var map__57380__$1 = (((((!((map__57380 == null))))?(((((map__57380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57380):map__57380);
var node = map__57380__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57380__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57380__$1,new cljs.core.Keyword("node","title","node/title",628940777));
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
