goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59757,p__59758){
var map__59759 = p__59757;
var map__59759__$1 = (((((!((map__59759 == null))))?(((((map__59759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59759):map__59759);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59759__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59760 = p__59758;
var map__59760__$1 = (((((!((map__59760 == null))))?(((((map__59760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59760):map__59760);
var msg = map__59760__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59763,p__59764){
var map__59765 = p__59763;
var map__59765__$1 = (((((!((map__59765 == null))))?(((((map__59765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59765):map__59765);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59766 = p__59764;
var map__59766__$1 = (((((!((map__59766 == null))))?(((((map__59766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59766):map__59766);
var msg = map__59766__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59769 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59771 = null;
var count__59772 = (0);
var i__59773 = (0);
while(true){
if((i__59773 < count__59772)){
var map__59779 = chunk__59771.cljs$core$IIndexed$_nth$arity$2(null,i__59773);
var map__59779__$1 = (((((!((map__59779 == null))))?(((((map__59779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59779):map__59779);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59779__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59826 = seq__59769;
var G__59827 = chunk__59771;
var G__59828 = count__59772;
var G__59829 = (i__59773 + (1));
seq__59769 = G__59826;
chunk__59771 = G__59827;
count__59772 = G__59828;
i__59773 = G__59829;
continue;
} else {
var G__59830 = seq__59769;
var G__59831 = chunk__59771;
var G__59832 = count__59772;
var G__59833 = (i__59773 + (1));
seq__59769 = G__59830;
chunk__59771 = G__59831;
count__59772 = G__59832;
i__59773 = G__59833;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59769);
if(temp__5735__auto__){
var seq__59769__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59769__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59769__$1);
var G__59834 = cljs.core.chunk_rest(seq__59769__$1);
var G__59835 = c__4556__auto__;
var G__59836 = cljs.core.count(c__4556__auto__);
var G__59837 = (0);
seq__59769 = G__59834;
chunk__59771 = G__59835;
count__59772 = G__59836;
i__59773 = G__59837;
continue;
} else {
var map__59781 = cljs.core.first(seq__59769__$1);
var map__59781__$1 = (((((!((map__59781 == null))))?(((((map__59781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59781):map__59781);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59781__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59838 = cljs.core.next(seq__59769__$1);
var G__59839 = null;
var G__59840 = (0);
var G__59841 = (0);
seq__59769 = G__59838;
chunk__59771 = G__59839;
count__59772 = G__59840;
i__59773 = G__59841;
continue;
} else {
var G__59842 = cljs.core.next(seq__59769__$1);
var G__59843 = null;
var G__59844 = (0);
var G__59845 = (0);
seq__59769 = G__59842;
chunk__59771 = G__59843;
count__59772 = G__59844;
i__59773 = G__59845;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59783,msg){
var map__59784 = p__59783;
var map__59784__$1 = (((((!((map__59784 == null))))?(((((map__59784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59784):map__59784);
var runtime = map__59784__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59784__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59786,key,p__59787){
var map__59788 = p__59786;
var map__59788__$1 = (((((!((map__59788 == null))))?(((((map__59788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59788):map__59788);
var state = map__59788__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59788__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59789 = p__59787;
var map__59789__$1 = (((((!((map__59789 == null))))?(((((map__59789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59789):map__59789);
var spec = map__59789__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59789__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59792,key,spec){
var map__59793 = p__59792;
var map__59793__$1 = (((((!((map__59793 == null))))?(((((map__59793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59793):map__59793);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59800){
var map__59801 = p__59800;
var map__59801__$1 = (((((!((map__59801 == null))))?(((((map__59801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59801):map__59801);
var runtime = map__59801__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59801__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59795_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59795_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59796_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59796_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59797_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59797_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59798_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59798_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59799_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59799_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59803,key){
var map__59804 = p__59803;
var map__59804__$1 = (((((!((map__59804 == null))))?(((((map__59804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59804):map__59804);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59804__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59806,p__59807){
var map__59808 = p__59806;
var map__59808__$1 = (((((!((map__59808 == null))))?(((((map__59808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59808):map__59808);
var runtime = map__59808__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59809 = p__59807;
var map__59809__$1 = (((((!((map__59809 == null))))?(((((map__59809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59809):map__59809);
var msg = map__59809__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59809__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59812 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59814 = null;
var count__59815 = (0);
var i__59816 = (0);
while(true){
if((i__59816 < count__59815)){
var map__59822 = chunk__59814.cljs$core$IIndexed$_nth$arity$2(null,i__59816);
var map__59822__$1 = (((((!((map__59822 == null))))?(((((map__59822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59822):map__59822);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59822__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59846 = seq__59812;
var G__59847 = chunk__59814;
var G__59848 = count__59815;
var G__59849 = (i__59816 + (1));
seq__59812 = G__59846;
chunk__59814 = G__59847;
count__59815 = G__59848;
i__59816 = G__59849;
continue;
} else {
var G__59850 = seq__59812;
var G__59851 = chunk__59814;
var G__59852 = count__59815;
var G__59853 = (i__59816 + (1));
seq__59812 = G__59850;
chunk__59814 = G__59851;
count__59815 = G__59852;
i__59816 = G__59853;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59812);
if(temp__5735__auto__){
var seq__59812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59812__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59812__$1);
var G__59854 = cljs.core.chunk_rest(seq__59812__$1);
var G__59855 = c__4556__auto__;
var G__59856 = cljs.core.count(c__4556__auto__);
var G__59857 = (0);
seq__59812 = G__59854;
chunk__59814 = G__59855;
count__59815 = G__59856;
i__59816 = G__59857;
continue;
} else {
var map__59824 = cljs.core.first(seq__59812__$1);
var map__59824__$1 = (((((!((map__59824 == null))))?(((((map__59824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59824):map__59824);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59824__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59858 = cljs.core.next(seq__59812__$1);
var G__59859 = null;
var G__59860 = (0);
var G__59861 = (0);
seq__59812 = G__59858;
chunk__59814 = G__59859;
count__59815 = G__59860;
i__59816 = G__59861;
continue;
} else {
var G__59862 = cljs.core.next(seq__59812__$1);
var G__59863 = null;
var G__59864 = (0);
var G__59865 = (0);
seq__59812 = G__59862;
chunk__59814 = G__59863;
count__59815 = G__59864;
i__59816 = G__59865;
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
