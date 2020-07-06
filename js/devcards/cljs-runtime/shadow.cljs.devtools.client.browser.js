goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49880 = arguments.length;
var i__4790__auto___49882 = (0);
while(true){
if((i__4790__auto___49882 < len__4789__auto___49880)){
args__4795__auto__.push((arguments[i__4790__auto___49882]));

var G__49883 = (i__4790__auto___49882 + (1));
i__4790__auto___49882 = G__49883;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49671){
var G__49672 = cljs.core.first(seq49671);
var seq49671__$1 = cljs.core.next(seq49671);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49672,seq49671__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49685){
var map__49686 = p__49685;
var map__49686__$1 = (((((!((map__49686 == null))))?(((((map__49686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49686):map__49686);
var src = map__49686__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49686__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49686__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49697 = cljs.core.seq(sources);
var chunk__49698 = null;
var count__49699 = (0);
var i__49700 = (0);
while(true){
if((i__49700 < count__49699)){
var map__49711 = chunk__49698.cljs$core$IIndexed$_nth$arity$2(null,i__49700);
var map__49711__$1 = (((((!((map__49711 == null))))?(((((map__49711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49711):map__49711);
var src = map__49711__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49715){var e_49885 = e49715;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49885);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49885.message)].join('')));
}

var G__49886 = seq__49697;
var G__49887 = chunk__49698;
var G__49888 = count__49699;
var G__49889 = (i__49700 + (1));
seq__49697 = G__49886;
chunk__49698 = G__49887;
count__49699 = G__49888;
i__49700 = G__49889;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49697);
if(temp__5735__auto__){
var seq__49697__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49697__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49697__$1);
var G__49891 = cljs.core.chunk_rest(seq__49697__$1);
var G__49892 = c__4609__auto__;
var G__49893 = cljs.core.count(c__4609__auto__);
var G__49894 = (0);
seq__49697 = G__49891;
chunk__49698 = G__49892;
count__49699 = G__49893;
i__49700 = G__49894;
continue;
} else {
var map__49721 = cljs.core.first(seq__49697__$1);
var map__49721__$1 = (((((!((map__49721 == null))))?(((((map__49721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49721):map__49721);
var src = map__49721__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49721__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49721__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49721__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49721__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49723){var e_49895 = e49723;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49895);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49895.message)].join('')));
}

var G__49896 = cljs.core.next(seq__49697__$1);
var G__49897 = null;
var G__49898 = (0);
var G__49899 = (0);
seq__49697 = G__49896;
chunk__49698 = G__49897;
count__49699 = G__49898;
i__49700 = G__49899;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49725 = cljs.core.seq(js_requires);
var chunk__49726 = null;
var count__49727 = (0);
var i__49728 = (0);
while(true){
if((i__49728 < count__49727)){
var js_ns = chunk__49726.cljs$core$IIndexed$_nth$arity$2(null,i__49728);
var require_str_49901 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49901);


var G__49902 = seq__49725;
var G__49903 = chunk__49726;
var G__49904 = count__49727;
var G__49905 = (i__49728 + (1));
seq__49725 = G__49902;
chunk__49726 = G__49903;
count__49727 = G__49904;
i__49728 = G__49905;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49725);
if(temp__5735__auto__){
var seq__49725__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49725__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49725__$1);
var G__49906 = cljs.core.chunk_rest(seq__49725__$1);
var G__49907 = c__4609__auto__;
var G__49908 = cljs.core.count(c__4609__auto__);
var G__49909 = (0);
seq__49725 = G__49906;
chunk__49726 = G__49907;
count__49727 = G__49908;
i__49728 = G__49909;
continue;
} else {
var js_ns = cljs.core.first(seq__49725__$1);
var require_str_49910 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49910);


var G__49911 = cljs.core.next(seq__49725__$1);
var G__49912 = null;
var G__49913 = (0);
var G__49914 = (0);
seq__49725 = G__49911;
chunk__49726 = G__49912;
count__49727 = G__49913;
i__49728 = G__49914;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__49730 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49730) : callback.call(null,G__49730));
} else {
var G__49731 = shadow.cljs.devtools.client.env.files_url();
var G__49732 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49733 = "POST";
var G__49734 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49735 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49731,G__49732,G__49733,G__49734,G__49735);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49738){
var map__49739 = p__49738;
var map__49739__$1 = (((((!((map__49739 == null))))?(((((map__49739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49739):map__49739);
var msg = map__49739__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49739__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49739__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49741 = info;
var map__49741__$1 = (((((!((map__49741 == null))))?(((((map__49741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49741):map__49741);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49744(s__49745){
return (new cljs.core.LazySeq(null,(function (){
var s__49745__$1 = s__49745;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49745__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49750 = cljs.core.first(xs__6292__auto__);
var map__49750__$1 = (((((!((map__49750 == null))))?(((((map__49750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49750):map__49750);
var src = map__49750__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49745__$1,map__49750,map__49750__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49741,map__49741__$1,sources,compiled,map__49739,map__49739__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49744_$_iter__49746(s__49747){
return (new cljs.core.LazySeq(null,((function (s__49745__$1,map__49750,map__49750__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49741,map__49741__$1,sources,compiled,map__49739,map__49739__$1,msg,info,reload_info){
return (function (){
var s__49747__$1 = s__49747;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49747__$1);
if(temp__5735__auto____$1){
var s__49747__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49747__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49747__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49749 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49748 = (0);
while(true){
if((i__49748 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49748);
cljs.core.chunk_append(b__49749,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49917 = (i__49748 + (1));
i__49748 = G__49917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49749),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49744_$_iter__49746(cljs.core.chunk_rest(s__49747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49749),null);
}
} else {
var warning = cljs.core.first(s__49747__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49744_$_iter__49746(cljs.core.rest(s__49747__$2)));
}
} else {
return null;
}
break;
}
});})(s__49745__$1,map__49750,map__49750__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49741,map__49741__$1,sources,compiled,map__49739,map__49739__$1,msg,info,reload_info))
,null,null));
});})(s__49745__$1,map__49750,map__49750__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49741,map__49741__$1,sources,compiled,map__49739,map__49739__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49744(cljs.core.rest(s__49745__$1)));
} else {
var G__49919 = cljs.core.rest(s__49745__$1);
s__49745__$1 = G__49919;
continue;
}
} else {
var G__49920 = cljs.core.rest(s__49745__$1);
s__49745__$1 = G__49920;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__49753_49921 = cljs.core.seq(warnings);
var chunk__49754_49922 = null;
var count__49755_49923 = (0);
var i__49756_49924 = (0);
while(true){
if((i__49756_49924 < count__49755_49923)){
var map__49762_49925 = chunk__49754_49922.cljs$core$IIndexed$_nth$arity$2(null,i__49756_49924);
var map__49762_49926__$1 = (((((!((map__49762_49925 == null))))?(((((map__49762_49925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49762_49925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49762_49925):map__49762_49925);
var w_49927 = map__49762_49926__$1;
var msg_49928__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49762_49926__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49762_49926__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49762_49926__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49762_49926__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49931)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49929),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49930),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49928__$1)].join(''));


var G__49934 = seq__49753_49921;
var G__49935 = chunk__49754_49922;
var G__49936 = count__49755_49923;
var G__49937 = (i__49756_49924 + (1));
seq__49753_49921 = G__49934;
chunk__49754_49922 = G__49935;
count__49755_49923 = G__49936;
i__49756_49924 = G__49937;
continue;
} else {
var temp__5735__auto___49938 = cljs.core.seq(seq__49753_49921);
if(temp__5735__auto___49938){
var seq__49753_49939__$1 = temp__5735__auto___49938;
if(cljs.core.chunked_seq_QMARK_(seq__49753_49939__$1)){
var c__4609__auto___49940 = cljs.core.chunk_first(seq__49753_49939__$1);
var G__49941 = cljs.core.chunk_rest(seq__49753_49939__$1);
var G__49942 = c__4609__auto___49940;
var G__49943 = cljs.core.count(c__4609__auto___49940);
var G__49944 = (0);
seq__49753_49921 = G__49941;
chunk__49754_49922 = G__49942;
count__49755_49923 = G__49943;
i__49756_49924 = G__49944;
continue;
} else {
var map__49764_49945 = cljs.core.first(seq__49753_49939__$1);
var map__49764_49946__$1 = (((((!((map__49764_49945 == null))))?(((((map__49764_49945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49764_49945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49764_49945):map__49764_49945);
var w_49947 = map__49764_49946__$1;
var msg_49948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764_49946__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764_49946__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764_49946__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764_49946__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49951)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49949),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49950),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49948__$1)].join(''));


var G__49952 = cljs.core.next(seq__49753_49939__$1);
var G__49953 = null;
var G__49954 = (0);
var G__49955 = (0);
seq__49753_49921 = G__49952;
chunk__49754_49922 = G__49953;
count__49755_49923 = G__49954;
i__49756_49924 = G__49955;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49767){
var map__49768 = p__49767;
var map__49768__$1 = (((((!((map__49768 == null))))?(((((map__49768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49768):map__49768);
var src = map__49768__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49768__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49768__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49771){
var map__49772 = p__49771;
var map__49772__$1 = (((((!((map__49772 == null))))?(((((map__49772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49772):map__49772);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49774){
var map__49775 = p__49774;
var map__49775__$1 = (((((!((map__49775 == null))))?(((((map__49775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49775):map__49775);
var rc = map__49775__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49775__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49737_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49737_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49779){
var map__49780 = p__49779;
var map__49780__$1 = (((((!((map__49780 == null))))?(((((map__49780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49780):map__49780);
var msg = map__49780__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49782 = cljs.core.seq(updates);
var chunk__49784 = null;
var count__49785 = (0);
var i__49786 = (0);
while(true){
if((i__49786 < count__49785)){
var path = chunk__49784.cljs$core$IIndexed$_nth$arity$2(null,i__49786);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49814_49960 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49817_49961 = null;
var count__49818_49962 = (0);
var i__49819_49963 = (0);
while(true){
if((i__49819_49963 < count__49818_49962)){
var node_49964 = chunk__49817_49961.cljs$core$IIndexed$_nth$arity$2(null,i__49819_49963);
var path_match_49965 = shadow.cljs.devtools.client.browser.match_paths(node_49964.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49965)){
var new_link_49969 = (function (){var G__49826 = node_49964.cloneNode(true);
G__49826.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49965),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49826;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49965], 0));

goog.dom.insertSiblingAfter(new_link_49969,node_49964);

goog.dom.removeNode(node_49964);


var G__49970 = seq__49814_49960;
var G__49971 = chunk__49817_49961;
var G__49972 = count__49818_49962;
var G__49973 = (i__49819_49963 + (1));
seq__49814_49960 = G__49970;
chunk__49817_49961 = G__49971;
count__49818_49962 = G__49972;
i__49819_49963 = G__49973;
continue;
} else {
var G__49974 = seq__49814_49960;
var G__49975 = chunk__49817_49961;
var G__49976 = count__49818_49962;
var G__49977 = (i__49819_49963 + (1));
seq__49814_49960 = G__49974;
chunk__49817_49961 = G__49975;
count__49818_49962 = G__49976;
i__49819_49963 = G__49977;
continue;
}
} else {
var temp__5735__auto___49978 = cljs.core.seq(seq__49814_49960);
if(temp__5735__auto___49978){
var seq__49814_49979__$1 = temp__5735__auto___49978;
if(cljs.core.chunked_seq_QMARK_(seq__49814_49979__$1)){
var c__4609__auto___49980 = cljs.core.chunk_first(seq__49814_49979__$1);
var G__49981 = cljs.core.chunk_rest(seq__49814_49979__$1);
var G__49982 = c__4609__auto___49980;
var G__49983 = cljs.core.count(c__4609__auto___49980);
var G__49984 = (0);
seq__49814_49960 = G__49981;
chunk__49817_49961 = G__49982;
count__49818_49962 = G__49983;
i__49819_49963 = G__49984;
continue;
} else {
var node_49985 = cljs.core.first(seq__49814_49979__$1);
var path_match_49986 = shadow.cljs.devtools.client.browser.match_paths(node_49985.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49986)){
var new_link_49987 = (function (){var G__49827 = node_49985.cloneNode(true);
G__49827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49986),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49827;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49986], 0));

goog.dom.insertSiblingAfter(new_link_49987,node_49985);

goog.dom.removeNode(node_49985);


var G__49988 = cljs.core.next(seq__49814_49979__$1);
var G__49989 = null;
var G__49990 = (0);
var G__49991 = (0);
seq__49814_49960 = G__49988;
chunk__49817_49961 = G__49989;
count__49818_49962 = G__49990;
i__49819_49963 = G__49991;
continue;
} else {
var G__49992 = cljs.core.next(seq__49814_49979__$1);
var G__49993 = null;
var G__49994 = (0);
var G__49995 = (0);
seq__49814_49960 = G__49992;
chunk__49817_49961 = G__49993;
count__49818_49962 = G__49994;
i__49819_49963 = G__49995;
continue;
}
}
} else {
}
}
break;
}


var G__49996 = seq__49782;
var G__49997 = chunk__49784;
var G__49998 = count__49785;
var G__49999 = (i__49786 + (1));
seq__49782 = G__49996;
chunk__49784 = G__49997;
count__49785 = G__49998;
i__49786 = G__49999;
continue;
} else {
var G__50000 = seq__49782;
var G__50001 = chunk__49784;
var G__50002 = count__49785;
var G__50003 = (i__49786 + (1));
seq__49782 = G__50000;
chunk__49784 = G__50001;
count__49785 = G__50002;
i__49786 = G__50003;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49782);
if(temp__5735__auto__){
var seq__49782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49782__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49782__$1);
var G__50004 = cljs.core.chunk_rest(seq__49782__$1);
var G__50005 = c__4609__auto__;
var G__50006 = cljs.core.count(c__4609__auto__);
var G__50007 = (0);
seq__49782 = G__50004;
chunk__49784 = G__50005;
count__49785 = G__50006;
i__49786 = G__50007;
continue;
} else {
var path = cljs.core.first(seq__49782__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49828_50008 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49831_50009 = null;
var count__49832_50010 = (0);
var i__49833_50011 = (0);
while(true){
if((i__49833_50011 < count__49832_50010)){
var node_50012 = chunk__49831_50009.cljs$core$IIndexed$_nth$arity$2(null,i__49833_50011);
var path_match_50013 = shadow.cljs.devtools.client.browser.match_paths(node_50012.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50013)){
var new_link_50014 = (function (){var G__49840 = node_50012.cloneNode(true);
G__49840.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50013),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49840;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50013], 0));

goog.dom.insertSiblingAfter(new_link_50014,node_50012);

goog.dom.removeNode(node_50012);


var G__50015 = seq__49828_50008;
var G__50016 = chunk__49831_50009;
var G__50017 = count__49832_50010;
var G__50018 = (i__49833_50011 + (1));
seq__49828_50008 = G__50015;
chunk__49831_50009 = G__50016;
count__49832_50010 = G__50017;
i__49833_50011 = G__50018;
continue;
} else {
var G__50019 = seq__49828_50008;
var G__50020 = chunk__49831_50009;
var G__50021 = count__49832_50010;
var G__50022 = (i__49833_50011 + (1));
seq__49828_50008 = G__50019;
chunk__49831_50009 = G__50020;
count__49832_50010 = G__50021;
i__49833_50011 = G__50022;
continue;
}
} else {
var temp__5735__auto___50023__$1 = cljs.core.seq(seq__49828_50008);
if(temp__5735__auto___50023__$1){
var seq__49828_50024__$1 = temp__5735__auto___50023__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49828_50024__$1)){
var c__4609__auto___50025 = cljs.core.chunk_first(seq__49828_50024__$1);
var G__50029 = cljs.core.chunk_rest(seq__49828_50024__$1);
var G__50030 = c__4609__auto___50025;
var G__50031 = cljs.core.count(c__4609__auto___50025);
var G__50032 = (0);
seq__49828_50008 = G__50029;
chunk__49831_50009 = G__50030;
count__49832_50010 = G__50031;
i__49833_50011 = G__50032;
continue;
} else {
var node_50033 = cljs.core.first(seq__49828_50024__$1);
var path_match_50034 = shadow.cljs.devtools.client.browser.match_paths(node_50033.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50034)){
var new_link_50035 = (function (){var G__49841 = node_50033.cloneNode(true);
G__49841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50034),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49841;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50034], 0));

goog.dom.insertSiblingAfter(new_link_50035,node_50033);

goog.dom.removeNode(node_50033);


var G__50039 = cljs.core.next(seq__49828_50024__$1);
var G__50040 = null;
var G__50041 = (0);
var G__50042 = (0);
seq__49828_50008 = G__50039;
chunk__49831_50009 = G__50040;
count__49832_50010 = G__50041;
i__49833_50011 = G__50042;
continue;
} else {
var G__50043 = cljs.core.next(seq__49828_50024__$1);
var G__50044 = null;
var G__50045 = (0);
var G__50046 = (0);
seq__49828_50008 = G__50043;
chunk__49831_50009 = G__50044;
count__49832_50010 = G__50045;
i__49833_50011 = G__50046;
continue;
}
}
} else {
}
}
break;
}


var G__50047 = cljs.core.next(seq__49782__$1);
var G__50048 = null;
var G__50049 = (0);
var G__50050 = (0);
seq__49782 = G__50047;
chunk__49784 = G__50048;
count__49785 = G__50049;
i__49786 = G__50050;
continue;
} else {
var G__50051 = cljs.core.next(seq__49782__$1);
var G__50052 = null;
var G__50053 = (0);
var G__50054 = (0);
seq__49782 = G__50051;
chunk__49784 = G__50052;
count__49785 = G__50053;
i__49786 = G__50054;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49844){
var map__49845 = p__49844;
var map__49845__$1 = (((((!((map__49845 == null))))?(((((map__49845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49845):map__49845);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49847,done){
var map__49848 = p__49847;
var map__49848__$1 = (((((!((map__49848 == null))))?(((((map__49848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49848):map__49848);
var msg = map__49848__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49850){
var map__49851 = p__49850;
var map__49851__$1 = (((((!((map__49851 == null))))?(((((map__49851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49851):map__49851);
var src = map__49851__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49851__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e49853){var e = e49853;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49855,done){
var map__49856 = p__49855;
var map__49856__$1 = (((((!((map__49856 == null))))?(((((map__49856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49856):map__49856);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49860){
var map__49861 = p__49860;
var map__49861__$1 = (((((!((map__49861 == null))))?(((((map__49861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49861):map__49861);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49863,done){
var map__49864 = p__49863;
var map__49864__$1 = (((((!((map__49864 == null))))?(((((map__49864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49864):map__49864);
var msg = map__49864__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49864__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49867_50090 = type;
var G__49867_50091__$1 = (((G__49867_50090 instanceof cljs.core.Keyword))?G__49867_50090.fqn:null);
switch (G__49867_50091__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__49868 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49869 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49870 = "POST";
var G__49871 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49872 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49868,G__49869,G__49870,G__49871,G__49872);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49875 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49874 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49874.cljs$core$IFn$_invoke$arity$1 ? fexpr__49874.cljs$core$IFn$_invoke$arity$1(G__49875) : fexpr__49874.call(null,G__49875));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e49877){var e = e49877;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50113 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50113)){
var s_50114 = temp__5735__auto___50113;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50114.onclose = (function (e){
return null;
}));

s_50114.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
