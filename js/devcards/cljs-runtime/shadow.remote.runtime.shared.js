goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60689,p__60690){
var map__60691 = p__60689;
var map__60691__$1 = (((((!((map__60691 == null))))?(((((map__60691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60691):map__60691);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60692 = p__60690;
var map__60692__$1 = (((((!((map__60692 == null))))?(((((map__60692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60692):map__60692);
var msg = map__60692__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60692__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60695,p__60696){
var map__60697 = p__60695;
var map__60697__$1 = (((((!((map__60697 == null))))?(((((map__60697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60697):map__60697);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60697__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60698 = p__60696;
var map__60698__$1 = (((((!((map__60698 == null))))?(((((map__60698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60698):map__60698);
var msg = map__60698__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60701 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60703 = null;
var count__60704 = (0);
var i__60705 = (0);
while(true){
if((i__60705 < count__60704)){
var map__60711 = chunk__60703.cljs$core$IIndexed$_nth$arity$2(null,i__60705);
var map__60711__$1 = (((((!((map__60711 == null))))?(((((map__60711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60711):map__60711);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60711__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60758 = seq__60701;
var G__60759 = chunk__60703;
var G__60760 = count__60704;
var G__60761 = (i__60705 + (1));
seq__60701 = G__60758;
chunk__60703 = G__60759;
count__60704 = G__60760;
i__60705 = G__60761;
continue;
} else {
var G__60762 = seq__60701;
var G__60763 = chunk__60703;
var G__60764 = count__60704;
var G__60765 = (i__60705 + (1));
seq__60701 = G__60762;
chunk__60703 = G__60763;
count__60704 = G__60764;
i__60705 = G__60765;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60701);
if(temp__5735__auto__){
var seq__60701__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60701__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60701__$1);
var G__60766 = cljs.core.chunk_rest(seq__60701__$1);
var G__60767 = c__4609__auto__;
var G__60768 = cljs.core.count(c__4609__auto__);
var G__60769 = (0);
seq__60701 = G__60766;
chunk__60703 = G__60767;
count__60704 = G__60768;
i__60705 = G__60769;
continue;
} else {
var map__60713 = cljs.core.first(seq__60701__$1);
var map__60713__$1 = (((((!((map__60713 == null))))?(((((map__60713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60713):map__60713);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60770 = cljs.core.next(seq__60701__$1);
var G__60771 = null;
var G__60772 = (0);
var G__60773 = (0);
seq__60701 = G__60770;
chunk__60703 = G__60771;
count__60704 = G__60772;
i__60705 = G__60773;
continue;
} else {
var G__60774 = cljs.core.next(seq__60701__$1);
var G__60775 = null;
var G__60776 = (0);
var G__60777 = (0);
seq__60701 = G__60774;
chunk__60703 = G__60775;
count__60704 = G__60776;
i__60705 = G__60777;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60715,msg){
var map__60716 = p__60715;
var map__60716__$1 = (((((!((map__60716 == null))))?(((((map__60716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60716):map__60716);
var runtime = map__60716__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60718,key,p__60719){
var map__60720 = p__60718;
var map__60720__$1 = (((((!((map__60720 == null))))?(((((map__60720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60720):map__60720);
var state = map__60720__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60720__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60721 = p__60719;
var map__60721__$1 = (((((!((map__60721 == null))))?(((((map__60721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60721):map__60721);
var spec = map__60721__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60724,key,spec){
var map__60725 = p__60724;
var map__60725__$1 = (((((!((map__60725 == null))))?(((((map__60725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60725):map__60725);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60732){
var map__60733 = p__60732;
var map__60733__$1 = (((((!((map__60733 == null))))?(((((map__60733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60733):map__60733);
var runtime = map__60733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60727_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60727_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60728_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60728_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60729_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60729_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60730_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60730_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60731_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60731_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60735,key){
var map__60736 = p__60735;
var map__60736__$1 = (((((!((map__60736 == null))))?(((((map__60736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60736):map__60736);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60736__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60738,p__60739){
var map__60740 = p__60738;
var map__60740__$1 = (((((!((map__60740 == null))))?(((((map__60740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60740):map__60740);
var runtime = map__60740__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60740__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60741 = p__60739;
var map__60741__$1 = (((((!((map__60741 == null))))?(((((map__60741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60741):map__60741);
var msg = map__60741__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60741__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60744 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60746 = null;
var count__60747 = (0);
var i__60748 = (0);
while(true){
if((i__60748 < count__60747)){
var map__60754 = chunk__60746.cljs$core$IIndexed$_nth$arity$2(null,i__60748);
var map__60754__$1 = (((((!((map__60754 == null))))?(((((map__60754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60754):map__60754);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60754__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60778 = seq__60744;
var G__60779 = chunk__60746;
var G__60780 = count__60747;
var G__60781 = (i__60748 + (1));
seq__60744 = G__60778;
chunk__60746 = G__60779;
count__60747 = G__60780;
i__60748 = G__60781;
continue;
} else {
var G__60782 = seq__60744;
var G__60783 = chunk__60746;
var G__60784 = count__60747;
var G__60785 = (i__60748 + (1));
seq__60744 = G__60782;
chunk__60746 = G__60783;
count__60747 = G__60784;
i__60748 = G__60785;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60744);
if(temp__5735__auto__){
var seq__60744__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60744__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60744__$1);
var G__60786 = cljs.core.chunk_rest(seq__60744__$1);
var G__60787 = c__4609__auto__;
var G__60788 = cljs.core.count(c__4609__auto__);
var G__60789 = (0);
seq__60744 = G__60786;
chunk__60746 = G__60787;
count__60747 = G__60788;
i__60748 = G__60789;
continue;
} else {
var map__60756 = cljs.core.first(seq__60744__$1);
var map__60756__$1 = (((((!((map__60756 == null))))?(((((map__60756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60756):map__60756);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60756__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60790 = cljs.core.next(seq__60744__$1);
var G__60791 = null;
var G__60792 = (0);
var G__60793 = (0);
seq__60744 = G__60790;
chunk__60746 = G__60791;
count__60747 = G__60792;
i__60748 = G__60793;
continue;
} else {
var G__60794 = cljs.core.next(seq__60744__$1);
var G__60795 = null;
var G__60796 = (0);
var G__60797 = (0);
seq__60744 = G__60794;
chunk__60746 = G__60795;
count__60747 = G__60796;
i__60748 = G__60797;
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
