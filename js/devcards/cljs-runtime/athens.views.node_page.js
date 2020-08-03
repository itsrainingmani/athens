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
var G__58608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58608) : re_frame.core.dispatch.call(null,G__58608));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58610 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58610,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58610,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58610,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58609){if((e58609 instanceof Object)){
var _ = e58609;
return false;
} else {
throw e58609;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
var G__58613_58761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58613_58761) : re_frame.core.dispatch.call(null,G__58613_58761));

var G__58614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58614) : re_frame.core.dispatch.call(null,G__58614));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null,new cljs.core.Keyword("lf","show","lf/show",-576708583),false,new cljs.core.Keyword("lf","x","lf/x",2099359651),null,new cljs.core.Keyword("lf","y","lf/y",-1757872454),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58615 = block;
var map__58615__$1 = (((((!((map__58615 == null))))?(((((map__58615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58615):map__58615);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__58616 = cljs.core.deref(state);
var map__58616__$1 = (((((!((map__58616 == null))))?(((((map__58616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58616):map__58616);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58619 = e.target.value;
var G__58620 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58619,G__58620) : athens.views.node_page.db_handler.call(null,G__58619,G__58620));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58621) : re_frame.core.dispatch.call(null,G__58621));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58622) : re_frame.core.dispatch.call(null,G__58622));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

var G__58623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58623) : re_frame.core.dispatch.call(null,G__58623));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58624(s__58625){
return (new cljs.core.LazySeq(null,(function (){
var s__58625__$1 = s__58625;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58625__$1);
if(temp__5735__auto__){
var s__58625__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58625__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58625__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58627 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58626 = (0);
while(true){
if((i__58626 < size__4581__auto__)){
var map__58628 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58626);
var map__58628__$1 = (((((!((map__58628 == null))))?(((((map__58628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58628):map__58628);
var child = map__58628__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58627,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58762 = (i__58626 + (1));
i__58626 = G__58762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58627),athens$views$node_page$node_page_el_$_iter__58624(cljs.core.chunk_rest(s__58625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58627),null);
}
} else {
var map__58630 = cljs.core.first(s__58625__$2);
var map__58630__$1 = (((((!((map__58630 == null))))?(((((map__58630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58630):map__58630);
var child = map__58630__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58624(cljs.core.rest(s__58625__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58632(s__58633){
return (new cljs.core.LazySeq(null,(function (){
var s__58633__$1 = s__58633;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58633__$1);
if(temp__5735__auto__){
var s__58633__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58633__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58633__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58635 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58634 = (0);
while(true){
if((i__58634 < size__4581__auto__)){
var vec__58636 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58634);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58636,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58636,(1),null);
cljs.core.chunk_append(b__58635,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58634,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("lf","show","lf/show",-576708583),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lf","show","lf/show",-576708583),true,new cljs.core.Keyword("lf","x","lf/x",2099359651),rect.left,new cljs.core.Keyword("lf","y","lf/y",-1757872454),rect.bottom], null));
}
});})(i__58634,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lf","x","lf/x",2099359651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lf","y","lf/y",-1757872454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filters.filters_el,uid,athens.views.node_page.items], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58634,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639(s__58640){
return (new cljs.core.LazySeq(null,((function (i__58634,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58640__$1 = s__58640;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58640__$1);
if(temp__5735__auto____$1){
var s__58640__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58640__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58640__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58642 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58641 = (0);
while(true){
if((i__58641 < size__4581__auto____$1)){
var vec__58643 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58641);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58643,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58643,(1),null);
cljs.core.chunk_append(b__58642,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58641,i__58634,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58641,i__58634,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58641,i__58634,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646(s__58647){
return (new cljs.core.LazySeq(null,((function (i__58641,i__58634,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58647__$1 = s__58647;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58647__$1);
if(temp__5735__auto____$2){
var s__58647__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58647__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58647__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58649 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58648 = (0);
while(true){
if((i__58648 < size__4581__auto____$2)){
var map__58650 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58648);
var map__58650__$1 = (((((!((map__58650 == null))))?(((((map__58650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58650):map__58650);
var block__$1 = map__58650__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58649,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58648,i__58641,i__58634,map__58650,map__58650__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646_$_iter__58652(s__58653){
return (new cljs.core.LazySeq(null,((function (i__58648,i__58641,i__58634,map__58650,map__58650__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58653__$1 = s__58653;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58653__$1);
if(temp__5735__auto____$3){
var s__58653__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58653__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58653__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58655 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58654 = (0);
while(true){
if((i__58654 < size__4581__auto____$3)){
var map__58656 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58654);
var map__58656__$1 = (((((!((map__58656 == null))))?(((((map__58656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58656):map__58656);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58655,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58654,i__58648,i__58641,i__58634,map__58656,map__58656__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58655,s__58653__$2,temp__5735__auto____$3,map__58650,map__58650__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58654,i__58648,i__58641,i__58634,map__58656,map__58656__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58655,s__58653__$2,temp__5735__auto____$3,map__58650,map__58650__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58763 = (i__58654 + (1));
i__58654 = G__58763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58655),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646_$_iter__58652(cljs.core.chunk_rest(s__58653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58655),null);
}
} else {
var map__58658 = cljs.core.first(s__58653__$2);
var map__58658__$1 = (((((!((map__58658 == null))))?(((((map__58658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58658):map__58658);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58648,i__58641,i__58634,map__58658,map__58658__$1,title__$1,string,uid__$2,s__58653__$2,temp__5735__auto____$3,map__58650,map__58650__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58648,i__58641,i__58634,map__58658,map__58658__$1,title__$1,string,uid__$2,s__58653__$2,temp__5735__auto____$3,map__58650,map__58650__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646_$_iter__58652(cljs.core.rest(s__58653__$2)));
}
} else {
return null;
}
break;
}
});})(i__58648,i__58641,i__58634,map__58650,map__58650__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58648,i__58641,i__58634,map__58650,map__58650__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58764 = (i__58648 + (1));
i__58648 = G__58764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58649),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646(cljs.core.chunk_rest(s__58647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58649),null);
}
} else {
var map__58660 = cljs.core.first(s__58647__$2);
var map__58660__$1 = (((((!((map__58660 == null))))?(((((map__58660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58660):map__58660);
var block__$1 = map__58660__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58641,i__58634,map__58660,map__58660__$1,block__$1,uid__$1,parents,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646_$_iter__58662(s__58663){
return (new cljs.core.LazySeq(null,((function (i__58641,i__58634,map__58660,map__58660__$1,block__$1,uid__$1,parents,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58663__$1 = s__58663;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58663__$1);
if(temp__5735__auto____$3){
var s__58663__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58663__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58663__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58665 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58664 = (0);
while(true){
if((i__58664 < size__4581__auto____$2)){
var map__58666 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58664);
var map__58666__$1 = (((((!((map__58666 == null))))?(((((map__58666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58666):map__58666);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58665,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58664,i__58641,i__58634,map__58666,map__58666__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58665,s__58663__$2,temp__5735__auto____$3,map__58660,map__58660__$1,block__$1,uid__$1,parents,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58664,i__58641,i__58634,map__58666,map__58666__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58665,s__58663__$2,temp__5735__auto____$3,map__58660,map__58660__$1,block__$1,uid__$1,parents,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58765 = (i__58664 + (1));
i__58664 = G__58765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58665),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646_$_iter__58662(cljs.core.chunk_rest(s__58663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58665),null);
}
} else {
var map__58668 = cljs.core.first(s__58663__$2);
var map__58668__$1 = (((((!((map__58668 == null))))?(((((map__58668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58668):map__58668);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58641,i__58634,map__58668,map__58668__$1,title__$1,string,uid__$2,s__58663__$2,temp__5735__auto____$3,map__58660,map__58660__$1,block__$1,uid__$1,parents,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58641,i__58634,map__58668,map__58668__$1,title__$1,string,uid__$2,s__58663__$2,temp__5735__auto____$3,map__58660,map__58660__$1,block__$1,uid__$1,parents,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646_$_iter__58662(cljs.core.rest(s__58663__$2)));
}
} else {
return null;
}
break;
}
});})(i__58641,i__58634,map__58660,map__58660__$1,block__$1,uid__$1,parents,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58641,i__58634,map__58660,map__58660__$1,block__$1,uid__$1,parents,s__58647__$2,temp__5735__auto____$2,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58646(cljs.core.rest(s__58647__$2)));
}
} else {
return null;
}
break;
}
});})(i__58641,i__58634,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58641,i__58634,vec__58643,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58642,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58766 = (i__58641 + (1));
i__58641 = G__58766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58642),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639(cljs.core.chunk_rest(s__58640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58642),null);
}
} else {
var vec__58670 = cljs.core.first(s__58640__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58670,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58670,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58634,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58634,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58634,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673(s__58674){
return (new cljs.core.LazySeq(null,((function (i__58634,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58674__$1 = s__58674;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58674__$1);
if(temp__5735__auto____$2){
var s__58674__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58674__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58674__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58676 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58675 = (0);
while(true){
if((i__58675 < size__4581__auto____$1)){
var map__58677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58675);
var map__58677__$1 = (((((!((map__58677 == null))))?(((((map__58677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58677):map__58677);
var block__$1 = map__58677__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58676,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58675,i__58634,map__58677,map__58677__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58676,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673_$_iter__58679(s__58680){
return (new cljs.core.LazySeq(null,((function (i__58675,i__58634,map__58677,map__58677__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58676,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58680__$1 = s__58680;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58680__$1);
if(temp__5735__auto____$3){
var s__58680__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58680__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58680__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58682 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58681 = (0);
while(true){
if((i__58681 < size__4581__auto____$2)){
var map__58683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58681);
var map__58683__$1 = (((((!((map__58683 == null))))?(((((map__58683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58683):map__58683);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58682,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58681,i__58675,i__58634,map__58683,map__58683__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58682,s__58680__$2,temp__5735__auto____$3,map__58677,map__58677__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58676,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58681,i__58675,i__58634,map__58683,map__58683__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58682,s__58680__$2,temp__5735__auto____$3,map__58677,map__58677__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58676,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58783 = (i__58681 + (1));
i__58681 = G__58783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58682),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673_$_iter__58679(cljs.core.chunk_rest(s__58680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58682),null);
}
} else {
var map__58685 = cljs.core.first(s__58680__$2);
var map__58685__$1 = (((((!((map__58685 == null))))?(((((map__58685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58685):map__58685);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58675,i__58634,map__58685,map__58685__$1,title__$1,string,uid__$2,s__58680__$2,temp__5735__auto____$3,map__58677,map__58677__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58676,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58675,i__58634,map__58685,map__58685__$1,title__$1,string,uid__$2,s__58680__$2,temp__5735__auto____$3,map__58677,map__58677__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58676,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673_$_iter__58679(cljs.core.rest(s__58680__$2)));
}
} else {
return null;
}
break;
}
});})(i__58675,i__58634,map__58677,map__58677__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58676,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58675,i__58634,map__58677,map__58677__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58676,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58786 = (i__58675 + (1));
i__58675 = G__58786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58676),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673(cljs.core.chunk_rest(s__58674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58676),null);
}
} else {
var map__58687 = cljs.core.first(s__58674__$2);
var map__58687__$1 = (((((!((map__58687 == null))))?(((((map__58687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58687):map__58687);
var block__$1 = map__58687__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58634,map__58687,map__58687__$1,block__$1,uid__$1,parents,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673_$_iter__58689(s__58690){
return (new cljs.core.LazySeq(null,((function (i__58634,map__58687,map__58687__$1,block__$1,uid__$1,parents,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58690__$1 = s__58690;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58690__$1);
if(temp__5735__auto____$3){
var s__58690__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58690__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58690__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58692 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58691 = (0);
while(true){
if((i__58691 < size__4581__auto____$1)){
var map__58693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58691);
var map__58693__$1 = (((((!((map__58693 == null))))?(((((map__58693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58693):map__58693);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58692,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58691,i__58634,map__58693,map__58693__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$3,map__58687,map__58687__$1,block__$1,uid__$1,parents,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58691,i__58634,map__58693,map__58693__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58692,s__58690__$2,temp__5735__auto____$3,map__58687,map__58687__$1,block__$1,uid__$1,parents,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58789 = (i__58691 + (1));
i__58691 = G__58789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58692),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673_$_iter__58689(cljs.core.chunk_rest(s__58690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58692),null);
}
} else {
var map__58695 = cljs.core.first(s__58690__$2);
var map__58695__$1 = (((((!((map__58695 == null))))?(((((map__58695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58695):map__58695);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58634,map__58695,map__58695__$1,title__$1,string,uid__$2,s__58690__$2,temp__5735__auto____$3,map__58687,map__58687__$1,block__$1,uid__$1,parents,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58634,map__58695,map__58695__$1,title__$1,string,uid__$2,s__58690__$2,temp__5735__auto____$3,map__58687,map__58687__$1,block__$1,uid__$1,parents,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673_$_iter__58689(cljs.core.rest(s__58690__$2)));
}
} else {
return null;
}
break;
}
});})(i__58634,map__58687,map__58687__$1,block__$1,uid__$1,parents,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58634,map__58687,map__58687__$1,block__$1,uid__$1,parents,s__58674__$2,temp__5735__auto____$2,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639_$_iter__58673(cljs.core.rest(s__58674__$2)));
}
} else {
return null;
}
break;
}
});})(i__58634,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58634,vec__58670,group_title,group,s__58640__$2,temp__5735__auto____$1,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58639(cljs.core.rest(s__58640__$2)));
}
} else {
return null;
}
break;
}
});})(i__58634,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58634,vec__58636,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58635,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58790 = (i__58634 + (1));
i__58634 = G__58790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58635),athens$views$node_page$node_page_el_$_iter__58632(cljs.core.chunk_rest(s__58633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58635),null);
}
} else {
var vec__58697 = cljs.core.first(s__58633__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58697,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58697,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("lf","show","lf/show",-576708583),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lf","show","lf/show",-576708583),true,new cljs.core.Keyword("lf","x","lf/x",2099359651),rect.left,new cljs.core.Keyword("lf","y","lf/y",-1757872454),rect.bottom], null));
}
});})(vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword("lf","show","lf/show",-576708583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lf","x","lf/x",2099359651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lf","y","lf/y",-1757872454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.filters.filters_el,uid,athens.views.node_page.items], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700(s__58701){
return (new cljs.core.LazySeq(null,(function (){
var s__58701__$1 = s__58701;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58701__$1);
if(temp__5735__auto____$1){
var s__58701__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58701__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58701__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58703 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58702 = (0);
while(true){
if((i__58702 < size__4581__auto__)){
var vec__58704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58702);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58704,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58704,(1),null);
cljs.core.chunk_append(b__58703,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58702,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58702,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58702,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707(s__58708){
return (new cljs.core.LazySeq(null,((function (i__58702,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58708__$1 = s__58708;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58708__$1);
if(temp__5735__auto____$2){
var s__58708__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58708__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58708__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58710 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58709 = (0);
while(true){
if((i__58709 < size__4581__auto____$1)){
var map__58711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58709);
var map__58711__$1 = (((((!((map__58711 == null))))?(((((map__58711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58711):map__58711);
var block__$1 = map__58711__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58710,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58709,i__58702,map__58711,map__58711__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707_$_iter__58713(s__58714){
return (new cljs.core.LazySeq(null,((function (i__58709,i__58702,map__58711,map__58711__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58714__$1 = s__58714;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58714__$1);
if(temp__5735__auto____$3){
var s__58714__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58714__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58714__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58716 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58715 = (0);
while(true){
if((i__58715 < size__4581__auto____$2)){
var map__58717 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58715);
var map__58717__$1 = (((((!((map__58717 == null))))?(((((map__58717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58717):map__58717);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58717__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58717__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58717__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58716,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58715,i__58709,i__58702,map__58717,map__58717__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58716,s__58714__$2,temp__5735__auto____$3,map__58711,map__58711__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58715,i__58709,i__58702,map__58717,map__58717__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58716,s__58714__$2,temp__5735__auto____$3,map__58711,map__58711__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58791 = (i__58715 + (1));
i__58715 = G__58791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58716),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707_$_iter__58713(cljs.core.chunk_rest(s__58714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58716),null);
}
} else {
var map__58719 = cljs.core.first(s__58714__$2);
var map__58719__$1 = (((((!((map__58719 == null))))?(((((map__58719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58719):map__58719);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58709,i__58702,map__58719,map__58719__$1,title__$1,string,uid__$2,s__58714__$2,temp__5735__auto____$3,map__58711,map__58711__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58709,i__58702,map__58719,map__58719__$1,title__$1,string,uid__$2,s__58714__$2,temp__5735__auto____$3,map__58711,map__58711__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707_$_iter__58713(cljs.core.rest(s__58714__$2)));
}
} else {
return null;
}
break;
}
});})(i__58709,i__58702,map__58711,map__58711__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58709,i__58702,map__58711,map__58711__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58792 = (i__58709 + (1));
i__58709 = G__58792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58710),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707(cljs.core.chunk_rest(s__58708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58710),null);
}
} else {
var map__58721 = cljs.core.first(s__58708__$2);
var map__58721__$1 = (((((!((map__58721 == null))))?(((((map__58721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58721):map__58721);
var block__$1 = map__58721__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58702,map__58721,map__58721__$1,block__$1,uid__$1,parents,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707_$_iter__58723(s__58724){
return (new cljs.core.LazySeq(null,((function (i__58702,map__58721,map__58721__$1,block__$1,uid__$1,parents,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58724__$1 = s__58724;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58724__$1);
if(temp__5735__auto____$3){
var s__58724__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58724__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58724__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58726 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58725 = (0);
while(true){
if((i__58725 < size__4581__auto____$1)){
var map__58727 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58725);
var map__58727__$1 = (((((!((map__58727 == null))))?(((((map__58727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58727):map__58727);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58726,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58725,i__58702,map__58727,map__58727__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58726,s__58724__$2,temp__5735__auto____$3,map__58721,map__58721__$1,block__$1,uid__$1,parents,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58725,i__58702,map__58727,map__58727__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58726,s__58724__$2,temp__5735__auto____$3,map__58721,map__58721__$1,block__$1,uid__$1,parents,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58793 = (i__58725 + (1));
i__58725 = G__58793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58726),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707_$_iter__58723(cljs.core.chunk_rest(s__58724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58726),null);
}
} else {
var map__58729 = cljs.core.first(s__58724__$2);
var map__58729__$1 = (((((!((map__58729 == null))))?(((((map__58729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58729):map__58729);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58729__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58729__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58729__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58702,map__58729,map__58729__$1,title__$1,string,uid__$2,s__58724__$2,temp__5735__auto____$3,map__58721,map__58721__$1,block__$1,uid__$1,parents,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58702,map__58729,map__58729__$1,title__$1,string,uid__$2,s__58724__$2,temp__5735__auto____$3,map__58721,map__58721__$1,block__$1,uid__$1,parents,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707_$_iter__58723(cljs.core.rest(s__58724__$2)));
}
} else {
return null;
}
break;
}
});})(i__58702,map__58721,map__58721__$1,block__$1,uid__$1,parents,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58702,map__58721,map__58721__$1,block__$1,uid__$1,parents,s__58708__$2,temp__5735__auto____$2,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58707(cljs.core.rest(s__58708__$2)));
}
} else {
return null;
}
break;
}
});})(i__58702,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58702,vec__58704,group_title,group,c__4580__auto__,size__4581__auto__,b__58703,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58794 = (i__58702 + (1));
i__58702 = G__58794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58703),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700(cljs.core.chunk_rest(s__58701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58703),null);
}
} else {
var vec__58731 = cljs.core.first(s__58701__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58731,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58731,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734(s__58735){
return (new cljs.core.LazySeq(null,(function (){
var s__58735__$1 = s__58735;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58735__$1);
if(temp__5735__auto____$2){
var s__58735__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58735__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58735__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58737 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58736 = (0);
while(true){
if((i__58736 < size__4581__auto__)){
var map__58738 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58736);
var map__58738__$1 = (((((!((map__58738 == null))))?(((((map__58738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58738):map__58738);
var block__$1 = map__58738__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58737,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58736,map__58738,map__58738__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58737,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734_$_iter__58740(s__58741){
return (new cljs.core.LazySeq(null,((function (i__58736,map__58738,map__58738__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58737,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
var s__58741__$1 = s__58741;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58741__$1);
if(temp__5735__auto____$3){
var s__58741__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58741__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58741__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58743 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58742 = (0);
while(true){
if((i__58742 < size__4581__auto____$1)){
var map__58744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58742);
var map__58744__$1 = (((((!((map__58744 == null))))?(((((map__58744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58744):map__58744);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58743,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58742,i__58736,map__58744,map__58744__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58743,s__58741__$2,temp__5735__auto____$3,map__58738,map__58738__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58737,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58742,i__58736,map__58744,map__58744__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58743,s__58741__$2,temp__5735__auto____$3,map__58738,map__58738__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58737,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58795 = (i__58742 + (1));
i__58742 = G__58795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58743),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734_$_iter__58740(cljs.core.chunk_rest(s__58741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58743),null);
}
} else {
var map__58746 = cljs.core.first(s__58741__$2);
var map__58746__$1 = (((((!((map__58746 == null))))?(((((map__58746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58746):map__58746);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58736,map__58746,map__58746__$1,title__$1,string,uid__$2,s__58741__$2,temp__5735__auto____$3,map__58738,map__58738__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58737,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58736,map__58746,map__58746__$1,title__$1,string,uid__$2,s__58741__$2,temp__5735__auto____$3,map__58738,map__58738__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58737,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734_$_iter__58740(cljs.core.rest(s__58741__$2)));
}
} else {
return null;
}
break;
}
});})(i__58736,map__58738,map__58738__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58737,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
,null,null));
});})(i__58736,map__58738,map__58738__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58737,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58796 = (i__58736 + (1));
i__58736 = G__58796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58737),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734(cljs.core.chunk_rest(s__58735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58737),null);
}
} else {
var map__58748 = cljs.core.first(s__58735__$2);
var map__58748__$1 = (((((!((map__58748 == null))))?(((((map__58748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58748):map__58748);
var block__$1 = map__58748__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58748__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58748__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58748,map__58748__$1,block__$1,uid__$1,parents,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734_$_iter__58750(s__58751){
return (new cljs.core.LazySeq(null,(function (){
var s__58751__$1 = s__58751;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58751__$1);
if(temp__5735__auto____$3){
var s__58751__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58751__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58751__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58753 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58752 = (0);
while(true){
if((i__58752 < size__4581__auto__)){
var map__58754 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58752);
var map__58754__$1 = (((((!((map__58754 == null))))?(((((map__58754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58754):map__58754);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58753,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58752,map__58754,map__58754__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58753,s__58751__$2,temp__5735__auto____$3,map__58748,map__58748__$1,block__$1,uid__$1,parents,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58752,map__58754,map__58754__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58753,s__58751__$2,temp__5735__auto____$3,map__58748,map__58748__$1,block__$1,uid__$1,parents,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58797 = (i__58752 + (1));
i__58752 = G__58797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58753),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734_$_iter__58750(cljs.core.chunk_rest(s__58751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58753),null);
}
} else {
var map__58756 = cljs.core.first(s__58751__$2);
var map__58756__$1 = (((((!((map__58756 == null))))?(((((map__58756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58756):map__58756);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58756,map__58756__$1,title__$1,string,uid__$2,s__58751__$2,temp__5735__auto____$3,map__58748,map__58748__$1,block__$1,uid__$1,parents,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58756,map__58756__$1,title__$1,string,uid__$2,s__58751__$2,temp__5735__auto____$3,map__58748,map__58748__$1,block__$1,uid__$1,parents,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734_$_iter__58750(cljs.core.rest(s__58751__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58748,map__58748__$1,block__$1,uid__$1,parents,s__58735__$2,temp__5735__auto____$2,vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700_$_iter__58734(cljs.core.rest(s__58735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58731,group_title,group,s__58701__$2,temp__5735__auto____$1,vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58632_$_iter__58700(cljs.core.rest(s__58701__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58697,linked_or_unlinked,refs,s__58633__$2,temp__5735__auto__,map__58615,map__58615__$1,title,is_shortcut_QMARK_,children,uid,map__58616,map__58616__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58632(cljs.core.rest(s__58633__$2)));
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
var map__58758 = athens.db.get_node_document(ident);
var map__58758__$1 = (((((!((map__58758 == null))))?(((((map__58758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58758):map__58758);
var node = map__58758__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58760) : re_frame.core.subscribe.call(null,G__58760));
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
