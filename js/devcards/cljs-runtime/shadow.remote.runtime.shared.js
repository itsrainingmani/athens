goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60631,p__60632){
var map__60633 = p__60631;
var map__60633__$1 = (((((!((map__60633 == null))))?(((((map__60633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60633):map__60633);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60633__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60634 = p__60632;
var map__60634__$1 = (((((!((map__60634 == null))))?(((((map__60634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60634):map__60634);
var msg = map__60634__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60637,p__60638){
var map__60639 = p__60637;
var map__60639__$1 = (((((!((map__60639 == null))))?(((((map__60639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60639):map__60639);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60640 = p__60638;
var map__60640__$1 = (((((!((map__60640 == null))))?(((((map__60640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60640):map__60640);
var msg = map__60640__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60640__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60643 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60645 = null;
var count__60646 = (0);
var i__60647 = (0);
while(true){
if((i__60647 < count__60646)){
var map__60653 = chunk__60645.cljs$core$IIndexed$_nth$arity$2(null,i__60647);
var map__60653__$1 = (((((!((map__60653 == null))))?(((((map__60653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60653):map__60653);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60653__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60700 = seq__60643;
var G__60701 = chunk__60645;
var G__60702 = count__60646;
var G__60703 = (i__60647 + (1));
seq__60643 = G__60700;
chunk__60645 = G__60701;
count__60646 = G__60702;
i__60647 = G__60703;
continue;
} else {
var G__60704 = seq__60643;
var G__60705 = chunk__60645;
var G__60706 = count__60646;
var G__60707 = (i__60647 + (1));
seq__60643 = G__60704;
chunk__60645 = G__60705;
count__60646 = G__60706;
i__60647 = G__60707;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60643);
if(temp__5735__auto__){
var seq__60643__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60643__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60643__$1);
var G__60708 = cljs.core.chunk_rest(seq__60643__$1);
var G__60709 = c__4609__auto__;
var G__60710 = cljs.core.count(c__4609__auto__);
var G__60711 = (0);
seq__60643 = G__60708;
chunk__60645 = G__60709;
count__60646 = G__60710;
i__60647 = G__60711;
continue;
} else {
var map__60655 = cljs.core.first(seq__60643__$1);
var map__60655__$1 = (((((!((map__60655 == null))))?(((((map__60655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60655):map__60655);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60655__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60712 = cljs.core.next(seq__60643__$1);
var G__60713 = null;
var G__60714 = (0);
var G__60715 = (0);
seq__60643 = G__60712;
chunk__60645 = G__60713;
count__60646 = G__60714;
i__60647 = G__60715;
continue;
} else {
var G__60716 = cljs.core.next(seq__60643__$1);
var G__60717 = null;
var G__60718 = (0);
var G__60719 = (0);
seq__60643 = G__60716;
chunk__60645 = G__60717;
count__60646 = G__60718;
i__60647 = G__60719;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60657,msg){
var map__60658 = p__60657;
var map__60658__$1 = (((((!((map__60658 == null))))?(((((map__60658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60658):map__60658);
var runtime = map__60658__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60658__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60660,key,p__60661){
var map__60662 = p__60660;
var map__60662__$1 = (((((!((map__60662 == null))))?(((((map__60662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60662):map__60662);
var state = map__60662__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60662__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60663 = p__60661;
var map__60663__$1 = (((((!((map__60663 == null))))?(((((map__60663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60663):map__60663);
var spec = map__60663__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60666,key,spec){
var map__60667 = p__60666;
var map__60667__$1 = (((((!((map__60667 == null))))?(((((map__60667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60667):map__60667);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60667__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60674){
var map__60675 = p__60674;
var map__60675__$1 = (((((!((map__60675 == null))))?(((((map__60675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60675):map__60675);
var runtime = map__60675__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60669_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60669_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60670_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60670_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60671_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60671_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60672_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60672_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60673_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60673_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60677,key){
var map__60678 = p__60677;
var map__60678__$1 = (((((!((map__60678 == null))))?(((((map__60678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60678):map__60678);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60680,p__60681){
var map__60682 = p__60680;
var map__60682__$1 = (((((!((map__60682 == null))))?(((((map__60682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60682):map__60682);
var runtime = map__60682__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60682__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60683 = p__60681;
var map__60683__$1 = (((((!((map__60683 == null))))?(((((map__60683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60683):map__60683);
var msg = map__60683__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60683__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60686 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60688 = null;
var count__60689 = (0);
var i__60690 = (0);
while(true){
if((i__60690 < count__60689)){
var map__60696 = chunk__60688.cljs$core$IIndexed$_nth$arity$2(null,i__60690);
var map__60696__$1 = (((((!((map__60696 == null))))?(((((map__60696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60696):map__60696);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60720 = seq__60686;
var G__60721 = chunk__60688;
var G__60722 = count__60689;
var G__60723 = (i__60690 + (1));
seq__60686 = G__60720;
chunk__60688 = G__60721;
count__60689 = G__60722;
i__60690 = G__60723;
continue;
} else {
var G__60724 = seq__60686;
var G__60725 = chunk__60688;
var G__60726 = count__60689;
var G__60727 = (i__60690 + (1));
seq__60686 = G__60724;
chunk__60688 = G__60725;
count__60689 = G__60726;
i__60690 = G__60727;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60686);
if(temp__5735__auto__){
var seq__60686__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60686__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60686__$1);
var G__60728 = cljs.core.chunk_rest(seq__60686__$1);
var G__60729 = c__4609__auto__;
var G__60730 = cljs.core.count(c__4609__auto__);
var G__60731 = (0);
seq__60686 = G__60728;
chunk__60688 = G__60729;
count__60689 = G__60730;
i__60690 = G__60731;
continue;
} else {
var map__60698 = cljs.core.first(seq__60686__$1);
var map__60698__$1 = (((((!((map__60698 == null))))?(((((map__60698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60698):map__60698);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60732 = cljs.core.next(seq__60686__$1);
var G__60733 = null;
var G__60734 = (0);
var G__60735 = (0);
seq__60686 = G__60732;
chunk__60688 = G__60733;
count__60689 = G__60734;
i__60690 = G__60735;
continue;
} else {
var G__60736 = cljs.core.next(seq__60686__$1);
var G__60737 = null;
var G__60738 = (0);
var G__60739 = (0);
seq__60686 = G__60736;
chunk__60688 = G__60737;
count__60689 = G__60738;
i__60690 = G__60739;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
