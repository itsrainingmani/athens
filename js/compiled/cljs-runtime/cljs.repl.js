goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56919){
var map__56920 = p__56919;
var map__56920__$1 = (((((!((map__56920 == null))))?(((((map__56920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56920):map__56920);
var m = map__56920__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56920__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56920__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56923_57108 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56924_57109 = null;
var count__56925_57110 = (0);
var i__56926_57111 = (0);
while(true){
if((i__56926_57111 < count__56925_57110)){
var f_57112 = chunk__56924_57109.cljs$core$IIndexed$_nth$arity$2(null,i__56926_57111);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57112], 0));


var G__57113 = seq__56923_57108;
var G__57114 = chunk__56924_57109;
var G__57115 = count__56925_57110;
var G__57116 = (i__56926_57111 + (1));
seq__56923_57108 = G__57113;
chunk__56924_57109 = G__57114;
count__56925_57110 = G__57115;
i__56926_57111 = G__57116;
continue;
} else {
var temp__5735__auto___57117 = cljs.core.seq(seq__56923_57108);
if(temp__5735__auto___57117){
var seq__56923_57118__$1 = temp__5735__auto___57117;
if(cljs.core.chunked_seq_QMARK_(seq__56923_57118__$1)){
var c__4556__auto___57119 = cljs.core.chunk_first(seq__56923_57118__$1);
var G__57120 = cljs.core.chunk_rest(seq__56923_57118__$1);
var G__57121 = c__4556__auto___57119;
var G__57122 = cljs.core.count(c__4556__auto___57119);
var G__57123 = (0);
seq__56923_57108 = G__57120;
chunk__56924_57109 = G__57121;
count__56925_57110 = G__57122;
i__56926_57111 = G__57123;
continue;
} else {
var f_57124 = cljs.core.first(seq__56923_57118__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57124], 0));


var G__57125 = cljs.core.next(seq__56923_57118__$1);
var G__57126 = null;
var G__57127 = (0);
var G__57128 = (0);
seq__56923_57108 = G__57125;
chunk__56924_57109 = G__57126;
count__56925_57110 = G__57127;
i__56926_57111 = G__57128;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57129 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57129], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57129)))?cljs.core.second(arglists_57129):arglists_57129)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56928_57137 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56929_57138 = null;
var count__56930_57139 = (0);
var i__56931_57140 = (0);
while(true){
if((i__56931_57140 < count__56930_57139)){
var vec__56952_57146 = chunk__56929_57138.cljs$core$IIndexed$_nth$arity$2(null,i__56931_57140);
var name_57147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56952_57146,(0),null);
var map__56955_57148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56952_57146,(1),null);
var map__56955_57149__$1 = (((((!((map__56955_57148 == null))))?(((((map__56955_57148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56955_57148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56955_57148):map__56955_57148);
var doc_57150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56955_57149__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56955_57149__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57147], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57151], 0));

if(cljs.core.truth_(doc_57150)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57150], 0));
} else {
}


var G__57165 = seq__56928_57137;
var G__57166 = chunk__56929_57138;
var G__57167 = count__56930_57139;
var G__57168 = (i__56931_57140 + (1));
seq__56928_57137 = G__57165;
chunk__56929_57138 = G__57166;
count__56930_57139 = G__57167;
i__56931_57140 = G__57168;
continue;
} else {
var temp__5735__auto___57169 = cljs.core.seq(seq__56928_57137);
if(temp__5735__auto___57169){
var seq__56928_57170__$1 = temp__5735__auto___57169;
if(cljs.core.chunked_seq_QMARK_(seq__56928_57170__$1)){
var c__4556__auto___57171 = cljs.core.chunk_first(seq__56928_57170__$1);
var G__57172 = cljs.core.chunk_rest(seq__56928_57170__$1);
var G__57173 = c__4556__auto___57171;
var G__57174 = cljs.core.count(c__4556__auto___57171);
var G__57175 = (0);
seq__56928_57137 = G__57172;
chunk__56929_57138 = G__57173;
count__56930_57139 = G__57174;
i__56931_57140 = G__57175;
continue;
} else {
var vec__56961_57176 = cljs.core.first(seq__56928_57170__$1);
var name_57177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56961_57176,(0),null);
var map__56964_57178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56961_57176,(1),null);
var map__56964_57179__$1 = (((((!((map__56964_57178 == null))))?(((((map__56964_57178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56964_57178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56964_57178):map__56964_57178);
var doc_57180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56964_57179__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56964_57179__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57177], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57181], 0));

if(cljs.core.truth_(doc_57180)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57180], 0));
} else {
}


var G__57182 = cljs.core.next(seq__56928_57170__$1);
var G__57183 = null;
var G__57184 = (0);
var G__57185 = (0);
seq__56928_57137 = G__57182;
chunk__56929_57138 = G__57183;
count__56930_57139 = G__57184;
i__56931_57140 = G__57185;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56966 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56967 = null;
var count__56968 = (0);
var i__56969 = (0);
while(true){
if((i__56969 < count__56968)){
var role = chunk__56967.cljs$core$IIndexed$_nth$arity$2(null,i__56969);
var temp__5735__auto___57186__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57186__$1)){
var spec_57187 = temp__5735__auto___57186__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57187)], 0));
} else {
}


var G__57188 = seq__56966;
var G__57189 = chunk__56967;
var G__57190 = count__56968;
var G__57191 = (i__56969 + (1));
seq__56966 = G__57188;
chunk__56967 = G__57189;
count__56968 = G__57190;
i__56969 = G__57191;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56966);
if(temp__5735__auto____$1){
var seq__56966__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56966__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56966__$1);
var G__57192 = cljs.core.chunk_rest(seq__56966__$1);
var G__57193 = c__4556__auto__;
var G__57194 = cljs.core.count(c__4556__auto__);
var G__57195 = (0);
seq__56966 = G__57192;
chunk__56967 = G__57193;
count__56968 = G__57194;
i__56969 = G__57195;
continue;
} else {
var role = cljs.core.first(seq__56966__$1);
var temp__5735__auto___57196__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57196__$2)){
var spec_57197 = temp__5735__auto___57196__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57197)], 0));
} else {
}


var G__57198 = cljs.core.next(seq__56966__$1);
var G__57199 = null;
var G__57200 = (0);
var G__57201 = (0);
seq__56966 = G__57198;
chunk__56967 = G__57199;
count__56968 = G__57200;
i__56969 = G__57201;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__57202 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57203 = cljs.core.ex_cause(t);
via = G__57202;
t = G__57203;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__57010 = datafied_throwable;
var map__57010__$1 = (((((!((map__57010 == null))))?(((((map__57010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57010):map__57010);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57010__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57010__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57010__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__57011 = cljs.core.last(via);
var map__57011__$1 = (((((!((map__57011 == null))))?(((((map__57011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57011):map__57011);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57011__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57011__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57011__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__57012 = data;
var map__57012__$1 = (((((!((map__57012 == null))))?(((((map__57012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57012):map__57012);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57012__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57012__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57012__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__57013 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__57013__$1 = (((((!((map__57013 == null))))?(((((map__57013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57013):map__57013);
var top_data = map__57013__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57013__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__57018 = phase;
var G__57018__$1 = (((G__57018 instanceof cljs.core.Keyword))?G__57018.fqn:null);
switch (G__57018__$1) {
case "read-source":
var map__57019 = data;
var map__57019__$1 = (((((!((map__57019 == null))))?(((((map__57019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57019):map__57019);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57019__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57019__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__57021 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__57021__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57021,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57021);
var G__57021__$2 = (cljs.core.truth_((function (){var fexpr__57022 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57022.cljs$core$IFn$_invoke$arity$1 ? fexpr__57022.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57022.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57021__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57021__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57021__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57021__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__57023 = top_data;
var G__57023__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57023,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57023);
var G__57023__$2 = (cljs.core.truth_((function (){var fexpr__57024 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57024.cljs$core$IFn$_invoke$arity$1 ? fexpr__57024.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57024.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57023__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57023__$1);
var G__57023__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57023__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57023__$2);
var G__57023__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57023__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57023__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57023__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57023__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__57025 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57025,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57025,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57025,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57025,(3),null);
var G__57028 = top_data;
var G__57028__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__57028);
var G__57028__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__57028__$1);
var G__57028__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__57028__$2);
var G__57028__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57028__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57028__$4;
}

break;
case "execution":
var vec__57029 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57029,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57029,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57029,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57029,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57005_SHARP_){
var or__4126__auto__ = (p1__57005_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__57033 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57033.cljs$core$IFn$_invoke$arity$1 ? fexpr__57033.cljs$core$IFn$_invoke$arity$1(p1__57005_SHARP_) : fexpr__57033.call(null,p1__57005_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__57034 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__57034__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57034,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__57034);
var G__57034__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57034__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57034__$1);
var G__57034__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57034__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__57034__$2);
var G__57034__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57034__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__57034__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57034__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57034__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57018__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__57043){
var map__57044 = p__57043;
var map__57044__$1 = (((((!((map__57044 == null))))?(((((map__57044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57044):map__57044);
var triage_data = map__57044__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57044__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57044__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57044__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57044__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57044__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57044__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57044__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__57052 = phase;
var G__57052__$1 = (((G__57052 instanceof cljs.core.Keyword))?G__57052.fqn:null);
switch (G__57052__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__57053 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__57054 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57055 = loc;
var G__57056 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57057_57222 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57058_57223 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57059_57224 = true;
var _STAR_print_fn_STAR__temp_val__57060_57225 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57059_57224);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57060_57225);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57035_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57035_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57058_57223);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57057_57222);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57053,G__57054,G__57055,G__57056) : format.call(null,G__57053,G__57054,G__57055,G__57056));

break;
case "macroexpansion":
var G__57070 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__57071 = cause_type;
var G__57072 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57073 = loc;
var G__57074 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57070,G__57071,G__57072,G__57073,G__57074) : format.call(null,G__57070,G__57071,G__57072,G__57073,G__57074));

break;
case "compile-syntax-check":
var G__57078 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57079 = cause_type;
var G__57080 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57081 = loc;
var G__57082 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57078,G__57079,G__57080,G__57081,G__57082) : format.call(null,G__57078,G__57079,G__57080,G__57081,G__57082));

break;
case "compilation":
var G__57083 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57084 = cause_type;
var G__57085 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57086 = loc;
var G__57087 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57083,G__57084,G__57085,G__57086,G__57087) : format.call(null,G__57083,G__57084,G__57085,G__57086,G__57087));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57093 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57094 = symbol;
var G__57095 = loc;
var G__57096 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57097_57228 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57098_57229 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57099_57230 = true;
var _STAR_print_fn_STAR__temp_val__57100_57231 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57099_57230);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57100_57231);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57036_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57036_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57098_57229);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57097_57228);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57093,G__57094,G__57095,G__57096) : format.call(null,G__57093,G__57094,G__57095,G__57096));
} else {
var G__57101 = "Execution error%s at %s(%s).\n%s\n";
var G__57102 = cause_type;
var G__57103 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57104 = loc;
var G__57105 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57101,G__57102,G__57103,G__57104,G__57105) : format.call(null,G__57101,G__57102,G__57103,G__57104,G__57105));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57052__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
