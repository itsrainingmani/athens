goog.provide('athens.views.blocks');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.keybindings');
goog.require('athens.listeners');
goog.require('athens.parse_renderer');
goog.require('athens.parser');
goog.require('athens.style');
goog.require('athens.util');
goog.require('athens.views.all_pages');
goog.require('athens.views.dropdown');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('garden.selectors');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.functions');
goog.require('instaparse.core');
goog.require('komponentit.autosize');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('goog.events.EventType');
athens.views.blocks.block_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"2em",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.show-tree-indicator:before","&.show-tree-indicator:before",-1154852006),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"left","left",-399115937),"calc(1.25em + 1px)",new cljs.core.Keyword(null,"top","top",-1856271961),"2em",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(50%)",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null)], null)], null);
athens.views.blocks.block_disclosure_toggle_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),0.4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":is(button)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),"all 0.05s ease","1em","none","0","none","0","center",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed","&.closed",693427658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-90deg)"], null)], null)], null)], null),"flex","none","100px","2em"]);
athens.views.blocks.bullet_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"height","height",1025178622)],[athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after","after",594996914),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["0 0 0 2px transparent","translate(-50%, -50%)","all 0.05s ease","''","0.3125em","currentColor","inline-flex","100px","0.3125em","50% 0 0 50%"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null)], null),"all 0.05s ease","0.75em","pointer","0",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed-with-children","&.closed-with-children",-466895087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58433 = (garden.selectors.after.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.after.cljs$core$IFn$_invoke$arity$0() : garden.selectors.after.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__58433) : garden.selectors._AMPERSAND_.call(null,G__58433));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0 0 0 2px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)))].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed-with-children","&.closed-with-children",-466895087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58434 = (garden.selectors.before.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.before.cljs$core$IFn$_invoke$arity$0() : garden.selectors.before.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__58434) : garden.selectors._AMPERSAND_.call(null,G__58434));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover:after","&:hover:after",975745128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%, -50%) scale(1.3)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.dragging","&.dragging",-781884845),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grabbing",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936))], null)], null)], null),"0.25em","2em"]);
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("drop-area-appear",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null)], 0));
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("drop-area-color-pulse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], 0));
athens.views.blocks.drop_area_indicator = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"height","height",1025178622)],[athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),"100%",(3),(0),"left",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"top","top",-1856271961),"-0.5px",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-0.5px",new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100px",new cljs.core.Keyword(null,"background","background",-863952629),"currentColor"], null)], null)], null),"block","relative","-1px","1px"]);
athens.views.blocks.block_content_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58435 = (function (){var G__58436 = new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493);
return (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(G__58436) : garden.selectors.not.call(null,G__58436));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__58435) : garden.selectors._AMPERSAND_.call(null,G__58435));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit",["-4px 0 0 0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)))].join(''),"translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","100%",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)),"text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2)], null)], null)], null)], null)], null);
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("tooltip-appear",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1)"], null)], null)], 0));
athens.views.blocks.tooltip_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["24px","150px",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"64","64",977820579).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),", 0 0 0 1px ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),"tooltip-appear .2s ease",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),"background .1s ease","32px",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-plus-1","background-plus-1",-1065812304)),(4),"4px","8px 12px","8px 24px",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"table-row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.1em",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"all"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["-16px","-12px","''",(-1),"-16px","block","absolute","inherit","-16px"])], null)], null),"table","absolute","4px","column","8px"]);
athens.views.blocks.dragging_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.25"], null);
athens.views.blocks.on_change = (function athens$views$blocks$on_change(value,uid){
var G__58437_58508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),value,new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58437_58508) : re_frame.core.dispatch.call(null,G__58437_58508));

var G__58438 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__58510__delegate = function (title){
var inner_title = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,title);
if((athens.db.search_exact_node_title(inner_title) == null)){
var now_58511 = athens.util.now_ts();
var uid_58512__$1 = athens.util.gen_block_uid();
var G__58440_58513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid_58512__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476),now_58511,new cljs.core.Keyword("create","time","create/time",-1563077754),now_58511], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58440_58513) : re_frame.core.dispatch.call(null,G__58440_58513));
} else {
}

return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_title),"]]"].join('');
};
var G__58510 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__58514__i = 0, G__58514__a = new Array(arguments.length -  0);
while (G__58514__i < G__58514__a.length) {G__58514__a[G__58514__i] = arguments[G__58514__i + 0]; ++G__58514__i;}
  title = new cljs.core.IndexedSeq(G__58514__a,0,null);
} 
return G__58510__delegate.call(this,title);};
G__58510.cljs$lang$maxFixedArity = 0;
G__58510.cljs$lang$applyTo = (function (arglist__58515){
var title = cljs.core.seq(arglist__58515);
return G__58510__delegate(title);
});
G__58510.cljs$core$IFn$_invoke$arity$variadic = G__58510__delegate;
return G__58510;
})()
], null);
var G__58439 = athens.parser.parse_to_ast(value);
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__58438,G__58439) : instaparse.core.transform.call(null,G__58438,G__58439));
});
athens.views.blocks.db_on_change = goog.functions.debounce(athens.views.blocks.on_change,(1000));
athens.views.blocks.toggle = (function athens$views$blocks$toggle(id,open){
var G__58441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open)], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58441) : re_frame.core.dispatch.call(null,G__58441));
});
athens.views.blocks.toggle_el = (function athens$views$blocks$toggle_el(p__58442){
var map__58443 = p__58442;
var map__58443__$1 = (((((!((map__58443 == null))))?(((((map__58443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58443):map__58443);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58443__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58443__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58443__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
if(cljs.core.seq(children)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.block_disclosure_toggle_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(open)?"open":"closed"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.blocks.toggle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),open);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.KeyboardArrowDown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.block_disclosure_toggle_style)], null);
}
});
athens.views.blocks.tooltip_el = (function athens$views$blocks$tooltip_el(p__58445,state){
var map__58446 = p__58445;
var map__58446__$1 = (((((!((map__58446 == null))))?(((((map__58446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58446):map__58446);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58446__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58446__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58446__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58446__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var map__58448 = cljs.core.deref(state);
var map__58448__$1 = (((((!((map__58448 == null))))?(((((map__58448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58448):map__58448);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58448__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58448__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
if(cljs.core.truth_((function (){var and__4174__auto__ = tooltip;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dragging);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.tooltip_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tooltip",new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"db/id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),dbid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"uid"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),uid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"order"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),order], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"last edit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.views.all_pages.date_string(edit_time)], null)], null)], null);
} else {
return null;
}
});
athens.views.blocks.page_search_el = (function athens$views$blocks$page_search_el(_block,state){
var map__58450 = cljs.core.deref(state);
var map__58450__$1 = (((((!((map__58450 == null))))?(((((map__58450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58450):map__58450);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword("search","page","search/page",1822499573));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword("search","block","search/block",2107126874));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
if(cljs.core.truth_((function (){var or__4185__auto__ = block;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return page;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.dropdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"20rem",new cljs.core.Keyword(null,"left","left",-399115937),"1.75em"], null),new cljs.core.Keyword(null,"content","content",15833224),((clojure.string.blank_QMARK_(query))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Start Typing!"], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.dropdown.menu_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"dropdown-menu"], null)),(function (){var iter__4582__auto__ = (function athens$views$blocks$page_search_el_$_iter__58452(s__58453){
return (new cljs.core.LazySeq(null,(function (){
var s__58453__$1 = s__58453;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58453__$1);
if(temp__5735__auto__){
var s__58453__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58453__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58453__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58455 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58454 = (0);
while(true){
if((i__58454 < size__4581__auto__)){
var vec__58456 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58454);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58456,(0),null);
var map__58459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58456,(1),null);
var map__58459__$1 = (((((!((map__58459 == null))))?(((((map__58459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58459):map__58459);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58459__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58459__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58459__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58455,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.dropdown.menu_item_style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,i))?athens.views.dropdown.menu_item_active_style:null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58454,vec__58456,i,map__58459,map__58459__$1,title,string,uid,c__4580__auto__,size__4581__auto__,b__58455,s__58453__$2,temp__5735__auto__,map__58450,map__58450__$1,page,block,query,results,index){
return (function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expand"], 0));
});})(i__58454,vec__58456,i,map__58459,map__58459__$1,title,string,uid,c__4580__auto__,size__4581__auto__,b__58455,s__58453__$2,temp__5735__auto__,map__58450,map__58450__$1,page,block,query,results,index))
,new cljs.core.Keyword(null,"id","id",-1388402092),["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),(function (){var or__4185__auto__ = title;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["inline-search-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')], null)));

var G__58518 = (i__58454 + (1));
i__58454 = G__58518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58455),athens$views$blocks$page_search_el_$_iter__58452(cljs.core.chunk_rest(s__58453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58455),null);
}
} else {
var vec__58461 = cljs.core.first(s__58453__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(0),null);
var map__58464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58461,(1),null);
var map__58464__$1 = (((((!((map__58464 == null))))?(((((map__58464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58464):map__58464);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.dropdown.menu_item_style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,i))?athens.views.dropdown.menu_item_active_style:null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58461,i,map__58464,map__58464__$1,title,string,uid,s__58453__$2,temp__5735__auto__,map__58450,map__58450__$1,page,block,query,results,index){
return (function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expand"], 0));
});})(vec__58461,i,map__58464,map__58464__$1,title,string,uid,s__58453__$2,temp__5735__auto__,map__58450,map__58450__$1,page,block,query,results,index))
,new cljs.core.Keyword(null,"id","id",-1388402092),["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),(function (){var or__4185__auto__ = title;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["inline-search-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')], null)),athens$views$blocks$page_search_el_$_iter__58452(cljs.core.rest(s__58453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,results));
})()], null)))], null)], null);
} else {
return null;
}
});
athens.views.blocks.block_content_el = (function athens$views$blocks$block_content_el(_,___$1,___$2){
return (function (block,state,is_editing){
var map__58466 = block;
var map__58466__$1 = (((((!((map__58466 == null))))?(((((map__58466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58466):map__58466);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.block_content_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-content",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (___$3){
var G__58468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58468) : re_frame.core.dispatch.call(null,G__58468));
})], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(is_editing)?"is-editing":null),"textarea"], null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"id","id",-1388402092),["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (___$3){
return null;
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
return athens.keybindings.block_key_down(e,uid,state);
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
if(cljs.core.truth_(e.shiftKey)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["find linear distance between source and target block. select all"], 0));
} else {
goog.events.listen(window,goog.events.EventType.MOUSEOVER,athens.listeners.multi_block_select_over);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,athens.listeners.multi_block_select_up);
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,string], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"drag-target","drag-target",2017061919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null):null)], 0)))], null)], null);
});
});
athens.views.blocks.bullet_el = (function athens$views$blocks$bullet_el(_,___$1){
return (function (p__58469,state){
var map__58470 = p__58469;
var map__58470__$1 = (((((!((map__58470 == null))))?(((((map__58470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58470):map__58470);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58470__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.bullet_style,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.seq(children)) && (cljs.core.not(open))))?"closed-with-children":null)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (e){
var related = e.relatedTarget;
if(cljs.core.truth_((function (){var and__4174__auto__ = related;
if(cljs.core.truth_(and__4174__auto__)){
return goog.dom.classlist.contains(related,"tooltip");
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);
}
}),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (e){
(e.dataTransfer.effectAllowed = "move");

e.dataTransfer.setData("text/plain",uid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (___$2){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DRAG END BULLET"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);
})], null))], 0))], null);
});
});
/**
 * Two checks to make sure block is open or not: children exist and :block/open bool
 */
athens.views.blocks.block_el = (function athens$views$blocks$block_el(block){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"slash?","slash?",810223916),new cljs.core.Keyword(null,"dragging","dragging",1185097613),new cljs.core.Keyword("search","index","search/index",1990835117),new cljs.core.Keyword("search","query","search/query",1830322034),new cljs.core.Keyword("edit","time","edit/time",1384867476),new cljs.core.Keyword("search","page","search/page",1822499573),new cljs.core.Keyword("search","block","search/block",2107126874),new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new cljs.core.Keyword(null,"drag-target","drag-target",2017061919)],[false,false,(0),null,new cljs.core.Keyword("edit","time","edit/time",1384867476).cljs$core$IFn$_invoke$arity$1(block),false,false,new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(block),null]));
cljs.core.add_watch(state,new cljs.core.Keyword(null,"string-listener","string-listener",1462473208),(function (_context,_atom,old,new$){
var map__58472 = new$;
var map__58472__$1 = (((((!((map__58472 == null))))?(((((map__58472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58472):map__58472);
var atom_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204).cljs$core$IFn$_invoke$arity$1(old),atom_string)){
var G__58474 = atom_string;
var G__58475 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block);
return (athens.views.blocks.db_on_change.cljs$core$IFn$_invoke$arity$2 ? athens.views.blocks.db_on_change.cljs$core$IFn$_invoke$arity$2(G__58474,G__58475) : athens.views.blocks.db_on_change.call(null,G__58474,G__58475));
} else {
return null;
}
}));

return (function (block__$1){
var map__58476 = block__$1;
var map__58476__$1 = (((((!((map__58476 == null))))?(((((map__58476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58476):map__58476);
var edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58476__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58476__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58476__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58476__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58476__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var map__58477 = cljs.core.deref(state);
var map__58477__$1 = (((((!((map__58477 == null))))?(((((map__58477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58477):map__58477);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919));
var state_edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var is_editing = cljs.core.deref((function (){var G__58480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","is-editing","editing/is-editing",-1509220484),uid], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58480) : re_frame.core.subscribe.call(null,G__58480));
})());
var is_selected = cljs.core.deref((function (){var G__58481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","is-selected","selected/is-selected",689082595),uid], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58481) : re_frame.core.subscribe.call(null,G__58481));
})());
if((state_edit_time < edit_time)){
var new_state_58519 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edit","time","edit/time",1384867476),edit_time,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),string], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new_state_58519);
} else {
}

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-container","div.block-container",1334645108),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.block_style,(cljs.core.truth_(dragging)?athens.views.blocks.dragging_style:null),(cljs.core.truth_(is_selected)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null):null)], 0)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(dragging)?"dragging":null),(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.seq(children);
if(and__4174__auto__){
return open;
} else {
return and__4174__auto__;
}
})())?"show-tree-indicator":null)], null),new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (e){
e.preventDefault();

e.stopPropagation();

var offset = athens.util.mouse_offset(e);
var middle_y = athens.util.vertical_center(e.target);
var closest_container = e.target.closest(".block-container");
var next_sibling = closest_container.nextElementSibling;
var last_child_QMARK_ = (next_sibling == null);
var dragging_ancestor = e.target.closest(".dragging");
var not_dragging_QMARK_ = (dragging_ancestor == null);
var target = ((not_dragging_QMARK_)?(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset) < middle_y))?new cljs.core.Keyword(null,"above","above",-1286866470):((((cljs.core.empty_QMARK_(children)) && (((50) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset)))))?new cljs.core.Keyword(null,"child","child",623967545):((((last_child_QMARK_) && ((middle_y < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset)))))?new cljs.core.Keyword(null,"below","below",-926774883):null))):null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),target);
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (_){
return null;
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),null);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (e){
e.stopPropagation();

var source_uid = e.dataTransfer.getData("text/plain");
if((drag_target == null)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_uid,uid)){
} else {
}
}

var G__58482_58520 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),source_uid,uid,drag_target], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58482_58520) : re_frame.core.dispatch.call(null,G__58482_58520));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),null);
})], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_target,new cljs.core.Keyword(null,"above","above",-1286866470)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null):null)], 0)))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.toggle_el,block__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.bullet_el,block__$1,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.tooltip_el,block__$1,state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_content_el,block__$1,state,is_editing], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"slash?","slash?",810223916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.slash_menu_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"100%",new cljs.core.Keyword(null,"left","left",-399115937),"-0.125em"], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.page_search_el,block__$1,state], null),(cljs.core.truth_((function (){var and__4174__auto__ = open;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(children);
} else {
return and__4174__auto__;
}
})())?(function (){var iter__4582__auto__ = (function athens$views$blocks$block_el_$_iter__58483(s__58484){
return (new cljs.core.LazySeq(null,(function (){
var s__58484__$1 = s__58484;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58484__$1);
if(temp__5735__auto__){
var s__58484__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58484__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58484__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58486 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58485 = (0);
while(true){
if((i__58485 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58485);
cljs.core.chunk_append(b__58486,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"32px"], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null)], null));

var G__58521 = (i__58485 + (1));
i__58485 = G__58521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58486),athens$views$blocks$block_el_$_iter__58483(cljs.core.chunk_rest(s__58484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58486),null);
}
} else {
var child = cljs.core.first(s__58484__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"32px"], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null)], null),athens$views$blocks$block_el_$_iter__58483(cljs.core.rest(s__58484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_target,new cljs.core.Keyword(null,"below","below",-926774883)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null):null)], 0)))], null)], null);
});
});
athens.views.blocks.block_component = (function athens$views$blocks$block_component(ident){
var block = athens.db.get_block_document(ident);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null);
});

//# sourceMappingURL=athens.views.blocks.js.map
