goog.provide('athens.router');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('day8.re_frame.tracing');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reitit.coercion.spec');
goog.require('reitit.frontend');
goog.require('reitit.frontend.controllers');
goog.require('reitit.frontend.easy');
var G__50420_50445 = new cljs.core.Keyword(null,"current-route","current-route",2067529448);
var G__50421_50446 = (function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__50420_50445,G__50421_50446) : re_frame.core.reg_sub.call(null,G__50420_50445,G__50421_50446));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (_,p__50422){
var vec__50423 = p__50422;
var seq__50424 = cljs.core.seq(vec__50423);
var first__50425 = cljs.core.first(seq__50424);
var seq__50424__$1 = cljs.core.next(seq__50424);
var ___$1 = first__50425;
var route = seq__50424__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate!","navigate!",79998348),route], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigated","navigated",540897836),(function (p__50426,p__50427){
var map__50428 = p__50426;
var map__50428__$1 = (((((!((map__50428 == null))))?(((((map__50428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50428):map__50428);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50428__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50429 = p__50427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50429,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50429,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
var node = (function (){var G__50433 = athens.db.dsdb;
var G__50434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__50435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(new_match))], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__50433,G__50434,G__50435) : posh.reagent.pull.call(null,G__50433,G__50434,G__50435));
})();
var node_title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node));
var page_title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = node_title;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "untitled";
}
})())," \u2013 Athens"].join('');
(document.title = page_title);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers)),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
}));
var G__50436_50447 = new cljs.core.Keyword(null,"navigate!","navigate!",79998348);
var G__50437_50448 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (route){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Symbol(null,"route","route",1970422836,null)));

var opts__46525__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46526__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var opts__46525__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46526__auto__ = reitit.frontend.easy.push_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46526__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46526__auto__;
})(),(function (){var opts__46525__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46526__auto__ = route;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46526__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46526__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46526__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Symbol(null,"route","route",1970422836,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46526__auto__;
}catch (e50438){var e = e50438;
throw e;
}}):(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50436_50447,G__50437_50448) : re_frame.core.reg_fx.call(null,G__50436_50447,G__50437_50448));
athens.router.routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"about","about",1423892543)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pages",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page/:id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page","page",849072397)], null)], null)], null);
athens.router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(athens.router.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
athens.router.on_navigate = (function athens$router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
var G__50439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigated","navigated",540897836),new_match], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50439) : re_frame.core.dispatch.call(null,G__50439));
} else {
return null;
}
});
athens.router.navigate = (function athens$router$navigate(page){
var G__50440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50440) : re_frame.core.dispatch.call(null,G__50440));
});
athens.router.navigate_uid = (function athens$router$navigate_uid(var_args){
var G__50442 = arguments.length;
switch (G__50442) {
case 1:
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1 = (function (uid){
var G__50443 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uid], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50443) : re_frame.core.dispatch.call(null,G__50443));
}));

(athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2 = (function (uid,e){
var shift = e.shiftKey;
if(cljs.core.truth_(shift)){
var G__50444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50444) : re_frame.core.dispatch.call(null,G__50444));
} else {
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
}
}));

(athens.router.navigate_uid.cljs$lang$maxFixedArity = 2);

athens.router.init_routes_BANG_ = (function athens$router$init_routes_BANG_(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing routes"], 0));

return reitit.frontend.easy.start_BANG_(athens.router.router,athens.router.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=athens.router.js.map
