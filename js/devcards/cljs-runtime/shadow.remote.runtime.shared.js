goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59734,p__59735){
var map__59736 = p__59734;
var map__59736__$1 = (((((!((map__59736 == null))))?(((((map__59736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59736):map__59736);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59736__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59737 = p__59735;
var map__59737__$1 = (((((!((map__59737 == null))))?(((((map__59737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59737):map__59737);
var msg = map__59737__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59737__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59740,p__59741){
var map__59742 = p__59740;
var map__59742__$1 = (((((!((map__59742 == null))))?(((((map__59742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59742):map__59742);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59742__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59743 = p__59741;
var map__59743__$1 = (((((!((map__59743 == null))))?(((((map__59743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59743):map__59743);
var msg = map__59743__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59743__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59746 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59748 = null;
var count__59749 = (0);
var i__59750 = (0);
while(true){
if((i__59750 < count__59749)){
var map__59756 = chunk__59748.cljs$core$IIndexed$_nth$arity$2(null,i__59750);
var map__59756__$1 = (((((!((map__59756 == null))))?(((((map__59756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59756):map__59756);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59803 = seq__59746;
var G__59804 = chunk__59748;
var G__59805 = count__59749;
var G__59806 = (i__59750 + (1));
seq__59746 = G__59803;
chunk__59748 = G__59804;
count__59749 = G__59805;
i__59750 = G__59806;
continue;
} else {
var G__59807 = seq__59746;
var G__59808 = chunk__59748;
var G__59809 = count__59749;
var G__59810 = (i__59750 + (1));
seq__59746 = G__59807;
chunk__59748 = G__59808;
count__59749 = G__59809;
i__59750 = G__59810;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59746);
if(temp__5735__auto__){
var seq__59746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59746__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59746__$1);
var G__59811 = cljs.core.chunk_rest(seq__59746__$1);
var G__59812 = c__4556__auto__;
var G__59813 = cljs.core.count(c__4556__auto__);
var G__59814 = (0);
seq__59746 = G__59811;
chunk__59748 = G__59812;
count__59749 = G__59813;
i__59750 = G__59814;
continue;
} else {
var map__59758 = cljs.core.first(seq__59746__$1);
var map__59758__$1 = (((((!((map__59758 == null))))?(((((map__59758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59758):map__59758);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59758__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59815 = cljs.core.next(seq__59746__$1);
var G__59816 = null;
var G__59817 = (0);
var G__59818 = (0);
seq__59746 = G__59815;
chunk__59748 = G__59816;
count__59749 = G__59817;
i__59750 = G__59818;
continue;
} else {
var G__59819 = cljs.core.next(seq__59746__$1);
var G__59820 = null;
var G__59821 = (0);
var G__59822 = (0);
seq__59746 = G__59819;
chunk__59748 = G__59820;
count__59749 = G__59821;
i__59750 = G__59822;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59760,msg){
var map__59761 = p__59760;
var map__59761__$1 = (((((!((map__59761 == null))))?(((((map__59761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59761):map__59761);
var runtime = map__59761__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59763,key,p__59764){
var map__59765 = p__59763;
var map__59765__$1 = (((((!((map__59765 == null))))?(((((map__59765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59765):map__59765);
var state = map__59765__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59766 = p__59764;
var map__59766__$1 = (((((!((map__59766 == null))))?(((((map__59766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59766):map__59766);
var spec = map__59766__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59769,key,spec){
var map__59770 = p__59769;
var map__59770__$1 = (((((!((map__59770 == null))))?(((((map__59770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59770):map__59770);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59777){
var map__59778 = p__59777;
var map__59778__$1 = (((((!((map__59778 == null))))?(((((map__59778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59778):map__59778);
var runtime = map__59778__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59778__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59772_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59772_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59773_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59773_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59774_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59774_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59775_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59775_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59776_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59776_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59780,key){
var map__59781 = p__59780;
var map__59781__$1 = (((((!((map__59781 == null))))?(((((map__59781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59781):map__59781);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59781__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59783,p__59784){
var map__59785 = p__59783;
var map__59785__$1 = (((((!((map__59785 == null))))?(((((map__59785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59785):map__59785);
var runtime = map__59785__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59785__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59786 = p__59784;
var map__59786__$1 = (((((!((map__59786 == null))))?(((((map__59786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59786):map__59786);
var msg = map__59786__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59789 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59791 = null;
var count__59792 = (0);
var i__59793 = (0);
while(true){
if((i__59793 < count__59792)){
var map__59799 = chunk__59791.cljs$core$IIndexed$_nth$arity$2(null,i__59793);
var map__59799__$1 = (((((!((map__59799 == null))))?(((((map__59799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59799):map__59799);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59799__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59823 = seq__59789;
var G__59824 = chunk__59791;
var G__59825 = count__59792;
var G__59826 = (i__59793 + (1));
seq__59789 = G__59823;
chunk__59791 = G__59824;
count__59792 = G__59825;
i__59793 = G__59826;
continue;
} else {
var G__59827 = seq__59789;
var G__59828 = chunk__59791;
var G__59829 = count__59792;
var G__59830 = (i__59793 + (1));
seq__59789 = G__59827;
chunk__59791 = G__59828;
count__59792 = G__59829;
i__59793 = G__59830;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59789);
if(temp__5735__auto__){
var seq__59789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59789__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59789__$1);
var G__59831 = cljs.core.chunk_rest(seq__59789__$1);
var G__59832 = c__4556__auto__;
var G__59833 = cljs.core.count(c__4556__auto__);
var G__59834 = (0);
seq__59789 = G__59831;
chunk__59791 = G__59832;
count__59792 = G__59833;
i__59793 = G__59834;
continue;
} else {
var map__59801 = cljs.core.first(seq__59789__$1);
var map__59801__$1 = (((((!((map__59801 == null))))?(((((map__59801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59801):map__59801);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59801__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59835 = cljs.core.next(seq__59789__$1);
var G__59836 = null;
var G__59837 = (0);
var G__59838 = (0);
seq__59789 = G__59835;
chunk__59791 = G__59836;
count__59792 = G__59837;
i__59793 = G__59838;
continue;
} else {
var G__59839 = cljs.core.next(seq__59789__$1);
var G__59840 = null;
var G__59841 = (0);
var G__59842 = (0);
seq__59789 = G__59839;
chunk__59791 = G__59840;
count__59792 = G__59841;
i__59793 = G__59842;
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
