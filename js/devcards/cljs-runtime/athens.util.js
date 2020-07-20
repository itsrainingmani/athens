goog.provide('athens.util');
goog.require('cljs.core');
athens.util.gen_block_uid = (function athens$util$gen_block_uid(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(27));
});
athens.util.now_ts = (function athens$util$now_ts(){
return (new Date()).getTime();
});
athens.util.scroll_if_needed = (function athens$util$scroll_if_needed(element,container){
if((element.offsetTop < container.scrollTop)){
return (container.scrollTop = element.offsetTop);
} else {
var offsetBottom = (element.offsetTop + element.offsetHeight);
var scrollBottom = (container.scrollTop + container.offsetHeight);
if((scrollBottom < offsetBottom)){
return (container.scrollTop = (offsetBottom - container.offsetHeight));
} else {
return null;
}
}
});
athens.util.mouse_offset = (function athens$util$mouse_offset(e){
var rect = e.target.getBoundingClientRect();
var offset_x = (e.pageX - rect.left);
var offset_y = (e.pageY - rect.top);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),offset_x,new cljs.core.Keyword(null,"y","y",-1757859776),offset_y], null);
});
athens.util.vertical_center = (function athens$util$vertical_center(el){
var rect = el.getBoundingClientRect();
return ((rect.bottom - rect.top) / (2));
});
/**
 * Checks if any part of the element is above or below the container's bounding rect
 */
athens.util.is_beyond_rect_QMARK_ = (function athens$util$is_beyond_rect_QMARK_(element,container){
var el_box = element.getBoundingClientRect();
var cont_box = container.getBoundingClientRect();
return (((el_box.bottom > cont_box.bottom)) || ((el_box.top < cont_box.top)));
});

//# sourceMappingURL=athens.util.js.map
