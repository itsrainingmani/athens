goog.provide('athens.keybindings');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.util');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.dom.selection');
goog.require('goog.events.KeyCodes');
goog.require('re_frame.core');
athens.keybindings.modifier_keys = (function athens$keybindings$modifier_keys(e){
var shift = e.shiftKey;
var meta = e.metaKey;
var ctrl = e.ctrlKey;
var alt = e.altKey;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"meta","meta",1499536964),meta,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),ctrl,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null);
});
athens.keybindings.get_end_points = (function athens$keybindings$get_end_points(e){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__56096 = e.target;
return goog.dom.selection.getEndPoints(G__56096);
})());
});
athens.keybindings.destruct_event = (function athens$keybindings$destruct_event(e){
var key = e.key;
var key_code = e.keyCode;
var target = e.target;
var value = target.value;
var event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key_code,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var modifiers = athens.keybindings.modifier_keys(e);
var vec__56097 = athens.keybindings.get_end_points(e);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56097,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56097,(1),null);
var selection = goog.dom.selection.getText(target);
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modifiers,event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),head,new cljs.core.Keyword(null,"tail","tail",-1146023564),tail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),selection], null)], 0));
});
athens.keybindings.ARROW_KEYS = cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.UP,new cljs.core.Keyword(null,"up","up",-269712113),goog.events.KeyCodes.LEFT,new cljs.core.Keyword(null,"left","left",-399115937),goog.events.KeyCodes.DOWN,new cljs.core.Keyword(null,"down","down",1565245570),goog.events.KeyCodes.RIGHT,new cljs.core.Keyword(null,"right","right",-452581833)]);
athens.keybindings.arrow_key_direction = (function athens$keybindings$arrow_key_direction(e){
var key_code = e.keyCode;
return (athens.keybindings.ARROW_KEYS.cljs$core$IFn$_invoke$arity$1 ? athens.keybindings.ARROW_KEYS.cljs$core$IFn$_invoke$arity$1(key_code) : athens.keybindings.ARROW_KEYS.call(null,key_code));
});
athens.keybindings.block_start_QMARK_ = (function athens$keybindings$block_start_QMARK_(e){
var vec__56100 = athens.keybindings.get_end_points(e);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56100,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56100,(1),null);
return (start === (0));
});
athens.keybindings.block_end_QMARK_ = (function athens$keybindings$block_end_QMARK_(e){
var map__56103 = athens.keybindings.destruct_event(e);
var map__56103__$1 = (((((!((map__56103 == null))))?(((((map__56103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56103):map__56103);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56103__$1,new cljs.core.Keyword(null,"value","value",305978217));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56103__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(value));
});
/**
 * May want to flatten this into multiple handlers.
 */
athens.keybindings.handle_arrow_key = (function athens$keybindings$handle_arrow_key(e,uid,state){
var map__56105 = athens.keybindings.destruct_event(e);
var map__56105__$1 = (((((!((map__56105 == null))))?(((((map__56105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56105):map__56105);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56105__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56105__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56105__$1,new cljs.core.Keyword(null,"target","target",253001721));
var top_row_QMARK_ = true;
var bottom_row_QMARK_ = true;
var map__56106 = cljs.core.deref(state);
var map__56106__$1 = (((((!((map__56106 == null))))?(((((map__56106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56106):map__56106);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56106__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56106__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56106__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var selected_items = cljs.core.deref((function (){var G__56109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56109) : re_frame.core.subscribe.call(null,G__56109));
})());
var direction = athens.keybindings.arrow_key_direction(e);
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = cljs.core.seq(selected_items);
if(and__4174__auto____$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)){
var G__56112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","up","selected/up",921350754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56112) : re_frame.core.dispatch.call(null,G__56112));
} else {
return false;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = cljs.core.seq(selected_items);
if(and__4174__auto____$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)){
var G__56115 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","down","selected/down",-1806586329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56115) : re_frame.core.dispatch.call(null,G__56115));
} else {
return false;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)) && (top_row_QMARK_));
} else {
return and__4174__auto__;
}
})())){
target.blur();

var G__56116_56181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56116_56181) : re_frame.core.dispatch.call(null,G__56116_56181));

var G__56117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56117) : re_frame.core.dispatch.call(null,G__56117));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)) && (bottom_row_QMARK_));
} else {
return and__4174__auto__;
}
})())){
target.blur();

var G__56118_56184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56118_56184) : re_frame.core.dispatch.call(null,G__56118_56184));

var G__56119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56119) : re_frame.core.dispatch.call(null,G__56119));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.inc);
} else {
return null;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP)){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","index","search/index",1990835117),(cljs.core.count(results) - (1)));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.dec);
}

return athens.util.scroll_if_needed(document.getElementById(["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))].join('')),document.getElementById("dropdown-menu"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN)){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(cljs.core.count(results) - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","index","search/index",1990835117),(0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.inc);
}

return athens.util.scroll_if_needed(document.getElementById(["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))].join('')),document.getElementById("dropdown-menu"));
} else {
return null;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP)) && (top_row_QMARK_))){
var G__56120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56120) : re_frame.core.dispatch.call(null,G__56120));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT)) && (athens.keybindings.block_start_QMARK_(e)))){
var G__56121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56121) : re_frame.core.dispatch.call(null,G__56121));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN)) && (bottom_row_QMARK_))){
var G__56122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56122) : re_frame.core.dispatch.call(null,G__56122));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT)) && (athens.keybindings.block_end_QMARK_(e)))){
var G__56123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56123) : re_frame.core.dispatch.call(null,G__56123));
} else {
return null;
}
}
}
}

}
}
}
}
}
});
athens.keybindings.handle_tab = (function athens$keybindings$handle_tab(e,uid){
e.preventDefault();

var map__56124 = athens.keybindings.destruct_event(e);
var map__56124__$1 = (((((!((map__56124 == null))))?(((((map__56124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56124):map__56124);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56124__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var block_zero_QMARK_ = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null))) === (0));
if(cljs.core.truth_(shift)){
var G__56126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56126) : re_frame.core.dispatch.call(null,G__56126));
} else {
if(block_zero_QMARK_){
return null;
} else {
var G__56127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56127) : re_frame.core.dispatch.call(null,G__56127));
}

}
});
athens.keybindings.handle_escape = (function athens$keybindings$handle_escape(e,state){
e.preventDefault();

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(state)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));

if(cljs.core.truth_(new cljs.core.Keyword("search","type","search/type",-1745335484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
var G__56128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56128) : re_frame.core.dispatch.call(null,G__56128));

}
});
athens.keybindings.slash_options = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Done,"Add Todo","{{[[TODO]]}} ","cmd-enter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Timer,"Current Time",(function (){
return (new Date()).toLocaleTimeString(cljs.core.PersistentVector.EMPTY,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["timeStyle","short"], null)));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Today,"Today",(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((0)))),"]] "].join('');
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Today,"Tomorrow",(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((-1)))),"]]"].join('');
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Today,"Yesterday",(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((1)))),"]]"].join('');
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.YouTube,"YouTube Embed","{{[[youtube]]: }}"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.DesktopWindows,"iframe Embed","{{iframe: }}"], null)], null);
athens.keybindings.select_slash_cmd = (function athens$keybindings$select_slash_cmd(index,state){
var map__56129 = cljs.core.deref(state);
var map__56129__$1 = (((((!((map__56129 == null))))?(((((map__56129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56129):map__56129);
var atom_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56129__$1,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204));
var vec__56130 = (athens.keybindings.slash_options.cljs$core$IFn$_invoke$arity$1 ? athens.keybindings.slash_options.cljs$core$IFn$_invoke$arity$1(index) : athens.keybindings.slash_options.call(null,index));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56130,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56130,(1),null);
var expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56130,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56130,(3),null);
var expand = ((cljs.core.fn_QMARK_(expansion))?(expansion.cljs$core$IFn$_invoke$arity$0 ? expansion.cljs$core$IFn$_invoke$arity$0() : expansion.call(null)):expansion);
var replace_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(atom_string,(0),(cljs.core.count(atom_string) - (1)));
var new_str = [replace_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expand)].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("search","index","search/index",1990835117),(0),new cljs.core.Keyword("search","type","search/type",-1745335484),null,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str], null));
});
athens.keybindings.handle_enter = (function athens$keybindings$handle_enter(e,uid,state){
var map__56134 = athens.keybindings.destruct_event(e);
var map__56134__$1 = (((((!((map__56134 == null))))?(((((map__56134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56134):map__56134);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__56135 = cljs.core.deref(state);
var map__56135__$1 = (((((!((map__56135 == null))))?(((((map__56135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56135):map__56135);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56135__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56135__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56135__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56135__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
return athens.keybindings.select_slash_cmd(index,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))){
var map__56138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,index);
var map__56138__$1 = (((((!((map__56138 == null))))?(((((map__56138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56138):map__56138);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56138__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var new_str = clojure.string.replace_first(value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"]]"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"]]"].join(''));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str,new cljs.core.Keyword("search","query","search/query",1830322034),null,new cljs.core.Keyword("search","type","search/type",-1745335484),null], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))){
var map__56140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,index);
var map__56140__$1 = (((((!((map__56140 == null))))?(((((map__56140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56140):map__56140);
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56140__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var new_str = clojure.string.replace_first(value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"))"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1),"))"].join(''));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str,new cljs.core.Keyword("search","query","search/query",1830322034),null,new cljs.core.Keyword("search","type","search/type",-1745335484),null], null));
} else {
if(cljs.core.truth_(shift)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join(''));
} else {
if(cljs.core.truth_(meta)){
var first = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(13));
var new_tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(13));
var new_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first,"{{[[TODO]]}} "))?["{{[[DONE]]}} ",new_tail].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first,"{{[[DONE]]}} "))?new_tail:["{{[[TODO]]}} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')
));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
var G__56142 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624),uid,value,start], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56142) : re_frame.core.dispatch.call(null,G__56142));

}
}
}
}
}
});
athens.keybindings.PAIR_CHARS = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
/**
 * https://github.com/tpope/vim-surround
 */
athens.keybindings.surround = (function athens$keybindings$surround(selection,around){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,around);
if(cljs.core.truth_(temp__5733__auto__)){
var complement = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(around),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection),cljs.core.str.cljs$core$IFn$_invoke$arity$1(complement)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(around),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection),cljs.core.str.cljs$core$IFn$_invoke$arity$1(around)].join('');
}
});
/**
 * Assumes meta is selected
 */
athens.keybindings.handle_system_shortcuts = (function athens$keybindings$handle_system_shortcuts(e,_,state){
var map__56143 = athens.keybindings.destruct_event(e);
var map__56143__$1 = (((((!((map__56143 == null))))?(((((map__56143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56143):map__56143);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56143__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56143__$1,new cljs.core.Keyword(null,"target","target",253001721));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56143__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56143__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.A)){
goog.dom.selection.setStart(target,(0));

return goog.dom.selection.setEnd(target,end);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.Z)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["undo"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.X)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cut"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.V)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["paste"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.B)){
var new_str = athens.keybindings.surround(selection,"**");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.I)){
var new_str = athens.keybindings.surround(selection,"__");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
return null;
}
}
}
}
}
}
});
athens.keybindings.pair_char_QMARK_ = (function athens$keybindings$pair_char_QMARK_(e){
var map__56145 = athens.keybindings.destruct_event(e);
var map__56145__$1 = (((((!((map__56145 == null))))?(((((map__56145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56145):map__56145);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56145__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pair_char_set = cljs.core.set(cljs.core.flatten(cljs.core.seq(athens.keybindings.PAIR_CHARS)));
return (pair_char_set.cljs$core$IFn$_invoke$arity$1 ? pair_char_set.cljs$core$IFn$_invoke$arity$1(key) : pair_char_set.call(null,key));
});
athens.keybindings.handle_pair_char = (function athens$keybindings$handle_pair_char(e,_,state){
var map__56147 = athens.keybindings.destruct_event(e);
var map__56147__$1 = (((((!((map__56147 == null))))?(((((map__56147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56147):map__56147);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var close_pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var new_str_56201 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(close_pair),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
setTimeout((function (){
var G__56149 = target;
var G__56150 = (start + (1));
return goog.dom.selection.setCursorPosition(G__56149,G__56150);
}),(10));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str_56201);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var surround_selection_56202 = athens.keybindings.surround(selection,key);
var new_str_56203 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),surround_selection_56202,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str_56203);

setTimeout((function (){
var G__56151_56204 = target;
var G__56152_56205 = (start + (1));
goog.dom.selection.setStart(G__56151_56204,G__56152_56205);

var G__56153 = target;
var G__56154 = (end + (1));
return goog.dom.selection.setEnd(G__56153,G__56154);
}),(10));
} else {
}
}

var four_char = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(start - (1)),(start + (3)));
var double_brackets_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[[]]",four_char);
var double_parens_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(())",four_char);
if(double_brackets_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"page","page",849072397));
} else {
if(double_parens_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"block","block",664686210));
} else {
return null;
}
}
});
athens.keybindings.handle_backspace = (function athens$keybindings$handle_backspace(e,uid,state){
var map__56156 = athens.keybindings.destruct_event(e);
var map__56156__$1 = (((((!((map__56156 == null))))?(((((map__56156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56156):map__56156);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"value","value",305978217));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"target","target",253001721));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var possible_pair = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(start - (1)),(start + (1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var new_tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),new_tail].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
if(cljs.core.truth_(meta)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),tail);
} else {
if(athens.keybindings.block_start_QMARK_(e)){
var G__56158 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backspace","backspace",-696007848),uid,value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56158) : re_frame.core.dispatch.call(null,G__56158));
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__56155_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(possible_pair,p1__56155_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]","{}","()"], null)))){
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var tail__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(start + (1)));
var new_str = [head__$1,tail__$1].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);

return setTimeout((function (){
var G__56159 = target;
var G__56160 = (start - (1));
return goog.dom.selection.setCursorPosition(G__56159,G__56160);
}),(10));
} else {
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var new_str = [head__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var map__56161 = cljs.core.deref(state);
var map__56161__$1 = (((((!((map__56161 == null))))?(((((map__56161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56161):map__56161);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56161__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(value))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("search","type","search/type",-1745335484),null,new cljs.core.Keyword("search","query","search/query",1830322034),null], null));
} else {
}

if(cljs.core.truth_(query)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(query,(0),(cljs.core.count(query) - (1))));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);

}
}
}
}
});
/**
 * Closure returns true even when using modifier keys. We do not make that assumption.
 */
athens.keybindings.is_character_key_QMARK_ = (function athens$keybindings$is_character_key_QMARK_(e){
var map__56163 = athens.keybindings.destruct_event(e);
var map__56163__$1 = (((((!((map__56163 == null))))?(((((map__56163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56163):map__56163);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56163__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56163__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56163__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56163__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
if(cljs.core.not(meta)){
if(cljs.core.not(ctrl)){
if(cljs.core.not(alt)){
return goog.events.KeyCodes.isCharacterKey(key_code);
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
});
athens.keybindings.write_char = (function athens$keybindings$write_char(e,_,state){
var map__56165 = athens.keybindings.destruct_event(e);
var map__56165__$1 = (((((!((map__56165 == null))))?(((((map__56165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56165):map__56165);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56165__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56165__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56165__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56165__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var map__56166 = cljs.core.deref(state);
var map__56166__$1 = (((((!((map__56166 == null))))?(((((map__56166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56166):map__56166);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56166__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56166__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var new_query = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.SLASH)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("search","query","search/query",1830322034),"",new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"slash","slash",-1449773022)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),new_str);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))){
var results_56206 = athens.db.search_in_block_content(query);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),new_query);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","results","search/results",107824727),results_56206);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))){
var results_56207 = athens.db.search_in_node_title(query);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),new_query);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","results","search/results",107824727),results_56207);
} else {
}
}
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str], null));
});
athens.keybindings.block_key_down = (function athens$keybindings$block_key_down(e,uid,state){
var map__56169 = athens.keybindings.destruct_event(e);
var map__56169__$1 = (((((!((map__56169 == null))))?(((((map__56169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56169):map__56169);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56169__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56169__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
if(cljs.core.truth_(athens.keybindings.arrow_key_direction(e))){
return athens.keybindings.handle_arrow_key(e,uid,state);
} else {
if(cljs.core.truth_(athens.keybindings.pair_char_QMARK_(e))){
return athens.keybindings.handle_pair_char(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.TAB)){
return athens.keybindings.handle_tab(e,uid);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER)){
return athens.keybindings.handle_enter(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.BACKSPACE)){
return athens.keybindings.handle_backspace(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ESC)){
return athens.keybindings.handle_escape(e,state);
} else {
if(cljs.core.truth_(meta)){
return athens.keybindings.handle_system_shortcuts(e,uid,state);
} else {
if(cljs.core.truth_(athens.keybindings.is_character_key_QMARK_(e))){
return athens.keybindings.write_char(e,uid,state);
} else {
return null;
}
}
}
}
}
}
}
}
});

//# sourceMappingURL=athens.keybindings.js.map
