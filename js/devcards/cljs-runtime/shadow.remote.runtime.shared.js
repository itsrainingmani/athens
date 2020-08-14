goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59750,p__59751){
var map__59752 = p__59750;
var map__59752__$1 = (((((!((map__59752 == null))))?(((((map__59752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59752):map__59752);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59752__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59753 = p__59751;
var map__59753__$1 = (((((!((map__59753 == null))))?(((((map__59753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59753):map__59753);
var msg = map__59753__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59753__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59756,p__59757){
var map__59758 = p__59756;
var map__59758__$1 = (((((!((map__59758 == null))))?(((((map__59758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59758):map__59758);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59758__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59759 = p__59757;
var map__59759__$1 = (((((!((map__59759 == null))))?(((((map__59759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59759):map__59759);
var msg = map__59759__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59759__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59762 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59764 = null;
var count__59765 = (0);
var i__59766 = (0);
while(true){
if((i__59766 < count__59765)){
var map__59772 = chunk__59764.cljs$core$IIndexed$_nth$arity$2(null,i__59766);
var map__59772__$1 = (((((!((map__59772 == null))))?(((((map__59772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59772):map__59772);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59772__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59819 = seq__59762;
var G__59820 = chunk__59764;
var G__59821 = count__59765;
var G__59822 = (i__59766 + (1));
seq__59762 = G__59819;
chunk__59764 = G__59820;
count__59765 = G__59821;
i__59766 = G__59822;
continue;
} else {
var G__59823 = seq__59762;
var G__59824 = chunk__59764;
var G__59825 = count__59765;
var G__59826 = (i__59766 + (1));
seq__59762 = G__59823;
chunk__59764 = G__59824;
count__59765 = G__59825;
i__59766 = G__59826;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59762);
if(temp__5735__auto__){
var seq__59762__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59762__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59762__$1);
var G__59827 = cljs.core.chunk_rest(seq__59762__$1);
var G__59828 = c__4556__auto__;
var G__59829 = cljs.core.count(c__4556__auto__);
var G__59830 = (0);
seq__59762 = G__59827;
chunk__59764 = G__59828;
count__59765 = G__59829;
i__59766 = G__59830;
continue;
} else {
var map__59774 = cljs.core.first(seq__59762__$1);
var map__59774__$1 = (((((!((map__59774 == null))))?(((((map__59774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59774):map__59774);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59774__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59831 = cljs.core.next(seq__59762__$1);
var G__59832 = null;
var G__59833 = (0);
var G__59834 = (0);
seq__59762 = G__59831;
chunk__59764 = G__59832;
count__59765 = G__59833;
i__59766 = G__59834;
continue;
} else {
var G__59835 = cljs.core.next(seq__59762__$1);
var G__59836 = null;
var G__59837 = (0);
var G__59838 = (0);
seq__59762 = G__59835;
chunk__59764 = G__59836;
count__59765 = G__59837;
i__59766 = G__59838;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59776,msg){
var map__59777 = p__59776;
var map__59777__$1 = (((((!((map__59777 == null))))?(((((map__59777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59777):map__59777);
var runtime = map__59777__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59777__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59779,key,p__59780){
var map__59781 = p__59779;
var map__59781__$1 = (((((!((map__59781 == null))))?(((((map__59781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59781):map__59781);
var state = map__59781__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59781__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59782 = p__59780;
var map__59782__$1 = (((((!((map__59782 == null))))?(((((map__59782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59782):map__59782);
var spec = map__59782__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59785,key,spec){
var map__59786 = p__59785;
var map__59786__$1 = (((((!((map__59786 == null))))?(((((map__59786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59786):map__59786);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59793){
var map__59794 = p__59793;
var map__59794__$1 = (((((!((map__59794 == null))))?(((((map__59794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59794):map__59794);
var runtime = map__59794__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59794__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59788_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59788_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59789_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59789_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59790_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59790_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59791_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59791_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59792_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59792_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59796,key){
var map__59797 = p__59796;
var map__59797__$1 = (((((!((map__59797 == null))))?(((((map__59797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59797):map__59797);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59797__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59799,p__59800){
var map__59801 = p__59799;
var map__59801__$1 = (((((!((map__59801 == null))))?(((((map__59801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59801):map__59801);
var runtime = map__59801__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59801__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59802 = p__59800;
var map__59802__$1 = (((((!((map__59802 == null))))?(((((map__59802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59802):map__59802);
var msg = map__59802__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59802__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59805 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59807 = null;
var count__59808 = (0);
var i__59809 = (0);
while(true){
if((i__59809 < count__59808)){
var map__59815 = chunk__59807.cljs$core$IIndexed$_nth$arity$2(null,i__59809);
var map__59815__$1 = (((((!((map__59815 == null))))?(((((map__59815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59815):map__59815);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59815__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59839 = seq__59805;
var G__59840 = chunk__59807;
var G__59841 = count__59808;
var G__59842 = (i__59809 + (1));
seq__59805 = G__59839;
chunk__59807 = G__59840;
count__59808 = G__59841;
i__59809 = G__59842;
continue;
} else {
var G__59843 = seq__59805;
var G__59844 = chunk__59807;
var G__59845 = count__59808;
var G__59846 = (i__59809 + (1));
seq__59805 = G__59843;
chunk__59807 = G__59844;
count__59808 = G__59845;
i__59809 = G__59846;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59805);
if(temp__5735__auto__){
var seq__59805__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59805__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59805__$1);
var G__59847 = cljs.core.chunk_rest(seq__59805__$1);
var G__59848 = c__4556__auto__;
var G__59849 = cljs.core.count(c__4556__auto__);
var G__59850 = (0);
seq__59805 = G__59847;
chunk__59807 = G__59848;
count__59808 = G__59849;
i__59809 = G__59850;
continue;
} else {
var map__59817 = cljs.core.first(seq__59805__$1);
var map__59817__$1 = (((((!((map__59817 == null))))?(((((map__59817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59817):map__59817);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59851 = cljs.core.next(seq__59805__$1);
var G__59852 = null;
var G__59853 = (0);
var G__59854 = (0);
seq__59805 = G__59851;
chunk__59807 = G__59852;
count__59808 = G__59853;
i__59809 = G__59854;
continue;
} else {
var G__59855 = cljs.core.next(seq__59805__$1);
var G__59856 = null;
var G__59857 = (0);
var G__59858 = (0);
seq__59805 = G__59855;
chunk__59807 = G__59856;
count__59808 = G__59857;
i__59809 = G__59858;
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
