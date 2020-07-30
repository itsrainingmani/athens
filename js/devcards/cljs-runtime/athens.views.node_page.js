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
var G__58591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58591) : re_frame.core.dispatch.call(null,G__58591));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
var G__58592_58740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58592_58740) : re_frame.core.dispatch.call(null,G__58592_58740));

var G__58593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58593) : re_frame.core.dispatch.call(null,G__58593));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58594 = block;
var map__58594__$1 = (((((!((map__58594 == null))))?(((((map__58594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58594):map__58594);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__58595 = cljs.core.deref(state);
var map__58595__$1 = (((((!((map__58595 == null))))?(((((map__58595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58595):map__58595);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58598 = e.target.value;
var G__58599 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58598,G__58599) : athens.views.node_page.db_handler.call(null,G__58598,G__58599));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58600) : re_frame.core.dispatch.call(null,G__58600));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58601) : re_frame.core.dispatch.call(null,G__58601));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

var G__58602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58602) : re_frame.core.dispatch.call(null,G__58602));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render((cljs.core.truth_(timeline_page_QMARK_)?athens.util.custom_format(uid):title),uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58603(s__58604){
return (new cljs.core.LazySeq(null,(function (){
var s__58604__$1 = s__58604;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58604__$1);
if(temp__5735__auto__){
var s__58604__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58604__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58604__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58606 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58605 = (0);
while(true){
if((i__58605 < size__4581__auto__)){
var map__58607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58605);
var map__58607__$1 = (((((!((map__58607 == null))))?(((((map__58607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58607):map__58607);
var child = map__58607__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58606,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58741 = (i__58605 + (1));
i__58605 = G__58741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58606),athens$views$node_page$node_page_el_$_iter__58603(cljs.core.chunk_rest(s__58604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58606),null);
}
} else {
var map__58609 = cljs.core.first(s__58604__$2);
var map__58609__$1 = (((((!((map__58609 == null))))?(((((map__58609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58609):map__58609);
var child = map__58609__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58609__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58603(cljs.core.rest(s__58604__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58611(s__58612){
return (new cljs.core.LazySeq(null,(function (){
var s__58612__$1 = s__58612;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58612__$1);
if(temp__5735__auto__){
var s__58612__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58612__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58612__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58614 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58613 = (0);
while(true){
if((i__58613 < size__4581__auto__)){
var vec__58615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58613);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58615,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58615,(1),null);
cljs.core.chunk_append(b__58614,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58613,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618(s__58619){
return (new cljs.core.LazySeq(null,((function (i__58613,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58619__$1 = s__58619;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58619__$1);
if(temp__5735__auto____$1){
var s__58619__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58619__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58619__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58621 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58620 = (0);
while(true){
if((i__58620 < size__4581__auto____$1)){
var vec__58622 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58620);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58622,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58622,(1),null);
cljs.core.chunk_append(b__58621,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58620,i__58613,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58620,i__58613,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58620,i__58613,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625(s__58626){
return (new cljs.core.LazySeq(null,((function (i__58620,i__58613,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58626__$1 = s__58626;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58626__$1);
if(temp__5735__auto____$2){
var s__58626__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58626__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58626__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58628 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58627 = (0);
while(true){
if((i__58627 < size__4581__auto____$2)){
var map__58629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58627);
var map__58629__$1 = (((((!((map__58629 == null))))?(((((map__58629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58629):map__58629);
var block__$1 = map__58629__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58628,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58627,i__58620,i__58613,map__58629,map__58629__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58628,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625_$_iter__58631(s__58632){
return (new cljs.core.LazySeq(null,((function (i__58627,i__58620,i__58613,map__58629,map__58629__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58628,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58632__$1 = s__58632;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58632__$1);
if(temp__5735__auto____$3){
var s__58632__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58632__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58632__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58634 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58633 = (0);
while(true){
if((i__58633 < size__4581__auto____$3)){
var map__58635 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58633);
var map__58635__$1 = (((((!((map__58635 == null))))?(((((map__58635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58635):map__58635);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58634,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58633,i__58627,i__58620,i__58613,map__58635,map__58635__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58634,s__58632__$2,temp__5735__auto____$3,map__58629,map__58629__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58628,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58633,i__58627,i__58620,i__58613,map__58635,map__58635__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58634,s__58632__$2,temp__5735__auto____$3,map__58629,map__58629__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58628,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58742 = (i__58633 + (1));
i__58633 = G__58742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58634),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625_$_iter__58631(cljs.core.chunk_rest(s__58632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58634),null);
}
} else {
var map__58637 = cljs.core.first(s__58632__$2);
var map__58637__$1 = (((((!((map__58637 == null))))?(((((map__58637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58637):map__58637);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58627,i__58620,i__58613,map__58637,map__58637__$1,title__$1,string,uid__$2,s__58632__$2,temp__5735__auto____$3,map__58629,map__58629__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58628,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58627,i__58620,i__58613,map__58637,map__58637__$1,title__$1,string,uid__$2,s__58632__$2,temp__5735__auto____$3,map__58629,map__58629__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58628,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625_$_iter__58631(cljs.core.rest(s__58632__$2)));
}
} else {
return null;
}
break;
}
});})(i__58627,i__58620,i__58613,map__58629,map__58629__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58628,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58627,i__58620,i__58613,map__58629,map__58629__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58628,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58743 = (i__58627 + (1));
i__58627 = G__58743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58628),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625(cljs.core.chunk_rest(s__58626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58628),null);
}
} else {
var map__58639 = cljs.core.first(s__58626__$2);
var map__58639__$1 = (((((!((map__58639 == null))))?(((((map__58639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58639):map__58639);
var block__$1 = map__58639__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58620,i__58613,map__58639,map__58639__$1,block__$1,uid__$1,parents,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625_$_iter__58641(s__58642){
return (new cljs.core.LazySeq(null,((function (i__58620,i__58613,map__58639,map__58639__$1,block__$1,uid__$1,parents,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58642__$1 = s__58642;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58642__$1);
if(temp__5735__auto____$3){
var s__58642__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58642__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58642__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58644 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58643 = (0);
while(true){
if((i__58643 < size__4581__auto____$2)){
var map__58645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58643);
var map__58645__$1 = (((((!((map__58645 == null))))?(((((map__58645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58645):map__58645);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58644,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58643,i__58620,i__58613,map__58645,map__58645__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58644,s__58642__$2,temp__5735__auto____$3,map__58639,map__58639__$1,block__$1,uid__$1,parents,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58643,i__58620,i__58613,map__58645,map__58645__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58644,s__58642__$2,temp__5735__auto____$3,map__58639,map__58639__$1,block__$1,uid__$1,parents,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58744 = (i__58643 + (1));
i__58643 = G__58744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58644),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625_$_iter__58641(cljs.core.chunk_rest(s__58642__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58644),null);
}
} else {
var map__58647 = cljs.core.first(s__58642__$2);
var map__58647__$1 = (((((!((map__58647 == null))))?(((((map__58647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58647):map__58647);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58620,i__58613,map__58647,map__58647__$1,title__$1,string,uid__$2,s__58642__$2,temp__5735__auto____$3,map__58639,map__58639__$1,block__$1,uid__$1,parents,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58620,i__58613,map__58647,map__58647__$1,title__$1,string,uid__$2,s__58642__$2,temp__5735__auto____$3,map__58639,map__58639__$1,block__$1,uid__$1,parents,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625_$_iter__58641(cljs.core.rest(s__58642__$2)));
}
} else {
return null;
}
break;
}
});})(i__58620,i__58613,map__58639,map__58639__$1,block__$1,uid__$1,parents,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58620,i__58613,map__58639,map__58639__$1,block__$1,uid__$1,parents,s__58626__$2,temp__5735__auto____$2,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58625(cljs.core.rest(s__58626__$2)));
}
} else {
return null;
}
break;
}
});})(i__58620,i__58613,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58620,i__58613,vec__58622,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58621,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58745 = (i__58620 + (1));
i__58620 = G__58745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58621),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618(cljs.core.chunk_rest(s__58619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58621),null);
}
} else {
var vec__58649 = cljs.core.first(s__58619__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58649,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58649,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58613,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58613,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58613,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652(s__58653){
return (new cljs.core.LazySeq(null,((function (i__58613,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58653__$1 = s__58653;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58653__$1);
if(temp__5735__auto____$2){
var s__58653__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58653__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58653__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58655 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58654 = (0);
while(true){
if((i__58654 < size__4581__auto____$1)){
var map__58656 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58654);
var map__58656__$1 = (((((!((map__58656 == null))))?(((((map__58656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58656):map__58656);
var block__$1 = map__58656__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58655,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58654,i__58613,map__58656,map__58656__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58655,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652_$_iter__58658(s__58659){
return (new cljs.core.LazySeq(null,((function (i__58654,i__58613,map__58656,map__58656__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58655,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58659__$1 = s__58659;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58659__$1);
if(temp__5735__auto____$3){
var s__58659__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58659__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58659__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58661 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58660 = (0);
while(true){
if((i__58660 < size__4581__auto____$2)){
var map__58662 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58660);
var map__58662__$1 = (((((!((map__58662 == null))))?(((((map__58662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58662):map__58662);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58661,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58660,i__58654,i__58613,map__58662,map__58662__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58661,s__58659__$2,temp__5735__auto____$3,map__58656,map__58656__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58655,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58660,i__58654,i__58613,map__58662,map__58662__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58661,s__58659__$2,temp__5735__auto____$3,map__58656,map__58656__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58655,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58746 = (i__58660 + (1));
i__58660 = G__58746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58661),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652_$_iter__58658(cljs.core.chunk_rest(s__58659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58661),null);
}
} else {
var map__58664 = cljs.core.first(s__58659__$2);
var map__58664__$1 = (((((!((map__58664 == null))))?(((((map__58664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58664):map__58664);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58654,i__58613,map__58664,map__58664__$1,title__$1,string,uid__$2,s__58659__$2,temp__5735__auto____$3,map__58656,map__58656__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58655,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58654,i__58613,map__58664,map__58664__$1,title__$1,string,uid__$2,s__58659__$2,temp__5735__auto____$3,map__58656,map__58656__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58655,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652_$_iter__58658(cljs.core.rest(s__58659__$2)));
}
} else {
return null;
}
break;
}
});})(i__58654,i__58613,map__58656,map__58656__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58655,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58654,i__58613,map__58656,map__58656__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58655,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58747 = (i__58654 + (1));
i__58654 = G__58747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58655),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652(cljs.core.chunk_rest(s__58653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58655),null);
}
} else {
var map__58666 = cljs.core.first(s__58653__$2);
var map__58666__$1 = (((((!((map__58666 == null))))?(((((map__58666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58666):map__58666);
var block__$1 = map__58666__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58613,map__58666,map__58666__$1,block__$1,uid__$1,parents,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652_$_iter__58668(s__58669){
return (new cljs.core.LazySeq(null,((function (i__58613,map__58666,map__58666__$1,block__$1,uid__$1,parents,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58669__$1 = s__58669;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58669__$1);
if(temp__5735__auto____$3){
var s__58669__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58669__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58669__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58671 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58670 = (0);
while(true){
if((i__58670 < size__4581__auto____$1)){
var map__58672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58670);
var map__58672__$1 = (((((!((map__58672 == null))))?(((((map__58672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58672):map__58672);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58671,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58670,i__58613,map__58672,map__58672__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58671,s__58669__$2,temp__5735__auto____$3,map__58666,map__58666__$1,block__$1,uid__$1,parents,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58670,i__58613,map__58672,map__58672__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58671,s__58669__$2,temp__5735__auto____$3,map__58666,map__58666__$1,block__$1,uid__$1,parents,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58748 = (i__58670 + (1));
i__58670 = G__58748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58671),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652_$_iter__58668(cljs.core.chunk_rest(s__58669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58671),null);
}
} else {
var map__58674 = cljs.core.first(s__58669__$2);
var map__58674__$1 = (((((!((map__58674 == null))))?(((((map__58674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58674):map__58674);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58613,map__58674,map__58674__$1,title__$1,string,uid__$2,s__58669__$2,temp__5735__auto____$3,map__58666,map__58666__$1,block__$1,uid__$1,parents,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58613,map__58674,map__58674__$1,title__$1,string,uid__$2,s__58669__$2,temp__5735__auto____$3,map__58666,map__58666__$1,block__$1,uid__$1,parents,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652_$_iter__58668(cljs.core.rest(s__58669__$2)));
}
} else {
return null;
}
break;
}
});})(i__58613,map__58666,map__58666__$1,block__$1,uid__$1,parents,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58613,map__58666,map__58666__$1,block__$1,uid__$1,parents,s__58653__$2,temp__5735__auto____$2,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618_$_iter__58652(cljs.core.rest(s__58653__$2)));
}
} else {
return null;
}
break;
}
});})(i__58613,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58613,vec__58649,group_title,group,s__58619__$2,temp__5735__auto____$1,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58618(cljs.core.rest(s__58619__$2)));
}
} else {
return null;
}
break;
}
});})(i__58613,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58613,vec__58615,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58614,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58749 = (i__58613 + (1));
i__58613 = G__58749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58614),athens$views$node_page$node_page_el_$_iter__58611(cljs.core.chunk_rest(s__58612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58614),null);
}
} else {
var vec__58676 = cljs.core.first(s__58612__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58676,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58676,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679(s__58680){
return (new cljs.core.LazySeq(null,(function (){
var s__58680__$1 = s__58680;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58680__$1);
if(temp__5735__auto____$1){
var s__58680__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58680__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58680__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58682 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58681 = (0);
while(true){
if((i__58681 < size__4581__auto__)){
var vec__58683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58681);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58683,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58683,(1),null);
cljs.core.chunk_append(b__58682,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58681,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58681,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58681,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686(s__58687){
return (new cljs.core.LazySeq(null,((function (i__58681,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58687__$1 = s__58687;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58687__$1);
if(temp__5735__auto____$2){
var s__58687__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58687__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58687__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58689 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58688 = (0);
while(true){
if((i__58688 < size__4581__auto____$1)){
var map__58690 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58688);
var map__58690__$1 = (((((!((map__58690 == null))))?(((((map__58690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58690):map__58690);
var block__$1 = map__58690__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58689,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58688,i__58681,map__58690,map__58690__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58689,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686_$_iter__58692(s__58693){
return (new cljs.core.LazySeq(null,((function (i__58688,i__58681,map__58690,map__58690__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58689,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58693__$1 = s__58693;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58693__$1);
if(temp__5735__auto____$3){
var s__58693__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58693__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58693__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58695 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58694 = (0);
while(true){
if((i__58694 < size__4581__auto____$2)){
var map__58696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58694);
var map__58696__$1 = (((((!((map__58696 == null))))?(((((map__58696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58696):map__58696);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58695,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58694,i__58688,i__58681,map__58696,map__58696__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58695,s__58693__$2,temp__5735__auto____$3,map__58690,map__58690__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58689,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58694,i__58688,i__58681,map__58696,map__58696__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58695,s__58693__$2,temp__5735__auto____$3,map__58690,map__58690__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58689,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58750 = (i__58694 + (1));
i__58694 = G__58750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58695),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686_$_iter__58692(cljs.core.chunk_rest(s__58693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58695),null);
}
} else {
var map__58698 = cljs.core.first(s__58693__$2);
var map__58698__$1 = (((((!((map__58698 == null))))?(((((map__58698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58698):map__58698);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58688,i__58681,map__58698,map__58698__$1,title__$1,string,uid__$2,s__58693__$2,temp__5735__auto____$3,map__58690,map__58690__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58689,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58688,i__58681,map__58698,map__58698__$1,title__$1,string,uid__$2,s__58693__$2,temp__5735__auto____$3,map__58690,map__58690__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58689,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686_$_iter__58692(cljs.core.rest(s__58693__$2)));
}
} else {
return null;
}
break;
}
});})(i__58688,i__58681,map__58690,map__58690__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58689,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58688,i__58681,map__58690,map__58690__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58689,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58751 = (i__58688 + (1));
i__58688 = G__58751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58689),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686(cljs.core.chunk_rest(s__58687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58689),null);
}
} else {
var map__58700 = cljs.core.first(s__58687__$2);
var map__58700__$1 = (((((!((map__58700 == null))))?(((((map__58700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58700):map__58700);
var block__$1 = map__58700__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58681,map__58700,map__58700__$1,block__$1,uid__$1,parents,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686_$_iter__58702(s__58703){
return (new cljs.core.LazySeq(null,((function (i__58681,map__58700,map__58700__$1,block__$1,uid__$1,parents,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58703__$1 = s__58703;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58703__$1);
if(temp__5735__auto____$3){
var s__58703__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58703__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58703__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58705 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58704 = (0);
while(true){
if((i__58704 < size__4581__auto____$1)){
var map__58706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58704);
var map__58706__$1 = (((((!((map__58706 == null))))?(((((map__58706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58706):map__58706);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58705,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58704,i__58681,map__58706,map__58706__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58705,s__58703__$2,temp__5735__auto____$3,map__58700,map__58700__$1,block__$1,uid__$1,parents,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58704,i__58681,map__58706,map__58706__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58705,s__58703__$2,temp__5735__auto____$3,map__58700,map__58700__$1,block__$1,uid__$1,parents,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58752 = (i__58704 + (1));
i__58704 = G__58752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58705),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686_$_iter__58702(cljs.core.chunk_rest(s__58703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58705),null);
}
} else {
var map__58708 = cljs.core.first(s__58703__$2);
var map__58708__$1 = (((((!((map__58708 == null))))?(((((map__58708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58708):map__58708);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58681,map__58708,map__58708__$1,title__$1,string,uid__$2,s__58703__$2,temp__5735__auto____$3,map__58700,map__58700__$1,block__$1,uid__$1,parents,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58681,map__58708,map__58708__$1,title__$1,string,uid__$2,s__58703__$2,temp__5735__auto____$3,map__58700,map__58700__$1,block__$1,uid__$1,parents,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686_$_iter__58702(cljs.core.rest(s__58703__$2)));
}
} else {
return null;
}
break;
}
});})(i__58681,map__58700,map__58700__$1,block__$1,uid__$1,parents,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58681,map__58700,map__58700__$1,block__$1,uid__$1,parents,s__58687__$2,temp__5735__auto____$2,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58686(cljs.core.rest(s__58687__$2)));
}
} else {
return null;
}
break;
}
});})(i__58681,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58681,vec__58683,group_title,group,c__4580__auto__,size__4581__auto__,b__58682,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58753 = (i__58681 + (1));
i__58681 = G__58753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58682),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679(cljs.core.chunk_rest(s__58680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58682),null);
}
} else {
var vec__58710 = cljs.core.first(s__58680__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58710,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58710,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713(s__58714){
return (new cljs.core.LazySeq(null,(function (){
var s__58714__$1 = s__58714;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58714__$1);
if(temp__5735__auto____$2){
var s__58714__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58714__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58714__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58716 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58715 = (0);
while(true){
if((i__58715 < size__4581__auto__)){
var map__58717 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58715);
var map__58717__$1 = (((((!((map__58717 == null))))?(((((map__58717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58717):map__58717);
var block__$1 = map__58717__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58717__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58717__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58716,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58715,map__58717,map__58717__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58716,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713_$_iter__58719(s__58720){
return (new cljs.core.LazySeq(null,((function (i__58715,map__58717,map__58717__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58716,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
var s__58720__$1 = s__58720;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58720__$1);
if(temp__5735__auto____$3){
var s__58720__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58720__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58720__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58722 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58721 = (0);
while(true){
if((i__58721 < size__4581__auto____$1)){
var map__58723 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58721);
var map__58723__$1 = (((((!((map__58723 == null))))?(((((map__58723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58723):map__58723);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58723__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58723__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58723__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58722,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58721,i__58715,map__58723,map__58723__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58722,s__58720__$2,temp__5735__auto____$3,map__58717,map__58717__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58716,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58721,i__58715,map__58723,map__58723__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58722,s__58720__$2,temp__5735__auto____$3,map__58717,map__58717__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58716,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58754 = (i__58721 + (1));
i__58721 = G__58754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58722),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713_$_iter__58719(cljs.core.chunk_rest(s__58720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58722),null);
}
} else {
var map__58725 = cljs.core.first(s__58720__$2);
var map__58725__$1 = (((((!((map__58725 == null))))?(((((map__58725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58725):map__58725);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58725__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58725__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58725__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58715,map__58725,map__58725__$1,title__$1,string,uid__$2,s__58720__$2,temp__5735__auto____$3,map__58717,map__58717__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58716,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58715,map__58725,map__58725__$1,title__$1,string,uid__$2,s__58720__$2,temp__5735__auto____$3,map__58717,map__58717__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58716,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713_$_iter__58719(cljs.core.rest(s__58720__$2)));
}
} else {
return null;
}
break;
}
});})(i__58715,map__58717,map__58717__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58716,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
,null,null));
});})(i__58715,map__58717,map__58717__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58716,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58755 = (i__58715 + (1));
i__58715 = G__58755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58716),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713(cljs.core.chunk_rest(s__58714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58716),null);
}
} else {
var map__58727 = cljs.core.first(s__58714__$2);
var map__58727__$1 = (((((!((map__58727 == null))))?(((((map__58727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58727):map__58727);
var block__$1 = map__58727__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58727,map__58727__$1,block__$1,uid__$1,parents,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713_$_iter__58729(s__58730){
return (new cljs.core.LazySeq(null,(function (){
var s__58730__$1 = s__58730;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58730__$1);
if(temp__5735__auto____$3){
var s__58730__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58730__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58730__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58732 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58731 = (0);
while(true){
if((i__58731 < size__4581__auto__)){
var map__58733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58731);
var map__58733__$1 = (((((!((map__58733 == null))))?(((((map__58733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58733):map__58733);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58732,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58731,map__58733,map__58733__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58732,s__58730__$2,temp__5735__auto____$3,map__58727,map__58727__$1,block__$1,uid__$1,parents,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58731,map__58733,map__58733__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58732,s__58730__$2,temp__5735__auto____$3,map__58727,map__58727__$1,block__$1,uid__$1,parents,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58756 = (i__58731 + (1));
i__58731 = G__58756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58732),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713_$_iter__58729(cljs.core.chunk_rest(s__58730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58732),null);
}
} else {
var map__58735 = cljs.core.first(s__58730__$2);
var map__58735__$1 = (((((!((map__58735 == null))))?(((((map__58735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58735):map__58735);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58735__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58735__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58735__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58735,map__58735__$1,title__$1,string,uid__$2,s__58730__$2,temp__5735__auto____$3,map__58727,map__58727__$1,block__$1,uid__$1,parents,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58735,map__58735__$1,title__$1,string,uid__$2,s__58730__$2,temp__5735__auto____$3,map__58727,map__58727__$1,block__$1,uid__$1,parents,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713_$_iter__58729(cljs.core.rest(s__58730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58727,map__58727__$1,block__$1,uid__$1,parents,s__58714__$2,temp__5735__auto____$2,vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679_$_iter__58713(cljs.core.rest(s__58714__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58710,group_title,group,s__58680__$2,temp__5735__auto____$1,vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58611_$_iter__58679(cljs.core.rest(s__58680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58676,linked_or_unlinked,refs,s__58612__$2,temp__5735__auto__,map__58594,map__58594__$1,title,is_shortcut_QMARK_,children,uid,map__58595,map__58595__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58611(cljs.core.rest(s__58612__$2)));
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
var map__58737 = athens.db.get_node_document(ident);
var map__58737__$1 = (((((!((map__58737 == null))))?(((((map__58737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58737):map__58737);
var node = map__58737__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58739) : re_frame.core.subscribe.call(null,G__58739));
})());
var timeline_page_QMARK_ = athens.util.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
