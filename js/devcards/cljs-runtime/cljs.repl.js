goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50901){
var map__50902 = p__50901;
var map__50902__$1 = (((((!((map__50902 == null))))?(((((map__50902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50902):map__50902);
var m = map__50902__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50902__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50904_51172 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50905_51173 = null;
var count__50906_51174 = (0);
var i__50907_51175 = (0);
while(true){
if((i__50907_51175 < count__50906_51174)){
var f_51176 = chunk__50905_51173.cljs$core$IIndexed$_nth$arity$2(null,i__50907_51175);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51176], 0));


var G__51177 = seq__50904_51172;
var G__51178 = chunk__50905_51173;
var G__51179 = count__50906_51174;
var G__51180 = (i__50907_51175 + (1));
seq__50904_51172 = G__51177;
chunk__50905_51173 = G__51178;
count__50906_51174 = G__51179;
i__50907_51175 = G__51180;
continue;
} else {
var temp__5735__auto___51181 = cljs.core.seq(seq__50904_51172);
if(temp__5735__auto___51181){
var seq__50904_51182__$1 = temp__5735__auto___51181;
if(cljs.core.chunked_seq_QMARK_(seq__50904_51182__$1)){
var c__4609__auto___51183 = cljs.core.chunk_first(seq__50904_51182__$1);
var G__51184 = cljs.core.chunk_rest(seq__50904_51182__$1);
var G__51185 = c__4609__auto___51183;
var G__51186 = cljs.core.count(c__4609__auto___51183);
var G__51187 = (0);
seq__50904_51172 = G__51184;
chunk__50905_51173 = G__51185;
count__50906_51174 = G__51186;
i__50907_51175 = G__51187;
continue;
} else {
var f_51188 = cljs.core.first(seq__50904_51182__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51188], 0));


var G__51189 = cljs.core.next(seq__50904_51182__$1);
var G__51190 = null;
var G__51191 = (0);
var G__51192 = (0);
seq__50904_51172 = G__51189;
chunk__50905_51173 = G__51190;
count__50906_51174 = G__51191;
i__50907_51175 = G__51192;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51193 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51193], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51193)))?cljs.core.second(arglists_51193):arglists_51193)], 0));
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
var seq__50911_51194 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50912_51195 = null;
var count__50913_51196 = (0);
var i__50914_51197 = (0);
while(true){
if((i__50914_51197 < count__50913_51196)){
var vec__50929_51199 = chunk__50912_51195.cljs$core$IIndexed$_nth$arity$2(null,i__50914_51197);
var name_51200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929_51199,(0),null);
var map__50932_51201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929_51199,(1),null);
var map__50932_51202__$1 = (((((!((map__50932_51201 == null))))?(((((map__50932_51201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50932_51201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50932_51201):map__50932_51201);
var doc_51203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50932_51202__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50932_51202__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51200], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51204], 0));

if(cljs.core.truth_(doc_51203)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51203], 0));
} else {
}


var G__51205 = seq__50911_51194;
var G__51206 = chunk__50912_51195;
var G__51207 = count__50913_51196;
var G__51208 = (i__50914_51197 + (1));
seq__50911_51194 = G__51205;
chunk__50912_51195 = G__51206;
count__50913_51196 = G__51207;
i__50914_51197 = G__51208;
continue;
} else {
var temp__5735__auto___51209 = cljs.core.seq(seq__50911_51194);
if(temp__5735__auto___51209){
var seq__50911_51210__$1 = temp__5735__auto___51209;
if(cljs.core.chunked_seq_QMARK_(seq__50911_51210__$1)){
var c__4609__auto___51211 = cljs.core.chunk_first(seq__50911_51210__$1);
var G__51212 = cljs.core.chunk_rest(seq__50911_51210__$1);
var G__51213 = c__4609__auto___51211;
var G__51214 = cljs.core.count(c__4609__auto___51211);
var G__51215 = (0);
seq__50911_51194 = G__51212;
chunk__50912_51195 = G__51213;
count__50913_51196 = G__51214;
i__50914_51197 = G__51215;
continue;
} else {
var vec__50938_51216 = cljs.core.first(seq__50911_51210__$1);
var name_51217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50938_51216,(0),null);
var map__50941_51218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50938_51216,(1),null);
var map__50941_51219__$1 = (((((!((map__50941_51218 == null))))?(((((map__50941_51218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50941_51218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50941_51218):map__50941_51218);
var doc_51220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941_51219__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941_51219__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51217], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51221], 0));

if(cljs.core.truth_(doc_51220)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51220], 0));
} else {
}


var G__51223 = cljs.core.next(seq__50911_51210__$1);
var G__51224 = null;
var G__51225 = (0);
var G__51226 = (0);
seq__50911_51194 = G__51223;
chunk__50912_51195 = G__51224;
count__50913_51196 = G__51225;
i__50914_51197 = G__51226;
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

var seq__50944 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50945 = null;
var count__50946 = (0);
var i__50947 = (0);
while(true){
if((i__50947 < count__50946)){
var role = chunk__50945.cljs$core$IIndexed$_nth$arity$2(null,i__50947);
var temp__5735__auto___51227__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51227__$1)){
var spec_51228 = temp__5735__auto___51227__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51228)], 0));
} else {
}


var G__51229 = seq__50944;
var G__51230 = chunk__50945;
var G__51231 = count__50946;
var G__51232 = (i__50947 + (1));
seq__50944 = G__51229;
chunk__50945 = G__51230;
count__50946 = G__51231;
i__50947 = G__51232;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50944);
if(temp__5735__auto____$1){
var seq__50944__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50944__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50944__$1);
var G__51233 = cljs.core.chunk_rest(seq__50944__$1);
var G__51234 = c__4609__auto__;
var G__51235 = cljs.core.count(c__4609__auto__);
var G__51236 = (0);
seq__50944 = G__51233;
chunk__50945 = G__51234;
count__50946 = G__51235;
i__50947 = G__51236;
continue;
} else {
var role = cljs.core.first(seq__50944__$1);
var temp__5735__auto___51237__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51237__$2)){
var spec_51238 = temp__5735__auto___51237__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51238)], 0));
} else {
}


var G__51239 = cljs.core.next(seq__50944__$1);
var G__51240 = null;
var G__51241 = (0);
var G__51242 = (0);
seq__50944 = G__51239;
chunk__50945 = G__51240;
count__50946 = G__51241;
i__50947 = G__51242;
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
var G__51244 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51245 = cljs.core.ex_cause(t);
via = G__51244;
t = G__51245;
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
var map__50966 = datafied_throwable;
var map__50966__$1 = (((((!((map__50966 == null))))?(((((map__50966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50966):map__50966);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50966__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50966__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50966__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50967 = cljs.core.last(via);
var map__50967__$1 = (((((!((map__50967 == null))))?(((((map__50967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50967):map__50967);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50967__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50968 = data;
var map__50968__$1 = (((((!((map__50968 == null))))?(((((map__50968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50968):map__50968);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50968__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50968__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50968__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50969 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50969__$1 = (((((!((map__50969 == null))))?(((((map__50969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50969):map__50969);
var top_data = map__50969__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50969__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50979 = phase;
var G__50979__$1 = (((G__50979 instanceof cljs.core.Keyword))?G__50979.fqn:null);
switch (G__50979__$1) {
case "read-source":
var map__50983 = data;
var map__50983__$1 = (((((!((map__50983 == null))))?(((((map__50983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50983):map__50983);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50991 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50991__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50991,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50991);
var G__50991__$2 = (cljs.core.truth_((function (){var fexpr__50998 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50998.cljs$core$IFn$_invoke$arity$1 ? fexpr__50998.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50998.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50991__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50991__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50991__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50991__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51003 = top_data;
var G__51003__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51003,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51003);
var G__51003__$2 = (cljs.core.truth_((function (){var fexpr__51013 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51013.cljs$core$IFn$_invoke$arity$1 ? fexpr__51013.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51013.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51003__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51003__$1);
var G__51003__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51003__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51003__$2);
var G__51003__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51003__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51003__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51003__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51003__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51015 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51015,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51015,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51015,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51015,(3),null);
var G__51020 = top_data;
var G__51020__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51020,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51020);
var G__51020__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51020__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51020__$1);
var G__51020__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51020__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51020__$2);
var G__51020__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51020__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51020__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51020__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51020__$4;
}

break;
case "execution":
var vec__51035 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51035,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51035,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51035,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51035,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50961_SHARP_){
var or__4185__auto__ = (p1__50961_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__51048 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51048.cljs$core$IFn$_invoke$arity$1 ? fexpr__51048.cljs$core$IFn$_invoke$arity$1(p1__50961_SHARP_) : fexpr__51048.call(null,p1__50961_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__51052 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51052__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51052);
var G__51052__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51052__$1);
var G__51052__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51052__$2);
var G__51052__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51052__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51052__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50979__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51097){
var map__51098 = p__51097;
var map__51098__$1 = (((((!((map__51098 == null))))?(((((map__51098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51098):map__51098);
var triage_data = map__51098__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__51107 = phase;
var G__51107__$1 = (((G__51107 instanceof cljs.core.Keyword))?G__51107.fqn:null);
switch (G__51107__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51112 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51113 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51114 = loc;
var G__51115 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51123_51257 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51124_51258 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51125_51259 = true;
var _STAR_print_fn_STAR__temp_val__51126_51260 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51125_51259);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51126_51260);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51070_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51070_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51124_51258);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51123_51257);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51112,G__51113,G__51114,G__51115) : format.call(null,G__51112,G__51113,G__51114,G__51115));

break;
case "macroexpansion":
var G__51134 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51135 = cause_type;
var G__51136 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51137 = loc;
var G__51138 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51134,G__51135,G__51136,G__51137,G__51138) : format.call(null,G__51134,G__51135,G__51136,G__51137,G__51138));

break;
case "compile-syntax-check":
var G__51143 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51144 = cause_type;
var G__51145 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51146 = loc;
var G__51147 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51143,G__51144,G__51145,G__51146,G__51147) : format.call(null,G__51143,G__51144,G__51145,G__51146,G__51147));

break;
case "compilation":
var G__51148 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51149 = cause_type;
var G__51150 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51151 = loc;
var G__51152 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51148,G__51149,G__51150,G__51151,G__51152) : format.call(null,G__51148,G__51149,G__51150,G__51151,G__51152));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51153 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51154 = symbol;
var G__51155 = loc;
var G__51156 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51157_51269 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51160_51270 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51163_51271 = true;
var _STAR_print_fn_STAR__temp_val__51164_51272 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51163_51271);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51164_51272);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51080_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51080_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51160_51270);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51157_51269);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51153,G__51154,G__51155,G__51156) : format.call(null,G__51153,G__51154,G__51155,G__51156));
} else {
var G__51165 = "Execution error%s at %s(%s).\n%s\n";
var G__51166 = cause_type;
var G__51167 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51168 = loc;
var G__51169 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51165,G__51166,G__51167,G__51168,G__51169) : format.call(null,G__51165,G__51166,G__51167,G__51168,G__51169));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51107__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
