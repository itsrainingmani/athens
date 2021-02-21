goog.provide('athens.views.settings_page');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
athens.views.settings_page.opt_out = (function athens$views$settings_page$opt_out(opted_out_QMARK_){
posthog.capture("opt-out");

window.posthog.opt_out_capturing();

localStorage.setItem("sentry","off");

return cljs.core.reset_BANG_(opted_out_QMARK_,true);
});
athens.views.settings_page.opt_in = (function athens$views$settings_page$opt_in(opted_out_QMARK_){
window.posthog.opt_in_capturing();

posthog.capture("opt-in");

localStorage.setItem("sentry","on");

return cljs.core.reset_BANG_(opted_out_QMARK_,false);
});
athens.views.settings_page.handle_click = (function athens$views$settings_page$handle_click(opted_out_QMARK_){
if(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))){
return athens.views.settings_page.opt_in(opted_out_QMARK_);
} else {
return athens.views.settings_page.opt_out(opted_out_QMARK_);
}
});
athens.views.settings_page.remember_ws = (function athens$views$settings_page$remember_ws(remember_window_size_QMARK_){
localStorage.setItem("ws/remember-ws","on");

return cljs.core.reset_BANG_(remember_window_size_QMARK_,true);
});
athens.views.settings_page.dont_remember_ws = (function athens$views$settings_page$dont_remember_ws(remember_window_size_QMARK_){
localStorage.setItem("ws/remember-ws","off");

return cljs.core.reset_BANG_(remember_window_size_QMARK_,false);
});
athens.views.settings_page.handle_ws = (function athens$views$settings_page$handle_ws(remember_window_size_QMARK_){
if(cljs.core.truth_(cljs.core.deref(remember_window_size_QMARK_))){
return athens.views.settings_page.dont_remember_ws(remember_window_size_QMARK_);
} else {
return athens.views.settings_page.remember_ws(remember_window_size_QMARK_);
}
});
athens.views.settings_page.handle_debounce_save_input = (function athens$views$settings_page$handle_debounce_save_input(value,debounce_time){
if(((((0) <= value)) && ((value <= (1000))))){
cljs.core.reset_BANG_(debounce_time,value);

(athens.electron.debounce_write_db = goog.functions.debounce(athens.electron.write_db,((1000) * value)));

return localStorage.setItem("debounce-save-time",value);
} else {
return null;
}
});
athens.views.settings_page.settings_page = (function athens$views$settings_page$settings_page(){
var opted_out_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.posthog.has_opted_out_capturing());
var debounce_save_time_BANG_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(Number(localStorage.getItem("debounce-save-time")));
var remember_window_size_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.util.remember_ws_QMARK_());
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin","margin",-995903681),"0vh 5vw",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Settings"], null),(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Opted Out of Analytics"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Opted Into Analytics"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),cljs.core.deref(opted_out_QMARK_) === false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.settings_page.handle_click(opted_out_QMARK_);
})], null),(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ToggleOn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDE41 We understand."], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ToggleOff], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDE00 Thanks for helping make Athens better!"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Analytics are anonymized and delivered by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://posthog.com",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Posthog"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://sentry.io",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Sentry"], null),", open-source solutions to measure retention, performance, and crashes.\n         This lets the designers and engineers at Athens know if we're really making something people love!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Auto-save"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"4em"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(debounce_save_time_BANG_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__64165_SHARP_){
return athens.views.settings_page.handle_debounce_save_input(Number(p1__64165_SHARP_.target.value),debounce_save_time_BANG_);
})], null)], null),cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["type",cljs.core.deref(debounce_save_time_BANG_),Number(cljs.core.deref(debounce_save_time_BANG_))], 0)),(function (){var G__64166 = cljs.core.deref(debounce_save_time_BANG_);
switch (G__64166) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Athens will save and create a backup after each edit."], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Athens will save and create a backup ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(debounce_save_time_BANG_))," second after your last edit."].join('')], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Athens will save and create a backup ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(debounce_save_time_BANG_))," seconds after your last edit."].join('')], null);

}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Remember the last Window Size on Athens Startup"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),cljs.core.deref(remember_window_size_QMARK_) === true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.settings_page.handle_ws(remember_window_size_QMARK_);
})], null),(cljs.core.truth_(cljs.core.deref(remember_window_size_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ToggleOff], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDE00 Yes!"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ToggleOn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDE41 No."], null)], null))], null)], null)], null);
});
});

//# sourceMappingURL=athens.views.settings_page.js.map
