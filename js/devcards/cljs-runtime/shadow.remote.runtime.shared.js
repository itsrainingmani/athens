goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59725,p__59726){
var map__59727 = p__59725;
var map__59727__$1 = (((((!((map__59727 == null))))?(((((map__59727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59727):map__59727);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59728 = p__59726;
var map__59728__$1 = (((((!((map__59728 == null))))?(((((map__59728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59728):map__59728);
var msg = map__59728__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59728__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59731,p__59732){
var map__59733 = p__59731;
var map__59733__$1 = (((((!((map__59733 == null))))?(((((map__59733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59733):map__59733);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59734 = p__59732;
var map__59734__$1 = (((((!((map__59734 == null))))?(((((map__59734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59734):map__59734);
var msg = map__59734__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59734__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59737 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59739 = null;
var count__59740 = (0);
var i__59741 = (0);
while(true){
if((i__59741 < count__59740)){
var map__59747 = chunk__59739.cljs$core$IIndexed$_nth$arity$2(null,i__59741);
var map__59747__$1 = (((((!((map__59747 == null))))?(((((map__59747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59747):map__59747);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59747__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59794 = seq__59737;
var G__59795 = chunk__59739;
var G__59796 = count__59740;
var G__59797 = (i__59741 + (1));
seq__59737 = G__59794;
chunk__59739 = G__59795;
count__59740 = G__59796;
i__59741 = G__59797;
continue;
} else {
var G__59798 = seq__59737;
var G__59799 = chunk__59739;
var G__59800 = count__59740;
var G__59801 = (i__59741 + (1));
seq__59737 = G__59798;
chunk__59739 = G__59799;
count__59740 = G__59800;
i__59741 = G__59801;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59737);
if(temp__5735__auto__){
var seq__59737__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59737__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59737__$1);
var G__59802 = cljs.core.chunk_rest(seq__59737__$1);
var G__59803 = c__4556__auto__;
var G__59804 = cljs.core.count(c__4556__auto__);
var G__59805 = (0);
seq__59737 = G__59802;
chunk__59739 = G__59803;
count__59740 = G__59804;
i__59741 = G__59805;
continue;
} else {
var map__59749 = cljs.core.first(seq__59737__$1);
var map__59749__$1 = (((((!((map__59749 == null))))?(((((map__59749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59749):map__59749);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59749__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59806 = cljs.core.next(seq__59737__$1);
var G__59807 = null;
var G__59808 = (0);
var G__59809 = (0);
seq__59737 = G__59806;
chunk__59739 = G__59807;
count__59740 = G__59808;
i__59741 = G__59809;
continue;
} else {
var G__59810 = cljs.core.next(seq__59737__$1);
var G__59811 = null;
var G__59812 = (0);
var G__59813 = (0);
seq__59737 = G__59810;
chunk__59739 = G__59811;
count__59740 = G__59812;
i__59741 = G__59813;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59751,msg){
var map__59752 = p__59751;
var map__59752__$1 = (((((!((map__59752 == null))))?(((((map__59752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59752):map__59752);
var runtime = map__59752__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59752__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59754,key,p__59755){
var map__59756 = p__59754;
var map__59756__$1 = (((((!((map__59756 == null))))?(((((map__59756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59756):map__59756);
var state = map__59756__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59757 = p__59755;
var map__59757__$1 = (((((!((map__59757 == null))))?(((((map__59757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59757):map__59757);
var spec = map__59757__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59760,key,spec){
var map__59761 = p__59760;
var map__59761__$1 = (((((!((map__59761 == null))))?(((((map__59761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59761):map__59761);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59768){
var map__59769 = p__59768;
var map__59769__$1 = (((((!((map__59769 == null))))?(((((map__59769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59769):map__59769);
var runtime = map__59769__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59763_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59763_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59764_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59764_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59765_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59765_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59766_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59766_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59767_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59767_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59771,key){
var map__59772 = p__59771;
var map__59772__$1 = (((((!((map__59772 == null))))?(((((map__59772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59772):map__59772);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59772__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59774,p__59775){
var map__59776 = p__59774;
var map__59776__$1 = (((((!((map__59776 == null))))?(((((map__59776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59776):map__59776);
var runtime = map__59776__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59777 = p__59775;
var map__59777__$1 = (((((!((map__59777 == null))))?(((((map__59777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59777):map__59777);
var msg = map__59777__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59777__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59780 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59782 = null;
var count__59783 = (0);
var i__59784 = (0);
while(true){
if((i__59784 < count__59783)){
var map__59790 = chunk__59782.cljs$core$IIndexed$_nth$arity$2(null,i__59784);
var map__59790__$1 = (((((!((map__59790 == null))))?(((((map__59790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59790):map__59790);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59790__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59814 = seq__59780;
var G__59815 = chunk__59782;
var G__59816 = count__59783;
var G__59817 = (i__59784 + (1));
seq__59780 = G__59814;
chunk__59782 = G__59815;
count__59783 = G__59816;
i__59784 = G__59817;
continue;
} else {
var G__59818 = seq__59780;
var G__59819 = chunk__59782;
var G__59820 = count__59783;
var G__59821 = (i__59784 + (1));
seq__59780 = G__59818;
chunk__59782 = G__59819;
count__59783 = G__59820;
i__59784 = G__59821;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59780);
if(temp__5735__auto__){
var seq__59780__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59780__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59780__$1);
var G__59822 = cljs.core.chunk_rest(seq__59780__$1);
var G__59823 = c__4556__auto__;
var G__59824 = cljs.core.count(c__4556__auto__);
var G__59825 = (0);
seq__59780 = G__59822;
chunk__59782 = G__59823;
count__59783 = G__59824;
i__59784 = G__59825;
continue;
} else {
var map__59792 = cljs.core.first(seq__59780__$1);
var map__59792__$1 = (((((!((map__59792 == null))))?(((((map__59792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59792):map__59792);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59792__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59826 = cljs.core.next(seq__59780__$1);
var G__59827 = null;
var G__59828 = (0);
var G__59829 = (0);
seq__59780 = G__59826;
chunk__59782 = G__59827;
count__59783 = G__59828;
i__59784 = G__59829;
continue;
} else {
var G__59830 = cljs.core.next(seq__59780__$1);
var G__59831 = null;
var G__59832 = (0);
var G__59833 = (0);
seq__59780 = G__59830;
chunk__59782 = G__59831;
count__59783 = G__59832;
i__59784 = G__59833;
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
