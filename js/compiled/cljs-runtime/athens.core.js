goog.provide('athens.core');
var module$node_modules$$sentry$integrations$dist$index=shadow.js.require("module$node_modules$$sentry$integrations$dist$index", {});
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
var module$node_modules$$sentry$tracing$dist$index=shadow.js.require("module$node_modules$$sentry$tracing$dist$index", {});
/**
 * @define {string}
 */
athens.core.SENTRY_DSN = goog.define("athens.core.SENTRY_DSN","");
athens.core.dev_setup = (function athens$core$dev_setup(){
if(athens.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
athens.core.mount_root = (function athens$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

athens.router.init_routes_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.main_panel], null),goog.dom.getElement("app"));
});
/**
 * Checks localStorage to see if sentry is on. Sentry is disabled/enabled in settings along with Posthog.
 */
athens.core.sentry_on_QMARK_ = (function athens$core$sentry_on_QMARK_(){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("off",localStorage.getItem("sentry"));
});
/**
 * Two checks for sentry: once on init and once on beforeSend.
 */
athens.core.init_sentry = (function athens$core$init_sentry(){
if(athens.core.sentry_on_QMARK_()){
return module$node_modules$$sentry$react$dist$index.init(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),athens.core.SENTRY_DSN,new cljs.core.Keyword(null,"release","release",-1534371381),["athens@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.util.athens_version())].join(''),new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$$sentry$tracing$dist$index.Integrations.BrowserTracing()),(new module$node_modules$$sentry$integrations$dist$index.CaptureConsole(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"levels","levels",-950747887),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["warn","error","debug","assert"], null)], null))))], null),new cljs.core.Keyword(null,"environment","environment",-666037640),((athens.config.debug_QMARK_)?"development":"production"),new cljs.core.Keyword(null,"beforeSend","beforeSend",-1560616376),(function (p1__64177_SHARP_){
if(athens.core.sentry_on_QMARK_()){
return p1__64177_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),1.0], null)));
} else {
return null;
}
});
/**
 * Alerts user if there's an uncaught error.
 *   https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror 
 */
athens.core.set_global_alert_BANG_ = (function athens$core$set_global_alert_BANG_(){
return (window.onerror = (function (message,source,lineno,colno,error){
return alert(["message=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\nsource=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source),"\nlineno=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lineno),"\ncolno=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(colno),"\nerror=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''));
}));
});
athens.core.init_ipcRenderer = (function athens$core$init_ipcRenderer(){
if(athens.util.electron_QMARK_()){
var ipcRenderer = require("electron").ipcRenderer;
var update_available_QMARK_ = ipcRenderer.sendSync("check-update","renderer");
if(cljs.core.truth_(update_available_QMARK_)){
if(cljs.core.truth_(window.confirm("Update available. Would you like to update and restart to the latest version?"))){
return ipcRenderer.sendSync("confirm-update");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
athens.core.init = (function athens$core$init(){
athens.core.set_global_alert_BANG_();

athens.core.init_sentry();

athens.core.init_ipcRenderer();

athens.style.init();

stylefy.core.tag("body",athens.style.app_styles);

athens.listeners.init();

if(athens.util.electron_QMARK_()){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boot","desktop","boot/desktop",1497232156)], null));
} else {
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boot","web","boot/web",-657960887)], null));
}

athens.core.dev_setup();

return athens.core.mount_root();
});

//# sourceMappingURL=athens.core.js.map
