goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59704,p__59705){
var map__59706 = p__59704;
var map__59706__$1 = (((((!((map__59706 == null))))?(((((map__59706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59706):map__59706);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59706__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59707 = p__59705;
var map__59707__$1 = (((((!((map__59707 == null))))?(((((map__59707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59707):map__59707);
var msg = map__59707__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59707__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59710,p__59711){
var map__59712 = p__59710;
var map__59712__$1 = (((((!((map__59712 == null))))?(((((map__59712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59712):map__59712);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59712__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59713 = p__59711;
var map__59713__$1 = (((((!((map__59713 == null))))?(((((map__59713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59713):map__59713);
var msg = map__59713__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59716 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59718 = null;
var count__59719 = (0);
var i__59720 = (0);
while(true){
if((i__59720 < count__59719)){
var map__59726 = chunk__59718.cljs$core$IIndexed$_nth$arity$2(null,i__59720);
var map__59726__$1 = (((((!((map__59726 == null))))?(((((map__59726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59726):map__59726);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59726__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59773 = seq__59716;
var G__59774 = chunk__59718;
var G__59775 = count__59719;
var G__59776 = (i__59720 + (1));
seq__59716 = G__59773;
chunk__59718 = G__59774;
count__59719 = G__59775;
i__59720 = G__59776;
continue;
} else {
var G__59777 = seq__59716;
var G__59778 = chunk__59718;
var G__59779 = count__59719;
var G__59780 = (i__59720 + (1));
seq__59716 = G__59777;
chunk__59718 = G__59778;
count__59719 = G__59779;
i__59720 = G__59780;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59716);
if(temp__5735__auto__){
var seq__59716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59716__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59716__$1);
var G__59781 = cljs.core.chunk_rest(seq__59716__$1);
var G__59782 = c__4556__auto__;
var G__59783 = cljs.core.count(c__4556__auto__);
var G__59784 = (0);
seq__59716 = G__59781;
chunk__59718 = G__59782;
count__59719 = G__59783;
i__59720 = G__59784;
continue;
} else {
var map__59728 = cljs.core.first(seq__59716__$1);
var map__59728__$1 = (((((!((map__59728 == null))))?(((((map__59728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59728):map__59728);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59728__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59785 = cljs.core.next(seq__59716__$1);
var G__59786 = null;
var G__59787 = (0);
var G__59788 = (0);
seq__59716 = G__59785;
chunk__59718 = G__59786;
count__59719 = G__59787;
i__59720 = G__59788;
continue;
} else {
var G__59789 = cljs.core.next(seq__59716__$1);
var G__59790 = null;
var G__59791 = (0);
var G__59792 = (0);
seq__59716 = G__59789;
chunk__59718 = G__59790;
count__59719 = G__59791;
i__59720 = G__59792;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59730,msg){
var map__59731 = p__59730;
var map__59731__$1 = (((((!((map__59731 == null))))?(((((map__59731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59731):map__59731);
var runtime = map__59731__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59731__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59733,key,p__59734){
var map__59735 = p__59733;
var map__59735__$1 = (((((!((map__59735 == null))))?(((((map__59735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59735):map__59735);
var state = map__59735__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59736 = p__59734;
var map__59736__$1 = (((((!((map__59736 == null))))?(((((map__59736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59736):map__59736);
var spec = map__59736__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59736__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59739,key,spec){
var map__59740 = p__59739;
var map__59740__$1 = (((((!((map__59740 == null))))?(((((map__59740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59740):map__59740);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59740__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59747){
var map__59748 = p__59747;
var map__59748__$1 = (((((!((map__59748 == null))))?(((((map__59748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59748):map__59748);
var runtime = map__59748__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59742_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59742_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59743_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59743_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59744_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59744_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59745_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59745_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59746_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59746_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59750,key){
var map__59751 = p__59750;
var map__59751__$1 = (((((!((map__59751 == null))))?(((((map__59751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59751):map__59751);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59753,p__59754){
var map__59755 = p__59753;
var map__59755__$1 = (((((!((map__59755 == null))))?(((((map__59755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59755):map__59755);
var runtime = map__59755__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59756 = p__59754;
var map__59756__$1 = (((((!((map__59756 == null))))?(((((map__59756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59756):map__59756);
var msg = map__59756__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59759 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59761 = null;
var count__59762 = (0);
var i__59763 = (0);
while(true){
if((i__59763 < count__59762)){
var map__59769 = chunk__59761.cljs$core$IIndexed$_nth$arity$2(null,i__59763);
var map__59769__$1 = (((((!((map__59769 == null))))?(((((map__59769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59769):map__59769);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59793 = seq__59759;
var G__59794 = chunk__59761;
var G__59795 = count__59762;
var G__59796 = (i__59763 + (1));
seq__59759 = G__59793;
chunk__59761 = G__59794;
count__59762 = G__59795;
i__59763 = G__59796;
continue;
} else {
var G__59797 = seq__59759;
var G__59798 = chunk__59761;
var G__59799 = count__59762;
var G__59800 = (i__59763 + (1));
seq__59759 = G__59797;
chunk__59761 = G__59798;
count__59762 = G__59799;
i__59763 = G__59800;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59759);
if(temp__5735__auto__){
var seq__59759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59759__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59759__$1);
var G__59801 = cljs.core.chunk_rest(seq__59759__$1);
var G__59802 = c__4556__auto__;
var G__59803 = cljs.core.count(c__4556__auto__);
var G__59804 = (0);
seq__59759 = G__59801;
chunk__59761 = G__59802;
count__59762 = G__59803;
i__59763 = G__59804;
continue;
} else {
var map__59771 = cljs.core.first(seq__59759__$1);
var map__59771__$1 = (((((!((map__59771 == null))))?(((((map__59771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59771):map__59771);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59771__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59805 = cljs.core.next(seq__59759__$1);
var G__59806 = null;
var G__59807 = (0);
var G__59808 = (0);
seq__59759 = G__59805;
chunk__59761 = G__59806;
count__59762 = G__59807;
i__59763 = G__59808;
continue;
} else {
var G__59809 = cljs.core.next(seq__59759__$1);
var G__59810 = null;
var G__59811 = (0);
var G__59812 = (0);
seq__59759 = G__59809;
chunk__59761 = G__59810;
count__59762 = G__59811;
i__59763 = G__59812;
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
