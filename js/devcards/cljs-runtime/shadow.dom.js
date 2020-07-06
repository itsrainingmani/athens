goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47629 = coll;
var G__47630 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47629,G__47630) : shadow.dom.lazy_native_coll_seq.call(null,G__47629,G__47630));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47671 = arguments.length;
switch (G__47671) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47681 = arguments.length;
switch (G__47681) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47687 = arguments.length;
switch (G__47687) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47690 = arguments.length;
switch (G__47690) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47701 = arguments.length;
switch (G__47701) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47702 = document;
var G__47703 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47702,G__47703);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47704 = shadow.dom.dom_node(parent);
var G__47705 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47704,G__47705);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47710 = shadow.dom.dom_node(el);
var G__47711 = cls;
return goog.dom.classlist.add(G__47710,G__47711);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47714 = shadow.dom.dom_node(el);
var G__47715 = cls;
return goog.dom.classlist.remove(G__47714,G__47715);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47718 = arguments.length;
switch (G__47718) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47719 = shadow.dom.dom_node(el);
var G__47720 = cls;
return goog.dom.classlist.toggle(G__47719,G__47720);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47725){if((e47725 instanceof Object)){
var e = e47725;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47725;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47733 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47734 = null;
var count__47735 = (0);
var i__47736 = (0);
while(true){
if((i__47736 < count__47735)){
var el = chunk__47734.cljs$core$IIndexed$_nth$arity$2(null,i__47736);
var handler_48289__$1 = ((function (seq__47733,chunk__47734,count__47735,i__47736,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47733,chunk__47734,count__47735,i__47736,el))
;
var G__47746_48290 = el;
var G__47747_48291 = cljs.core.name(ev);
var G__47748_48292 = handler_48289__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47746_48290,G__47747_48291,G__47748_48292) : shadow.dom.dom_listen.call(null,G__47746_48290,G__47747_48291,G__47748_48292));


var G__48293 = seq__47733;
var G__48294 = chunk__47734;
var G__48295 = count__47735;
var G__48296 = (i__47736 + (1));
seq__47733 = G__48293;
chunk__47734 = G__48294;
count__47735 = G__48295;
i__47736 = G__48296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47733);
if(temp__5735__auto__){
var seq__47733__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47733__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47733__$1);
var G__48297 = cljs.core.chunk_rest(seq__47733__$1);
var G__48298 = c__4609__auto__;
var G__48299 = cljs.core.count(c__4609__auto__);
var G__48300 = (0);
seq__47733 = G__48297;
chunk__47734 = G__48298;
count__47735 = G__48299;
i__47736 = G__48300;
continue;
} else {
var el = cljs.core.first(seq__47733__$1);
var handler_48302__$1 = ((function (seq__47733,chunk__47734,count__47735,i__47736,el,seq__47733__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47733,chunk__47734,count__47735,i__47736,el,seq__47733__$1,temp__5735__auto__))
;
var G__47751_48304 = el;
var G__47752_48305 = cljs.core.name(ev);
var G__47753_48306 = handler_48302__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47751_48304,G__47752_48305,G__47753_48306) : shadow.dom.dom_listen.call(null,G__47751_48304,G__47752_48305,G__47753_48306));


var G__48307 = cljs.core.next(seq__47733__$1);
var G__48308 = null;
var G__48309 = (0);
var G__48310 = (0);
seq__47733 = G__48307;
chunk__47734 = G__48308;
count__47735 = G__48309;
i__47736 = G__48310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47757 = arguments.length;
switch (G__47757) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47761 = shadow.dom.dom_node(el);
var G__47762 = cljs.core.name(ev);
var G__47763 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47761,G__47762,G__47763) : shadow.dom.dom_listen.call(null,G__47761,G__47762,G__47763));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47768 = shadow.dom.dom_node(el);
var G__47769 = cljs.core.name(ev);
var G__47770 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47768,G__47769,G__47770) : shadow.dom.dom_listen_remove.call(null,G__47768,G__47769,G__47770));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47773 = cljs.core.seq(events);
var chunk__47774 = null;
var count__47775 = (0);
var i__47776 = (0);
while(true){
if((i__47776 < count__47775)){
var vec__47784 = chunk__47774.cljs$core$IIndexed$_nth$arity$2(null,i__47776);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47784,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48316 = seq__47773;
var G__48317 = chunk__47774;
var G__48318 = count__47775;
var G__48319 = (i__47776 + (1));
seq__47773 = G__48316;
chunk__47774 = G__48317;
count__47775 = G__48318;
i__47776 = G__48319;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47773);
if(temp__5735__auto__){
var seq__47773__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47773__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47773__$1);
var G__48321 = cljs.core.chunk_rest(seq__47773__$1);
var G__48322 = c__4609__auto__;
var G__48323 = cljs.core.count(c__4609__auto__);
var G__48324 = (0);
seq__47773 = G__48321;
chunk__47774 = G__48322;
count__47775 = G__48323;
i__47776 = G__48324;
continue;
} else {
var vec__47788 = cljs.core.first(seq__47773__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47788,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47788,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48325 = cljs.core.next(seq__47773__$1);
var G__48326 = null;
var G__48327 = (0);
var G__48328 = (0);
seq__47773 = G__48325;
chunk__47774 = G__48326;
count__47775 = G__48327;
i__47776 = G__48328;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47791 = cljs.core.seq(styles);
var chunk__47792 = null;
var count__47793 = (0);
var i__47794 = (0);
while(true){
if((i__47794 < count__47793)){
var vec__47808 = chunk__47792.cljs$core$IIndexed$_nth$arity$2(null,i__47794);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47808,(1),null);
var G__47811_48329 = dom;
var G__47812_48330 = cljs.core.name(k);
var G__47813_48331 = (((v == null))?"":v);
goog.style.setStyle(G__47811_48329,G__47812_48330,G__47813_48331);


var G__48332 = seq__47791;
var G__48333 = chunk__47792;
var G__48334 = count__47793;
var G__48335 = (i__47794 + (1));
seq__47791 = G__48332;
chunk__47792 = G__48333;
count__47793 = G__48334;
i__47794 = G__48335;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47791);
if(temp__5735__auto__){
var seq__47791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47791__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47791__$1);
var G__48338 = cljs.core.chunk_rest(seq__47791__$1);
var G__48339 = c__4609__auto__;
var G__48340 = cljs.core.count(c__4609__auto__);
var G__48341 = (0);
seq__47791 = G__48338;
chunk__47792 = G__48339;
count__47793 = G__48340;
i__47794 = G__48341;
continue;
} else {
var vec__47816 = cljs.core.first(seq__47791__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(1),null);
var G__47819_48342 = dom;
var G__47820_48343 = cljs.core.name(k);
var G__47821_48344 = (((v == null))?"":v);
goog.style.setStyle(G__47819_48342,G__47820_48343,G__47821_48344);


var G__48345 = cljs.core.next(seq__47791__$1);
var G__48346 = null;
var G__48347 = (0);
var G__48348 = (0);
seq__47791 = G__48345;
chunk__47792 = G__48346;
count__47793 = G__48347;
i__47794 = G__48348;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47829_48350 = key;
var G__47829_48351__$1 = (((G__47829_48350 instanceof cljs.core.Keyword))?G__47829_48350.fqn:null);
switch (G__47829_48351__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48355 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48355,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48355,"aria-");
}
})())){
el.setAttribute(ks_48355,value);
} else {
(el[ks_48355] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47837 = shadow.dom.dom_node(el);
var G__47838 = cls;
return goog.dom.classlist.contains(G__47837,G__47838);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47845){
var map__47846 = p__47845;
var map__47846__$1 = (((((!((map__47846 == null))))?(((((map__47846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47846):map__47846);
var props = map__47846__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47846__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47849 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47849,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47849,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47849,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47852 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47852,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47852;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47856 = arguments.length;
switch (G__47856) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47863){
var vec__47864 = p__47863;
var seq__47865 = cljs.core.seq(vec__47864);
var first__47866 = cljs.core.first(seq__47865);
var seq__47865__$1 = cljs.core.next(seq__47865);
var nn = first__47866;
var first__47866__$1 = cljs.core.first(seq__47865__$1);
var seq__47865__$2 = cljs.core.next(seq__47865__$1);
var np = first__47866__$1;
var nc = seq__47865__$2;
var node = vec__47864;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47868 = nn;
var G__47869 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47868,G__47869) : create_fn.call(null,G__47868,G__47869));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47871 = nn;
var G__47872 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47871,G__47872) : create_fn.call(null,G__47871,G__47872));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47873 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47873,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47873,(1),null);
var seq__47877_48383 = cljs.core.seq(node_children);
var chunk__47878_48384 = null;
var count__47879_48385 = (0);
var i__47880_48386 = (0);
while(true){
if((i__47880_48386 < count__47879_48385)){
var child_struct_48387 = chunk__47878_48384.cljs$core$IIndexed$_nth$arity$2(null,i__47880_48386);
var children_48388 = shadow.dom.dom_node(child_struct_48387);
if(cljs.core.seq_QMARK_(children_48388)){
var seq__47900_48389 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48388));
var chunk__47902_48390 = null;
var count__47903_48391 = (0);
var i__47904_48392 = (0);
while(true){
if((i__47904_48392 < count__47903_48391)){
var child_48394 = chunk__47902_48390.cljs$core$IIndexed$_nth$arity$2(null,i__47904_48392);
if(cljs.core.truth_(child_48394)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48394);


var G__48396 = seq__47900_48389;
var G__48397 = chunk__47902_48390;
var G__48398 = count__47903_48391;
var G__48399 = (i__47904_48392 + (1));
seq__47900_48389 = G__48396;
chunk__47902_48390 = G__48397;
count__47903_48391 = G__48398;
i__47904_48392 = G__48399;
continue;
} else {
var G__48401 = seq__47900_48389;
var G__48402 = chunk__47902_48390;
var G__48403 = count__47903_48391;
var G__48404 = (i__47904_48392 + (1));
seq__47900_48389 = G__48401;
chunk__47902_48390 = G__48402;
count__47903_48391 = G__48403;
i__47904_48392 = G__48404;
continue;
}
} else {
var temp__5735__auto___48405 = cljs.core.seq(seq__47900_48389);
if(temp__5735__auto___48405){
var seq__47900_48406__$1 = temp__5735__auto___48405;
if(cljs.core.chunked_seq_QMARK_(seq__47900_48406__$1)){
var c__4609__auto___48411 = cljs.core.chunk_first(seq__47900_48406__$1);
var G__48412 = cljs.core.chunk_rest(seq__47900_48406__$1);
var G__48413 = c__4609__auto___48411;
var G__48414 = cljs.core.count(c__4609__auto___48411);
var G__48415 = (0);
seq__47900_48389 = G__48412;
chunk__47902_48390 = G__48413;
count__47903_48391 = G__48414;
i__47904_48392 = G__48415;
continue;
} else {
var child_48416 = cljs.core.first(seq__47900_48406__$1);
if(cljs.core.truth_(child_48416)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48416);


var G__48417 = cljs.core.next(seq__47900_48406__$1);
var G__48418 = null;
var G__48419 = (0);
var G__48420 = (0);
seq__47900_48389 = G__48417;
chunk__47902_48390 = G__48418;
count__47903_48391 = G__48419;
i__47904_48392 = G__48420;
continue;
} else {
var G__48421 = cljs.core.next(seq__47900_48406__$1);
var G__48422 = null;
var G__48423 = (0);
var G__48424 = (0);
seq__47900_48389 = G__48421;
chunk__47902_48390 = G__48422;
count__47903_48391 = G__48423;
i__47904_48392 = G__48424;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48388);
}


var G__48425 = seq__47877_48383;
var G__48426 = chunk__47878_48384;
var G__48427 = count__47879_48385;
var G__48428 = (i__47880_48386 + (1));
seq__47877_48383 = G__48425;
chunk__47878_48384 = G__48426;
count__47879_48385 = G__48427;
i__47880_48386 = G__48428;
continue;
} else {
var temp__5735__auto___48429 = cljs.core.seq(seq__47877_48383);
if(temp__5735__auto___48429){
var seq__47877_48430__$1 = temp__5735__auto___48429;
if(cljs.core.chunked_seq_QMARK_(seq__47877_48430__$1)){
var c__4609__auto___48431 = cljs.core.chunk_first(seq__47877_48430__$1);
var G__48432 = cljs.core.chunk_rest(seq__47877_48430__$1);
var G__48433 = c__4609__auto___48431;
var G__48434 = cljs.core.count(c__4609__auto___48431);
var G__48435 = (0);
seq__47877_48383 = G__48432;
chunk__47878_48384 = G__48433;
count__47879_48385 = G__48434;
i__47880_48386 = G__48435;
continue;
} else {
var child_struct_48436 = cljs.core.first(seq__47877_48430__$1);
var children_48437 = shadow.dom.dom_node(child_struct_48436);
if(cljs.core.seq_QMARK_(children_48437)){
var seq__47912_48438 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48437));
var chunk__47914_48439 = null;
var count__47915_48440 = (0);
var i__47916_48441 = (0);
while(true){
if((i__47916_48441 < count__47915_48440)){
var child_48445 = chunk__47914_48439.cljs$core$IIndexed$_nth$arity$2(null,i__47916_48441);
if(cljs.core.truth_(child_48445)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48445);


var G__48446 = seq__47912_48438;
var G__48447 = chunk__47914_48439;
var G__48448 = count__47915_48440;
var G__48449 = (i__47916_48441 + (1));
seq__47912_48438 = G__48446;
chunk__47914_48439 = G__48447;
count__47915_48440 = G__48448;
i__47916_48441 = G__48449;
continue;
} else {
var G__48450 = seq__47912_48438;
var G__48451 = chunk__47914_48439;
var G__48452 = count__47915_48440;
var G__48453 = (i__47916_48441 + (1));
seq__47912_48438 = G__48450;
chunk__47914_48439 = G__48451;
count__47915_48440 = G__48452;
i__47916_48441 = G__48453;
continue;
}
} else {
var temp__5735__auto___48454__$1 = cljs.core.seq(seq__47912_48438);
if(temp__5735__auto___48454__$1){
var seq__47912_48455__$1 = temp__5735__auto___48454__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47912_48455__$1)){
var c__4609__auto___48457 = cljs.core.chunk_first(seq__47912_48455__$1);
var G__48458 = cljs.core.chunk_rest(seq__47912_48455__$1);
var G__48459 = c__4609__auto___48457;
var G__48460 = cljs.core.count(c__4609__auto___48457);
var G__48461 = (0);
seq__47912_48438 = G__48458;
chunk__47914_48439 = G__48459;
count__47915_48440 = G__48460;
i__47916_48441 = G__48461;
continue;
} else {
var child_48462 = cljs.core.first(seq__47912_48455__$1);
if(cljs.core.truth_(child_48462)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48462);


var G__48463 = cljs.core.next(seq__47912_48455__$1);
var G__48464 = null;
var G__48465 = (0);
var G__48466 = (0);
seq__47912_48438 = G__48463;
chunk__47914_48439 = G__48464;
count__47915_48440 = G__48465;
i__47916_48441 = G__48466;
continue;
} else {
var G__48467 = cljs.core.next(seq__47912_48455__$1);
var G__48468 = null;
var G__48469 = (0);
var G__48470 = (0);
seq__47912_48438 = G__48467;
chunk__47914_48439 = G__48468;
count__47915_48440 = G__48469;
i__47916_48441 = G__48470;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48437);
}


var G__48472 = cljs.core.next(seq__47877_48430__$1);
var G__48473 = null;
var G__48474 = (0);
var G__48475 = (0);
seq__47877_48383 = G__48472;
chunk__47878_48384 = G__48473;
count__47879_48385 = G__48474;
i__47880_48386 = G__48475;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__47921 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__47921);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47927 = cljs.core.seq(node);
var chunk__47928 = null;
var count__47929 = (0);
var i__47930 = (0);
while(true){
if((i__47930 < count__47929)){
var n = chunk__47928.cljs$core$IIndexed$_nth$arity$2(null,i__47930);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48483 = seq__47927;
var G__48484 = chunk__47928;
var G__48485 = count__47929;
var G__48486 = (i__47930 + (1));
seq__47927 = G__48483;
chunk__47928 = G__48484;
count__47929 = G__48485;
i__47930 = G__48486;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47927);
if(temp__5735__auto__){
var seq__47927__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47927__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47927__$1);
var G__48488 = cljs.core.chunk_rest(seq__47927__$1);
var G__48489 = c__4609__auto__;
var G__48490 = cljs.core.count(c__4609__auto__);
var G__48491 = (0);
seq__47927 = G__48488;
chunk__47928 = G__48489;
count__47929 = G__48490;
i__47930 = G__48491;
continue;
} else {
var n = cljs.core.first(seq__47927__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48493 = cljs.core.next(seq__47927__$1);
var G__48494 = null;
var G__48495 = (0);
var G__48496 = (0);
seq__47927 = G__48493;
chunk__47928 = G__48494;
count__47929 = G__48495;
i__47930 = G__48496;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__47934 = shadow.dom.dom_node(new$);
var G__47935 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__47934,G__47935);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47938 = arguments.length;
switch (G__47938) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47941 = arguments.length;
switch (G__47941) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47950 = arguments.length;
switch (G__47950) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48508 = arguments.length;
var i__4790__auto___48509 = (0);
while(true){
if((i__4790__auto___48509 < len__4789__auto___48508)){
args__4795__auto__.push((arguments[i__4790__auto___48509]));

var G__48510 = (i__4790__auto___48509 + (1));
i__4790__auto___48509 = G__48510;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47963_48511 = cljs.core.seq(nodes);
var chunk__47964_48512 = null;
var count__47965_48513 = (0);
var i__47966_48514 = (0);
while(true){
if((i__47966_48514 < count__47965_48513)){
var node_48515 = chunk__47964_48512.cljs$core$IIndexed$_nth$arity$2(null,i__47966_48514);
fragment.appendChild(shadow.dom._to_dom(node_48515));


var G__48516 = seq__47963_48511;
var G__48517 = chunk__47964_48512;
var G__48518 = count__47965_48513;
var G__48519 = (i__47966_48514 + (1));
seq__47963_48511 = G__48516;
chunk__47964_48512 = G__48517;
count__47965_48513 = G__48518;
i__47966_48514 = G__48519;
continue;
} else {
var temp__5735__auto___48521 = cljs.core.seq(seq__47963_48511);
if(temp__5735__auto___48521){
var seq__47963_48522__$1 = temp__5735__auto___48521;
if(cljs.core.chunked_seq_QMARK_(seq__47963_48522__$1)){
var c__4609__auto___48523 = cljs.core.chunk_first(seq__47963_48522__$1);
var G__48527 = cljs.core.chunk_rest(seq__47963_48522__$1);
var G__48528 = c__4609__auto___48523;
var G__48529 = cljs.core.count(c__4609__auto___48523);
var G__48530 = (0);
seq__47963_48511 = G__48527;
chunk__47964_48512 = G__48528;
count__47965_48513 = G__48529;
i__47966_48514 = G__48530;
continue;
} else {
var node_48531 = cljs.core.first(seq__47963_48522__$1);
fragment.appendChild(shadow.dom._to_dom(node_48531));


var G__48532 = cljs.core.next(seq__47963_48522__$1);
var G__48533 = null;
var G__48534 = (0);
var G__48535 = (0);
seq__47963_48511 = G__48532;
chunk__47964_48512 = G__48533;
count__47965_48513 = G__48534;
i__47966_48514 = G__48535;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47960){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47960));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47970_48539 = cljs.core.seq(scripts);
var chunk__47971_48540 = null;
var count__47972_48541 = (0);
var i__47973_48542 = (0);
while(true){
if((i__47973_48542 < count__47972_48541)){
var vec__47982_48543 = chunk__47971_48540.cljs$core$IIndexed$_nth$arity$2(null,i__47973_48542);
var script_tag_48544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47982_48543,(0),null);
var script_body_48545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47982_48543,(1),null);
eval(script_body_48545);


var G__48546 = seq__47970_48539;
var G__48547 = chunk__47971_48540;
var G__48548 = count__47972_48541;
var G__48549 = (i__47973_48542 + (1));
seq__47970_48539 = G__48546;
chunk__47971_48540 = G__48547;
count__47972_48541 = G__48548;
i__47973_48542 = G__48549;
continue;
} else {
var temp__5735__auto___48550 = cljs.core.seq(seq__47970_48539);
if(temp__5735__auto___48550){
var seq__47970_48551__$1 = temp__5735__auto___48550;
if(cljs.core.chunked_seq_QMARK_(seq__47970_48551__$1)){
var c__4609__auto___48552 = cljs.core.chunk_first(seq__47970_48551__$1);
var G__48554 = cljs.core.chunk_rest(seq__47970_48551__$1);
var G__48555 = c__4609__auto___48552;
var G__48556 = cljs.core.count(c__4609__auto___48552);
var G__48557 = (0);
seq__47970_48539 = G__48554;
chunk__47971_48540 = G__48555;
count__47972_48541 = G__48556;
i__47973_48542 = G__48557;
continue;
} else {
var vec__47986_48558 = cljs.core.first(seq__47970_48551__$1);
var script_tag_48559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47986_48558,(0),null);
var script_body_48560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47986_48558,(1),null);
eval(script_body_48560);


var G__48562 = cljs.core.next(seq__47970_48551__$1);
var G__48563 = null;
var G__48565 = (0);
var G__48566 = (0);
seq__47970_48539 = G__48562;
chunk__47971_48540 = G__48563;
count__47972_48541 = G__48565;
i__47973_48542 = G__48566;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47991){
var vec__47992 = p__47991;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47992,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47992,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__47999 = shadow.dom.dom_node(el);
var G__48000 = cls;
return goog.dom.getAncestorByClass(G__47999,G__48000);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48002 = arguments.length;
switch (G__48002) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48003 = shadow.dom.dom_node(el);
var G__48004 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48003,G__48004);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48005 = shadow.dom.dom_node(el);
var G__48006 = cljs.core.name(tag);
var G__48007 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48005,G__48006,G__48007);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48010 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48010);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48011 = shadow.dom.dom_node(dom);
var G__48012 = value;
return goog.dom.forms.setValue(G__48011,G__48012);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48017 = cljs.core.seq(style_keys);
var chunk__48018 = null;
var count__48019 = (0);
var i__48020 = (0);
while(true){
if((i__48020 < count__48019)){
var it = chunk__48018.cljs$core$IIndexed$_nth$arity$2(null,i__48020);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48588 = seq__48017;
var G__48589 = chunk__48018;
var G__48590 = count__48019;
var G__48591 = (i__48020 + (1));
seq__48017 = G__48588;
chunk__48018 = G__48589;
count__48019 = G__48590;
i__48020 = G__48591;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48017);
if(temp__5735__auto__){
var seq__48017__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48017__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48017__$1);
var G__48592 = cljs.core.chunk_rest(seq__48017__$1);
var G__48593 = c__4609__auto__;
var G__48594 = cljs.core.count(c__4609__auto__);
var G__48595 = (0);
seq__48017 = G__48592;
chunk__48018 = G__48593;
count__48019 = G__48594;
i__48020 = G__48595;
continue;
} else {
var it = cljs.core.first(seq__48017__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48597 = cljs.core.next(seq__48017__$1);
var G__48598 = null;
var G__48599 = (0);
var G__48600 = (0);
seq__48017 = G__48597;
chunk__48018 = G__48598;
count__48019 = G__48599;
i__48020 = G__48600;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48031,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48039 = k48031;
var G__48039__$1 = (((G__48039 instanceof cljs.core.Keyword))?G__48039.fqn:null);
switch (G__48039__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48031,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48040){
var vec__48041 = p__48040;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48041,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48041,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48030){
var self__ = this;
var G__48030__$1 = this;
return (new cljs.core.RecordIter((0),G__48030__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48044 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48044(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48032,other48033){
var self__ = this;
var this48032__$1 = this;
return (((!((other48033 == null)))) && ((this48032__$1.constructor === other48033.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48032__$1.x,other48033.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48032__$1.y,other48033.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48032__$1.__extmap,other48033.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48030){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48045 = cljs.core.keyword_identical_QMARK_;
var expr__48046 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48048 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48049 = expr__48046;
return (pred__48045.cljs$core$IFn$_invoke$arity$2 ? pred__48045.cljs$core$IFn$_invoke$arity$2(G__48048,G__48049) : pred__48045.call(null,G__48048,G__48049));
})())){
return (new shadow.dom.Coordinate(G__48030,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48050 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48051 = expr__48046;
return (pred__48045.cljs$core$IFn$_invoke$arity$2 ? pred__48045.cljs$core$IFn$_invoke$arity$2(G__48050,G__48051) : pred__48045.call(null,G__48050,G__48051));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48030,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48030),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48030){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48030,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48035){
var extmap__4478__auto__ = (function (){var G__48052 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48035,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48035)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48052);
} else {
return G__48052;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48035),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48035),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48053 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48053);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48055 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48055);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48057 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48057);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48061,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48068 = k48061;
var G__48068__$1 = (((G__48068 instanceof cljs.core.Keyword))?G__48068.fqn:null);
switch (G__48068__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48061,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48071){
var vec__48072 = p__48071;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48060){
var self__ = this;
var G__48060__$1 = this;
return (new cljs.core.RecordIter((0),G__48060__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48080 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48080(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48062,other48063){
var self__ = this;
var this48062__$1 = this;
return (((!((other48063 == null)))) && ((this48062__$1.constructor === other48063.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48062__$1.w,other48063.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48062__$1.h,other48063.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48062__$1.__extmap,other48063.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48060){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48085 = cljs.core.keyword_identical_QMARK_;
var expr__48086 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48088 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48089 = expr__48086;
return (pred__48085.cljs$core$IFn$_invoke$arity$2 ? pred__48085.cljs$core$IFn$_invoke$arity$2(G__48088,G__48089) : pred__48085.call(null,G__48088,G__48089));
})())){
return (new shadow.dom.Size(G__48060,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48091 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48092 = expr__48086;
return (pred__48085.cljs$core$IFn$_invoke$arity$2 ? pred__48085.cljs$core$IFn$_invoke$arity$2(G__48091,G__48092) : pred__48085.call(null,G__48091,G__48092));
})())){
return (new shadow.dom.Size(self__.w,G__48060,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48060),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48060){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48060,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48064){
var extmap__4478__auto__ = (function (){var G__48098 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48064,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48064)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48098);
} else {
return G__48098;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48064),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48064),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48101 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48101);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__48666 = (i + (1));
var G__48667 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48666;
ret = G__48667;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48115){
var vec__48117 = p__48115;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48124 = arguments.length;
switch (G__48124) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48132_48675 = new_node;
var G__48133_48676 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48132_48675,G__48133_48676);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48136_48678 = new_node;
var G__48137_48679 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48136_48678,G__48137_48679);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48680 = ps;
var G__48681 = (i + (1));
el__$1 = G__48680;
i = G__48681;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48141 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48141);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48142 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48142);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48143 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48143);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48144 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48144,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48144,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48144,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48150_48688 = cljs.core.seq(props);
var chunk__48151_48689 = null;
var count__48152_48690 = (0);
var i__48153_48691 = (0);
while(true){
if((i__48153_48691 < count__48152_48690)){
var vec__48164_48693 = chunk__48151_48689.cljs$core$IIndexed$_nth$arity$2(null,i__48153_48691);
var k_48694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48164_48693,(0),null);
var v_48695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48164_48693,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48694);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48694),v_48695);


var G__48697 = seq__48150_48688;
var G__48698 = chunk__48151_48689;
var G__48699 = count__48152_48690;
var G__48700 = (i__48153_48691 + (1));
seq__48150_48688 = G__48697;
chunk__48151_48689 = G__48698;
count__48152_48690 = G__48699;
i__48153_48691 = G__48700;
continue;
} else {
var temp__5735__auto___48701 = cljs.core.seq(seq__48150_48688);
if(temp__5735__auto___48701){
var seq__48150_48702__$1 = temp__5735__auto___48701;
if(cljs.core.chunked_seq_QMARK_(seq__48150_48702__$1)){
var c__4609__auto___48703 = cljs.core.chunk_first(seq__48150_48702__$1);
var G__48704 = cljs.core.chunk_rest(seq__48150_48702__$1);
var G__48705 = c__4609__auto___48703;
var G__48706 = cljs.core.count(c__4609__auto___48703);
var G__48707 = (0);
seq__48150_48688 = G__48704;
chunk__48151_48689 = G__48705;
count__48152_48690 = G__48706;
i__48153_48691 = G__48707;
continue;
} else {
var vec__48167_48708 = cljs.core.first(seq__48150_48702__$1);
var k_48709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167_48708,(0),null);
var v_48710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167_48708,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48709);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48709),v_48710);


var G__48713 = cljs.core.next(seq__48150_48702__$1);
var G__48714 = null;
var G__48715 = (0);
var G__48716 = (0);
seq__48150_48688 = G__48713;
chunk__48151_48689 = G__48714;
count__48152_48690 = G__48715;
i__48153_48691 = G__48716;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48171 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48171,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48171,(1),null);
var seq__48174_48719 = cljs.core.seq(node_children);
var chunk__48176_48720 = null;
var count__48177_48721 = (0);
var i__48178_48722 = (0);
while(true){
if((i__48178_48722 < count__48177_48721)){
var child_struct_48723 = chunk__48176_48720.cljs$core$IIndexed$_nth$arity$2(null,i__48178_48722);
if((!((child_struct_48723 == null)))){
if(typeof child_struct_48723 === 'string'){
var text_48724 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48724),child_struct_48723].join(''));
} else {
var children_48725 = shadow.dom.svg_node(child_struct_48723);
if(cljs.core.seq_QMARK_(children_48725)){
var seq__48198_48726 = cljs.core.seq(children_48725);
var chunk__48200_48727 = null;
var count__48201_48728 = (0);
var i__48202_48729 = (0);
while(true){
if((i__48202_48729 < count__48201_48728)){
var child_48730 = chunk__48200_48727.cljs$core$IIndexed$_nth$arity$2(null,i__48202_48729);
if(cljs.core.truth_(child_48730)){
node.appendChild(child_48730);


var G__48731 = seq__48198_48726;
var G__48732 = chunk__48200_48727;
var G__48733 = count__48201_48728;
var G__48734 = (i__48202_48729 + (1));
seq__48198_48726 = G__48731;
chunk__48200_48727 = G__48732;
count__48201_48728 = G__48733;
i__48202_48729 = G__48734;
continue;
} else {
var G__48739 = seq__48198_48726;
var G__48740 = chunk__48200_48727;
var G__48741 = count__48201_48728;
var G__48742 = (i__48202_48729 + (1));
seq__48198_48726 = G__48739;
chunk__48200_48727 = G__48740;
count__48201_48728 = G__48741;
i__48202_48729 = G__48742;
continue;
}
} else {
var temp__5735__auto___48743 = cljs.core.seq(seq__48198_48726);
if(temp__5735__auto___48743){
var seq__48198_48744__$1 = temp__5735__auto___48743;
if(cljs.core.chunked_seq_QMARK_(seq__48198_48744__$1)){
var c__4609__auto___48745 = cljs.core.chunk_first(seq__48198_48744__$1);
var G__48746 = cljs.core.chunk_rest(seq__48198_48744__$1);
var G__48747 = c__4609__auto___48745;
var G__48748 = cljs.core.count(c__4609__auto___48745);
var G__48749 = (0);
seq__48198_48726 = G__48746;
chunk__48200_48727 = G__48747;
count__48201_48728 = G__48748;
i__48202_48729 = G__48749;
continue;
} else {
var child_48750 = cljs.core.first(seq__48198_48744__$1);
if(cljs.core.truth_(child_48750)){
node.appendChild(child_48750);


var G__48751 = cljs.core.next(seq__48198_48744__$1);
var G__48752 = null;
var G__48753 = (0);
var G__48754 = (0);
seq__48198_48726 = G__48751;
chunk__48200_48727 = G__48752;
count__48201_48728 = G__48753;
i__48202_48729 = G__48754;
continue;
} else {
var G__48755 = cljs.core.next(seq__48198_48744__$1);
var G__48756 = null;
var G__48757 = (0);
var G__48758 = (0);
seq__48198_48726 = G__48755;
chunk__48200_48727 = G__48756;
count__48201_48728 = G__48757;
i__48202_48729 = G__48758;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48725);
}
}


var G__48759 = seq__48174_48719;
var G__48760 = chunk__48176_48720;
var G__48761 = count__48177_48721;
var G__48762 = (i__48178_48722 + (1));
seq__48174_48719 = G__48759;
chunk__48176_48720 = G__48760;
count__48177_48721 = G__48761;
i__48178_48722 = G__48762;
continue;
} else {
var G__48763 = seq__48174_48719;
var G__48764 = chunk__48176_48720;
var G__48765 = count__48177_48721;
var G__48766 = (i__48178_48722 + (1));
seq__48174_48719 = G__48763;
chunk__48176_48720 = G__48764;
count__48177_48721 = G__48765;
i__48178_48722 = G__48766;
continue;
}
} else {
var temp__5735__auto___48767 = cljs.core.seq(seq__48174_48719);
if(temp__5735__auto___48767){
var seq__48174_48768__$1 = temp__5735__auto___48767;
if(cljs.core.chunked_seq_QMARK_(seq__48174_48768__$1)){
var c__4609__auto___48769 = cljs.core.chunk_first(seq__48174_48768__$1);
var G__48770 = cljs.core.chunk_rest(seq__48174_48768__$1);
var G__48771 = c__4609__auto___48769;
var G__48772 = cljs.core.count(c__4609__auto___48769);
var G__48773 = (0);
seq__48174_48719 = G__48770;
chunk__48176_48720 = G__48771;
count__48177_48721 = G__48772;
i__48178_48722 = G__48773;
continue;
} else {
var child_struct_48774 = cljs.core.first(seq__48174_48768__$1);
if((!((child_struct_48774 == null)))){
if(typeof child_struct_48774 === 'string'){
var text_48775 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48775),child_struct_48774].join(''));
} else {
var children_48776 = shadow.dom.svg_node(child_struct_48774);
if(cljs.core.seq_QMARK_(children_48776)){
var seq__48204_48777 = cljs.core.seq(children_48776);
var chunk__48206_48778 = null;
var count__48207_48779 = (0);
var i__48208_48780 = (0);
while(true){
if((i__48208_48780 < count__48207_48779)){
var child_48781 = chunk__48206_48778.cljs$core$IIndexed$_nth$arity$2(null,i__48208_48780);
if(cljs.core.truth_(child_48781)){
node.appendChild(child_48781);


var G__48782 = seq__48204_48777;
var G__48783 = chunk__48206_48778;
var G__48784 = count__48207_48779;
var G__48785 = (i__48208_48780 + (1));
seq__48204_48777 = G__48782;
chunk__48206_48778 = G__48783;
count__48207_48779 = G__48784;
i__48208_48780 = G__48785;
continue;
} else {
var G__48786 = seq__48204_48777;
var G__48787 = chunk__48206_48778;
var G__48788 = count__48207_48779;
var G__48789 = (i__48208_48780 + (1));
seq__48204_48777 = G__48786;
chunk__48206_48778 = G__48787;
count__48207_48779 = G__48788;
i__48208_48780 = G__48789;
continue;
}
} else {
var temp__5735__auto___48790__$1 = cljs.core.seq(seq__48204_48777);
if(temp__5735__auto___48790__$1){
var seq__48204_48791__$1 = temp__5735__auto___48790__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48204_48791__$1)){
var c__4609__auto___48792 = cljs.core.chunk_first(seq__48204_48791__$1);
var G__48793 = cljs.core.chunk_rest(seq__48204_48791__$1);
var G__48794 = c__4609__auto___48792;
var G__48795 = cljs.core.count(c__4609__auto___48792);
var G__48796 = (0);
seq__48204_48777 = G__48793;
chunk__48206_48778 = G__48794;
count__48207_48779 = G__48795;
i__48208_48780 = G__48796;
continue;
} else {
var child_48797 = cljs.core.first(seq__48204_48791__$1);
if(cljs.core.truth_(child_48797)){
node.appendChild(child_48797);


var G__48798 = cljs.core.next(seq__48204_48791__$1);
var G__48799 = null;
var G__48800 = (0);
var G__48801 = (0);
seq__48204_48777 = G__48798;
chunk__48206_48778 = G__48799;
count__48207_48779 = G__48800;
i__48208_48780 = G__48801;
continue;
} else {
var G__48802 = cljs.core.next(seq__48204_48791__$1);
var G__48803 = null;
var G__48804 = (0);
var G__48805 = (0);
seq__48204_48777 = G__48802;
chunk__48206_48778 = G__48803;
count__48207_48779 = G__48804;
i__48208_48780 = G__48805;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48776);
}
}


var G__48806 = cljs.core.next(seq__48174_48768__$1);
var G__48807 = null;
var G__48808 = (0);
var G__48809 = (0);
seq__48174_48719 = G__48806;
chunk__48176_48720 = G__48807;
count__48177_48721 = G__48808;
i__48178_48722 = G__48809;
continue;
} else {
var G__48811 = cljs.core.next(seq__48174_48768__$1);
var G__48812 = null;
var G__48813 = (0);
var G__48814 = (0);
seq__48174_48719 = G__48811;
chunk__48176_48720 = G__48812;
count__48177_48721 = G__48813;
i__48178_48722 = G__48814;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48210_48816 = shadow.dom._to_svg;
var G__48211_48817 = "string";
var G__48212_48818 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48210_48816,G__48211_48817,G__48212_48818);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48213_48820 = shadow.dom._to_svg;
var G__48214_48821 = "null";
var G__48215_48822 = (function (_){
return null;
});
goog.object.set(G__48213_48820,G__48214_48821,G__48215_48822);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48824 = arguments.length;
var i__4790__auto___48825 = (0);
while(true){
if((i__4790__auto___48825 < len__4789__auto___48824)){
args__4795__auto__.push((arguments[i__4790__auto___48825]));

var G__48827 = (i__4790__auto___48825 + (1));
i__4790__auto___48825 = G__48827;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48217){
var G__48218 = cljs.core.first(seq48217);
var seq48217__$1 = cljs.core.next(seq48217);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48218,seq48217__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48225 = arguments.length;
switch (G__48225) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48234_48838 = shadow.dom.dom_node(el);
var G__48235_48839 = cljs.core.name(event);
var G__48236_48840 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48234_48838,G__48235_48839,G__48236_48840) : shadow.dom.dom_listen.call(null,G__48234_48838,G__48235_48839,G__48236_48840));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46094__auto___48842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46095__auto__ = (function (){var switch__45998__auto__ = (function (state_48244){
var state_val_48245 = (state_48244[(1)]);
if((state_val_48245 === (1))){
var state_48244__$1 = state_48244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48244__$1,(2),once_or_cleanup);
} else {
if((state_val_48245 === (2))){
var inst_48241 = (state_48244[(2)]);
var inst_48242 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48244__$1 = (function (){var statearr_48246 = state_48244;
(statearr_48246[(7)] = inst_48241);

return statearr_48246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48244__$1,inst_48242);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45999__auto__ = null;
var shadow$dom$state_machine__45999__auto____0 = (function (){
var statearr_48249 = [null,null,null,null,null,null,null,null];
(statearr_48249[(0)] = shadow$dom$state_machine__45999__auto__);

(statearr_48249[(1)] = (1));

return statearr_48249;
});
var shadow$dom$state_machine__45999__auto____1 = (function (state_48244){
while(true){
var ret_value__46000__auto__ = (function (){try{while(true){
var result__46001__auto__ = switch__45998__auto__(state_48244);
if(cljs.core.keyword_identical_QMARK_(result__46001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46001__auto__;
}
break;
}
}catch (e48250){if((e48250 instanceof Object)){
var ex__46002__auto__ = e48250;
var statearr_48252_48848 = state_48244;
(statearr_48252_48848[(5)] = ex__46002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48850 = state_48244;
state_48244 = G__48850;
continue;
} else {
return ret_value__46000__auto__;
}
break;
}
});
shadow$dom$state_machine__45999__auto__ = function(state_48244){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45999__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45999__auto____1.call(this,state_48244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45999__auto____0;
shadow$dom$state_machine__45999__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45999__auto____1;
return shadow$dom$state_machine__45999__auto__;
})()
})();
var state__46096__auto__ = (function (){var statearr_48255 = (f__46095__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46095__auto__.cljs$core$IFn$_invoke$arity$0() : f__46095__auto__.call(null));
(statearr_48255[(6)] = c__46094__auto___48842);

return statearr_48255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46096__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
