goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if((typeof cljs !== 'undefined') && (typeof cljs.stacktrace !== 'undefined') && (typeof cljs.stacktrace.parse_stacktrace !== 'undefined')){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20304 = cljs.core.get_global_hierarchy;
return (fexpr__20304.cljs$core$IFn$_invoke$arity$0 ? fexpr__20304.cljs$core$IFn$_invoke$arity$0() : fexpr__20304.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),(function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__20307 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20314,p__20315){
var vec__20316 = p__20314;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20316,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20316,(1),null);
var vec__20319 = p__20315;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20319,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20319,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20307,(0),null);
var vec__20310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20307,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20310,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20310,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20322 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__20322,"(","");
} else {
return G__20322;
}
})(),cljs.stacktrace.parse_int((function (){var G__20323 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__20323,")","");
} else {
return G__20323;
}
})()),cljs.stacktrace.parse_int((function (){var G__20324 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__20324,")","");
} else {
return G__20324;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__20325,file,p__20326){
var map__20327 = p__20325;
var map__20327__$1 = (((((!((map__20327 == null))))?(((((map__20327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20327):map__20327);
var repl_env = map__20327__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20327__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20327__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20327__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__20328 = p__20326;
var map__20328__$1 = (((((!((map__20328 == null))))?(((((map__20328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20328):map__20328);
var opts = map__20328__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20328__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = host_port;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = (function (){var and__4174__auto__ = asset_path;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),"/"].join('')),"");
} else {
var temp__5733__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var asset_root = temp__5733__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__20336 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20336,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20336,(1),null);
var vec__20339 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(2),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = file;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = function$;
if(cljs.core.truth_(and__4174__auto____$1)){
var and__4174__auto____$2 = line;
if(cljs.core.truth_(and__4174__auto____$2)){
return column;
} else {
return and__4174__auto____$2;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace(function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace(function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20346_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__20346_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__20345_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_(p1__20345_SHARP_,"    at eval")));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__20344_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__20344_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__20347 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20347,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20347,(1),null);
var vec__20350 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20350,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20350,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20350,(2),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = file;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = function$;
if(cljs.core.truth_(and__4174__auto____$1)){
var and__4174__auto____$2 = line;
if(cljs.core.truth_(and__4174__auto____$2)){
return column;
} else {
return and__4174__auto____$2;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim(function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim(function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20358_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__20358_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__20357_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_(p1__20357_SHARP_,"eval code")));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__20356_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__20356_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__20370 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20370,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20370,(1),null);
var vec__20373 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373,(2),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = file;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = function$;
if(cljs.core.truth_(and__4174__auto____$1)){
var and__4174__auto____$2 = line;
if(cljs.core.truth_(and__4174__auto____$2)){
return column;
} else {
return and__4174__auto____$2;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function(function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function(function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20378_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__20378_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__20377_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20377_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__20376_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__20376_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__20381){
var map__20382 = p__20381;
var map__20382__$1 = (((((!((map__20382 == null))))?(((((map__20382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20382):map__20382);
var opts = map__20382__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20382__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat"))))){
return null;
} else {
var vec__20397 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20397,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20397,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__20400 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20400,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20400,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return (!(clojure.string.blank_QMARK_(line)));
} else {
return and__4174__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__20403){
var map__20404 = p__20403;
var map__20404__$1 = (((((!((map__20404 == null))))?(((((map__20404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20404):map__20404);
var opts = map__20404__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat"))))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__20415 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415,(1),null);
var vec__20418 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20418,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20418,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__4174__auto__ = line_part;
if(cljs.core.truth_(and__4174__auto__)){
return (!(clojure.string.blank_QMARK_(line_part)));
} else {
return and__4174__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"graaljs","graaljs",1880468686),(function (repl_env,st,err,p__20425){
var map__20426 = p__20425;
var map__20426__$1 = (((((!((map__20426 == null))))?(((((map__20426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20426):map__20426);
var opts = map__20426__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(clojure.string.blank_QMARK_(frame_str)){
return null;
} else {
var vec__20442 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/\(/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20442,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20442,(1),null);
var vec__20445 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file_part,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__4174__auto__ = line_part;
if(cljs.core.truth_(and__4174__auto__)){
return (!(clojure.string.blank_QMARK_(line_part)));
} else {
return and__4174__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__20451){
var map__20452 = p__20451;
var map__20452__$1 = (((((!((map__20452 == null))))?(((((map__20452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20452):map__20452);
var opts = map__20452__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20452__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__4174__auto__ = x;
if(cljs.core.truth_(and__4174__auto__)){
return (!(clojure.string.blank_QMARK_(x)));
} else {
return and__4174__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
});
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var vec__20462 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20462,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20462,(1),null);
var vec__20465 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__20468 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__20468,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__20468;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info(line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info(col_part)], null);
}
}
});
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20469_SHARP_){
return (p1__20469_SHARP_ <= (column__$1 - (1)));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});
var adjust = (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__20470_SHARP_,p2__20471_SHARP_){
return (p1__20470_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20470_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20471_SHARP_) : p1__20470_SHARP_.call(null,p2__20471_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__5733__auto__)){
var columns = temp__5733__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__20472,sms,opts){
var map__20473 = p__20472;
var map__20473__$1 = (((((!((map__20473 == null))))?(((((map__20473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20473):map__20473);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20473__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20473__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20473__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__20475 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?["NO_SOURCE_FILE",(cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null)].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__20481 = arguments.length;
switch (G__20481) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__20478_SHARP_){
return cljs.stacktrace.mapped_frame(p1__20478_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20479_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20479_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
}),mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
}));

(cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3);

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__20483 = arguments.length;
switch (G__20483) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20484_20574 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20485_20575 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20486_20576 = true;
var _STAR_print_fn_STAR__temp_val__20487_20577 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20486_20576);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20487_20577);

try{var seq__20488_20578 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__20489_20579 = null;
var count__20490_20580 = (0);
var i__20491_20581 = (0);
while(true){
if((i__20491_20581 < count__20490_20580)){
var map__20500_20583 = chunk__20489_20579.cljs$core$IIndexed$_nth$arity$2(null,i__20491_20581);
var map__20500_20584__$1 = (((((!((map__20500_20583 == null))))?(((((map__20500_20583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20500_20583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20500_20583):map__20500_20583);
var function_20585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20500_20584__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_20586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20500_20584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_20587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20500_20584__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20500_20584__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[(cljs.core.truth_(function_20585)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_20585)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_20586),(cljs.core.truth_(line_20587)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20587)].join(''):null),(cljs.core.truth_(column_20588)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20588)].join(''):null),")"].join('')], 0));


var G__20595 = seq__20488_20578;
var G__20596 = chunk__20489_20579;
var G__20597 = count__20490_20580;
var G__20598 = (i__20491_20581 + (1));
seq__20488_20578 = G__20595;
chunk__20489_20579 = G__20596;
count__20490_20580 = G__20597;
i__20491_20581 = G__20598;
continue;
} else {
var temp__5735__auto___20599 = cljs.core.seq(seq__20488_20578);
if(temp__5735__auto___20599){
var seq__20488_20600__$1 = temp__5735__auto___20599;
if(cljs.core.chunked_seq_QMARK_(seq__20488_20600__$1)){
var c__4609__auto___20601 = cljs.core.chunk_first(seq__20488_20600__$1);
var G__20602 = cljs.core.chunk_rest(seq__20488_20600__$1);
var G__20603 = c__4609__auto___20601;
var G__20604 = cljs.core.count(c__4609__auto___20601);
var G__20605 = (0);
seq__20488_20578 = G__20602;
chunk__20489_20579 = G__20603;
count__20490_20580 = G__20604;
i__20491_20581 = G__20605;
continue;
} else {
var map__20505_20607 = cljs.core.first(seq__20488_20600__$1);
var map__20505_20608__$1 = (((((!((map__20505_20607 == null))))?(((((map__20505_20607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20505_20607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20505_20607):map__20505_20607);
var function_20609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20505_20608__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_20610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20505_20608__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_20611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20505_20608__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20505_20608__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[(cljs.core.truth_(function_20609)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_20609)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_20610),(cljs.core.truth_(line_20611)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20611)].join(''):null),(cljs.core.truth_(column_20612)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20612)].join(''):null),")"].join('')], 0));


var G__20619 = cljs.core.next(seq__20488_20600__$1);
var G__20620 = null;
var G__20621 = (0);
var G__20622 = (0);
seq__20488_20578 = G__20619;
chunk__20489_20579 = G__20620;
count__20490_20580 = G__20621;
i__20491_20581 = G__20622;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20485_20575);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20484_20574);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.stacktrace.js.map
