goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60777,p__60778){
var map__60779 = p__60777;
var map__60779__$1 = (((((!((map__60779 == null))))?(((((map__60779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60779):map__60779);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60780 = p__60778;
var map__60780__$1 = (((((!((map__60780 == null))))?(((((map__60780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60780):map__60780);
var msg = map__60780__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60783,p__60784){
var map__60785 = p__60783;
var map__60785__$1 = (((((!((map__60785 == null))))?(((((map__60785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60785):map__60785);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60785__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60786 = p__60784;
var map__60786__$1 = (((((!((map__60786 == null))))?(((((map__60786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60786):map__60786);
var msg = map__60786__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60786__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60789 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60791 = null;
var count__60792 = (0);
var i__60793 = (0);
while(true){
if((i__60793 < count__60792)){
var map__60799 = chunk__60791.cljs$core$IIndexed$_nth$arity$2(null,i__60793);
var map__60799__$1 = (((((!((map__60799 == null))))?(((((map__60799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60799):map__60799);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60799__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60846 = seq__60789;
var G__60847 = chunk__60791;
var G__60848 = count__60792;
var G__60849 = (i__60793 + (1));
seq__60789 = G__60846;
chunk__60791 = G__60847;
count__60792 = G__60848;
i__60793 = G__60849;
continue;
} else {
var G__60850 = seq__60789;
var G__60851 = chunk__60791;
var G__60852 = count__60792;
var G__60853 = (i__60793 + (1));
seq__60789 = G__60850;
chunk__60791 = G__60851;
count__60792 = G__60852;
i__60793 = G__60853;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60789);
if(temp__5735__auto__){
var seq__60789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60789__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60789__$1);
var G__60854 = cljs.core.chunk_rest(seq__60789__$1);
var G__60855 = c__4609__auto__;
var G__60856 = cljs.core.count(c__4609__auto__);
var G__60857 = (0);
seq__60789 = G__60854;
chunk__60791 = G__60855;
count__60792 = G__60856;
i__60793 = G__60857;
continue;
} else {
var map__60801 = cljs.core.first(seq__60789__$1);
var map__60801__$1 = (((((!((map__60801 == null))))?(((((map__60801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60801):map__60801);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60858 = cljs.core.next(seq__60789__$1);
var G__60859 = null;
var G__60860 = (0);
var G__60861 = (0);
seq__60789 = G__60858;
chunk__60791 = G__60859;
count__60792 = G__60860;
i__60793 = G__60861;
continue;
} else {
var G__60862 = cljs.core.next(seq__60789__$1);
var G__60863 = null;
var G__60864 = (0);
var G__60865 = (0);
seq__60789 = G__60862;
chunk__60791 = G__60863;
count__60792 = G__60864;
i__60793 = G__60865;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60803,msg){
var map__60804 = p__60803;
var map__60804__$1 = (((((!((map__60804 == null))))?(((((map__60804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60804):map__60804);
var runtime = map__60804__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60804__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60806,key,p__60807){
var map__60808 = p__60806;
var map__60808__$1 = (((((!((map__60808 == null))))?(((((map__60808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60808):map__60808);
var state = map__60808__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60808__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60809 = p__60807;
var map__60809__$1 = (((((!((map__60809 == null))))?(((((map__60809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60809):map__60809);
var spec = map__60809__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60809__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60812,key,spec){
var map__60813 = p__60812;
var map__60813__$1 = (((((!((map__60813 == null))))?(((((map__60813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60813):map__60813);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60813__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60820){
var map__60821 = p__60820;
var map__60821__$1 = (((((!((map__60821 == null))))?(((((map__60821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60821):map__60821);
var runtime = map__60821__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60821__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60815_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60815_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60816_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60816_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60817_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60817_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60818_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60818_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60819_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60819_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60823,key){
var map__60824 = p__60823;
var map__60824__$1 = (((((!((map__60824 == null))))?(((((map__60824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60824):map__60824);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60824__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60826,p__60827){
var map__60828 = p__60826;
var map__60828__$1 = (((((!((map__60828 == null))))?(((((map__60828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60828):map__60828);
var runtime = map__60828__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60828__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60829 = p__60827;
var map__60829__$1 = (((((!((map__60829 == null))))?(((((map__60829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60829):map__60829);
var msg = map__60829__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60829__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60832 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60834 = null;
var count__60835 = (0);
var i__60836 = (0);
while(true){
if((i__60836 < count__60835)){
var map__60842 = chunk__60834.cljs$core$IIndexed$_nth$arity$2(null,i__60836);
var map__60842__$1 = (((((!((map__60842 == null))))?(((((map__60842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60842):map__60842);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60842__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60866 = seq__60832;
var G__60867 = chunk__60834;
var G__60868 = count__60835;
var G__60869 = (i__60836 + (1));
seq__60832 = G__60866;
chunk__60834 = G__60867;
count__60835 = G__60868;
i__60836 = G__60869;
continue;
} else {
var G__60870 = seq__60832;
var G__60871 = chunk__60834;
var G__60872 = count__60835;
var G__60873 = (i__60836 + (1));
seq__60832 = G__60870;
chunk__60834 = G__60871;
count__60835 = G__60872;
i__60836 = G__60873;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60832);
if(temp__5735__auto__){
var seq__60832__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60832__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60832__$1);
var G__60874 = cljs.core.chunk_rest(seq__60832__$1);
var G__60875 = c__4609__auto__;
var G__60876 = cljs.core.count(c__4609__auto__);
var G__60877 = (0);
seq__60832 = G__60874;
chunk__60834 = G__60875;
count__60835 = G__60876;
i__60836 = G__60877;
continue;
} else {
var map__60844 = cljs.core.first(seq__60832__$1);
var map__60844__$1 = (((((!((map__60844 == null))))?(((((map__60844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60844):map__60844);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60878 = cljs.core.next(seq__60832__$1);
var G__60879 = null;
var G__60880 = (0);
var G__60881 = (0);
seq__60832 = G__60878;
chunk__60834 = G__60879;
count__60835 = G__60880;
i__60836 = G__60881;
continue;
} else {
var G__60882 = cljs.core.next(seq__60832__$1);
var G__60883 = null;
var G__60884 = (0);
var G__60885 = (0);
seq__60832 = G__60882;
chunk__60834 = G__60883;
count__60835 = G__60884;
i__60836 = G__60885;
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
