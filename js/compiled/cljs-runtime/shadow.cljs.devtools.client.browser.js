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
var len__4789__auto___60023 = arguments.length;
var i__4790__auto___60024 = (0);
while(true){
if((i__4790__auto___60024 < len__4789__auto___60023)){
args__4795__auto__.push((arguments[i__4790__auto___60024]));

var G__60025 = (i__4790__auto___60024 + (1));
i__4790__auto___60024 = G__60025;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59650){
var G__59652 = cljs.core.first(seq59650);
var seq59650__$1 = cljs.core.next(seq59650);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59652,seq59650__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59667){
var map__59668 = p__59667;
var map__59668__$1 = (((((!((map__59668 == null))))?(((((map__59668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59668):map__59668);
var src = map__59668__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59668__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59668__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__59681 = cljs.core.seq(sources);
var chunk__59682 = null;
var count__59683 = (0);
var i__59684 = (0);
while(true){
if((i__59684 < count__59683)){
var map__59691 = chunk__59682.cljs$core$IIndexed$_nth$arity$2(null,i__59684);
var map__59691__$1 = (((((!((map__59691 == null))))?(((((map__59691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59691):map__59691);
var src = map__59691__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59691__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59691__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59691__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59691__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59693){var e_60034 = e59693;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60034);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60034.message)].join('')));
}

var G__60035 = seq__59681;
var G__60036 = chunk__59682;
var G__60037 = count__59683;
var G__60038 = (i__59684 + (1));
seq__59681 = G__60035;
chunk__59682 = G__60036;
count__59683 = G__60037;
i__59684 = G__60038;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59681);
if(temp__5735__auto__){
var seq__59681__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59681__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59681__$1);
var G__60045 = cljs.core.chunk_rest(seq__59681__$1);
var G__60046 = c__4609__auto__;
var G__60047 = cljs.core.count(c__4609__auto__);
var G__60048 = (0);
seq__59681 = G__60045;
chunk__59682 = G__60046;
count__59683 = G__60047;
i__59684 = G__60048;
continue;
} else {
var map__59703 = cljs.core.first(seq__59681__$1);
var map__59703__$1 = (((((!((map__59703 == null))))?(((((map__59703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59703):map__59703);
var src = map__59703__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59703__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59703__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59703__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59703__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59705){var e_60054 = e59705;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60054);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60054.message)].join('')));
}

var G__60055 = cljs.core.next(seq__59681__$1);
var G__60056 = null;
var G__60057 = (0);
var G__60058 = (0);
seq__59681 = G__60055;
chunk__59682 = G__60056;
count__59683 = G__60057;
i__59684 = G__60058;
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
var seq__59708 = cljs.core.seq(js_requires);
var chunk__59709 = null;
var count__59710 = (0);
var i__59711 = (0);
while(true){
if((i__59711 < count__59710)){
var js_ns = chunk__59709.cljs$core$IIndexed$_nth$arity$2(null,i__59711);
var require_str_60064 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60064);


var G__60065 = seq__59708;
var G__60066 = chunk__59709;
var G__60067 = count__59710;
var G__60068 = (i__59711 + (1));
seq__59708 = G__60065;
chunk__59709 = G__60066;
count__59710 = G__60067;
i__59711 = G__60068;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59708);
if(temp__5735__auto__){
var seq__59708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59708__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59708__$1);
var G__60073 = cljs.core.chunk_rest(seq__59708__$1);
var G__60074 = c__4609__auto__;
var G__60075 = cljs.core.count(c__4609__auto__);
var G__60076 = (0);
seq__59708 = G__60073;
chunk__59709 = G__60074;
count__59710 = G__60075;
i__59711 = G__60076;
continue;
} else {
var js_ns = cljs.core.first(seq__59708__$1);
var require_str_60077 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60077);


var G__60078 = cljs.core.next(seq__59708__$1);
var G__60079 = null;
var G__60080 = (0);
var G__60081 = (0);
seq__59708 = G__60078;
chunk__59709 = G__60079;
count__59710 = G__60080;
i__59711 = G__60081;
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
var G__59714 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59714) : callback.call(null,G__59714));
} else {
var G__59716 = shadow.cljs.devtools.client.env.files_url();
var G__59717 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__59718 = "POST";
var G__59719 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59720 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59716,G__59717,G__59718,G__59719,G__59720);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59722){
var map__59723 = p__59722;
var map__59723__$1 = (((((!((map__59723 == null))))?(((((map__59723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59723):map__59723);
var msg = map__59723__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59723__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59723__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59725 = info;
var map__59725__$1 = (((((!((map__59725 == null))))?(((((map__59725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59725):map__59725);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59727(s__59728){
return (new cljs.core.LazySeq(null,(function (){
var s__59728__$1 = s__59728;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59728__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59733 = cljs.core.first(xs__6292__auto__);
var map__59733__$1 = (((((!((map__59733 == null))))?(((((map__59733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59733):map__59733);
var src = map__59733__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59733__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59733__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__59728__$1,map__59733,map__59733__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59725,map__59725__$1,sources,compiled,map__59723,map__59723__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59727_$_iter__59729(s__59730){
return (new cljs.core.LazySeq(null,((function (s__59728__$1,map__59733,map__59733__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59725,map__59725__$1,sources,compiled,map__59723,map__59723__$1,msg,info,reload_info){
return (function (){
var s__59730__$1 = s__59730;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59730__$1);
if(temp__5735__auto____$1){
var s__59730__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59730__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59730__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59732 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59731 = (0);
while(true){
if((i__59731 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59731);
cljs.core.chunk_append(b__59732,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60088 = (i__59731 + (1));
i__59731 = G__60088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59732),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59727_$_iter__59729(cljs.core.chunk_rest(s__59730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59732),null);
}
} else {
var warning = cljs.core.first(s__59730__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59727_$_iter__59729(cljs.core.rest(s__59730__$2)));
}
} else {
return null;
}
break;
}
});})(s__59728__$1,map__59733,map__59733__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59725,map__59725__$1,sources,compiled,map__59723,map__59723__$1,msg,info,reload_info))
,null,null));
});})(s__59728__$1,map__59733,map__59733__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59725,map__59725__$1,sources,compiled,map__59723,map__59723__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59727(cljs.core.rest(s__59728__$1)));
} else {
var G__60091 = cljs.core.rest(s__59728__$1);
s__59728__$1 = G__60091;
continue;
}
} else {
var G__60092 = cljs.core.rest(s__59728__$1);
s__59728__$1 = G__60092;
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
var seq__59749_60093 = cljs.core.seq(warnings);
var chunk__59750_60094 = null;
var count__59751_60095 = (0);
var i__59752_60096 = (0);
while(true){
if((i__59752_60096 < count__59751_60095)){
var map__59765_60097 = chunk__59750_60094.cljs$core$IIndexed$_nth$arity$2(null,i__59752_60096);
var map__59765_60098__$1 = (((((!((map__59765_60097 == null))))?(((((map__59765_60097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59765_60097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59765_60097):map__59765_60097);
var w_60099 = map__59765_60098__$1;
var msg_60100__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765_60098__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765_60098__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765_60098__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765_60098__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60103)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60101),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60102),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60100__$1)].join(''));


var G__60104 = seq__59749_60093;
var G__60105 = chunk__59750_60094;
var G__60106 = count__59751_60095;
var G__60107 = (i__59752_60096 + (1));
seq__59749_60093 = G__60104;
chunk__59750_60094 = G__60105;
count__59751_60095 = G__60106;
i__59752_60096 = G__60107;
continue;
} else {
var temp__5735__auto___60108 = cljs.core.seq(seq__59749_60093);
if(temp__5735__auto___60108){
var seq__59749_60109__$1 = temp__5735__auto___60108;
if(cljs.core.chunked_seq_QMARK_(seq__59749_60109__$1)){
var c__4609__auto___60110 = cljs.core.chunk_first(seq__59749_60109__$1);
var G__60111 = cljs.core.chunk_rest(seq__59749_60109__$1);
var G__60112 = c__4609__auto___60110;
var G__60113 = cljs.core.count(c__4609__auto___60110);
var G__60114 = (0);
seq__59749_60093 = G__60111;
chunk__59750_60094 = G__60112;
count__59751_60095 = G__60113;
i__59752_60096 = G__60114;
continue;
} else {
var map__59776_60115 = cljs.core.first(seq__59749_60109__$1);
var map__59776_60116__$1 = (((((!((map__59776_60115 == null))))?(((((map__59776_60115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59776_60115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59776_60115):map__59776_60115);
var w_60117 = map__59776_60116__$1;
var msg_60118__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776_60116__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776_60116__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776_60116__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776_60116__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60121)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60119),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60120),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60118__$1)].join(''));


var G__60123 = cljs.core.next(seq__59749_60109__$1);
var G__60124 = null;
var G__60125 = (0);
var G__60126 = (0);
seq__59749_60093 = G__60123;
chunk__59750_60094 = G__60124;
count__59751_60095 = G__60125;
i__59752_60096 = G__60126;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59778){
var map__59779 = p__59778;
var map__59779__$1 = (((((!((map__59779 == null))))?(((((map__59779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59779):map__59779);
var src = map__59779__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59779__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59781){
var map__59782 = p__59781;
var map__59782__$1 = (((((!((map__59782 == null))))?(((((map__59782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59782):map__59782);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59784){
var map__59785 = p__59784;
var map__59785__$1 = (((((!((map__59785 == null))))?(((((map__59785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59785):map__59785);
var rc = map__59785__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59785__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__59721_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59721_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__59787){
var map__59788 = p__59787;
var map__59788__$1 = (((((!((map__59788 == null))))?(((((map__59788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59788):map__59788);
var msg = map__59788__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59788__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59790 = cljs.core.seq(updates);
var chunk__59792 = null;
var count__59793 = (0);
var i__59794 = (0);
while(true){
if((i__59794 < count__59793)){
var path = chunk__59792.cljs$core$IIndexed$_nth$arity$2(null,i__59794);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59837_60137 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59840_60138 = null;
var count__59841_60139 = (0);
var i__59842_60140 = (0);
while(true){
if((i__59842_60140 < count__59841_60139)){
var node_60141 = chunk__59840_60138.cljs$core$IIndexed$_nth$arity$2(null,i__59842_60140);
var path_match_60142 = shadow.cljs.devtools.client.browser.match_paths(node_60141.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60142)){
var new_link_60143 = (function (){var G__59857 = node_60141.cloneNode(true);
G__59857.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60142),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59857;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60142], 0));

goog.dom.insertSiblingAfter(new_link_60143,node_60141);

goog.dom.removeNode(node_60141);


var G__60144 = seq__59837_60137;
var G__60145 = chunk__59840_60138;
var G__60146 = count__59841_60139;
var G__60147 = (i__59842_60140 + (1));
seq__59837_60137 = G__60144;
chunk__59840_60138 = G__60145;
count__59841_60139 = G__60146;
i__59842_60140 = G__60147;
continue;
} else {
var G__60148 = seq__59837_60137;
var G__60149 = chunk__59840_60138;
var G__60150 = count__59841_60139;
var G__60151 = (i__59842_60140 + (1));
seq__59837_60137 = G__60148;
chunk__59840_60138 = G__60149;
count__59841_60139 = G__60150;
i__59842_60140 = G__60151;
continue;
}
} else {
var temp__5735__auto___60152 = cljs.core.seq(seq__59837_60137);
if(temp__5735__auto___60152){
var seq__59837_60153__$1 = temp__5735__auto___60152;
if(cljs.core.chunked_seq_QMARK_(seq__59837_60153__$1)){
var c__4609__auto___60154 = cljs.core.chunk_first(seq__59837_60153__$1);
var G__60155 = cljs.core.chunk_rest(seq__59837_60153__$1);
var G__60156 = c__4609__auto___60154;
var G__60157 = cljs.core.count(c__4609__auto___60154);
var G__60158 = (0);
seq__59837_60137 = G__60155;
chunk__59840_60138 = G__60156;
count__59841_60139 = G__60157;
i__59842_60140 = G__60158;
continue;
} else {
var node_60159 = cljs.core.first(seq__59837_60153__$1);
var path_match_60160 = shadow.cljs.devtools.client.browser.match_paths(node_60159.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60160)){
var new_link_60161 = (function (){var G__59858 = node_60159.cloneNode(true);
G__59858.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60160),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59858;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60160], 0));

goog.dom.insertSiblingAfter(new_link_60161,node_60159);

goog.dom.removeNode(node_60159);


var G__60162 = cljs.core.next(seq__59837_60153__$1);
var G__60163 = null;
var G__60164 = (0);
var G__60165 = (0);
seq__59837_60137 = G__60162;
chunk__59840_60138 = G__60163;
count__59841_60139 = G__60164;
i__59842_60140 = G__60165;
continue;
} else {
var G__60166 = cljs.core.next(seq__59837_60153__$1);
var G__60167 = null;
var G__60168 = (0);
var G__60169 = (0);
seq__59837_60137 = G__60166;
chunk__59840_60138 = G__60167;
count__59841_60139 = G__60168;
i__59842_60140 = G__60169;
continue;
}
}
} else {
}
}
break;
}


var G__60170 = seq__59790;
var G__60171 = chunk__59792;
var G__60172 = count__59793;
var G__60173 = (i__59794 + (1));
seq__59790 = G__60170;
chunk__59792 = G__60171;
count__59793 = G__60172;
i__59794 = G__60173;
continue;
} else {
var G__60175 = seq__59790;
var G__60176 = chunk__59792;
var G__60177 = count__59793;
var G__60178 = (i__59794 + (1));
seq__59790 = G__60175;
chunk__59792 = G__60176;
count__59793 = G__60177;
i__59794 = G__60178;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59790);
if(temp__5735__auto__){
var seq__59790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59790__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59790__$1);
var G__60179 = cljs.core.chunk_rest(seq__59790__$1);
var G__60180 = c__4609__auto__;
var G__60181 = cljs.core.count(c__4609__auto__);
var G__60182 = (0);
seq__59790 = G__60179;
chunk__59792 = G__60180;
count__59793 = G__60181;
i__59794 = G__60182;
continue;
} else {
var path = cljs.core.first(seq__59790__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59862_60183 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59865_60184 = null;
var count__59866_60185 = (0);
var i__59867_60186 = (0);
while(true){
if((i__59867_60186 < count__59866_60185)){
var node_60187 = chunk__59865_60184.cljs$core$IIndexed$_nth$arity$2(null,i__59867_60186);
var path_match_60188 = shadow.cljs.devtools.client.browser.match_paths(node_60187.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60188)){
var new_link_60189 = (function (){var G__59879 = node_60187.cloneNode(true);
G__59879.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60188),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59879;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60188], 0));

goog.dom.insertSiblingAfter(new_link_60189,node_60187);

goog.dom.removeNode(node_60187);


var G__60190 = seq__59862_60183;
var G__60191 = chunk__59865_60184;
var G__60192 = count__59866_60185;
var G__60193 = (i__59867_60186 + (1));
seq__59862_60183 = G__60190;
chunk__59865_60184 = G__60191;
count__59866_60185 = G__60192;
i__59867_60186 = G__60193;
continue;
} else {
var G__60194 = seq__59862_60183;
var G__60195 = chunk__59865_60184;
var G__60196 = count__59866_60185;
var G__60197 = (i__59867_60186 + (1));
seq__59862_60183 = G__60194;
chunk__59865_60184 = G__60195;
count__59866_60185 = G__60196;
i__59867_60186 = G__60197;
continue;
}
} else {
var temp__5735__auto___60198__$1 = cljs.core.seq(seq__59862_60183);
if(temp__5735__auto___60198__$1){
var seq__59862_60201__$1 = temp__5735__auto___60198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59862_60201__$1)){
var c__4609__auto___60203 = cljs.core.chunk_first(seq__59862_60201__$1);
var G__60206 = cljs.core.chunk_rest(seq__59862_60201__$1);
var G__60207 = c__4609__auto___60203;
var G__60208 = cljs.core.count(c__4609__auto___60203);
var G__60209 = (0);
seq__59862_60183 = G__60206;
chunk__59865_60184 = G__60207;
count__59866_60185 = G__60208;
i__59867_60186 = G__60209;
continue;
} else {
var node_60210 = cljs.core.first(seq__59862_60201__$1);
var path_match_60211 = shadow.cljs.devtools.client.browser.match_paths(node_60210.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60211)){
var new_link_60212 = (function (){var G__59884 = node_60210.cloneNode(true);
G__59884.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60211),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59884;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60211], 0));

goog.dom.insertSiblingAfter(new_link_60212,node_60210);

goog.dom.removeNode(node_60210);


var G__60215 = cljs.core.next(seq__59862_60201__$1);
var G__60216 = null;
var G__60217 = (0);
var G__60218 = (0);
seq__59862_60183 = G__60215;
chunk__59865_60184 = G__60216;
count__59866_60185 = G__60217;
i__59867_60186 = G__60218;
continue;
} else {
var G__60219 = cljs.core.next(seq__59862_60201__$1);
var G__60220 = null;
var G__60221 = (0);
var G__60222 = (0);
seq__59862_60183 = G__60219;
chunk__59865_60184 = G__60220;
count__59866_60185 = G__60221;
i__59867_60186 = G__60222;
continue;
}
}
} else {
}
}
break;
}


var G__60223 = cljs.core.next(seq__59790__$1);
var G__60224 = null;
var G__60225 = (0);
var G__60226 = (0);
seq__59790 = G__60223;
chunk__59792 = G__60224;
count__59793 = G__60225;
i__59794 = G__60226;
continue;
} else {
var G__60227 = cljs.core.next(seq__59790__$1);
var G__60228 = null;
var G__60229 = (0);
var G__60230 = (0);
seq__59790 = G__60227;
chunk__59792 = G__60228;
count__59793 = G__60229;
i__59794 = G__60230;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__59900){
var map__59901 = p__59900;
var map__59901__$1 = (((((!((map__59901 == null))))?(((((map__59901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59901):map__59901);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59901__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59901__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__59911,done){
var map__59912 = p__59911;
var map__59912__$1 = (((((!((map__59912 == null))))?(((((map__59912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59912):map__59912);
var msg = map__59912__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59912__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59912__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59912__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59912__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59941){
var map__59942 = p__59941;
var map__59942__$1 = (((((!((map__59942 == null))))?(((((map__59942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59942):map__59942);
var src = map__59942__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59942__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e59954){var e = e59954;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__59959,done){
var map__59960 = p__59959;
var map__59960__$1 = (((((!((map__59960 == null))))?(((((map__59960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59960):map__59960);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59960__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__59975){
var map__59976 = p__59975;
var map__59976__$1 = (((((!((map__59976 == null))))?(((((map__59976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59976):map__59976);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59976__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59976__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__59988,done){
var map__59989 = p__59988;
var map__59989__$1 = (((((!((map__59989 == null))))?(((((map__59989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59989):map__59989);
var msg = map__59989__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__59997_60235 = type;
var G__59997_60236__$1 = (((G__59997_60235 instanceof cljs.core.Keyword))?G__59997_60235.fqn:null);
switch (G__59997_60236__$1) {
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
var G__60002 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__60003 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__60004 = "POST";
var G__60005 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__60006 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__60002,G__60003,G__60004,G__60005,G__60006);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__60008 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__60007 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__60007.cljs$core$IFn$_invoke$arity$1 ? fexpr__60007.cljs$core$IFn$_invoke$arity$1(G__60008) : fexpr__60007.call(null,G__60008));
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
}catch (e60016){var e = e60016;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60246 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60246)){
var s_60247 = temp__5735__auto___60246;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60247.onclose = (function (e){
return null;
}));

s_60247.close();

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
