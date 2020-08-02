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
var G__58590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58590) : re_frame.core.dispatch.call(null,G__58590));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58592 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58592,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58592,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58592,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58591){if((e58591 instanceof Object)){
var _ = e58591;
return false;
} else {
throw e58591;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
var G__58595_58743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58595_58743) : re_frame.core.dispatch.call(null,G__58595_58743));

var G__58596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58596) : re_frame.core.dispatch.call(null,G__58596));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58597 = block;
var map__58597__$1 = (((((!((map__58597 == null))))?(((((map__58597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58597):map__58597);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__58598 = cljs.core.deref(state);
var map__58598__$1 = (((((!((map__58598 == null))))?(((((map__58598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58598):map__58598);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58601 = e.target.value;
var G__58602 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58601,G__58602) : athens.views.node_page.db_handler.call(null,G__58601,G__58602));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58603) : re_frame.core.dispatch.call(null,G__58603));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58604) : re_frame.core.dispatch.call(null,G__58604));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

var G__58605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58605) : re_frame.core.dispatch.call(null,G__58605));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58606(s__58607){
return (new cljs.core.LazySeq(null,(function (){
var s__58607__$1 = s__58607;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58607__$1);
if(temp__5735__auto__){
var s__58607__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58607__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58607__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58609 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58608 = (0);
while(true){
if((i__58608 < size__4581__auto__)){
var map__58610 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58608);
var map__58610__$1 = (((((!((map__58610 == null))))?(((((map__58610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58610):map__58610);
var child = map__58610__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58609,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58744 = (i__58608 + (1));
i__58608 = G__58744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58609),athens$views$node_page$node_page_el_$_iter__58606(cljs.core.chunk_rest(s__58607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58609),null);
}
} else {
var map__58612 = cljs.core.first(s__58607__$2);
var map__58612__$1 = (((((!((map__58612 == null))))?(((((map__58612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58612):map__58612);
var child = map__58612__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58606(cljs.core.rest(s__58607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58614(s__58615){
return (new cljs.core.LazySeq(null,(function (){
var s__58615__$1 = s__58615;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58615__$1);
if(temp__5735__auto__){
var s__58615__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58615__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58615__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58617 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58616 = (0);
while(true){
if((i__58616 < size__4581__auto__)){
var vec__58618 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58616);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58618,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58618,(1),null);
cljs.core.chunk_append(b__58617,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58616,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621(s__58622){
return (new cljs.core.LazySeq(null,((function (i__58616,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58622__$1 = s__58622;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58622__$1);
if(temp__5735__auto____$1){
var s__58622__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58622__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58622__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58624 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58623 = (0);
while(true){
if((i__58623 < size__4581__auto____$1)){
var vec__58625 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58623);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58625,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58625,(1),null);
cljs.core.chunk_append(b__58624,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58623,i__58616,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58623,i__58616,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58623,i__58616,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628(s__58629){
return (new cljs.core.LazySeq(null,((function (i__58623,i__58616,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58629__$1 = s__58629;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58629__$1);
if(temp__5735__auto____$2){
var s__58629__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58629__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58629__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58631 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58630 = (0);
while(true){
if((i__58630 < size__4581__auto____$2)){
var map__58632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58630);
var map__58632__$1 = (((((!((map__58632 == null))))?(((((map__58632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58632):map__58632);
var block__$1 = map__58632__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58631,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58630,i__58623,i__58616,map__58632,map__58632__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58631,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628_$_iter__58634(s__58635){
return (new cljs.core.LazySeq(null,((function (i__58630,i__58623,i__58616,map__58632,map__58632__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58631,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58635__$1 = s__58635;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58635__$1);
if(temp__5735__auto____$3){
var s__58635__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58635__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58635__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58637 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58636 = (0);
while(true){
if((i__58636 < size__4581__auto____$3)){
var map__58638 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58636);
var map__58638__$1 = (((((!((map__58638 == null))))?(((((map__58638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58638):map__58638);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58637,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58636,i__58630,i__58623,i__58616,map__58638,map__58638__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58637,s__58635__$2,temp__5735__auto____$3,map__58632,map__58632__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58631,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58636,i__58630,i__58623,i__58616,map__58638,map__58638__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58637,s__58635__$2,temp__5735__auto____$3,map__58632,map__58632__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58631,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58745 = (i__58636 + (1));
i__58636 = G__58745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58637),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628_$_iter__58634(cljs.core.chunk_rest(s__58635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58637),null);
}
} else {
var map__58640 = cljs.core.first(s__58635__$2);
var map__58640__$1 = (((((!((map__58640 == null))))?(((((map__58640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58640):map__58640);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58630,i__58623,i__58616,map__58640,map__58640__$1,title__$1,string,uid__$2,s__58635__$2,temp__5735__auto____$3,map__58632,map__58632__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58631,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58630,i__58623,i__58616,map__58640,map__58640__$1,title__$1,string,uid__$2,s__58635__$2,temp__5735__auto____$3,map__58632,map__58632__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58631,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628_$_iter__58634(cljs.core.rest(s__58635__$2)));
}
} else {
return null;
}
break;
}
});})(i__58630,i__58623,i__58616,map__58632,map__58632__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58631,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58630,i__58623,i__58616,map__58632,map__58632__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58631,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58746 = (i__58630 + (1));
i__58630 = G__58746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58631),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628(cljs.core.chunk_rest(s__58629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58631),null);
}
} else {
var map__58642 = cljs.core.first(s__58629__$2);
var map__58642__$1 = (((((!((map__58642 == null))))?(((((map__58642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58642):map__58642);
var block__$1 = map__58642__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58623,i__58616,map__58642,map__58642__$1,block__$1,uid__$1,parents,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628_$_iter__58644(s__58645){
return (new cljs.core.LazySeq(null,((function (i__58623,i__58616,map__58642,map__58642__$1,block__$1,uid__$1,parents,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
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
cljs.core.chunk_append(b__58647,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58646,i__58623,i__58616,map__58648,map__58648__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58647,s__58645__$2,temp__5735__auto____$3,map__58642,map__58642__$1,block__$1,uid__$1,parents,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58646,i__58623,i__58616,map__58648,map__58648__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58647,s__58645__$2,temp__5735__auto____$3,map__58642,map__58642__$1,block__$1,uid__$1,parents,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58747 = (i__58646 + (1));
i__58646 = G__58747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58647),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628_$_iter__58644(cljs.core.chunk_rest(s__58645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58647),null);
}
} else {
var map__58650 = cljs.core.first(s__58645__$2);
var map__58650__$1 = (((((!((map__58650 == null))))?(((((map__58650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58650):map__58650);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58623,i__58616,map__58650,map__58650__$1,title__$1,string,uid__$2,s__58645__$2,temp__5735__auto____$3,map__58642,map__58642__$1,block__$1,uid__$1,parents,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58623,i__58616,map__58650,map__58650__$1,title__$1,string,uid__$2,s__58645__$2,temp__5735__auto____$3,map__58642,map__58642__$1,block__$1,uid__$1,parents,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628_$_iter__58644(cljs.core.rest(s__58645__$2)));
}
} else {
return null;
}
break;
}
});})(i__58623,i__58616,map__58642,map__58642__$1,block__$1,uid__$1,parents,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58623,i__58616,map__58642,map__58642__$1,block__$1,uid__$1,parents,s__58629__$2,temp__5735__auto____$2,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58628(cljs.core.rest(s__58629__$2)));
}
} else {
return null;
}
break;
}
});})(i__58623,i__58616,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58623,i__58616,vec__58625,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58624,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58748 = (i__58623 + (1));
i__58623 = G__58748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58624),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621(cljs.core.chunk_rest(s__58622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58624),null);
}
} else {
var vec__58652 = cljs.core.first(s__58622__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58652,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58652,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58616,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58616,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58616,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655(s__58656){
return (new cljs.core.LazySeq(null,((function (i__58616,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58656__$1 = s__58656;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58656__$1);
if(temp__5735__auto____$2){
var s__58656__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58656__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58656__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58658 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58657 = (0);
while(true){
if((i__58657 < size__4581__auto____$1)){
var map__58659 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58657);
var map__58659__$1 = (((((!((map__58659 == null))))?(((((map__58659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58659):map__58659);
var block__$1 = map__58659__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58658,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58657,i__58616,map__58659,map__58659__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58658,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655_$_iter__58661(s__58662){
return (new cljs.core.LazySeq(null,((function (i__58657,i__58616,map__58659,map__58659__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58658,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58662__$1 = s__58662;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58662__$1);
if(temp__5735__auto____$3){
var s__58662__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58662__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58662__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58664 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58663 = (0);
while(true){
if((i__58663 < size__4581__auto____$2)){
var map__58665 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58663);
var map__58665__$1 = (((((!((map__58665 == null))))?(((((map__58665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58665):map__58665);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58664,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58663,i__58657,i__58616,map__58665,map__58665__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58664,s__58662__$2,temp__5735__auto____$3,map__58659,map__58659__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58658,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58663,i__58657,i__58616,map__58665,map__58665__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58664,s__58662__$2,temp__5735__auto____$3,map__58659,map__58659__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58658,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58749 = (i__58663 + (1));
i__58663 = G__58749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58664),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655_$_iter__58661(cljs.core.chunk_rest(s__58662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58664),null);
}
} else {
var map__58667 = cljs.core.first(s__58662__$2);
var map__58667__$1 = (((((!((map__58667 == null))))?(((((map__58667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58667):map__58667);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58667__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58667__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58667__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58657,i__58616,map__58667,map__58667__$1,title__$1,string,uid__$2,s__58662__$2,temp__5735__auto____$3,map__58659,map__58659__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58658,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58657,i__58616,map__58667,map__58667__$1,title__$1,string,uid__$2,s__58662__$2,temp__5735__auto____$3,map__58659,map__58659__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58658,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655_$_iter__58661(cljs.core.rest(s__58662__$2)));
}
} else {
return null;
}
break;
}
});})(i__58657,i__58616,map__58659,map__58659__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58658,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58657,i__58616,map__58659,map__58659__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58658,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58750 = (i__58657 + (1));
i__58657 = G__58750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58658),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655(cljs.core.chunk_rest(s__58656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58658),null);
}
} else {
var map__58669 = cljs.core.first(s__58656__$2);
var map__58669__$1 = (((((!((map__58669 == null))))?(((((map__58669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58669):map__58669);
var block__$1 = map__58669__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58616,map__58669,map__58669__$1,block__$1,uid__$1,parents,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655_$_iter__58671(s__58672){
return (new cljs.core.LazySeq(null,((function (i__58616,map__58669,map__58669__$1,block__$1,uid__$1,parents,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58672__$1 = s__58672;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58672__$1);
if(temp__5735__auto____$3){
var s__58672__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58672__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58672__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58674 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58673 = (0);
while(true){
if((i__58673 < size__4581__auto____$1)){
var map__58675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58673);
var map__58675__$1 = (((((!((map__58675 == null))))?(((((map__58675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58675):map__58675);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58674,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58673,i__58616,map__58675,map__58675__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$3,map__58669,map__58669__$1,block__$1,uid__$1,parents,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58673,i__58616,map__58675,map__58675__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58674,s__58672__$2,temp__5735__auto____$3,map__58669,map__58669__$1,block__$1,uid__$1,parents,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58751 = (i__58673 + (1));
i__58673 = G__58751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58674),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655_$_iter__58671(cljs.core.chunk_rest(s__58672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58674),null);
}
} else {
var map__58677 = cljs.core.first(s__58672__$2);
var map__58677__$1 = (((((!((map__58677 == null))))?(((((map__58677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58677):map__58677);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58616,map__58677,map__58677__$1,title__$1,string,uid__$2,s__58672__$2,temp__5735__auto____$3,map__58669,map__58669__$1,block__$1,uid__$1,parents,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58616,map__58677,map__58677__$1,title__$1,string,uid__$2,s__58672__$2,temp__5735__auto____$3,map__58669,map__58669__$1,block__$1,uid__$1,parents,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655_$_iter__58671(cljs.core.rest(s__58672__$2)));
}
} else {
return null;
}
break;
}
});})(i__58616,map__58669,map__58669__$1,block__$1,uid__$1,parents,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58616,map__58669,map__58669__$1,block__$1,uid__$1,parents,s__58656__$2,temp__5735__auto____$2,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621_$_iter__58655(cljs.core.rest(s__58656__$2)));
}
} else {
return null;
}
break;
}
});})(i__58616,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58616,vec__58652,group_title,group,s__58622__$2,temp__5735__auto____$1,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58621(cljs.core.rest(s__58622__$2)));
}
} else {
return null;
}
break;
}
});})(i__58616,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58616,vec__58618,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58617,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58752 = (i__58616 + (1));
i__58616 = G__58752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58617),athens$views$node_page$node_page_el_$_iter__58614(cljs.core.chunk_rest(s__58615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58617),null);
}
} else {
var vec__58679 = cljs.core.first(s__58615__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58679,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58679,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682(s__58683){
return (new cljs.core.LazySeq(null,(function (){
var s__58683__$1 = s__58683;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58683__$1);
if(temp__5735__auto____$1){
var s__58683__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58683__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58683__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58685 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58684 = (0);
while(true){
if((i__58684 < size__4581__auto__)){
var vec__58686 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58684);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58686,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58686,(1),null);
cljs.core.chunk_append(b__58685,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58684,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58684,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58684,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689(s__58690){
return (new cljs.core.LazySeq(null,((function (i__58684,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58690__$1 = s__58690;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58690__$1);
if(temp__5735__auto____$2){
var s__58690__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58690__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58690__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58692 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58691 = (0);
while(true){
if((i__58691 < size__4581__auto____$1)){
var map__58693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58691);
var map__58693__$1 = (((((!((map__58693 == null))))?(((((map__58693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58693):map__58693);
var block__$1 = map__58693__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58692,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58691,i__58684,map__58693,map__58693__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689_$_iter__58695(s__58696){
return (new cljs.core.LazySeq(null,((function (i__58691,i__58684,map__58693,map__58693__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58696__$1 = s__58696;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58696__$1);
if(temp__5735__auto____$3){
var s__58696__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58696__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58696__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58698 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58697 = (0);
while(true){
if((i__58697 < size__4581__auto____$2)){
var map__58699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58697);
var map__58699__$1 = (((((!((map__58699 == null))))?(((((map__58699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58699):map__58699);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58698,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58697,i__58691,i__58684,map__58699,map__58699__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58698,s__58696__$2,temp__5735__auto____$3,map__58693,map__58693__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58697,i__58691,i__58684,map__58699,map__58699__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58698,s__58696__$2,temp__5735__auto____$3,map__58693,map__58693__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58753 = (i__58697 + (1));
i__58697 = G__58753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58698),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689_$_iter__58695(cljs.core.chunk_rest(s__58696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58698),null);
}
} else {
var map__58701 = cljs.core.first(s__58696__$2);
var map__58701__$1 = (((((!((map__58701 == null))))?(((((map__58701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58701):map__58701);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58701__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58701__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58701__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58691,i__58684,map__58701,map__58701__$1,title__$1,string,uid__$2,s__58696__$2,temp__5735__auto____$3,map__58693,map__58693__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58691,i__58684,map__58701,map__58701__$1,title__$1,string,uid__$2,s__58696__$2,temp__5735__auto____$3,map__58693,map__58693__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689_$_iter__58695(cljs.core.rest(s__58696__$2)));
}
} else {
return null;
}
break;
}
});})(i__58691,i__58684,map__58693,map__58693__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58691,i__58684,map__58693,map__58693__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58754 = (i__58691 + (1));
i__58691 = G__58754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58692),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689(cljs.core.chunk_rest(s__58690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58692),null);
}
} else {
var map__58703 = cljs.core.first(s__58690__$2);
var map__58703__$1 = (((((!((map__58703 == null))))?(((((map__58703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58703):map__58703);
var block__$1 = map__58703__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58684,map__58703,map__58703__$1,block__$1,uid__$1,parents,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689_$_iter__58705(s__58706){
return (new cljs.core.LazySeq(null,((function (i__58684,map__58703,map__58703__$1,block__$1,uid__$1,parents,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
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
cljs.core.chunk_append(b__58708,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58707,i__58684,map__58709,map__58709__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58708,s__58706__$2,temp__5735__auto____$3,map__58703,map__58703__$1,block__$1,uid__$1,parents,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58707,i__58684,map__58709,map__58709__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58708,s__58706__$2,temp__5735__auto____$3,map__58703,map__58703__$1,block__$1,uid__$1,parents,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58755 = (i__58707 + (1));
i__58707 = G__58755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58708),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689_$_iter__58705(cljs.core.chunk_rest(s__58706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58708),null);
}
} else {
var map__58711 = cljs.core.first(s__58706__$2);
var map__58711__$1 = (((((!((map__58711 == null))))?(((((map__58711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58711):map__58711);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58684,map__58711,map__58711__$1,title__$1,string,uid__$2,s__58706__$2,temp__5735__auto____$3,map__58703,map__58703__$1,block__$1,uid__$1,parents,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58684,map__58711,map__58711__$1,title__$1,string,uid__$2,s__58706__$2,temp__5735__auto____$3,map__58703,map__58703__$1,block__$1,uid__$1,parents,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689_$_iter__58705(cljs.core.rest(s__58706__$2)));
}
} else {
return null;
}
break;
}
});})(i__58684,map__58703,map__58703__$1,block__$1,uid__$1,parents,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58684,map__58703,map__58703__$1,block__$1,uid__$1,parents,s__58690__$2,temp__5735__auto____$2,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58689(cljs.core.rest(s__58690__$2)));
}
} else {
return null;
}
break;
}
});})(i__58684,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58684,vec__58686,group_title,group,c__4580__auto__,size__4581__auto__,b__58685,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58756 = (i__58684 + (1));
i__58684 = G__58756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58685),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682(cljs.core.chunk_rest(s__58683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58685),null);
}
} else {
var vec__58713 = cljs.core.first(s__58683__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58713,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58713,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716(s__58717){
return (new cljs.core.LazySeq(null,(function (){
var s__58717__$1 = s__58717;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58717__$1);
if(temp__5735__auto____$2){
var s__58717__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58717__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58717__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58719 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58718 = (0);
while(true){
if((i__58718 < size__4581__auto__)){
var map__58720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58718);
var map__58720__$1 = (((((!((map__58720 == null))))?(((((map__58720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58720):map__58720);
var block__$1 = map__58720__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58719,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58718,map__58720,map__58720__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58719,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716_$_iter__58722(s__58723){
return (new cljs.core.LazySeq(null,((function (i__58718,map__58720,map__58720__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58719,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
var s__58723__$1 = s__58723;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58723__$1);
if(temp__5735__auto____$3){
var s__58723__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58723__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58723__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58725 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58724 = (0);
while(true){
if((i__58724 < size__4581__auto____$1)){
var map__58726 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58724);
var map__58726__$1 = (((((!((map__58726 == null))))?(((((map__58726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58726):map__58726);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58725,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58724,i__58718,map__58726,map__58726__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58725,s__58723__$2,temp__5735__auto____$3,map__58720,map__58720__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58719,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58724,i__58718,map__58726,map__58726__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58725,s__58723__$2,temp__5735__auto____$3,map__58720,map__58720__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58719,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58757 = (i__58724 + (1));
i__58724 = G__58757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58725),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716_$_iter__58722(cljs.core.chunk_rest(s__58723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58725),null);
}
} else {
var map__58728 = cljs.core.first(s__58723__$2);
var map__58728__$1 = (((((!((map__58728 == null))))?(((((map__58728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58728):map__58728);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58718,map__58728,map__58728__$1,title__$1,string,uid__$2,s__58723__$2,temp__5735__auto____$3,map__58720,map__58720__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58719,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58718,map__58728,map__58728__$1,title__$1,string,uid__$2,s__58723__$2,temp__5735__auto____$3,map__58720,map__58720__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58719,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716_$_iter__58722(cljs.core.rest(s__58723__$2)));
}
} else {
return null;
}
break;
}
});})(i__58718,map__58720,map__58720__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58719,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
,null,null));
});})(i__58718,map__58720,map__58720__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58719,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58758 = (i__58718 + (1));
i__58718 = G__58758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58719),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716(cljs.core.chunk_rest(s__58717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58719),null);
}
} else {
var map__58730 = cljs.core.first(s__58717__$2);
var map__58730__$1 = (((((!((map__58730 == null))))?(((((map__58730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58730):map__58730);
var block__$1 = map__58730__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58730,map__58730__$1,block__$1,uid__$1,parents,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716_$_iter__58732(s__58733){
return (new cljs.core.LazySeq(null,(function (){
var s__58733__$1 = s__58733;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58733__$1);
if(temp__5735__auto____$3){
var s__58733__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58733__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58733__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58735 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58734 = (0);
while(true){
if((i__58734 < size__4581__auto__)){
var map__58736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58734);
var map__58736__$1 = (((((!((map__58736 == null))))?(((((map__58736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58736):map__58736);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58735,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58734,map__58736,map__58736__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58735,s__58733__$2,temp__5735__auto____$3,map__58730,map__58730__$1,block__$1,uid__$1,parents,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58734,map__58736,map__58736__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58735,s__58733__$2,temp__5735__auto____$3,map__58730,map__58730__$1,block__$1,uid__$1,parents,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58759 = (i__58734 + (1));
i__58734 = G__58759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58735),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716_$_iter__58732(cljs.core.chunk_rest(s__58733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58735),null);
}
} else {
var map__58738 = cljs.core.first(s__58733__$2);
var map__58738__$1 = (((((!((map__58738 == null))))?(((((map__58738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58738):map__58738);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58738,map__58738__$1,title__$1,string,uid__$2,s__58733__$2,temp__5735__auto____$3,map__58730,map__58730__$1,block__$1,uid__$1,parents,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58738,map__58738__$1,title__$1,string,uid__$2,s__58733__$2,temp__5735__auto____$3,map__58730,map__58730__$1,block__$1,uid__$1,parents,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716_$_iter__58732(cljs.core.rest(s__58733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58730,map__58730__$1,block__$1,uid__$1,parents,s__58717__$2,temp__5735__auto____$2,vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682_$_iter__58716(cljs.core.rest(s__58717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58713,group_title,group,s__58683__$2,temp__5735__auto____$1,vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58614_$_iter__58682(cljs.core.rest(s__58683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58679,linked_or_unlinked,refs,s__58615__$2,temp__5735__auto__,map__58597,map__58597__$1,title,is_shortcut_QMARK_,children,uid,map__58598,map__58598__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58614(cljs.core.rest(s__58615__$2)));
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
var map__58740 = athens.db.get_node_document(ident);
var map__58740__$1 = (((((!((map__58740 == null))))?(((((map__58740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58740):map__58740);
var node = map__58740__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58742) : re_frame.core.subscribe.call(null,G__58742));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
