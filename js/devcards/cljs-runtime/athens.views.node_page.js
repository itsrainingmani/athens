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
return cljs.core.boolean$((function (){try{var vec__57245 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57245,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57245,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57245,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e57244){if((e57244 instanceof Object)){
var _ = e57244;
return false;
} else {
throw e57244;

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
var map__57248 = block;
var map__57248__$1 = (((((!((map__57248 == null))))?(((((map__57248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57248):map__57248);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__57249 = cljs.core.deref(state);
var map__57249__$1 = (((((!((map__57249 == null))))?(((((map__57249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57249):map__57249);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57249__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57249__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57249__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__57252 = e.target.value;
var G__57253 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__57252,G__57253) : athens.views.node_page.db_handler.call(null,G__57252,G__57253));
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57254(s__57255){
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
var map__57258 = cljs.core._nth(c__4527__auto__,i__57256);
var map__57258__$1 = (((((!((map__57258 == null))))?(((((map__57258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57258):map__57258);
var child = map__57258__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57258__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57257,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__57390 = (i__57256 + (1));
i__57256 = G__57390;
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
var map__57260 = cljs.core.first(s__57255__$2);
var map__57260__$1 = (((((!((map__57260 == null))))?(((((map__57260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57260):map__57260);
var child = map__57260__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57260__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__57254(cljs.core.rest(s__57255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57262(s__57263){
return (new cljs.core.LazySeq(null,(function (){
var s__57263__$1 = s__57263;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57263__$1);
if(temp__5735__auto__){
var s__57263__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57263__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57263__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57265 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57264 = (0);
while(true){
if((i__57264 < size__4528__auto__)){
var vec__57266 = cljs.core._nth(c__4527__auto__,i__57264);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57266,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57266,(1),null);
cljs.core.chunk_append(b__57265,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57264,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("lf","show","lf/show",-576708583),cljs.core.not(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
});})(i__57264,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null),(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"width","width",-384071477),"18rem",new cljs.core.Keyword(null,"left","left",-399115937),"-1050%",new cljs.core.Keyword(null,"top","top",-1856271961),"0%"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filters.filters_el,uid,athens.db.construct_links(title)], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57264,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269(s__57270){
return (new cljs.core.LazySeq(null,((function (i__57264,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57270__$1 = s__57270;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57270__$1);
if(temp__5735__auto____$1){
var s__57270__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57270__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57270__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57272 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57271 = (0);
while(true){
if((i__57271 < size__4528__auto____$1)){
var vec__57273 = cljs.core._nth(c__4527__auto____$1,i__57271);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57273,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57273,(1),null);
cljs.core.chunk_append(b__57272,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57271,i__57264,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57271,i__57264,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57271,i__57264,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276(s__57277){
return (new cljs.core.LazySeq(null,((function (i__57271,i__57264,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57277__$1 = s__57277;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57277__$1);
if(temp__5735__auto____$2){
var s__57277__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57277__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57277__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57279 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57278 = (0);
while(true){
if((i__57278 < size__4528__auto____$2)){
var map__57280 = cljs.core._nth(c__4527__auto____$2,i__57278);
var map__57280__$1 = (((((!((map__57280 == null))))?(((((map__57280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57280):map__57280);
var block__$1 = map__57280__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57279,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57278,i__57271,i__57264,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276_$_iter__57282(s__57283){
return (new cljs.core.LazySeq(null,((function (i__57278,i__57271,i__57264,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57283__$1 = s__57283;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57283__$1);
if(temp__5735__auto____$3){
var s__57283__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57283__$2)){
var c__4527__auto____$3 = cljs.core.chunk_first(s__57283__$2);
var size__4528__auto____$3 = cljs.core.count(c__4527__auto____$3);
var b__57285 = cljs.core.chunk_buffer(size__4528__auto____$3);
if((function (){var i__57284 = (0);
while(true){
if((i__57284 < size__4528__auto____$3)){
var map__57286 = cljs.core._nth(c__4527__auto____$3,i__57284);
var map__57286__$1 = (((((!((map__57286 == null))))?(((((map__57286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57286):map__57286);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57286__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57286__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57286__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57285,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57284,i__57278,i__57271,i__57264,map__57286,map__57286__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57285,s__57283__$2,temp__5735__auto____$3,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57284,i__57278,i__57271,i__57264,map__57286,map__57286__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57285,s__57283__$2,temp__5735__auto____$3,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57391 = (i__57284 + (1));
i__57284 = G__57391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57285),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276_$_iter__57282(cljs.core.chunk_rest(s__57283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57285),null);
}
} else {
var map__57288 = cljs.core.first(s__57283__$2);
var map__57288__$1 = (((((!((map__57288 == null))))?(((((map__57288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57288):map__57288);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57278,i__57271,i__57264,map__57288,map__57288__$1,title__$1,string,uid__$2,s__57283__$2,temp__5735__auto____$3,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57278,i__57271,i__57264,map__57288,map__57288__$1,title__$1,string,uid__$2,s__57283__$2,temp__5735__auto____$3,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276_$_iter__57282(cljs.core.rest(s__57283__$2)));
}
} else {
return null;
}
break;
}
});})(i__57278,i__57271,i__57264,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57278,i__57271,i__57264,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57392 = (i__57278 + (1));
i__57278 = G__57392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57279),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276(cljs.core.chunk_rest(s__57277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57279),null);
}
} else {
var map__57290 = cljs.core.first(s__57277__$2);
var map__57290__$1 = (((((!((map__57290 == null))))?(((((map__57290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57290):map__57290);
var block__$1 = map__57290__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57271,i__57264,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276_$_iter__57292(s__57293){
return (new cljs.core.LazySeq(null,((function (i__57271,i__57264,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57293__$1 = s__57293;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57293__$1);
if(temp__5735__auto____$3){
var s__57293__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57293__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57293__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57295 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57294 = (0);
while(true){
if((i__57294 < size__4528__auto____$2)){
var map__57296 = cljs.core._nth(c__4527__auto____$2,i__57294);
var map__57296__$1 = (((((!((map__57296 == null))))?(((((map__57296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57296):map__57296);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57295,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57294,i__57271,i__57264,map__57296,map__57296__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57295,s__57293__$2,temp__5735__auto____$3,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57294,i__57271,i__57264,map__57296,map__57296__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57295,s__57293__$2,temp__5735__auto____$3,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57393 = (i__57294 + (1));
i__57294 = G__57393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57295),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276_$_iter__57292(cljs.core.chunk_rest(s__57293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57295),null);
}
} else {
var map__57298 = cljs.core.first(s__57293__$2);
var map__57298__$1 = (((((!((map__57298 == null))))?(((((map__57298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57298):map__57298);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57271,i__57264,map__57298,map__57298__$1,title__$1,string,uid__$2,s__57293__$2,temp__5735__auto____$3,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57271,i__57264,map__57298,map__57298__$1,title__$1,string,uid__$2,s__57293__$2,temp__5735__auto____$3,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276_$_iter__57292(cljs.core.rest(s__57293__$2)));
}
} else {
return null;
}
break;
}
});})(i__57271,i__57264,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57271,i__57264,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57276(cljs.core.rest(s__57277__$2)));
}
} else {
return null;
}
break;
}
});})(i__57271,i__57264,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57271,i__57264,vec__57273,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57272,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57394 = (i__57271 + (1));
i__57271 = G__57394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57272),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269(cljs.core.chunk_rest(s__57270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57272),null);
}
} else {
var vec__57300 = cljs.core.first(s__57270__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57300,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57300,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57264,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57264,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57264,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303(s__57304){
return (new cljs.core.LazySeq(null,((function (i__57264,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57304__$1 = s__57304;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57304__$1);
if(temp__5735__auto____$2){
var s__57304__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57304__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57304__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57306 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57305 = (0);
while(true){
if((i__57305 < size__4528__auto____$1)){
var map__57307 = cljs.core._nth(c__4527__auto____$1,i__57305);
var map__57307__$1 = (((((!((map__57307 == null))))?(((((map__57307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57307):map__57307);
var block__$1 = map__57307__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57307__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57307__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57306,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57305,i__57264,map__57307,map__57307__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57306,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303_$_iter__57309(s__57310){
return (new cljs.core.LazySeq(null,((function (i__57305,i__57264,map__57307,map__57307__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57306,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57310__$1 = s__57310;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57310__$1);
if(temp__5735__auto____$3){
var s__57310__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57310__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57310__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57312 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57311 = (0);
while(true){
if((i__57311 < size__4528__auto____$2)){
var map__57313 = cljs.core._nth(c__4527__auto____$2,i__57311);
var map__57313__$1 = (((((!((map__57313 == null))))?(((((map__57313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57313):map__57313);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57312,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57311,i__57305,i__57264,map__57313,map__57313__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57312,s__57310__$2,temp__5735__auto____$3,map__57307,map__57307__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57306,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57311,i__57305,i__57264,map__57313,map__57313__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57312,s__57310__$2,temp__5735__auto____$3,map__57307,map__57307__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57306,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57395 = (i__57311 + (1));
i__57311 = G__57395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57312),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303_$_iter__57309(cljs.core.chunk_rest(s__57310__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57312),null);
}
} else {
var map__57315 = cljs.core.first(s__57310__$2);
var map__57315__$1 = (((((!((map__57315 == null))))?(((((map__57315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57315):map__57315);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57315__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57315__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57315__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57305,i__57264,map__57315,map__57315__$1,title__$1,string,uid__$2,s__57310__$2,temp__5735__auto____$3,map__57307,map__57307__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57306,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57305,i__57264,map__57315,map__57315__$1,title__$1,string,uid__$2,s__57310__$2,temp__5735__auto____$3,map__57307,map__57307__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57306,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303_$_iter__57309(cljs.core.rest(s__57310__$2)));
}
} else {
return null;
}
break;
}
});})(i__57305,i__57264,map__57307,map__57307__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57306,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57305,i__57264,map__57307,map__57307__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57306,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57396 = (i__57305 + (1));
i__57305 = G__57396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57306),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303(cljs.core.chunk_rest(s__57304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57306),null);
}
} else {
var map__57317 = cljs.core.first(s__57304__$2);
var map__57317__$1 = (((((!((map__57317 == null))))?(((((map__57317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57317):map__57317);
var block__$1 = map__57317__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57317__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57317__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57264,map__57317,map__57317__$1,block__$1,uid__$1,parents,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303_$_iter__57319(s__57320){
return (new cljs.core.LazySeq(null,((function (i__57264,map__57317,map__57317__$1,block__$1,uid__$1,parents,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57320__$1 = s__57320;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57320__$1);
if(temp__5735__auto____$3){
var s__57320__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57320__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57320__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57322 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57321 = (0);
while(true){
if((i__57321 < size__4528__auto____$1)){
var map__57323 = cljs.core._nth(c__4527__auto____$1,i__57321);
var map__57323__$1 = (((((!((map__57323 == null))))?(((((map__57323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57323):map__57323);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57323__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57323__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57323__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57322,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57321,i__57264,map__57323,map__57323__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57322,s__57320__$2,temp__5735__auto____$3,map__57317,map__57317__$1,block__$1,uid__$1,parents,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57321,i__57264,map__57323,map__57323__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57322,s__57320__$2,temp__5735__auto____$3,map__57317,map__57317__$1,block__$1,uid__$1,parents,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57397 = (i__57321 + (1));
i__57321 = G__57397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57322),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303_$_iter__57319(cljs.core.chunk_rest(s__57320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57322),null);
}
} else {
var map__57325 = cljs.core.first(s__57320__$2);
var map__57325__$1 = (((((!((map__57325 == null))))?(((((map__57325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57325):map__57325);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57325__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57325__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57325__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57264,map__57325,map__57325__$1,title__$1,string,uid__$2,s__57320__$2,temp__5735__auto____$3,map__57317,map__57317__$1,block__$1,uid__$1,parents,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57264,map__57325,map__57325__$1,title__$1,string,uid__$2,s__57320__$2,temp__5735__auto____$3,map__57317,map__57317__$1,block__$1,uid__$1,parents,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303_$_iter__57319(cljs.core.rest(s__57320__$2)));
}
} else {
return null;
}
break;
}
});})(i__57264,map__57317,map__57317__$1,block__$1,uid__$1,parents,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57264,map__57317,map__57317__$1,block__$1,uid__$1,parents,s__57304__$2,temp__5735__auto____$2,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269_$_iter__57303(cljs.core.rest(s__57304__$2)));
}
} else {
return null;
}
break;
}
});})(i__57264,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57264,vec__57300,group_title,group,s__57270__$2,temp__5735__auto____$1,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57269(cljs.core.rest(s__57270__$2)));
}
} else {
return null;
}
break;
}
});})(i__57264,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57264,vec__57266,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57265,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null));

var G__57398 = (i__57264 + (1));
i__57264 = G__57398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57265),athens$views$node_page$node_page_el_$_iter__57262(cljs.core.chunk_rest(s__57263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57265),null);
}
} else {
var vec__57327 = cljs.core.first(s__57263__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57327,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57327,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("lf","show","lf/show",-576708583),cljs.core.not(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
});})(vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null),(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"width","width",-384071477),"18rem",new cljs.core.Keyword(null,"left","left",-399115937),"-1050%",new cljs.core.Keyword(null,"top","top",-1856271961),"0%"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filters.filters_el,uid,athens.db.construct_links(title)], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330(s__57331){
return (new cljs.core.LazySeq(null,(function (){
var s__57331__$1 = s__57331;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57331__$1);
if(temp__5735__auto____$1){
var s__57331__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57331__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57331__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57333 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57332 = (0);
while(true){
if((i__57332 < size__4528__auto__)){
var vec__57334 = cljs.core._nth(c__4527__auto__,i__57332);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57334,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57334,(1),null);
cljs.core.chunk_append(b__57333,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57332,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57332,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57332,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337(s__57338){
return (new cljs.core.LazySeq(null,((function (i__57332,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57338__$1 = s__57338;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57338__$1);
if(temp__5735__auto____$2){
var s__57338__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57338__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57338__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57340 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57339 = (0);
while(true){
if((i__57339 < size__4528__auto____$1)){
var map__57341 = cljs.core._nth(c__4527__auto____$1,i__57339);
var map__57341__$1 = (((((!((map__57341 == null))))?(((((map__57341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57341):map__57341);
var block__$1 = map__57341__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57340,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57339,i__57332,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337_$_iter__57343(s__57344){
return (new cljs.core.LazySeq(null,((function (i__57339,i__57332,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57344__$1 = s__57344;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57344__$1);
if(temp__5735__auto____$3){
var s__57344__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57344__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57344__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57346 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57345 = (0);
while(true){
if((i__57345 < size__4528__auto____$2)){
var map__57347 = cljs.core._nth(c__4527__auto____$2,i__57345);
var map__57347__$1 = (((((!((map__57347 == null))))?(((((map__57347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57347):map__57347);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57346,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57345,i__57339,i__57332,map__57347,map__57347__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57346,s__57344__$2,temp__5735__auto____$3,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57345,i__57339,i__57332,map__57347,map__57347__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57346,s__57344__$2,temp__5735__auto____$3,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57405 = (i__57345 + (1));
i__57345 = G__57405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57346),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337_$_iter__57343(cljs.core.chunk_rest(s__57344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57346),null);
}
} else {
var map__57349 = cljs.core.first(s__57344__$2);
var map__57349__$1 = (((((!((map__57349 == null))))?(((((map__57349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57349):map__57349);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57339,i__57332,map__57349,map__57349__$1,title__$1,string,uid__$2,s__57344__$2,temp__5735__auto____$3,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57339,i__57332,map__57349,map__57349__$1,title__$1,string,uid__$2,s__57344__$2,temp__5735__auto____$3,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337_$_iter__57343(cljs.core.rest(s__57344__$2)));
}
} else {
return null;
}
break;
}
});})(i__57339,i__57332,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57339,i__57332,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57408 = (i__57339 + (1));
i__57339 = G__57408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57340),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337(cljs.core.chunk_rest(s__57338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57340),null);
}
} else {
var map__57351 = cljs.core.first(s__57338__$2);
var map__57351__$1 = (((((!((map__57351 == null))))?(((((map__57351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57351):map__57351);
var block__$1 = map__57351__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57332,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337_$_iter__57353(s__57354){
return (new cljs.core.LazySeq(null,((function (i__57332,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57354__$1 = s__57354;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57354__$1);
if(temp__5735__auto____$3){
var s__57354__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57354__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57354__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57356 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57355 = (0);
while(true){
if((i__57355 < size__4528__auto____$1)){
var map__57357 = cljs.core._nth(c__4527__auto____$1,i__57355);
var map__57357__$1 = (((((!((map__57357 == null))))?(((((map__57357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57357):map__57357);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57357__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57357__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57357__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57356,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57355,i__57332,map__57357,map__57357__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57356,s__57354__$2,temp__5735__auto____$3,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57355,i__57332,map__57357,map__57357__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57356,s__57354__$2,temp__5735__auto____$3,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57410 = (i__57355 + (1));
i__57355 = G__57410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57356),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337_$_iter__57353(cljs.core.chunk_rest(s__57354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57356),null);
}
} else {
var map__57359 = cljs.core.first(s__57354__$2);
var map__57359__$1 = (((((!((map__57359 == null))))?(((((map__57359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57359):map__57359);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57332,map__57359,map__57359__$1,title__$1,string,uid__$2,s__57354__$2,temp__5735__auto____$3,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57332,map__57359,map__57359__$1,title__$1,string,uid__$2,s__57354__$2,temp__5735__auto____$3,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337_$_iter__57353(cljs.core.rest(s__57354__$2)));
}
} else {
return null;
}
break;
}
});})(i__57332,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57332,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57337(cljs.core.rest(s__57338__$2)));
}
} else {
return null;
}
break;
}
});})(i__57332,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57332,vec__57334,group_title,group,c__4527__auto__,size__4528__auto__,b__57333,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57411 = (i__57332 + (1));
i__57332 = G__57411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57333),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330(cljs.core.chunk_rest(s__57331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57333),null);
}
} else {
var vec__57361 = cljs.core.first(s__57331__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57361,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57361,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364(s__57365){
return (new cljs.core.LazySeq(null,(function (){
var s__57365__$1 = s__57365;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57365__$1);
if(temp__5735__auto____$2){
var s__57365__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57365__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57365__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57367 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57366 = (0);
while(true){
if((i__57366 < size__4528__auto__)){
var map__57368 = cljs.core._nth(c__4527__auto__,i__57366);
var map__57368__$1 = (((((!((map__57368 == null))))?(((((map__57368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57368):map__57368);
var block__$1 = map__57368__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57368__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57368__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57367,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57366,map__57368,map__57368__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57367,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364_$_iter__57370(s__57371){
return (new cljs.core.LazySeq(null,((function (i__57366,map__57368,map__57368__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57367,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
var s__57371__$1 = s__57371;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57371__$1);
if(temp__5735__auto____$3){
var s__57371__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57371__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57371__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57373 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57372 = (0);
while(true){
if((i__57372 < size__4528__auto____$1)){
var map__57374 = cljs.core._nth(c__4527__auto____$1,i__57372);
var map__57374__$1 = (((((!((map__57374 == null))))?(((((map__57374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57374):map__57374);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57374__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57374__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57374__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57373,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57372,i__57366,map__57374,map__57374__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57373,s__57371__$2,temp__5735__auto____$3,map__57368,map__57368__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57367,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57372,i__57366,map__57374,map__57374__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57373,s__57371__$2,temp__5735__auto____$3,map__57368,map__57368__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57367,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57412 = (i__57372 + (1));
i__57372 = G__57412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57373),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364_$_iter__57370(cljs.core.chunk_rest(s__57371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57373),null);
}
} else {
var map__57376 = cljs.core.first(s__57371__$2);
var map__57376__$1 = (((((!((map__57376 == null))))?(((((map__57376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57376):map__57376);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57376__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57376__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57376__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57366,map__57376,map__57376__$1,title__$1,string,uid__$2,s__57371__$2,temp__5735__auto____$3,map__57368,map__57368__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57367,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57366,map__57376,map__57376__$1,title__$1,string,uid__$2,s__57371__$2,temp__5735__auto____$3,map__57368,map__57368__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57367,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364_$_iter__57370(cljs.core.rest(s__57371__$2)));
}
} else {
return null;
}
break;
}
});})(i__57366,map__57368,map__57368__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57367,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
,null,null));
});})(i__57366,map__57368,map__57368__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57367,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57413 = (i__57366 + (1));
i__57366 = G__57413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57367),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364(cljs.core.chunk_rest(s__57365__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57367),null);
}
} else {
var map__57378 = cljs.core.first(s__57365__$2);
var map__57378__$1 = (((((!((map__57378 == null))))?(((((map__57378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57378):map__57378);
var block__$1 = map__57378__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57378__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57378__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (map__57378,map__57378__$1,block__$1,uid__$1,parents,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364_$_iter__57380(s__57381){
return (new cljs.core.LazySeq(null,(function (){
var s__57381__$1 = s__57381;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57381__$1);
if(temp__5735__auto____$3){
var s__57381__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57381__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57381__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57383 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57382 = (0);
while(true){
if((i__57382 < size__4528__auto__)){
var map__57384 = cljs.core._nth(c__4527__auto__,i__57382);
var map__57384__$1 = (((((!((map__57384 == null))))?(((((map__57384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57384):map__57384);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57384__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57384__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57384__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57383,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57382,map__57384,map__57384__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57383,s__57381__$2,temp__5735__auto____$3,map__57378,map__57378__$1,block__$1,uid__$1,parents,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57382,map__57384,map__57384__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57383,s__57381__$2,temp__5735__auto____$3,map__57378,map__57378__$1,block__$1,uid__$1,parents,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57414 = (i__57382 + (1));
i__57382 = G__57414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57383),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364_$_iter__57380(cljs.core.chunk_rest(s__57381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57383),null);
}
} else {
var map__57386 = cljs.core.first(s__57381__$2);
var map__57386__$1 = (((((!((map__57386 == null))))?(((((map__57386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57386):map__57386);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57386__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57386__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57386__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57386,map__57386__$1,title__$1,string,uid__$2,s__57381__$2,temp__5735__auto____$3,map__57378,map__57378__$1,block__$1,uid__$1,parents,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__57386,map__57386__$1,title__$1,string,uid__$2,s__57381__$2,temp__5735__auto____$3,map__57378,map__57378__$1,block__$1,uid__$1,parents,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364_$_iter__57380(cljs.core.rest(s__57381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__57378,map__57378__$1,block__$1,uid__$1,parents,s__57365__$2,temp__5735__auto____$2,vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330_$_iter__57364(cljs.core.rest(s__57365__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57361,group_title,group,s__57331__$2,temp__5735__auto____$1,vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57262_$_iter__57330(cljs.core.rest(s__57331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57327,linked_or_unlinked,refs,s__57263__$2,temp__5735__auto__,map__57248,map__57248__$1,title,is_shortcut_QMARK_,children,uid,map__57249,map__57249__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__57262(cljs.core.rest(s__57263__$2)));
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
var map__57388 = athens.db.get_node_document(ident);
var map__57388__$1 = (((((!((map__57388 == null))))?(((((map__57388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57388):map__57388);
var node = map__57388__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57388__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57388__$1,new cljs.core.Keyword("node","title","node/title",628940777));
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
