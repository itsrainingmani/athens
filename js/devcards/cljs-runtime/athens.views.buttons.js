goog.provide('athens.views.buttons');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('garden.color');
goog.require('garden.selectors');
goog.require('stylefy.core');
athens.views.buttons.buttons_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],["center","rgba(50, 47, 56, 1)","inherit",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 117, 225)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 117, 225, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 0, 0, 0.3)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null)], null),"all 0.05s ease","500","transparent","pointer","6px 10px",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"-0.0835em",new cljs.core.Keyword(null,"margin-block-end","margin-block-end",-1287470806),"-0.0835em"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39071 = (function (){var G__39072 = (garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.last_child.call(null));
return (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(G__39072) : garden.selectors.not.call(null,G__39072));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__39071) : garden.selectors._AMPERSAND_.call(null,G__39071));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),"0.251em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39074 = (function (){var G__39075 = (garden.selectors.first_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.first_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.first_child.call(null));
return (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(G__39075) : garden.selectors.not.call(null,G__39075));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__39074) : garden.selectors._AMPERSAND_.call(null,G__39074));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),"0.251em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39076 = (function (){var fexpr__39078 = (function (){var G__39079 = (garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.last_child.call(null));
return (garden.selectors.first_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.first_child.cljs$core$IFn$_invoke$arity$1(G__39079) : garden.selectors.first_child.call(null,G__39079));
})();
return (fexpr__39078.cljs$core$IFn$_invoke$arity$0 ? fexpr__39078.cljs$core$IFn$_invoke$arity$0() : fexpr__39078.call(null));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__39076) : garden.selectors._AMPERSAND_.call(null,G__39076));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),"-4px",new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),"-4px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 0 auto",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.active","&.active",1160418114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),garden.color.darken(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)),(10))], null)], null)], null),"inline-flex","none","4px","inherit","0"]);
athens.views.buttons.buttons_primary_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.buttons.buttons_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 117, 225)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 117, 225, 0.1)",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 117, 225, 0.25)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 117, 225, 1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 0, 0, 0.3)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null)], null)], null)], 0));
athens.views.buttons.button = (function athens$views$buttons$button(p__39082){
var map__39083 = p__39082;
var map__39083__$1 = (((((!((map__39083 == null))))?(((((map__39083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39083):map__39083);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.buttons.buttons_style,style], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,(cljs.core.truth_(active)?"active":null)], null)], null)),label], null);
});
athens.views.buttons.button_primary = (function athens$views$buttons$button_primary(p__39087){
var map__39088 = p__39087;
var map__39088__$1 = (((((!((map__39088 == null))))?(((((map__39088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39088):map__39088);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39088__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39088__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39088__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39088__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39088__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39088__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.buttons.buttons_primary_style,style], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,(cljs.core.truth_(active)?"active":null)], null)], null)),label], null);
});

//# sourceMappingURL=athens.views.buttons.js.map
