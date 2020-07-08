goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60699,p__60700){
var map__60701 = p__60699;
var map__60701__$1 = (((((!((map__60701 == null))))?(((((map__60701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60701):map__60701);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60701__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60702 = p__60700;
var map__60702__$1 = (((((!((map__60702 == null))))?(((((map__60702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60702):map__60702);
var msg = map__60702__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60705,p__60706){
var map__60707 = p__60705;
var map__60707__$1 = (((((!((map__60707 == null))))?(((((map__60707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60707):map__60707);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60707__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60708 = p__60706;
var map__60708__$1 = (((((!((map__60708 == null))))?(((((map__60708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60708):map__60708);
var msg = map__60708__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60711 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60713 = null;
var count__60714 = (0);
var i__60715 = (0);
while(true){
if((i__60715 < count__60714)){
var map__60721 = chunk__60713.cljs$core$IIndexed$_nth$arity$2(null,i__60715);
var map__60721__$1 = (((((!((map__60721 == null))))?(((((map__60721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60721):map__60721);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60768 = seq__60711;
var G__60769 = chunk__60713;
var G__60770 = count__60714;
var G__60771 = (i__60715 + (1));
seq__60711 = G__60768;
chunk__60713 = G__60769;
count__60714 = G__60770;
i__60715 = G__60771;
continue;
} else {
var G__60772 = seq__60711;
var G__60773 = chunk__60713;
var G__60774 = count__60714;
var G__60775 = (i__60715 + (1));
seq__60711 = G__60772;
chunk__60713 = G__60773;
count__60714 = G__60774;
i__60715 = G__60775;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60711);
if(temp__5735__auto__){
var seq__60711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60711__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60711__$1);
var G__60776 = cljs.core.chunk_rest(seq__60711__$1);
var G__60777 = c__4609__auto__;
var G__60778 = cljs.core.count(c__4609__auto__);
var G__60779 = (0);
seq__60711 = G__60776;
chunk__60713 = G__60777;
count__60714 = G__60778;
i__60715 = G__60779;
continue;
} else {
var map__60723 = cljs.core.first(seq__60711__$1);
var map__60723__$1 = (((((!((map__60723 == null))))?(((((map__60723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60723):map__60723);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60780 = cljs.core.next(seq__60711__$1);
var G__60781 = null;
var G__60782 = (0);
var G__60783 = (0);
seq__60711 = G__60780;
chunk__60713 = G__60781;
count__60714 = G__60782;
i__60715 = G__60783;
continue;
} else {
var G__60784 = cljs.core.next(seq__60711__$1);
var G__60785 = null;
var G__60786 = (0);
var G__60787 = (0);
seq__60711 = G__60784;
chunk__60713 = G__60785;
count__60714 = G__60786;
i__60715 = G__60787;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60725,msg){
var map__60726 = p__60725;
var map__60726__$1 = (((((!((map__60726 == null))))?(((((map__60726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60726):map__60726);
var runtime = map__60726__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60728,key,p__60729){
var map__60730 = p__60728;
var map__60730__$1 = (((((!((map__60730 == null))))?(((((map__60730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60730):map__60730);
var state = map__60730__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60730__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60731 = p__60729;
var map__60731__$1 = (((((!((map__60731 == null))))?(((((map__60731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60731):map__60731);
var spec = map__60731__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60731__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60734,key,spec){
var map__60735 = p__60734;
var map__60735__$1 = (((((!((map__60735 == null))))?(((((map__60735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60735):map__60735);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60742){
var map__60743 = p__60742;
var map__60743__$1 = (((((!((map__60743 == null))))?(((((map__60743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60743):map__60743);
var runtime = map__60743__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60743__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60737_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60737_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60738_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60738_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60739_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60739_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60740_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60740_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60741_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60741_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60745,key){
var map__60746 = p__60745;
var map__60746__$1 = (((((!((map__60746 == null))))?(((((map__60746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60746):map__60746);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60746__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60748,p__60749){
var map__60750 = p__60748;
var map__60750__$1 = (((((!((map__60750 == null))))?(((((map__60750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60750):map__60750);
var runtime = map__60750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60751 = p__60749;
var map__60751__$1 = (((((!((map__60751 == null))))?(((((map__60751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60751):map__60751);
var msg = map__60751__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60751__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60754 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60756 = null;
var count__60757 = (0);
var i__60758 = (0);
while(true){
if((i__60758 < count__60757)){
var map__60764 = chunk__60756.cljs$core$IIndexed$_nth$arity$2(null,i__60758);
var map__60764__$1 = (((((!((map__60764 == null))))?(((((map__60764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60764):map__60764);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60764__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60788 = seq__60754;
var G__60789 = chunk__60756;
var G__60790 = count__60757;
var G__60791 = (i__60758 + (1));
seq__60754 = G__60788;
chunk__60756 = G__60789;
count__60757 = G__60790;
i__60758 = G__60791;
continue;
} else {
var G__60792 = seq__60754;
var G__60793 = chunk__60756;
var G__60794 = count__60757;
var G__60795 = (i__60758 + (1));
seq__60754 = G__60792;
chunk__60756 = G__60793;
count__60757 = G__60794;
i__60758 = G__60795;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60754);
if(temp__5735__auto__){
var seq__60754__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60754__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60754__$1);
var G__60796 = cljs.core.chunk_rest(seq__60754__$1);
var G__60797 = c__4609__auto__;
var G__60798 = cljs.core.count(c__4609__auto__);
var G__60799 = (0);
seq__60754 = G__60796;
chunk__60756 = G__60797;
count__60757 = G__60798;
i__60758 = G__60799;
continue;
} else {
var map__60766 = cljs.core.first(seq__60754__$1);
var map__60766__$1 = (((((!((map__60766 == null))))?(((((map__60766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60766):map__60766);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60800 = cljs.core.next(seq__60754__$1);
var G__60801 = null;
var G__60802 = (0);
var G__60803 = (0);
seq__60754 = G__60800;
chunk__60756 = G__60801;
count__60757 = G__60802;
i__60758 = G__60803;
continue;
} else {
var G__60804 = cljs.core.next(seq__60754__$1);
var G__60805 = null;
var G__60806 = (0);
var G__60807 = (0);
seq__60754 = G__60804;
chunk__60756 = G__60805;
count__60757 = G__60806;
i__60758 = G__60807;
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
