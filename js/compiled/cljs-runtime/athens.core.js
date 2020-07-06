goog.provide('athens.core');
goog.require('cljs.core');
goog.require('athens.coeffects');
goog.require('athens.config');
goog.require('athens.effects');
goog.require('athens.events');
goog.require('athens.listeners');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.subs');
goog.require('athens.views');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.core.dev_setup = (function athens$core$dev_setup(){
if(athens.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
athens.core.mount_root = (function athens$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

athens.router.init_routes_BANG_();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.main_panel], null),document.getElementById("app"));
});
athens.core.init = (function athens$core$init(){
stylefy.core.tag("body",athens.style.app_styles);

stylefy.core.init.cljs$core$IFn$_invoke$arity$0();

athens.listeners.init();

var G__68591_68593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__68591_68593) : re_frame.core.dispatch_sync.call(null,G__68591_68593));

var G__68592_68594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__68592_68594) : re_frame.core.dispatch_sync.call(null,G__68592_68594));

athens.core.dev_setup();

return athens.core.mount_root();
});

//# sourceMappingURL=athens.core.js.map
