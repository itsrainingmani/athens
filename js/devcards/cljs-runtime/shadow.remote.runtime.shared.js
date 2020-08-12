goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59742,p__59743){
var map__59744 = p__59742;
var map__59744__$1 = (((((!((map__59744 == null))))?(((((map__59744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59744):map__59744);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59744__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59745 = p__59743;
var map__59745__$1 = (((((!((map__59745 == null))))?(((((map__59745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59745):map__59745);
var msg = map__59745__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59745__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59748,p__59749){
var map__59750 = p__59748;
var map__59750__$1 = (((((!((map__59750 == null))))?(((((map__59750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59750):map__59750);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59751 = p__59749;
var map__59751__$1 = (((((!((map__59751 == null))))?(((((map__59751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59751):map__59751);
var msg = map__59751__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59754 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59756 = null;
var count__59757 = (0);
var i__59758 = (0);
while(true){
if((i__59758 < count__59757)){
var map__59764 = chunk__59756.cljs$core$IIndexed$_nth$arity$2(null,i__59758);
var map__59764__$1 = (((((!((map__59764 == null))))?(((((map__59764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59764):map__59764);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59764__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59811 = seq__59754;
var G__59812 = chunk__59756;
var G__59813 = count__59757;
var G__59814 = (i__59758 + (1));
seq__59754 = G__59811;
chunk__59756 = G__59812;
count__59757 = G__59813;
i__59758 = G__59814;
continue;
} else {
var G__59815 = seq__59754;
var G__59816 = chunk__59756;
var G__59817 = count__59757;
var G__59818 = (i__59758 + (1));
seq__59754 = G__59815;
chunk__59756 = G__59816;
count__59757 = G__59817;
i__59758 = G__59818;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59754);
if(temp__5735__auto__){
var seq__59754__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59754__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59754__$1);
var G__59819 = cljs.core.chunk_rest(seq__59754__$1);
var G__59820 = c__4556__auto__;
var G__59821 = cljs.core.count(c__4556__auto__);
var G__59822 = (0);
seq__59754 = G__59819;
chunk__59756 = G__59820;
count__59757 = G__59821;
i__59758 = G__59822;
continue;
} else {
var map__59766 = cljs.core.first(seq__59754__$1);
var map__59766__$1 = (((((!((map__59766 == null))))?(((((map__59766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59766):map__59766);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59823 = cljs.core.next(seq__59754__$1);
var G__59824 = null;
var G__59825 = (0);
var G__59826 = (0);
seq__59754 = G__59823;
chunk__59756 = G__59824;
count__59757 = G__59825;
i__59758 = G__59826;
continue;
} else {
var G__59827 = cljs.core.next(seq__59754__$1);
var G__59828 = null;
var G__59829 = (0);
var G__59830 = (0);
seq__59754 = G__59827;
chunk__59756 = G__59828;
count__59757 = G__59829;
i__59758 = G__59830;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59768,msg){
var map__59769 = p__59768;
var map__59769__$1 = (((((!((map__59769 == null))))?(((((map__59769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59769):map__59769);
var runtime = map__59769__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59771,key,p__59772){
var map__59773 = p__59771;
var map__59773__$1 = (((((!((map__59773 == null))))?(((((map__59773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59773):map__59773);
var state = map__59773__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59773__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59774 = p__59772;
var map__59774__$1 = (((((!((map__59774 == null))))?(((((map__59774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59774):map__59774);
var spec = map__59774__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59774__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59777,key,spec){
var map__59778 = p__59777;
var map__59778__$1 = (((((!((map__59778 == null))))?(((((map__59778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59778):map__59778);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59778__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59785){
var map__59786 = p__59785;
var map__59786__$1 = (((((!((map__59786 == null))))?(((((map__59786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59786):map__59786);
var runtime = map__59786__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59780_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59780_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59781_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59781_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59782_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59782_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59783_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59783_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59784_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59784_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59788,key){
var map__59789 = p__59788;
var map__59789__$1 = (((((!((map__59789 == null))))?(((((map__59789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59789):map__59789);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59789__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59791,p__59792){
var map__59793 = p__59791;
var map__59793__$1 = (((((!((map__59793 == null))))?(((((map__59793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59793):map__59793);
var runtime = map__59793__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59794 = p__59792;
var map__59794__$1 = (((((!((map__59794 == null))))?(((((map__59794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59794):map__59794);
var msg = map__59794__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59794__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59797 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59799 = null;
var count__59800 = (0);
var i__59801 = (0);
while(true){
if((i__59801 < count__59800)){
var map__59807 = chunk__59799.cljs$core$IIndexed$_nth$arity$2(null,i__59801);
var map__59807__$1 = (((((!((map__59807 == null))))?(((((map__59807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59807):map__59807);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59807__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59831 = seq__59797;
var G__59832 = chunk__59799;
var G__59833 = count__59800;
var G__59834 = (i__59801 + (1));
seq__59797 = G__59831;
chunk__59799 = G__59832;
count__59800 = G__59833;
i__59801 = G__59834;
continue;
} else {
var G__59835 = seq__59797;
var G__59836 = chunk__59799;
var G__59837 = count__59800;
var G__59838 = (i__59801 + (1));
seq__59797 = G__59835;
chunk__59799 = G__59836;
count__59800 = G__59837;
i__59801 = G__59838;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59797);
if(temp__5735__auto__){
var seq__59797__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59797__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59797__$1);
var G__59839 = cljs.core.chunk_rest(seq__59797__$1);
var G__59840 = c__4556__auto__;
var G__59841 = cljs.core.count(c__4556__auto__);
var G__59842 = (0);
seq__59797 = G__59839;
chunk__59799 = G__59840;
count__59800 = G__59841;
i__59801 = G__59842;
continue;
} else {
var map__59809 = cljs.core.first(seq__59797__$1);
var map__59809__$1 = (((((!((map__59809 == null))))?(((((map__59809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59809):map__59809);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59809__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59843 = cljs.core.next(seq__59797__$1);
var G__59844 = null;
var G__59845 = (0);
var G__59846 = (0);
seq__59797 = G__59843;
chunk__59799 = G__59844;
count__59800 = G__59845;
i__59801 = G__59846;
continue;
} else {
var G__59847 = cljs.core.next(seq__59797__$1);
var G__59848 = null;
var G__59849 = (0);
var G__59850 = (0);
seq__59797 = G__59847;
chunk__59799 = G__59848;
count__59800 = G__59849;
i__59801 = G__59850;
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
