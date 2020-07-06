goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59694){
var map__59695 = p__59694;
var map__59695__$1 = (((((!((map__59695 == null))))?(((((map__59695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59695):map__59695);
var m = map__59695__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59695__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var seq__59699_59919 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59700_59920 = null;
var count__59701_59921 = (0);
var i__59702_59922 = (0);
while(true){
if((i__59702_59922 < count__59701_59921)){
var f_59923 = chunk__59700_59920.cljs$core$IIndexed$_nth$arity$2(null,i__59702_59922);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59923], 0));


var G__59924 = seq__59699_59919;
var G__59925 = chunk__59700_59920;
var G__59926 = count__59701_59921;
var G__59927 = (i__59702_59922 + (1));
seq__59699_59919 = G__59924;
chunk__59700_59920 = G__59925;
count__59701_59921 = G__59926;
i__59702_59922 = G__59927;
continue;
} else {
var temp__5735__auto___59928 = cljs.core.seq(seq__59699_59919);
if(temp__5735__auto___59928){
var seq__59699_59929__$1 = temp__5735__auto___59928;
if(cljs.core.chunked_seq_QMARK_(seq__59699_59929__$1)){
var c__4609__auto___59930 = cljs.core.chunk_first(seq__59699_59929__$1);
var G__59931 = cljs.core.chunk_rest(seq__59699_59929__$1);
var G__59932 = c__4609__auto___59930;
var G__59933 = cljs.core.count(c__4609__auto___59930);
var G__59934 = (0);
seq__59699_59919 = G__59931;
chunk__59700_59920 = G__59932;
count__59701_59921 = G__59933;
i__59702_59922 = G__59934;
continue;
} else {
var f_59935 = cljs.core.first(seq__59699_59929__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59935], 0));


var G__59936 = cljs.core.next(seq__59699_59929__$1);
var G__59937 = null;
var G__59938 = (0);
var G__59939 = (0);
seq__59699_59919 = G__59936;
chunk__59700_59920 = G__59937;
count__59701_59921 = G__59938;
i__59702_59922 = G__59939;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59940 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_59940], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_59940)))?cljs.core.second(arglists_59940):arglists_59940)], 0));
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
var seq__59736_59943 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59737_59944 = null;
var count__59738_59945 = (0);
var i__59739_59946 = (0);
while(true){
if((i__59739_59946 < count__59738_59945)){
var vec__59757_59948 = chunk__59737_59944.cljs$core$IIndexed$_nth$arity$2(null,i__59739_59946);
var name_59949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59757_59948,(0),null);
var map__59760_59950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59757_59948,(1),null);
var map__59760_59951__$1 = (((((!((map__59760_59950 == null))))?(((((map__59760_59950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59760_59950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59760_59950):map__59760_59950);
var doc_59952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760_59951__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760_59951__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59949], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59953], 0));

if(cljs.core.truth_(doc_59952)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59952], 0));
} else {
}


var G__59955 = seq__59736_59943;
var G__59956 = chunk__59737_59944;
var G__59957 = count__59738_59945;
var G__59958 = (i__59739_59946 + (1));
seq__59736_59943 = G__59955;
chunk__59737_59944 = G__59956;
count__59738_59945 = G__59957;
i__59739_59946 = G__59958;
continue;
} else {
var temp__5735__auto___59962 = cljs.core.seq(seq__59736_59943);
if(temp__5735__auto___59962){
var seq__59736_59963__$1 = temp__5735__auto___59962;
if(cljs.core.chunked_seq_QMARK_(seq__59736_59963__$1)){
var c__4609__auto___59964 = cljs.core.chunk_first(seq__59736_59963__$1);
var G__59965 = cljs.core.chunk_rest(seq__59736_59963__$1);
var G__59966 = c__4609__auto___59964;
var G__59967 = cljs.core.count(c__4609__auto___59964);
var G__59968 = (0);
seq__59736_59943 = G__59965;
chunk__59737_59944 = G__59966;
count__59738_59945 = G__59967;
i__59739_59946 = G__59968;
continue;
} else {
var vec__59767_59969 = cljs.core.first(seq__59736_59963__$1);
var name_59970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59767_59969,(0),null);
var map__59770_59971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59767_59969,(1),null);
var map__59770_59972__$1 = (((((!((map__59770_59971 == null))))?(((((map__59770_59971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59770_59971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59770_59971):map__59770_59971);
var doc_59973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770_59972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770_59972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59970], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59974], 0));

if(cljs.core.truth_(doc_59973)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59973], 0));
} else {
}


var G__59978 = cljs.core.next(seq__59736_59963__$1);
var G__59979 = null;
var G__59980 = (0);
var G__59981 = (0);
seq__59736_59943 = G__59978;
chunk__59737_59944 = G__59979;
count__59738_59945 = G__59980;
i__59739_59946 = G__59981;
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

var seq__59772 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59773 = null;
var count__59774 = (0);
var i__59775 = (0);
while(true){
if((i__59775 < count__59774)){
var role = chunk__59773.cljs$core$IIndexed$_nth$arity$2(null,i__59775);
var temp__5735__auto___59982__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59982__$1)){
var spec_59983 = temp__5735__auto___59982__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59983)], 0));
} else {
}


var G__59984 = seq__59772;
var G__59985 = chunk__59773;
var G__59986 = count__59774;
var G__59987 = (i__59775 + (1));
seq__59772 = G__59984;
chunk__59773 = G__59985;
count__59774 = G__59986;
i__59775 = G__59987;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__59772);
if(temp__5735__auto____$1){
var seq__59772__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59772__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59772__$1);
var G__59990 = cljs.core.chunk_rest(seq__59772__$1);
var G__59991 = c__4609__auto__;
var G__59992 = cljs.core.count(c__4609__auto__);
var G__59993 = (0);
seq__59772 = G__59990;
chunk__59773 = G__59991;
count__59774 = G__59992;
i__59775 = G__59993;
continue;
} else {
var role = cljs.core.first(seq__59772__$1);
var temp__5735__auto___59995__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59995__$2)){
var spec_59996 = temp__5735__auto___59995__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59996)], 0));
} else {
}


var G__59998 = cljs.core.next(seq__59772__$1);
var G__59999 = null;
var G__60000 = (0);
var G__60001 = (0);
seq__59772 = G__59998;
chunk__59773 = G__59999;
count__59774 = G__60000;
i__59775 = G__60001;
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
var G__60009 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60010 = cljs.core.ex_cause(t);
via = G__60009;
t = G__60010;
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
var map__59809 = datafied_throwable;
var map__59809__$1 = (((((!((map__59809 == null))))?(((((map__59809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59809):map__59809);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59809__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59809__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59809__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59810 = cljs.core.last(via);
var map__59810__$1 = (((((!((map__59810 == null))))?(((((map__59810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59810):map__59810);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59811 = data;
var map__59811__$1 = (((((!((map__59811 == null))))?(((((map__59811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59811):map__59811);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59811__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59811__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59811__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59812 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59812__$1 = (((((!((map__59812 == null))))?(((((map__59812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59812):map__59812);
var top_data = map__59812__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59812__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59828 = phase;
var G__59828__$1 = (((G__59828 instanceof cljs.core.Keyword))?G__59828.fqn:null);
switch (G__59828__$1) {
case "read-source":
var map__59829 = data;
var map__59829__$1 = (((((!((map__59829 == null))))?(((((map__59829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59829):map__59829);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59832 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59832__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59832,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59832);
var G__59832__$2 = (cljs.core.truth_((function (){var fexpr__59833 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59833.cljs$core$IFn$_invoke$arity$1 ? fexpr__59833.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59833.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59832__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59832__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59832__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59835 = top_data;
var G__59835__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59835,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59835);
var G__59835__$2 = (cljs.core.truth_((function (){var fexpr__59836 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59836.cljs$core$IFn$_invoke$arity$1 ? fexpr__59836.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59836.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59835__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59835__$1);
var G__59835__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59835__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59835__$2);
var G__59835__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59835__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59835__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59835__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59835__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59845 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59845,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59845,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59845,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59845,(3),null);
var G__59848 = top_data;
var G__59848__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59848,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59848);
var G__59848__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59848__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59848__$1);
var G__59848__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59848__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59848__$2);
var G__59848__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59848__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59848__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59848__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59848__$4;
}

break;
case "execution":
var vec__59850 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59850,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59850,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59850,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59850,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59808_SHARP_){
var or__4185__auto__ = (p1__59808_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__59855 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59855.cljs$core$IFn$_invoke$arity$1 ? fexpr__59855.cljs$core$IFn$_invoke$arity$1(p1__59808_SHARP_) : fexpr__59855.call(null,p1__59808_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__59856 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59856__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59856);
var G__59856__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59856__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59856__$1);
var G__59856__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59856__$2);
var G__59856__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59856__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59856__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59856__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59856__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59828__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59861){
var map__59870 = p__59861;
var map__59870__$1 = (((((!((map__59870 == null))))?(((((map__59870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59870):map__59870);
var triage_data = map__59870__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__59874 = phase;
var G__59874__$1 = (((G__59874 instanceof cljs.core.Keyword))?G__59874.fqn:null);
switch (G__59874__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__59875 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__59876 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59877 = loc;
var G__59878 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59880_60040 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59881_60041 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59882_60042 = true;
var _STAR_print_fn_STAR__temp_val__59883_60043 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59882_60042);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59883_60043);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59859_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59859_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59881_60041);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59880_60040);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59875,G__59876,G__59877,G__59878) : format.call(null,G__59875,G__59876,G__59877,G__59878));

break;
case "macroexpansion":
var G__59885 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__59886 = cause_type;
var G__59887 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59888 = loc;
var G__59889 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59885,G__59886,G__59887,G__59888,G__59889) : format.call(null,G__59885,G__59886,G__59887,G__59888,G__59889));

break;
case "compile-syntax-check":
var G__59890 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__59891 = cause_type;
var G__59892 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59893 = loc;
var G__59894 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59890,G__59891,G__59892,G__59893,G__59894) : format.call(null,G__59890,G__59891,G__59892,G__59893,G__59894));

break;
case "compilation":
var G__59895 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__59896 = cause_type;
var G__59897 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59898 = loc;
var G__59899 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59895,G__59896,G__59897,G__59898,G__59899) : format.call(null,G__59895,G__59896,G__59897,G__59898,G__59899));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__59903 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__59904 = symbol;
var G__59905 = loc;
var G__59906 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59907_60059 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59908_60060 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59909_60061 = true;
var _STAR_print_fn_STAR__temp_val__59910_60062 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59909_60061);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59910_60062);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59860_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59860_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59908_60060);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59907_60059);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59903,G__59904,G__59905,G__59906) : format.call(null,G__59903,G__59904,G__59905,G__59906));
} else {
var G__59914 = "Execution error%s at %s(%s).\n%s\n";
var G__59915 = cause_type;
var G__59916 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59917 = loc;
var G__59918 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59914,G__59915,G__59916,G__59917,G__59918) : format.call(null,G__59914,G__59915,G__59916,G__59917,G__59918));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59874__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
