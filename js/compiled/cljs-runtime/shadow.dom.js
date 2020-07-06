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
return cljs.core.cons((coll[idx]),(function (){var G__57706 = coll;
var G__57707 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57706,G__57707) : shadow.dom.lazy_native_coll_seq.call(null,G__57706,G__57707));
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
var G__57731 = arguments.length;
switch (G__57731) {
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
var G__57738 = arguments.length;
switch (G__57738) {
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
var G__57744 = arguments.length;
switch (G__57744) {
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
var G__57749 = arguments.length;
switch (G__57749) {
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
var G__57766 = arguments.length;
switch (G__57766) {
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
var G__57769 = document;
var G__57770 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57769,G__57770);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57771 = shadow.dom.dom_node(parent);
var G__57772 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57771,G__57772);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57774 = shadow.dom.dom_node(el);
var G__57775 = cls;
return goog.dom.classlist.add(G__57774,G__57775);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57778 = shadow.dom.dom_node(el);
var G__57779 = cls;
return goog.dom.classlist.remove(G__57778,G__57779);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57786 = arguments.length;
switch (G__57786) {
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
var G__57790 = shadow.dom.dom_node(el);
var G__57791 = cls;
return goog.dom.classlist.toggle(G__57790,G__57791);
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
}catch (e57794){if((e57794 instanceof Object)){
var e = e57794;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57794;

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
var seq__57804 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57805 = null;
var count__57806 = (0);
var i__57807 = (0);
while(true){
if((i__57807 < count__57806)){
var el = chunk__57805.cljs$core$IIndexed$_nth$arity$2(null,i__57807);
var handler_58442__$1 = ((function (seq__57804,chunk__57805,count__57806,i__57807,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57804,chunk__57805,count__57806,i__57807,el))
;
var G__57817_58444 = el;
var G__57818_58445 = cljs.core.name(ev);
var G__57819_58446 = handler_58442__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57817_58444,G__57818_58445,G__57819_58446) : shadow.dom.dom_listen.call(null,G__57817_58444,G__57818_58445,G__57819_58446));


var G__58447 = seq__57804;
var G__58448 = chunk__57805;
var G__58449 = count__57806;
var G__58450 = (i__57807 + (1));
seq__57804 = G__58447;
chunk__57805 = G__58448;
count__57806 = G__58449;
i__57807 = G__58450;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57804);
if(temp__5735__auto__){
var seq__57804__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57804__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57804__$1);
var G__58451 = cljs.core.chunk_rest(seq__57804__$1);
var G__58452 = c__4609__auto__;
var G__58453 = cljs.core.count(c__4609__auto__);
var G__58454 = (0);
seq__57804 = G__58451;
chunk__57805 = G__58452;
count__57806 = G__58453;
i__57807 = G__58454;
continue;
} else {
var el = cljs.core.first(seq__57804__$1);
var handler_58456__$1 = ((function (seq__57804,chunk__57805,count__57806,i__57807,el,seq__57804__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57804,chunk__57805,count__57806,i__57807,el,seq__57804__$1,temp__5735__auto__))
;
var G__57821_58458 = el;
var G__57822_58459 = cljs.core.name(ev);
var G__57823_58460 = handler_58456__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57821_58458,G__57822_58459,G__57823_58460) : shadow.dom.dom_listen.call(null,G__57821_58458,G__57822_58459,G__57823_58460));


var G__58461 = cljs.core.next(seq__57804__$1);
var G__58462 = null;
var G__58463 = (0);
var G__58464 = (0);
seq__57804 = G__58461;
chunk__57805 = G__58462;
count__57806 = G__58463;
i__57807 = G__58464;
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
var G__57826 = arguments.length;
switch (G__57826) {
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
var G__57829 = shadow.dom.dom_node(el);
var G__57830 = cljs.core.name(ev);
var G__57831 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57829,G__57830,G__57831) : shadow.dom.dom_listen.call(null,G__57829,G__57830,G__57831));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57834 = shadow.dom.dom_node(el);
var G__57835 = cljs.core.name(ev);
var G__57836 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57834,G__57835,G__57836) : shadow.dom.dom_listen_remove.call(null,G__57834,G__57835,G__57836));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57841 = cljs.core.seq(events);
var chunk__57842 = null;
var count__57843 = (0);
var i__57844 = (0);
while(true){
if((i__57844 < count__57843)){
var vec__57856 = chunk__57842.cljs$core$IIndexed$_nth$arity$2(null,i__57844);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57856,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58484 = seq__57841;
var G__58485 = chunk__57842;
var G__58486 = count__57843;
var G__58487 = (i__57844 + (1));
seq__57841 = G__58484;
chunk__57842 = G__58485;
count__57843 = G__58486;
i__57844 = G__58487;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57841);
if(temp__5735__auto__){
var seq__57841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57841__$1);
var G__58489 = cljs.core.chunk_rest(seq__57841__$1);
var G__58490 = c__4609__auto__;
var G__58491 = cljs.core.count(c__4609__auto__);
var G__58492 = (0);
seq__57841 = G__58489;
chunk__57842 = G__58490;
count__57843 = G__58491;
i__57844 = G__58492;
continue;
} else {
var vec__57861 = cljs.core.first(seq__57841__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57861,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58493 = cljs.core.next(seq__57841__$1);
var G__58494 = null;
var G__58495 = (0);
var G__58496 = (0);
seq__57841 = G__58493;
chunk__57842 = G__58494;
count__57843 = G__58495;
i__57844 = G__58496;
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
var seq__57865 = cljs.core.seq(styles);
var chunk__57866 = null;
var count__57867 = (0);
var i__57868 = (0);
while(true){
if((i__57868 < count__57867)){
var vec__57884 = chunk__57866.cljs$core$IIndexed$_nth$arity$2(null,i__57868);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57884,(1),null);
var G__57887_58500 = dom;
var G__57888_58501 = cljs.core.name(k);
var G__57889_58502 = (((v == null))?"":v);
goog.style.setStyle(G__57887_58500,G__57888_58501,G__57889_58502);


var G__58504 = seq__57865;
var G__58505 = chunk__57866;
var G__58506 = count__57867;
var G__58507 = (i__57868 + (1));
seq__57865 = G__58504;
chunk__57866 = G__58505;
count__57867 = G__58506;
i__57868 = G__58507;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57865);
if(temp__5735__auto__){
var seq__57865__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57865__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57865__$1);
var G__58508 = cljs.core.chunk_rest(seq__57865__$1);
var G__58509 = c__4609__auto__;
var G__58510 = cljs.core.count(c__4609__auto__);
var G__58511 = (0);
seq__57865 = G__58508;
chunk__57866 = G__58509;
count__57867 = G__58510;
i__57868 = G__58511;
continue;
} else {
var vec__57892 = cljs.core.first(seq__57865__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57892,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57892,(1),null);
var G__57895_58514 = dom;
var G__57896_58515 = cljs.core.name(k);
var G__57897_58516 = (((v == null))?"":v);
goog.style.setStyle(G__57895_58514,G__57896_58515,G__57897_58516);


var G__58518 = cljs.core.next(seq__57865__$1);
var G__58519 = null;
var G__58520 = (0);
var G__58521 = (0);
seq__57865 = G__58518;
chunk__57866 = G__58519;
count__57867 = G__58520;
i__57868 = G__58521;
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
var G__57901_58522 = key;
var G__57901_58523__$1 = (((G__57901_58522 instanceof cljs.core.Keyword))?G__57901_58522.fqn:null);
switch (G__57901_58523__$1) {
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
var ks_58530 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58530,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58530,"aria-");
}
})())){
el.setAttribute(ks_58530,value);
} else {
(el[ks_58530] = value);
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
var G__57907 = shadow.dom.dom_node(el);
var G__57908 = cls;
return goog.dom.classlist.contains(G__57907,G__57908);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57914){
var map__57915 = p__57914;
var map__57915__$1 = (((((!((map__57915 == null))))?(((((map__57915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57915):map__57915);
var props = map__57915__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57915__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57920 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57920,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57920,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57920,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57925 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57925,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57925;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57930 = arguments.length;
switch (G__57930) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57937){
var vec__57938 = p__57937;
var seq__57939 = cljs.core.seq(vec__57938);
var first__57940 = cljs.core.first(seq__57939);
var seq__57939__$1 = cljs.core.next(seq__57939);
var nn = first__57940;
var first__57940__$1 = cljs.core.first(seq__57939__$1);
var seq__57939__$2 = cljs.core.next(seq__57939__$1);
var np = first__57940__$1;
var nc = seq__57939__$2;
var node = vec__57938;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57941 = nn;
var G__57942 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57941,G__57942) : create_fn.call(null,G__57941,G__57942));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57943 = nn;
var G__57944 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57943,G__57944) : create_fn.call(null,G__57943,G__57944));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57945 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57945,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57945,(1),null);
var seq__57948_58544 = cljs.core.seq(node_children);
var chunk__57949_58545 = null;
var count__57950_58546 = (0);
var i__57951_58547 = (0);
while(true){
if((i__57951_58547 < count__57950_58546)){
var child_struct_58548 = chunk__57949_58545.cljs$core$IIndexed$_nth$arity$2(null,i__57951_58547);
var children_58549 = shadow.dom.dom_node(child_struct_58548);
if(cljs.core.seq_QMARK_(children_58549)){
var seq__57973_58550 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58549));
var chunk__57975_58551 = null;
var count__57976_58552 = (0);
var i__57977_58553 = (0);
while(true){
if((i__57977_58553 < count__57976_58552)){
var child_58554 = chunk__57975_58551.cljs$core$IIndexed$_nth$arity$2(null,i__57977_58553);
if(cljs.core.truth_(child_58554)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58554);


var G__58555 = seq__57973_58550;
var G__58556 = chunk__57975_58551;
var G__58557 = count__57976_58552;
var G__58558 = (i__57977_58553 + (1));
seq__57973_58550 = G__58555;
chunk__57975_58551 = G__58556;
count__57976_58552 = G__58557;
i__57977_58553 = G__58558;
continue;
} else {
var G__58559 = seq__57973_58550;
var G__58560 = chunk__57975_58551;
var G__58561 = count__57976_58552;
var G__58562 = (i__57977_58553 + (1));
seq__57973_58550 = G__58559;
chunk__57975_58551 = G__58560;
count__57976_58552 = G__58561;
i__57977_58553 = G__58562;
continue;
}
} else {
var temp__5735__auto___58563 = cljs.core.seq(seq__57973_58550);
if(temp__5735__auto___58563){
var seq__57973_58564__$1 = temp__5735__auto___58563;
if(cljs.core.chunked_seq_QMARK_(seq__57973_58564__$1)){
var c__4609__auto___58565 = cljs.core.chunk_first(seq__57973_58564__$1);
var G__58569 = cljs.core.chunk_rest(seq__57973_58564__$1);
var G__58570 = c__4609__auto___58565;
var G__58571 = cljs.core.count(c__4609__auto___58565);
var G__58572 = (0);
seq__57973_58550 = G__58569;
chunk__57975_58551 = G__58570;
count__57976_58552 = G__58571;
i__57977_58553 = G__58572;
continue;
} else {
var child_58573 = cljs.core.first(seq__57973_58564__$1);
if(cljs.core.truth_(child_58573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58573);


var G__58574 = cljs.core.next(seq__57973_58564__$1);
var G__58575 = null;
var G__58576 = (0);
var G__58577 = (0);
seq__57973_58550 = G__58574;
chunk__57975_58551 = G__58575;
count__57976_58552 = G__58576;
i__57977_58553 = G__58577;
continue;
} else {
var G__58578 = cljs.core.next(seq__57973_58564__$1);
var G__58579 = null;
var G__58580 = (0);
var G__58581 = (0);
seq__57973_58550 = G__58578;
chunk__57975_58551 = G__58579;
count__57976_58552 = G__58580;
i__57977_58553 = G__58581;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58549);
}


var G__58582 = seq__57948_58544;
var G__58583 = chunk__57949_58545;
var G__58584 = count__57950_58546;
var G__58585 = (i__57951_58547 + (1));
seq__57948_58544 = G__58582;
chunk__57949_58545 = G__58583;
count__57950_58546 = G__58584;
i__57951_58547 = G__58585;
continue;
} else {
var temp__5735__auto___58586 = cljs.core.seq(seq__57948_58544);
if(temp__5735__auto___58586){
var seq__57948_58587__$1 = temp__5735__auto___58586;
if(cljs.core.chunked_seq_QMARK_(seq__57948_58587__$1)){
var c__4609__auto___58588 = cljs.core.chunk_first(seq__57948_58587__$1);
var G__58589 = cljs.core.chunk_rest(seq__57948_58587__$1);
var G__58590 = c__4609__auto___58588;
var G__58591 = cljs.core.count(c__4609__auto___58588);
var G__58592 = (0);
seq__57948_58544 = G__58589;
chunk__57949_58545 = G__58590;
count__57950_58546 = G__58591;
i__57951_58547 = G__58592;
continue;
} else {
var child_struct_58593 = cljs.core.first(seq__57948_58587__$1);
var children_58594 = shadow.dom.dom_node(child_struct_58593);
if(cljs.core.seq_QMARK_(children_58594)){
var seq__57985_58595 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58594));
var chunk__57987_58596 = null;
var count__57988_58597 = (0);
var i__57989_58598 = (0);
while(true){
if((i__57989_58598 < count__57988_58597)){
var child_58599 = chunk__57987_58596.cljs$core$IIndexed$_nth$arity$2(null,i__57989_58598);
if(cljs.core.truth_(child_58599)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58599);


var G__58600 = seq__57985_58595;
var G__58601 = chunk__57987_58596;
var G__58602 = count__57988_58597;
var G__58603 = (i__57989_58598 + (1));
seq__57985_58595 = G__58600;
chunk__57987_58596 = G__58601;
count__57988_58597 = G__58602;
i__57989_58598 = G__58603;
continue;
} else {
var G__58607 = seq__57985_58595;
var G__58608 = chunk__57987_58596;
var G__58609 = count__57988_58597;
var G__58610 = (i__57989_58598 + (1));
seq__57985_58595 = G__58607;
chunk__57987_58596 = G__58608;
count__57988_58597 = G__58609;
i__57989_58598 = G__58610;
continue;
}
} else {
var temp__5735__auto___58611__$1 = cljs.core.seq(seq__57985_58595);
if(temp__5735__auto___58611__$1){
var seq__57985_58612__$1 = temp__5735__auto___58611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57985_58612__$1)){
var c__4609__auto___58613 = cljs.core.chunk_first(seq__57985_58612__$1);
var G__58614 = cljs.core.chunk_rest(seq__57985_58612__$1);
var G__58615 = c__4609__auto___58613;
var G__58616 = cljs.core.count(c__4609__auto___58613);
var G__58617 = (0);
seq__57985_58595 = G__58614;
chunk__57987_58596 = G__58615;
count__57988_58597 = G__58616;
i__57989_58598 = G__58617;
continue;
} else {
var child_58618 = cljs.core.first(seq__57985_58612__$1);
if(cljs.core.truth_(child_58618)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58618);


var G__58619 = cljs.core.next(seq__57985_58612__$1);
var G__58620 = null;
var G__58621 = (0);
var G__58622 = (0);
seq__57985_58595 = G__58619;
chunk__57987_58596 = G__58620;
count__57988_58597 = G__58621;
i__57989_58598 = G__58622;
continue;
} else {
var G__58623 = cljs.core.next(seq__57985_58612__$1);
var G__58624 = null;
var G__58625 = (0);
var G__58626 = (0);
seq__57985_58595 = G__58623;
chunk__57987_58596 = G__58624;
count__57988_58597 = G__58625;
i__57989_58598 = G__58626;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58594);
}


var G__58627 = cljs.core.next(seq__57948_58587__$1);
var G__58628 = null;
var G__58629 = (0);
var G__58630 = (0);
seq__57948_58544 = G__58627;
chunk__57949_58545 = G__58628;
count__57950_58546 = G__58629;
i__57951_58547 = G__58630;
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
var G__58008 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__58008);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58013 = cljs.core.seq(node);
var chunk__58014 = null;
var count__58015 = (0);
var i__58016 = (0);
while(true){
if((i__58016 < count__58015)){
var n = chunk__58014.cljs$core$IIndexed$_nth$arity$2(null,i__58016);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58634 = seq__58013;
var G__58635 = chunk__58014;
var G__58636 = count__58015;
var G__58637 = (i__58016 + (1));
seq__58013 = G__58634;
chunk__58014 = G__58635;
count__58015 = G__58636;
i__58016 = G__58637;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58013);
if(temp__5735__auto__){
var seq__58013__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58013__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58013__$1);
var G__58638 = cljs.core.chunk_rest(seq__58013__$1);
var G__58639 = c__4609__auto__;
var G__58640 = cljs.core.count(c__4609__auto__);
var G__58641 = (0);
seq__58013 = G__58638;
chunk__58014 = G__58639;
count__58015 = G__58640;
i__58016 = G__58641;
continue;
} else {
var n = cljs.core.first(seq__58013__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58642 = cljs.core.next(seq__58013__$1);
var G__58643 = null;
var G__58644 = (0);
var G__58645 = (0);
seq__58013 = G__58642;
chunk__58014 = G__58643;
count__58015 = G__58644;
i__58016 = G__58645;
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
var G__58024 = shadow.dom.dom_node(new$);
var G__58025 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__58024,G__58025);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58029 = arguments.length;
switch (G__58029) {
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
var G__58038 = arguments.length;
switch (G__58038) {
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
var G__58047 = arguments.length;
switch (G__58047) {
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
var len__4789__auto___58653 = arguments.length;
var i__4790__auto___58654 = (0);
while(true){
if((i__4790__auto___58654 < len__4789__auto___58653)){
args__4795__auto__.push((arguments[i__4790__auto___58654]));

var G__58655 = (i__4790__auto___58654 + (1));
i__4790__auto___58654 = G__58655;
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
var seq__58055_58656 = cljs.core.seq(nodes);
var chunk__58056_58657 = null;
var count__58057_58658 = (0);
var i__58058_58659 = (0);
while(true){
if((i__58058_58659 < count__58057_58658)){
var node_58664 = chunk__58056_58657.cljs$core$IIndexed$_nth$arity$2(null,i__58058_58659);
fragment.appendChild(shadow.dom._to_dom(node_58664));


var G__58665 = seq__58055_58656;
var G__58666 = chunk__58056_58657;
var G__58667 = count__58057_58658;
var G__58668 = (i__58058_58659 + (1));
seq__58055_58656 = G__58665;
chunk__58056_58657 = G__58666;
count__58057_58658 = G__58667;
i__58058_58659 = G__58668;
continue;
} else {
var temp__5735__auto___58672 = cljs.core.seq(seq__58055_58656);
if(temp__5735__auto___58672){
var seq__58055_58673__$1 = temp__5735__auto___58672;
if(cljs.core.chunked_seq_QMARK_(seq__58055_58673__$1)){
var c__4609__auto___58674 = cljs.core.chunk_first(seq__58055_58673__$1);
var G__58675 = cljs.core.chunk_rest(seq__58055_58673__$1);
var G__58676 = c__4609__auto___58674;
var G__58677 = cljs.core.count(c__4609__auto___58674);
var G__58678 = (0);
seq__58055_58656 = G__58675;
chunk__58056_58657 = G__58676;
count__58057_58658 = G__58677;
i__58058_58659 = G__58678;
continue;
} else {
var node_58679 = cljs.core.first(seq__58055_58673__$1);
fragment.appendChild(shadow.dom._to_dom(node_58679));


var G__58680 = cljs.core.next(seq__58055_58673__$1);
var G__58681 = null;
var G__58682 = (0);
var G__58683 = (0);
seq__58055_58656 = G__58680;
chunk__58056_58657 = G__58681;
count__58057_58658 = G__58682;
i__58058_58659 = G__58683;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58054){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58054));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58059_58684 = cljs.core.seq(scripts);
var chunk__58060_58685 = null;
var count__58061_58686 = (0);
var i__58062_58687 = (0);
while(true){
if((i__58062_58687 < count__58061_58686)){
var vec__58071_58688 = chunk__58060_58685.cljs$core$IIndexed$_nth$arity$2(null,i__58062_58687);
var script_tag_58689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58071_58688,(0),null);
var script_body_58690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58071_58688,(1),null);
eval(script_body_58690);


var G__58694 = seq__58059_58684;
var G__58695 = chunk__58060_58685;
var G__58696 = count__58061_58686;
var G__58697 = (i__58062_58687 + (1));
seq__58059_58684 = G__58694;
chunk__58060_58685 = G__58695;
count__58061_58686 = G__58696;
i__58062_58687 = G__58697;
continue;
} else {
var temp__5735__auto___58698 = cljs.core.seq(seq__58059_58684);
if(temp__5735__auto___58698){
var seq__58059_58699__$1 = temp__5735__auto___58698;
if(cljs.core.chunked_seq_QMARK_(seq__58059_58699__$1)){
var c__4609__auto___58700 = cljs.core.chunk_first(seq__58059_58699__$1);
var G__58701 = cljs.core.chunk_rest(seq__58059_58699__$1);
var G__58702 = c__4609__auto___58700;
var G__58703 = cljs.core.count(c__4609__auto___58700);
var G__58704 = (0);
seq__58059_58684 = G__58701;
chunk__58060_58685 = G__58702;
count__58061_58686 = G__58703;
i__58062_58687 = G__58704;
continue;
} else {
var vec__58076_58705 = cljs.core.first(seq__58059_58699__$1);
var script_tag_58706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076_58705,(0),null);
var script_body_58707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076_58705,(1),null);
eval(script_body_58707);


var G__58708 = cljs.core.next(seq__58059_58699__$1);
var G__58709 = null;
var G__58710 = (0);
var G__58711 = (0);
seq__58059_58684 = G__58708;
chunk__58060_58685 = G__58709;
count__58061_58686 = G__58710;
i__58062_58687 = G__58711;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58081){
var vec__58082 = p__58081;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58082,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58082,(1),null);
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
var G__58091 = shadow.dom.dom_node(el);
var G__58092 = cls;
return goog.dom.getAncestorByClass(G__58091,G__58092);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58096 = arguments.length;
switch (G__58096) {
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
var G__58098 = shadow.dom.dom_node(el);
var G__58099 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58098,G__58099);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58102 = shadow.dom.dom_node(el);
var G__58103 = cljs.core.name(tag);
var G__58104 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58102,G__58103,G__58104);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58109 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58109);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58112 = shadow.dom.dom_node(dom);
var G__58113 = value;
return goog.dom.forms.setValue(G__58112,G__58113);
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
var seq__58129 = cljs.core.seq(style_keys);
var chunk__58130 = null;
var count__58131 = (0);
var i__58132 = (0);
while(true){
if((i__58132 < count__58131)){
var it = chunk__58130.cljs$core$IIndexed$_nth$arity$2(null,i__58132);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58723 = seq__58129;
var G__58724 = chunk__58130;
var G__58725 = count__58131;
var G__58726 = (i__58132 + (1));
seq__58129 = G__58723;
chunk__58130 = G__58724;
count__58131 = G__58725;
i__58132 = G__58726;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58129);
if(temp__5735__auto__){
var seq__58129__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58129__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58129__$1);
var G__58727 = cljs.core.chunk_rest(seq__58129__$1);
var G__58728 = c__4609__auto__;
var G__58729 = cljs.core.count(c__4609__auto__);
var G__58730 = (0);
seq__58129 = G__58727;
chunk__58130 = G__58728;
count__58131 = G__58729;
i__58132 = G__58730;
continue;
} else {
var it = cljs.core.first(seq__58129__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58731 = cljs.core.next(seq__58129__$1);
var G__58732 = null;
var G__58733 = (0);
var G__58734 = (0);
seq__58129 = G__58731;
chunk__58130 = G__58732;
count__58131 = G__58733;
i__58132 = G__58734;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58139,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58147 = k58139;
var G__58147__$1 = (((G__58147 instanceof cljs.core.Keyword))?G__58147.fqn:null);
switch (G__58147__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58139,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58150){
var vec__58151 = p__58150;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58151,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58151,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58138){
var self__ = this;
var G__58138__$1 = this;
return (new cljs.core.RecordIter((0),G__58138__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58155 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58155(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58140,other58141){
var self__ = this;
var this58140__$1 = this;
return (((!((other58141 == null)))) && ((this58140__$1.constructor === other58141.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58140__$1.x,other58141.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58140__$1.y,other58141.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58140__$1.__extmap,other58141.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58138){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58157 = cljs.core.keyword_identical_QMARK_;
var expr__58158 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58160 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58161 = expr__58158;
return (pred__58157.cljs$core$IFn$_invoke$arity$2 ? pred__58157.cljs$core$IFn$_invoke$arity$2(G__58160,G__58161) : pred__58157.call(null,G__58160,G__58161));
})())){
return (new shadow.dom.Coordinate(G__58138,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58162 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58163 = expr__58158;
return (pred__58157.cljs$core$IFn$_invoke$arity$2 ? pred__58157.cljs$core$IFn$_invoke$arity$2(G__58162,G__58163) : pred__58157.call(null,G__58162,G__58163));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58138,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58138),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58138){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58138,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58143){
var extmap__4478__auto__ = (function (){var G__58164 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58143,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58143)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58164);
} else {
return G__58164;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58143),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58143),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58165 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58165);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58167 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58167);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58172 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58172);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58176,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58186 = k58176;
var G__58186__$1 = (((G__58186 instanceof cljs.core.Keyword))?G__58186.fqn:null);
switch (G__58186__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58176,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58190){
var vec__58192 = p__58190;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58192,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58192,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58175){
var self__ = this;
var G__58175__$1 = this;
return (new cljs.core.RecordIter((0),G__58175__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58200 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58200(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58177,other58178){
var self__ = this;
var this58177__$1 = this;
return (((!((other58178 == null)))) && ((this58177__$1.constructor === other58178.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58177__$1.w,other58178.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58177__$1.h,other58178.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58177__$1.__extmap,other58178.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58175){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58204 = cljs.core.keyword_identical_QMARK_;
var expr__58205 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58207 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58208 = expr__58205;
return (pred__58204.cljs$core$IFn$_invoke$arity$2 ? pred__58204.cljs$core$IFn$_invoke$arity$2(G__58207,G__58208) : pred__58204.call(null,G__58207,G__58208));
})())){
return (new shadow.dom.Size(G__58175,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58209 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58210 = expr__58205;
return (pred__58204.cljs$core$IFn$_invoke$arity$2 ? pred__58204.cljs$core$IFn$_invoke$arity$2(G__58209,G__58210) : pred__58204.call(null,G__58209,G__58210));
})())){
return (new shadow.dom.Size(self__.w,G__58175,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58175),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58175){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58175,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58181){
var extmap__4478__auto__ = (function (){var G__58218 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58181,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58181)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58218);
} else {
return G__58218;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58181),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58181),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58220 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58220);
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
var G__58763 = (i + (1));
var G__58764 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58763;
ret = G__58764;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58237){
var vec__58238 = p__58237;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58238,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58243 = arguments.length;
switch (G__58243) {
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
var G__58251_58766 = new_node;
var G__58252_58767 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58251_58766,G__58252_58767);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58254_58768 = new_node;
var G__58255_58769 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58254_58768,G__58255_58769);

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
var G__58770 = ps;
var G__58771 = (i + (1));
el__$1 = G__58770;
i = G__58771;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58263 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58263);
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
var G__58267 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58267);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58270 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58270);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58272 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58278_58772 = cljs.core.seq(props);
var chunk__58279_58773 = null;
var count__58280_58774 = (0);
var i__58281_58775 = (0);
while(true){
if((i__58281_58775 < count__58280_58774)){
var vec__58296_58776 = chunk__58279_58773.cljs$core$IIndexed$_nth$arity$2(null,i__58281_58775);
var k_58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58296_58776,(0),null);
var v_58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58296_58776,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58777);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58777),v_58778);


var G__58783 = seq__58278_58772;
var G__58784 = chunk__58279_58773;
var G__58785 = count__58280_58774;
var G__58786 = (i__58281_58775 + (1));
seq__58278_58772 = G__58783;
chunk__58279_58773 = G__58784;
count__58280_58774 = G__58785;
i__58281_58775 = G__58786;
continue;
} else {
var temp__5735__auto___58788 = cljs.core.seq(seq__58278_58772);
if(temp__5735__auto___58788){
var seq__58278_58790__$1 = temp__5735__auto___58788;
if(cljs.core.chunked_seq_QMARK_(seq__58278_58790__$1)){
var c__4609__auto___58791 = cljs.core.chunk_first(seq__58278_58790__$1);
var G__58792 = cljs.core.chunk_rest(seq__58278_58790__$1);
var G__58793 = c__4609__auto___58791;
var G__58794 = cljs.core.count(c__4609__auto___58791);
var G__58795 = (0);
seq__58278_58772 = G__58792;
chunk__58279_58773 = G__58793;
count__58280_58774 = G__58794;
i__58281_58775 = G__58795;
continue;
} else {
var vec__58299_58796 = cljs.core.first(seq__58278_58790__$1);
var k_58797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58299_58796,(0),null);
var v_58798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58299_58796,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58797);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58797),v_58798);


var G__58799 = cljs.core.next(seq__58278_58790__$1);
var G__58800 = null;
var G__58801 = (0);
var G__58802 = (0);
seq__58278_58772 = G__58799;
chunk__58279_58773 = G__58800;
count__58280_58774 = G__58801;
i__58281_58775 = G__58802;
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
var vec__58305 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(1),null);
var seq__58308_58805 = cljs.core.seq(node_children);
var chunk__58310_58806 = null;
var count__58311_58807 = (0);
var i__58312_58808 = (0);
while(true){
if((i__58312_58808 < count__58311_58807)){
var child_struct_58809 = chunk__58310_58806.cljs$core$IIndexed$_nth$arity$2(null,i__58312_58808);
if((!((child_struct_58809 == null)))){
if(typeof child_struct_58809 === 'string'){
var text_58810 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58810),child_struct_58809].join(''));
} else {
var children_58811 = shadow.dom.svg_node(child_struct_58809);
if(cljs.core.seq_QMARK_(children_58811)){
var seq__58336_58812 = cljs.core.seq(children_58811);
var chunk__58339_58813 = null;
var count__58340_58814 = (0);
var i__58341_58815 = (0);
while(true){
if((i__58341_58815 < count__58340_58814)){
var child_58817 = chunk__58339_58813.cljs$core$IIndexed$_nth$arity$2(null,i__58341_58815);
if(cljs.core.truth_(child_58817)){
node.appendChild(child_58817);


var G__58819 = seq__58336_58812;
var G__58820 = chunk__58339_58813;
var G__58821 = count__58340_58814;
var G__58822 = (i__58341_58815 + (1));
seq__58336_58812 = G__58819;
chunk__58339_58813 = G__58820;
count__58340_58814 = G__58821;
i__58341_58815 = G__58822;
continue;
} else {
var G__58823 = seq__58336_58812;
var G__58824 = chunk__58339_58813;
var G__58825 = count__58340_58814;
var G__58826 = (i__58341_58815 + (1));
seq__58336_58812 = G__58823;
chunk__58339_58813 = G__58824;
count__58340_58814 = G__58825;
i__58341_58815 = G__58826;
continue;
}
} else {
var temp__5735__auto___58827 = cljs.core.seq(seq__58336_58812);
if(temp__5735__auto___58827){
var seq__58336_58828__$1 = temp__5735__auto___58827;
if(cljs.core.chunked_seq_QMARK_(seq__58336_58828__$1)){
var c__4609__auto___58829 = cljs.core.chunk_first(seq__58336_58828__$1);
var G__58830 = cljs.core.chunk_rest(seq__58336_58828__$1);
var G__58831 = c__4609__auto___58829;
var G__58832 = cljs.core.count(c__4609__auto___58829);
var G__58833 = (0);
seq__58336_58812 = G__58830;
chunk__58339_58813 = G__58831;
count__58340_58814 = G__58832;
i__58341_58815 = G__58833;
continue;
} else {
var child_58834 = cljs.core.first(seq__58336_58828__$1);
if(cljs.core.truth_(child_58834)){
node.appendChild(child_58834);


var G__58835 = cljs.core.next(seq__58336_58828__$1);
var G__58836 = null;
var G__58837 = (0);
var G__58838 = (0);
seq__58336_58812 = G__58835;
chunk__58339_58813 = G__58836;
count__58340_58814 = G__58837;
i__58341_58815 = G__58838;
continue;
} else {
var G__58839 = cljs.core.next(seq__58336_58828__$1);
var G__58840 = null;
var G__58841 = (0);
var G__58842 = (0);
seq__58336_58812 = G__58839;
chunk__58339_58813 = G__58840;
count__58340_58814 = G__58841;
i__58341_58815 = G__58842;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58811);
}
}


var G__58843 = seq__58308_58805;
var G__58844 = chunk__58310_58806;
var G__58845 = count__58311_58807;
var G__58846 = (i__58312_58808 + (1));
seq__58308_58805 = G__58843;
chunk__58310_58806 = G__58844;
count__58311_58807 = G__58845;
i__58312_58808 = G__58846;
continue;
} else {
var G__58849 = seq__58308_58805;
var G__58850 = chunk__58310_58806;
var G__58851 = count__58311_58807;
var G__58852 = (i__58312_58808 + (1));
seq__58308_58805 = G__58849;
chunk__58310_58806 = G__58850;
count__58311_58807 = G__58851;
i__58312_58808 = G__58852;
continue;
}
} else {
var temp__5735__auto___58853 = cljs.core.seq(seq__58308_58805);
if(temp__5735__auto___58853){
var seq__58308_58854__$1 = temp__5735__auto___58853;
if(cljs.core.chunked_seq_QMARK_(seq__58308_58854__$1)){
var c__4609__auto___58855 = cljs.core.chunk_first(seq__58308_58854__$1);
var G__58856 = cljs.core.chunk_rest(seq__58308_58854__$1);
var G__58857 = c__4609__auto___58855;
var G__58858 = cljs.core.count(c__4609__auto___58855);
var G__58859 = (0);
seq__58308_58805 = G__58856;
chunk__58310_58806 = G__58857;
count__58311_58807 = G__58858;
i__58312_58808 = G__58859;
continue;
} else {
var child_struct_58860 = cljs.core.first(seq__58308_58854__$1);
if((!((child_struct_58860 == null)))){
if(typeof child_struct_58860 === 'string'){
var text_58861 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58861),child_struct_58860].join(''));
} else {
var children_58862 = shadow.dom.svg_node(child_struct_58860);
if(cljs.core.seq_QMARK_(children_58862)){
var seq__58354_58863 = cljs.core.seq(children_58862);
var chunk__58356_58864 = null;
var count__58357_58865 = (0);
var i__58358_58866 = (0);
while(true){
if((i__58358_58866 < count__58357_58865)){
var child_58867 = chunk__58356_58864.cljs$core$IIndexed$_nth$arity$2(null,i__58358_58866);
if(cljs.core.truth_(child_58867)){
node.appendChild(child_58867);


var G__58872 = seq__58354_58863;
var G__58873 = chunk__58356_58864;
var G__58874 = count__58357_58865;
var G__58875 = (i__58358_58866 + (1));
seq__58354_58863 = G__58872;
chunk__58356_58864 = G__58873;
count__58357_58865 = G__58874;
i__58358_58866 = G__58875;
continue;
} else {
var G__58876 = seq__58354_58863;
var G__58877 = chunk__58356_58864;
var G__58878 = count__58357_58865;
var G__58879 = (i__58358_58866 + (1));
seq__58354_58863 = G__58876;
chunk__58356_58864 = G__58877;
count__58357_58865 = G__58878;
i__58358_58866 = G__58879;
continue;
}
} else {
var temp__5735__auto___58880__$1 = cljs.core.seq(seq__58354_58863);
if(temp__5735__auto___58880__$1){
var seq__58354_58881__$1 = temp__5735__auto___58880__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58354_58881__$1)){
var c__4609__auto___58882 = cljs.core.chunk_first(seq__58354_58881__$1);
var G__58883 = cljs.core.chunk_rest(seq__58354_58881__$1);
var G__58884 = c__4609__auto___58882;
var G__58885 = cljs.core.count(c__4609__auto___58882);
var G__58886 = (0);
seq__58354_58863 = G__58883;
chunk__58356_58864 = G__58884;
count__58357_58865 = G__58885;
i__58358_58866 = G__58886;
continue;
} else {
var child_58887 = cljs.core.first(seq__58354_58881__$1);
if(cljs.core.truth_(child_58887)){
node.appendChild(child_58887);


var G__58888 = cljs.core.next(seq__58354_58881__$1);
var G__58889 = null;
var G__58890 = (0);
var G__58891 = (0);
seq__58354_58863 = G__58888;
chunk__58356_58864 = G__58889;
count__58357_58865 = G__58890;
i__58358_58866 = G__58891;
continue;
} else {
var G__58892 = cljs.core.next(seq__58354_58881__$1);
var G__58893 = null;
var G__58894 = (0);
var G__58895 = (0);
seq__58354_58863 = G__58892;
chunk__58356_58864 = G__58893;
count__58357_58865 = G__58894;
i__58358_58866 = G__58895;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58862);
}
}


var G__58896 = cljs.core.next(seq__58308_58854__$1);
var G__58897 = null;
var G__58898 = (0);
var G__58899 = (0);
seq__58308_58805 = G__58896;
chunk__58310_58806 = G__58897;
count__58311_58807 = G__58898;
i__58312_58808 = G__58899;
continue;
} else {
var G__58900 = cljs.core.next(seq__58308_58854__$1);
var G__58901 = null;
var G__58902 = (0);
var G__58903 = (0);
seq__58308_58805 = G__58900;
chunk__58310_58806 = G__58901;
count__58311_58807 = G__58902;
i__58312_58808 = G__58903;
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

var G__58365_58904 = shadow.dom._to_svg;
var G__58366_58905 = "string";
var G__58367_58906 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58365_58904,G__58366_58905,G__58367_58906);

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

var G__58375_58907 = shadow.dom._to_svg;
var G__58376_58908 = "null";
var G__58377_58909 = (function (_){
return null;
});
goog.object.set(G__58375_58907,G__58376_58908,G__58377_58909);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58910 = arguments.length;
var i__4790__auto___58911 = (0);
while(true){
if((i__4790__auto___58911 < len__4789__auto___58910)){
args__4795__auto__.push((arguments[i__4790__auto___58911]));

var G__58912 = (i__4790__auto___58911 + (1));
i__4790__auto___58911 = G__58912;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58380){
var G__58381 = cljs.core.first(seq58380);
var seq58380__$1 = cljs.core.next(seq58380);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58381,seq58380__$1);
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
var G__58386 = arguments.length;
switch (G__58386) {
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
var G__58390_58919 = shadow.dom.dom_node(el);
var G__58391_58920 = cljs.core.name(event);
var G__58392_58921 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58390_58919,G__58391_58920,G__58392_58921) : shadow.dom.dom_listen.call(null,G__58390_58919,G__58391_58920,G__58392_58921));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__56096__auto___58922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_58398){
var state_val_58399 = (state_58398[(1)]);
if((state_val_58399 === (1))){
var state_58398__$1 = state_58398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58398__$1,(2),once_or_cleanup);
} else {
if((state_val_58399 === (2))){
var inst_58395 = (state_58398[(2)]);
var inst_58396 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58398__$1 = (function (){var statearr_58401 = state_58398;
(statearr_58401[(7)] = inst_58395);

return statearr_58401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58398__$1,inst_58396);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55996__auto__ = null;
var shadow$dom$state_machine__55996__auto____0 = (function (){
var statearr_58402 = [null,null,null,null,null,null,null,null];
(statearr_58402[(0)] = shadow$dom$state_machine__55996__auto__);

(statearr_58402[(1)] = (1));

return statearr_58402;
});
var shadow$dom$state_machine__55996__auto____1 = (function (state_58398){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_58398);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e58404){if((e58404 instanceof Object)){
var ex__55999__auto__ = e58404;
var statearr_58405_58923 = state_58398;
(statearr_58405_58923[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58924 = state_58398;
state_58398 = G__58924;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
shadow$dom$state_machine__55996__auto__ = function(state_58398){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55996__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55996__auto____1.call(this,state_58398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55996__auto____0;
shadow$dom$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55996__auto____1;
return shadow$dom$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_58407 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_58407[(6)] = c__56096__auto___58922);

return statearr_58407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
