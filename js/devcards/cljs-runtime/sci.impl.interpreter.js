goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__82061 = xs;
args__$2 = G__82061;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__82062 = xs;
args__$2 = G__82062;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___82063 = arguments.length;
var i__4790__auto___82064 = (0);
while(true){
if((i__4790__auto___82064 < len__4789__auto___82063)){
args__4795__auto__.push((arguments[i__4790__auto___82064]));

var G__82065 = (i__4790__auto___82064 + (1));
i__4790__auto___82064 = G__82065;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__82136 = ctx__$2;
var G__82137 = rest_let_bindings;
ctx__$1 = G__82136;
let_bindings__$1 = G__82137;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__82152 = nexprs;
exprs__$1 = G__82152;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq81257){
var G__81258 = cljs.core.first(seq81257);
var seq81257__$1 = cljs.core.next(seq81257);
var G__81259 = cljs.core.first(seq81257__$1);
var seq81257__$2 = cljs.core.next(seq81257__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81258,G__81259,seq81257__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__81260){
var vec__81261 = p__81260;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81261,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81261,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81261,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81261,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((function (){var G__81264 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__81265 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__81264,G__81265) : sci.impl.utils.kw_identical_QMARK_.call(null,G__81264,G__81265));
})())?(function (){var G__81266 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__81266,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__81266;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__81267 = libspec;
var seq__81268 = cljs.core.seq(vec__81267);
var first__81269 = cljs.core.first(seq__81268);
var seq__81268__$1 = cljs.core.next(seq__81268);
var lib_name = first__81269;
var opts = seq__81268__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__81273 = opts;
var vec__81274 = G__81273;
var seq__81275 = cljs.core.seq(vec__81274);
var first__81276 = cljs.core.first(seq__81275);
var seq__81275__$1 = cljs.core.next(seq__81275);
var opt_name = first__81276;
var first__81276__$1 = cljs.core.first(seq__81275__$1);
var seq__81275__$2 = cljs.core.next(seq__81275__$1);
var fst_opt = first__81276__$1;
var rst_opts = seq__81275__$2;
var ret__$1 = ret;
var G__81273__$1 = G__81273;
while(true){
var ret__$2 = ret__$1;
var vec__81281 = G__81273__$1;
var seq__81282 = cljs.core.seq(vec__81281);
var first__81283 = cljs.core.first(seq__81282);
var seq__81282__$1 = cljs.core.next(seq__81282);
var opt_name__$1 = first__81283;
var first__81283__$1 = cljs.core.first(seq__81282__$1);
var seq__81282__$2 = cljs.core.next(seq__81282__$1);
var fst_opt__$1 = first__81283__$1;
var rst_opts__$1 = seq__81282__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__81300 = opt_name__$1;
var G__81300__$1 = (((G__81300 instanceof cljs.core.Keyword))?G__81300.fqn:null);
switch (G__81300__$1) {
case "as":
var G__82234 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__82235 = rst_opts__$1;
ret__$1 = G__82234;
G__81273__$1 = G__82235;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__82236 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__82237 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__82236;
G__81273__$1 = G__82237;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__82238 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__82239 = rst_opts__$1;
ret__$1 = G__82238;
G__81273__$1 = G__82239;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81300__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__81301){
var vec__81302 = p__81301;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81302,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__81305){
var map__81306 = p__81305;
var map__81306__$1 = (((((!((map__81306 == null))))?(((((map__81306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81306):map__81306);
var _parsed_libspec = map__81306__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81306__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81306__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81306__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81306__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81306__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__81310 = new cljs.core.Keyword(null,"all","all",892129742);
var G__81311 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__81310,G__81311) : sci.impl.utils.kw_identical_QMARK_.call(null,G__81310,G__81311));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__81312 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81312,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__81315 = sci.impl.interpreter.parse_libspec(libspec);
var map__81315__$1 = (((((!((map__81315 == null))))?(((((map__81315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81315):map__81315);
var parsed_libspec = map__81315__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81315__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81315__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__81317 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__81317) : load_fn.call(null,G__81317));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__81318 = temp__5733__auto____$2;
var map__81318__$1 = (((((!((map__81318 == null))))?(((((map__81318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81318):map__81318);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81318__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81318__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__81321_82241 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__81322_82242 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__81321_82241,G__81322_82242) : sci.impl.interpreter.eval_string_STAR_.call(null,G__81321_82241,G__81322_82242));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e81320){if((e81320 instanceof Error)){
var e_82246 = e81320;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_82246;
} else {
throw e81320;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4795__auto__ = [];
var len__4789__auto___82253 = arguments.length;
var i__4790__auto___82254 = (0);
while(true){
if((i__4790__auto___82254 < len__4789__auto___82253)){
args__4795__auto__.push((arguments[i__4790__auto___82254]));

var G__82255 = (i__4790__auto___82254 + (1));
i__4790__auto___82254 = G__82255;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__81334 = ctx;
var G__81335 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81334,G__81335) : sci.impl.interpreter.interpret.call(null,G__81334,G__81335));
})();
if((ret instanceof cljs.core.Symbol)){
var G__82256 = (function (){var G__81336 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81336,current_libspec);
} else {
return G__81336;
}
})();
var G__82257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__82258 = cljs.core.next(args__$1);
libspecs = G__82256;
current_libspec = G__82257;
args__$1 = G__82258;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__82259 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__82260 = null;
var G__82261 = cljs.core.next(args__$1);
libspecs = G__82259;
current_libspec = G__82260;
args__$1 = G__82261;
continue;
} else {
var G__82262 = (function (){var G__81338 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81338,current_libspec);
} else {
return G__81338;
}
})();
var G__82263 = ret;
var G__82264 = cljs.core.next(args__$1);
libspecs = G__82262;
current_libspec = G__82263;
args__$1 = G__82264;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__81339 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81339,current_libspec);
} else {
return G__81339;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__81326_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__81326_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq81327){
var G__81328 = cljs.core.first(seq81327);
var seq81327__$1 = cljs.core.next(seq81327);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81328,seq81327__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___82265 = arguments.length;
var i__4790__auto___82266 = (0);
while(true){
if((i__4790__auto___82266 < len__4789__auto___82265)){
args__4795__auto__.push((arguments[i__4790__auto___82266]));

var G__82267 = (i__4790__auto___82266 + (1));
i__4790__auto___82266 = G__82267;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq81340){
var G__81341 = cljs.core.first(seq81340);
var seq81340__$1 = cljs.core.next(seq81340);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81341,seq81340__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__81345){
var vec__81346 = p__81345;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81346,(0),null);
var map__81349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81346,(1),null);
var map__81349__$1 = (((((!((map__81349 == null))))?(((((map__81349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81349):map__81349);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81349__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81349__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81349__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__81366 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81366,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81366,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__81369 = ctx;
var G__81370 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81369,G__81370) : sci.impl.interpreter.interpret.call(null,G__81369,G__81370));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__81371 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__81371__$1 = (((((!((map__81371 == null))))?(((((map__81371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81371):map__81371);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81371__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81371__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81371__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__81379 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__81380 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__81380);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__81379);
}}catch (e81373){if((e81373 instanceof Error)){
var e = e81373;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__81374 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__81375 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81374,G__81375) : sci.impl.interpreter.interpret.call(null,G__81374,G__81375));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__81376 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81376,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81376,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e81373;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__81381){
var vec__81382 = p__81381;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81382,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81382,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81385_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81385_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81385_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__81387){
var vec__81388 = p__81387;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81388,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81388,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81388,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81386_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81386_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81386_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__81393,p__81394){
var map__81395 = p__81393;
var map__81395__$1 = (((((!((map__81395 == null))))?(((((map__81395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81395):map__81395);
var ctx = map__81395__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81395__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__81396 = p__81394;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81396,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81396,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81396,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81396,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81392_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81392_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81392_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__81400){
var vec__81401 = p__81400;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81401,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81401,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__81404){
var vec__81405 = p__81404;
var seq__81406 = cljs.core.seq(vec__81405);
var first__81407 = cljs.core.first(seq__81406);
var seq__81406__$1 = cljs.core.next(seq__81406);
var _ = first__81407;
var first__81407__$1 = cljs.core.first(seq__81406__$1);
var seq__81406__$2 = cljs.core.next(seq__81406__$1);
var ns_sym = first__81407__$1;
var exprs = seq__81406__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__81408 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81408,(1),null);
var G__81411_82271 = k;
var G__81411_82272__$1 = (((G__81411_82271 instanceof cljs.core.Keyword))?G__81411_82271.fqn:null);
switch (G__81411_82272__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__81411_82271,G__81411_82272__$1,vec__81408,k,v,ns_sym__$1,vec__81405,seq__81406,first__81407,seq__81406__$1,_,first__81407__$1,seq__81406__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__81411_82271,G__81411_82272__$1,vec__81408,k,v,ns_sym__$1,vec__81405,seq__81406,first__81407,seq__81406__$1,_,first__81407__$1,seq__81406__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81411_82272__$1)].join('')));

}

var G__82274 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__82274;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__81415){
var vec__81416 = p__81415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81416,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81416,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81416,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__81422 = exprs;
var vec__81423 = G__81422;
var seq__81424 = cljs.core.seq(vec__81423);
var first__81425 = cljs.core.first(seq__81424);
var seq__81424__$1 = cljs.core.next(seq__81424);
var expr = first__81425;
var exprs__$1 = seq__81424__$1;
var G__81422__$1 = G__81422;
while(true){
var vec__81426 = G__81422__$1;
var seq__81427 = cljs.core.seq(vec__81426);
var first__81428 = cljs.core.first(seq__81427);
var seq__81427__$1 = cljs.core.next(seq__81427);
var expr__$1 = first__81428;
var exprs__$2 = seq__81427__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e81429){if((e81429 instanceof Error)){
var e = e81429;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e81429;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__82275 = exprs__$3;
G__81422__$1 = G__82275;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__81626 = cljs.core.count(args);
switch (G__81626) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg81436 = (function (){var G__81627 = ctx;
var G__81628 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81627,G__81628) : sci.impl.interpreter.interpret.call(null,G__81627,G__81628));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg81436) : f.call(null,arg81436));

break;
case (2):
var arg81437 = (function (){var G__81629 = ctx;
var G__81630 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81629,G__81630) : sci.impl.interpreter.interpret.call(null,G__81629,G__81630));
})();
var args__$1 = cljs.core.rest(args);
var arg81438 = (function (){var G__81631 = ctx;
var G__81632 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81631,G__81632) : sci.impl.interpreter.interpret.call(null,G__81631,G__81632));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg81437,arg81438) : f.call(null,arg81437,arg81438));

break;
case (3):
var arg81439 = (function (){var G__81633 = ctx;
var G__81634 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81633,G__81634) : sci.impl.interpreter.interpret.call(null,G__81633,G__81634));
})();
var args__$1 = cljs.core.rest(args);
var arg81440 = (function (){var G__81635 = ctx;
var G__81636 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81635,G__81636) : sci.impl.interpreter.interpret.call(null,G__81635,G__81636));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81441 = (function (){var G__81637 = ctx;
var G__81638 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81637,G__81638) : sci.impl.interpreter.interpret.call(null,G__81637,G__81638));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg81439,arg81440,arg81441) : f.call(null,arg81439,arg81440,arg81441));

break;
case (4):
var arg81442 = (function (){var G__81639 = ctx;
var G__81640 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81639,G__81640) : sci.impl.interpreter.interpret.call(null,G__81639,G__81640));
})();
var args__$1 = cljs.core.rest(args);
var arg81443 = (function (){var G__81641 = ctx;
var G__81642 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81641,G__81642) : sci.impl.interpreter.interpret.call(null,G__81641,G__81642));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81444 = (function (){var G__81643 = ctx;
var G__81644 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81643,G__81644) : sci.impl.interpreter.interpret.call(null,G__81643,G__81644));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81445 = (function (){var G__81645 = ctx;
var G__81646 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81645,G__81646) : sci.impl.interpreter.interpret.call(null,G__81645,G__81646));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg81442,arg81443,arg81444,arg81445) : f.call(null,arg81442,arg81443,arg81444,arg81445));

break;
case (5):
var arg81446 = (function (){var G__81647 = ctx;
var G__81648 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81647,G__81648) : sci.impl.interpreter.interpret.call(null,G__81647,G__81648));
})();
var args__$1 = cljs.core.rest(args);
var arg81447 = (function (){var G__81649 = ctx;
var G__81650 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81649,G__81650) : sci.impl.interpreter.interpret.call(null,G__81649,G__81650));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81448 = (function (){var G__81651 = ctx;
var G__81652 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81651,G__81652) : sci.impl.interpreter.interpret.call(null,G__81651,G__81652));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81449 = (function (){var G__81653 = ctx;
var G__81654 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81653,G__81654) : sci.impl.interpreter.interpret.call(null,G__81653,G__81654));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81450 = (function (){var G__81655 = ctx;
var G__81656 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81655,G__81656) : sci.impl.interpreter.interpret.call(null,G__81655,G__81656));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg81446,arg81447,arg81448,arg81449,arg81450) : f.call(null,arg81446,arg81447,arg81448,arg81449,arg81450));

break;
case (6):
var arg81451 = (function (){var G__81657 = ctx;
var G__81658 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81657,G__81658) : sci.impl.interpreter.interpret.call(null,G__81657,G__81658));
})();
var args__$1 = cljs.core.rest(args);
var arg81452 = (function (){var G__81659 = ctx;
var G__81660 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81659,G__81660) : sci.impl.interpreter.interpret.call(null,G__81659,G__81660));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81453 = (function (){var G__81661 = ctx;
var G__81662 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81661,G__81662) : sci.impl.interpreter.interpret.call(null,G__81661,G__81662));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81454 = (function (){var G__81664 = ctx;
var G__81665 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81664,G__81665) : sci.impl.interpreter.interpret.call(null,G__81664,G__81665));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81455 = (function (){var G__81666 = ctx;
var G__81667 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81666,G__81667) : sci.impl.interpreter.interpret.call(null,G__81666,G__81667));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81456 = (function (){var G__81668 = ctx;
var G__81669 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81668,G__81669) : sci.impl.interpreter.interpret.call(null,G__81668,G__81669));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg81451,arg81452,arg81453,arg81454,arg81455,arg81456) : f.call(null,arg81451,arg81452,arg81453,arg81454,arg81455,arg81456));

break;
case (7):
var arg81457 = (function (){var G__81670 = ctx;
var G__81671 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81670,G__81671) : sci.impl.interpreter.interpret.call(null,G__81670,G__81671));
})();
var args__$1 = cljs.core.rest(args);
var arg81458 = (function (){var G__81672 = ctx;
var G__81673 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81672,G__81673) : sci.impl.interpreter.interpret.call(null,G__81672,G__81673));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81459 = (function (){var G__81674 = ctx;
var G__81675 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81674,G__81675) : sci.impl.interpreter.interpret.call(null,G__81674,G__81675));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81460 = (function (){var G__81676 = ctx;
var G__81677 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81676,G__81677) : sci.impl.interpreter.interpret.call(null,G__81676,G__81677));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81461 = (function (){var G__81678 = ctx;
var G__81679 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81678,G__81679) : sci.impl.interpreter.interpret.call(null,G__81678,G__81679));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81462 = (function (){var G__81680 = ctx;
var G__81681 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81680,G__81681) : sci.impl.interpreter.interpret.call(null,G__81680,G__81681));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81463 = (function (){var G__81682 = ctx;
var G__81683 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81682,G__81683) : sci.impl.interpreter.interpret.call(null,G__81682,G__81683));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg81457,arg81458,arg81459,arg81460,arg81461,arg81462,arg81463) : f.call(null,arg81457,arg81458,arg81459,arg81460,arg81461,arg81462,arg81463));

break;
case (8):
var arg81464 = (function (){var G__81684 = ctx;
var G__81685 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81684,G__81685) : sci.impl.interpreter.interpret.call(null,G__81684,G__81685));
})();
var args__$1 = cljs.core.rest(args);
var arg81465 = (function (){var G__81686 = ctx;
var G__81687 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81686,G__81687) : sci.impl.interpreter.interpret.call(null,G__81686,G__81687));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81466 = (function (){var G__81688 = ctx;
var G__81689 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81688,G__81689) : sci.impl.interpreter.interpret.call(null,G__81688,G__81689));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81467 = (function (){var G__81690 = ctx;
var G__81691 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81690,G__81691) : sci.impl.interpreter.interpret.call(null,G__81690,G__81691));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81468 = (function (){var G__81692 = ctx;
var G__81693 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81692,G__81693) : sci.impl.interpreter.interpret.call(null,G__81692,G__81693));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81469 = (function (){var G__81695 = ctx;
var G__81696 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81695,G__81696) : sci.impl.interpreter.interpret.call(null,G__81695,G__81696));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81470 = (function (){var G__81699 = ctx;
var G__81700 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81699,G__81700) : sci.impl.interpreter.interpret.call(null,G__81699,G__81700));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81471 = (function (){var G__81701 = ctx;
var G__81702 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81701,G__81702) : sci.impl.interpreter.interpret.call(null,G__81701,G__81702));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg81464,arg81465,arg81466,arg81467,arg81468,arg81469,arg81470,arg81471) : f.call(null,arg81464,arg81465,arg81466,arg81467,arg81468,arg81469,arg81470,arg81471));

break;
case (9):
var arg81472 = (function (){var G__81703 = ctx;
var G__81704 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81703,G__81704) : sci.impl.interpreter.interpret.call(null,G__81703,G__81704));
})();
var args__$1 = cljs.core.rest(args);
var arg81473 = (function (){var G__81705 = ctx;
var G__81706 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81705,G__81706) : sci.impl.interpreter.interpret.call(null,G__81705,G__81706));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81474 = (function (){var G__81707 = ctx;
var G__81708 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81707,G__81708) : sci.impl.interpreter.interpret.call(null,G__81707,G__81708));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81475 = (function (){var G__81709 = ctx;
var G__81710 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81709,G__81710) : sci.impl.interpreter.interpret.call(null,G__81709,G__81710));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81476 = (function (){var G__81711 = ctx;
var G__81712 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81711,G__81712) : sci.impl.interpreter.interpret.call(null,G__81711,G__81712));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81477 = (function (){var G__81721 = ctx;
var G__81722 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81721,G__81722) : sci.impl.interpreter.interpret.call(null,G__81721,G__81722));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81478 = (function (){var G__81723 = ctx;
var G__81724 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81723,G__81724) : sci.impl.interpreter.interpret.call(null,G__81723,G__81724));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81479 = (function (){var G__81725 = ctx;
var G__81726 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81725,G__81726) : sci.impl.interpreter.interpret.call(null,G__81725,G__81726));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81480 = (function (){var G__81727 = ctx;
var G__81728 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81727,G__81728) : sci.impl.interpreter.interpret.call(null,G__81727,G__81728));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg81472,arg81473,arg81474,arg81475,arg81476,arg81477,arg81478,arg81479,arg81480) : f.call(null,arg81472,arg81473,arg81474,arg81475,arg81476,arg81477,arg81478,arg81479,arg81480));

break;
case (10):
var arg81481 = (function (){var G__81729 = ctx;
var G__81730 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81729,G__81730) : sci.impl.interpreter.interpret.call(null,G__81729,G__81730));
})();
var args__$1 = cljs.core.rest(args);
var arg81482 = (function (){var G__81731 = ctx;
var G__81732 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81731,G__81732) : sci.impl.interpreter.interpret.call(null,G__81731,G__81732));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81483 = (function (){var G__81733 = ctx;
var G__81734 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81733,G__81734) : sci.impl.interpreter.interpret.call(null,G__81733,G__81734));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81484 = (function (){var G__81735 = ctx;
var G__81736 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81735,G__81736) : sci.impl.interpreter.interpret.call(null,G__81735,G__81736));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81485 = (function (){var G__81737 = ctx;
var G__81738 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81737,G__81738) : sci.impl.interpreter.interpret.call(null,G__81737,G__81738));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81486 = (function (){var G__81739 = ctx;
var G__81740 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81739,G__81740) : sci.impl.interpreter.interpret.call(null,G__81739,G__81740));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81487 = (function (){var G__81741 = ctx;
var G__81742 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81741,G__81742) : sci.impl.interpreter.interpret.call(null,G__81741,G__81742));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81488 = (function (){var G__81743 = ctx;
var G__81744 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81743,G__81744) : sci.impl.interpreter.interpret.call(null,G__81743,G__81744));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81489 = (function (){var G__81745 = ctx;
var G__81746 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81745,G__81746) : sci.impl.interpreter.interpret.call(null,G__81745,G__81746));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81490 = (function (){var G__81747 = ctx;
var G__81748 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81747,G__81748) : sci.impl.interpreter.interpret.call(null,G__81747,G__81748));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg81481,arg81482,arg81483,arg81484,arg81485,arg81486,arg81487,arg81488,arg81489,arg81490) : f.call(null,arg81481,arg81482,arg81483,arg81484,arg81485,arg81486,arg81487,arg81488,arg81489,arg81490));

break;
case (11):
var arg81491 = (function (){var G__81757 = ctx;
var G__81758 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81757,G__81758) : sci.impl.interpreter.interpret.call(null,G__81757,G__81758));
})();
var args__$1 = cljs.core.rest(args);
var arg81492 = (function (){var G__81763 = ctx;
var G__81764 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81763,G__81764) : sci.impl.interpreter.interpret.call(null,G__81763,G__81764));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81493 = (function (){var G__81765 = ctx;
var G__81766 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81765,G__81766) : sci.impl.interpreter.interpret.call(null,G__81765,G__81766));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81494 = (function (){var G__81767 = ctx;
var G__81768 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81767,G__81768) : sci.impl.interpreter.interpret.call(null,G__81767,G__81768));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81495 = (function (){var G__81769 = ctx;
var G__81770 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81769,G__81770) : sci.impl.interpreter.interpret.call(null,G__81769,G__81770));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81496 = (function (){var G__81771 = ctx;
var G__81772 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81771,G__81772) : sci.impl.interpreter.interpret.call(null,G__81771,G__81772));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81497 = (function (){var G__81773 = ctx;
var G__81774 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81773,G__81774) : sci.impl.interpreter.interpret.call(null,G__81773,G__81774));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81498 = (function (){var G__81775 = ctx;
var G__81776 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81775,G__81776) : sci.impl.interpreter.interpret.call(null,G__81775,G__81776));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81499 = (function (){var G__81777 = ctx;
var G__81778 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81777,G__81778) : sci.impl.interpreter.interpret.call(null,G__81777,G__81778));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81500 = (function (){var G__81779 = ctx;
var G__81780 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81779,G__81780) : sci.impl.interpreter.interpret.call(null,G__81779,G__81780));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81501 = (function (){var G__81781 = ctx;
var G__81782 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81781,G__81782) : sci.impl.interpreter.interpret.call(null,G__81781,G__81782));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg81491,arg81492,arg81493,arg81494,arg81495,arg81496,arg81497,arg81498,arg81499,arg81500,arg81501) : f.call(null,arg81491,arg81492,arg81493,arg81494,arg81495,arg81496,arg81497,arg81498,arg81499,arg81500,arg81501));

break;
case (12):
var arg81502 = (function (){var G__81783 = ctx;
var G__81784 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81783,G__81784) : sci.impl.interpreter.interpret.call(null,G__81783,G__81784));
})();
var args__$1 = cljs.core.rest(args);
var arg81503 = (function (){var G__81785 = ctx;
var G__81786 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81785,G__81786) : sci.impl.interpreter.interpret.call(null,G__81785,G__81786));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81504 = (function (){var G__81787 = ctx;
var G__81788 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81787,G__81788) : sci.impl.interpreter.interpret.call(null,G__81787,G__81788));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81505 = (function (){var G__81789 = ctx;
var G__81790 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81789,G__81790) : sci.impl.interpreter.interpret.call(null,G__81789,G__81790));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81506 = (function (){var G__81791 = ctx;
var G__81792 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81791,G__81792) : sci.impl.interpreter.interpret.call(null,G__81791,G__81792));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81507 = (function (){var G__81793 = ctx;
var G__81794 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81793,G__81794) : sci.impl.interpreter.interpret.call(null,G__81793,G__81794));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81508 = (function (){var G__81795 = ctx;
var G__81796 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81795,G__81796) : sci.impl.interpreter.interpret.call(null,G__81795,G__81796));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81509 = (function (){var G__81797 = ctx;
var G__81798 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81797,G__81798) : sci.impl.interpreter.interpret.call(null,G__81797,G__81798));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81510 = (function (){var G__81799 = ctx;
var G__81800 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81799,G__81800) : sci.impl.interpreter.interpret.call(null,G__81799,G__81800));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81511 = (function (){var G__81804 = ctx;
var G__81805 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81804,G__81805) : sci.impl.interpreter.interpret.call(null,G__81804,G__81805));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81512 = (function (){var G__81806 = ctx;
var G__81807 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81806,G__81807) : sci.impl.interpreter.interpret.call(null,G__81806,G__81807));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81513 = (function (){var G__81808 = ctx;
var G__81809 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81808,G__81809) : sci.impl.interpreter.interpret.call(null,G__81808,G__81809));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg81502,arg81503,arg81504,arg81505,arg81506,arg81507,arg81508,arg81509,arg81510,arg81511,arg81512,arg81513) : f.call(null,arg81502,arg81503,arg81504,arg81505,arg81506,arg81507,arg81508,arg81509,arg81510,arg81511,arg81512,arg81513));

break;
case (13):
var arg81514 = (function (){var G__81810 = ctx;
var G__81811 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81810,G__81811) : sci.impl.interpreter.interpret.call(null,G__81810,G__81811));
})();
var args__$1 = cljs.core.rest(args);
var arg81515 = (function (){var G__81812 = ctx;
var G__81813 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81812,G__81813) : sci.impl.interpreter.interpret.call(null,G__81812,G__81813));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81516 = (function (){var G__81814 = ctx;
var G__81815 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81814,G__81815) : sci.impl.interpreter.interpret.call(null,G__81814,G__81815));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81517 = (function (){var G__81816 = ctx;
var G__81817 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81816,G__81817) : sci.impl.interpreter.interpret.call(null,G__81816,G__81817));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81518 = (function (){var G__81818 = ctx;
var G__81819 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81818,G__81819) : sci.impl.interpreter.interpret.call(null,G__81818,G__81819));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81519 = (function (){var G__81820 = ctx;
var G__81821 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81820,G__81821) : sci.impl.interpreter.interpret.call(null,G__81820,G__81821));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81520 = (function (){var G__81822 = ctx;
var G__81823 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81822,G__81823) : sci.impl.interpreter.interpret.call(null,G__81822,G__81823));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81521 = (function (){var G__81824 = ctx;
var G__81825 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81824,G__81825) : sci.impl.interpreter.interpret.call(null,G__81824,G__81825));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81522 = (function (){var G__81826 = ctx;
var G__81827 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81826,G__81827) : sci.impl.interpreter.interpret.call(null,G__81826,G__81827));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81523 = (function (){var G__81828 = ctx;
var G__81829 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81828,G__81829) : sci.impl.interpreter.interpret.call(null,G__81828,G__81829));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81524 = (function (){var G__81830 = ctx;
var G__81831 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81830,G__81831) : sci.impl.interpreter.interpret.call(null,G__81830,G__81831));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81525 = (function (){var G__81832 = ctx;
var G__81833 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81832,G__81833) : sci.impl.interpreter.interpret.call(null,G__81832,G__81833));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81526 = (function (){var G__81834 = ctx;
var G__81835 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81834,G__81835) : sci.impl.interpreter.interpret.call(null,G__81834,G__81835));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg81514,arg81515,arg81516,arg81517,arg81518,arg81519,arg81520,arg81521,arg81522,arg81523,arg81524,arg81525,arg81526) : f.call(null,arg81514,arg81515,arg81516,arg81517,arg81518,arg81519,arg81520,arg81521,arg81522,arg81523,arg81524,arg81525,arg81526));

break;
case (14):
var arg81527 = (function (){var G__81836 = ctx;
var G__81837 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81836,G__81837) : sci.impl.interpreter.interpret.call(null,G__81836,G__81837));
})();
var args__$1 = cljs.core.rest(args);
var arg81528 = (function (){var G__81838 = ctx;
var G__81839 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81838,G__81839) : sci.impl.interpreter.interpret.call(null,G__81838,G__81839));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81529 = (function (){var G__81840 = ctx;
var G__81841 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81840,G__81841) : sci.impl.interpreter.interpret.call(null,G__81840,G__81841));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81530 = (function (){var G__81842 = ctx;
var G__81843 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81842,G__81843) : sci.impl.interpreter.interpret.call(null,G__81842,G__81843));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81531 = (function (){var G__81844 = ctx;
var G__81845 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81844,G__81845) : sci.impl.interpreter.interpret.call(null,G__81844,G__81845));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81532 = (function (){var G__81846 = ctx;
var G__81847 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81846,G__81847) : sci.impl.interpreter.interpret.call(null,G__81846,G__81847));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81533 = (function (){var G__81848 = ctx;
var G__81849 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81848,G__81849) : sci.impl.interpreter.interpret.call(null,G__81848,G__81849));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81534 = (function (){var G__81850 = ctx;
var G__81851 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81850,G__81851) : sci.impl.interpreter.interpret.call(null,G__81850,G__81851));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81535 = (function (){var G__81852 = ctx;
var G__81853 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81852,G__81853) : sci.impl.interpreter.interpret.call(null,G__81852,G__81853));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81536 = (function (){var G__81854 = ctx;
var G__81855 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81854,G__81855) : sci.impl.interpreter.interpret.call(null,G__81854,G__81855));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81537 = (function (){var G__81856 = ctx;
var G__81857 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81856,G__81857) : sci.impl.interpreter.interpret.call(null,G__81856,G__81857));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81538 = (function (){var G__81858 = ctx;
var G__81859 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81858,G__81859) : sci.impl.interpreter.interpret.call(null,G__81858,G__81859));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81539 = (function (){var G__81860 = ctx;
var G__81861 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81860,G__81861) : sci.impl.interpreter.interpret.call(null,G__81860,G__81861));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81540 = (function (){var G__81862 = ctx;
var G__81863 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81862,G__81863) : sci.impl.interpreter.interpret.call(null,G__81862,G__81863));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg81527,arg81528,arg81529,arg81530,arg81531,arg81532,arg81533,arg81534,arg81535,arg81536,arg81537,arg81538,arg81539,arg81540) : f.call(null,arg81527,arg81528,arg81529,arg81530,arg81531,arg81532,arg81533,arg81534,arg81535,arg81536,arg81537,arg81538,arg81539,arg81540));

break;
case (15):
var arg81541 = (function (){var G__81864 = ctx;
var G__81865 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81864,G__81865) : sci.impl.interpreter.interpret.call(null,G__81864,G__81865));
})();
var args__$1 = cljs.core.rest(args);
var arg81542 = (function (){var G__81866 = ctx;
var G__81867 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81866,G__81867) : sci.impl.interpreter.interpret.call(null,G__81866,G__81867));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81543 = (function (){var G__81868 = ctx;
var G__81869 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81868,G__81869) : sci.impl.interpreter.interpret.call(null,G__81868,G__81869));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81544 = (function (){var G__81870 = ctx;
var G__81871 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81870,G__81871) : sci.impl.interpreter.interpret.call(null,G__81870,G__81871));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81545 = (function (){var G__81872 = ctx;
var G__81873 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81872,G__81873) : sci.impl.interpreter.interpret.call(null,G__81872,G__81873));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81546 = (function (){var G__81874 = ctx;
var G__81875 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81874,G__81875) : sci.impl.interpreter.interpret.call(null,G__81874,G__81875));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81547 = (function (){var G__81876 = ctx;
var G__81877 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81876,G__81877) : sci.impl.interpreter.interpret.call(null,G__81876,G__81877));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81548 = (function (){var G__81878 = ctx;
var G__81879 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81878,G__81879) : sci.impl.interpreter.interpret.call(null,G__81878,G__81879));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81549 = (function (){var G__81880 = ctx;
var G__81881 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81880,G__81881) : sci.impl.interpreter.interpret.call(null,G__81880,G__81881));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81550 = (function (){var G__81882 = ctx;
var G__81883 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81882,G__81883) : sci.impl.interpreter.interpret.call(null,G__81882,G__81883));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81551 = (function (){var G__81884 = ctx;
var G__81885 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81884,G__81885) : sci.impl.interpreter.interpret.call(null,G__81884,G__81885));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81552 = (function (){var G__81886 = ctx;
var G__81887 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81886,G__81887) : sci.impl.interpreter.interpret.call(null,G__81886,G__81887));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81553 = (function (){var G__81888 = ctx;
var G__81889 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81888,G__81889) : sci.impl.interpreter.interpret.call(null,G__81888,G__81889));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81554 = (function (){var G__81890 = ctx;
var G__81891 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81890,G__81891) : sci.impl.interpreter.interpret.call(null,G__81890,G__81891));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81555 = (function (){var G__81892 = ctx;
var G__81893 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81892,G__81893) : sci.impl.interpreter.interpret.call(null,G__81892,G__81893));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg81541,arg81542,arg81543,arg81544,arg81545,arg81546,arg81547,arg81548,arg81549,arg81550,arg81551,arg81552,arg81553,arg81554,arg81555) : f.call(null,arg81541,arg81542,arg81543,arg81544,arg81545,arg81546,arg81547,arg81548,arg81549,arg81550,arg81551,arg81552,arg81553,arg81554,arg81555));

break;
case (16):
var arg81556 = (function (){var G__81894 = ctx;
var G__81895 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81894,G__81895) : sci.impl.interpreter.interpret.call(null,G__81894,G__81895));
})();
var args__$1 = cljs.core.rest(args);
var arg81557 = (function (){var G__81896 = ctx;
var G__81897 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81896,G__81897) : sci.impl.interpreter.interpret.call(null,G__81896,G__81897));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81558 = (function (){var G__81898 = ctx;
var G__81899 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81898,G__81899) : sci.impl.interpreter.interpret.call(null,G__81898,G__81899));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81559 = (function (){var G__81900 = ctx;
var G__81901 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81900,G__81901) : sci.impl.interpreter.interpret.call(null,G__81900,G__81901));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81560 = (function (){var G__81902 = ctx;
var G__81903 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81902,G__81903) : sci.impl.interpreter.interpret.call(null,G__81902,G__81903));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81561 = (function (){var G__81904 = ctx;
var G__81905 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81904,G__81905) : sci.impl.interpreter.interpret.call(null,G__81904,G__81905));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81562 = (function (){var G__81906 = ctx;
var G__81907 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81906,G__81907) : sci.impl.interpreter.interpret.call(null,G__81906,G__81907));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81563 = (function (){var G__81908 = ctx;
var G__81909 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81908,G__81909) : sci.impl.interpreter.interpret.call(null,G__81908,G__81909));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81564 = (function (){var G__81910 = ctx;
var G__81911 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81910,G__81911) : sci.impl.interpreter.interpret.call(null,G__81910,G__81911));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81565 = (function (){var G__81912 = ctx;
var G__81913 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81912,G__81913) : sci.impl.interpreter.interpret.call(null,G__81912,G__81913));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81566 = (function (){var G__81914 = ctx;
var G__81915 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81914,G__81915) : sci.impl.interpreter.interpret.call(null,G__81914,G__81915));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81567 = (function (){var G__81916 = ctx;
var G__81917 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81916,G__81917) : sci.impl.interpreter.interpret.call(null,G__81916,G__81917));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81568 = (function (){var G__81918 = ctx;
var G__81919 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81918,G__81919) : sci.impl.interpreter.interpret.call(null,G__81918,G__81919));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81569 = (function (){var G__81920 = ctx;
var G__81921 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81920,G__81921) : sci.impl.interpreter.interpret.call(null,G__81920,G__81921));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81570 = (function (){var G__81922 = ctx;
var G__81923 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81922,G__81923) : sci.impl.interpreter.interpret.call(null,G__81922,G__81923));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81571 = (function (){var G__81924 = ctx;
var G__81925 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81924,G__81925) : sci.impl.interpreter.interpret.call(null,G__81924,G__81925));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg81556,arg81557,arg81558,arg81559,arg81560,arg81561,arg81562,arg81563,arg81564,arg81565,arg81566,arg81567,arg81568,arg81569,arg81570,arg81571) : f.call(null,arg81556,arg81557,arg81558,arg81559,arg81560,arg81561,arg81562,arg81563,arg81564,arg81565,arg81566,arg81567,arg81568,arg81569,arg81570,arg81571));

break;
case (17):
var arg81572 = (function (){var G__81926 = ctx;
var G__81927 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81926,G__81927) : sci.impl.interpreter.interpret.call(null,G__81926,G__81927));
})();
var args__$1 = cljs.core.rest(args);
var arg81573 = (function (){var G__81928 = ctx;
var G__81929 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81928,G__81929) : sci.impl.interpreter.interpret.call(null,G__81928,G__81929));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81574 = (function (){var G__81930 = ctx;
var G__81931 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81930,G__81931) : sci.impl.interpreter.interpret.call(null,G__81930,G__81931));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81575 = (function (){var G__81932 = ctx;
var G__81933 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81932,G__81933) : sci.impl.interpreter.interpret.call(null,G__81932,G__81933));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81576 = (function (){var G__81934 = ctx;
var G__81935 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81934,G__81935) : sci.impl.interpreter.interpret.call(null,G__81934,G__81935));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81577 = (function (){var G__81936 = ctx;
var G__81937 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81936,G__81937) : sci.impl.interpreter.interpret.call(null,G__81936,G__81937));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81578 = (function (){var G__81938 = ctx;
var G__81939 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81938,G__81939) : sci.impl.interpreter.interpret.call(null,G__81938,G__81939));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81579 = (function (){var G__81940 = ctx;
var G__81941 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81940,G__81941) : sci.impl.interpreter.interpret.call(null,G__81940,G__81941));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81580 = (function (){var G__81942 = ctx;
var G__81943 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81942,G__81943) : sci.impl.interpreter.interpret.call(null,G__81942,G__81943));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81581 = (function (){var G__81944 = ctx;
var G__81945 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81944,G__81945) : sci.impl.interpreter.interpret.call(null,G__81944,G__81945));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81582 = (function (){var G__81946 = ctx;
var G__81947 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81946,G__81947) : sci.impl.interpreter.interpret.call(null,G__81946,G__81947));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81583 = (function (){var G__81948 = ctx;
var G__81949 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81948,G__81949) : sci.impl.interpreter.interpret.call(null,G__81948,G__81949));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81584 = (function (){var G__81950 = ctx;
var G__81951 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81950,G__81951) : sci.impl.interpreter.interpret.call(null,G__81950,G__81951));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81585 = (function (){var G__81952 = ctx;
var G__81953 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81952,G__81953) : sci.impl.interpreter.interpret.call(null,G__81952,G__81953));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81586 = (function (){var G__81954 = ctx;
var G__81955 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81954,G__81955) : sci.impl.interpreter.interpret.call(null,G__81954,G__81955));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81587 = (function (){var G__81956 = ctx;
var G__81957 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81956,G__81957) : sci.impl.interpreter.interpret.call(null,G__81956,G__81957));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81588 = (function (){var G__81958 = ctx;
var G__81959 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81958,G__81959) : sci.impl.interpreter.interpret.call(null,G__81958,G__81959));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg81572,arg81573,arg81574,arg81575,arg81576,arg81577,arg81578,arg81579,arg81580,arg81581,arg81582,arg81583,arg81584,arg81585,arg81586,arg81587,arg81588) : f.call(null,arg81572,arg81573,arg81574,arg81575,arg81576,arg81577,arg81578,arg81579,arg81580,arg81581,arg81582,arg81583,arg81584,arg81585,arg81586,arg81587,arg81588));

break;
case (18):
var arg81589 = (function (){var G__81960 = ctx;
var G__81961 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81960,G__81961) : sci.impl.interpreter.interpret.call(null,G__81960,G__81961));
})();
var args__$1 = cljs.core.rest(args);
var arg81590 = (function (){var G__81962 = ctx;
var G__81963 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81962,G__81963) : sci.impl.interpreter.interpret.call(null,G__81962,G__81963));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81591 = (function (){var G__81964 = ctx;
var G__81965 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81964,G__81965) : sci.impl.interpreter.interpret.call(null,G__81964,G__81965));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81592 = (function (){var G__81966 = ctx;
var G__81967 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81966,G__81967) : sci.impl.interpreter.interpret.call(null,G__81966,G__81967));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81593 = (function (){var G__81968 = ctx;
var G__81969 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81968,G__81969) : sci.impl.interpreter.interpret.call(null,G__81968,G__81969));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81594 = (function (){var G__81970 = ctx;
var G__81971 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81970,G__81971) : sci.impl.interpreter.interpret.call(null,G__81970,G__81971));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81595 = (function (){var G__81972 = ctx;
var G__81973 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81972,G__81973) : sci.impl.interpreter.interpret.call(null,G__81972,G__81973));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81596 = (function (){var G__81974 = ctx;
var G__81975 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81974,G__81975) : sci.impl.interpreter.interpret.call(null,G__81974,G__81975));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81597 = (function (){var G__81976 = ctx;
var G__81977 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81976,G__81977) : sci.impl.interpreter.interpret.call(null,G__81976,G__81977));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81598 = (function (){var G__81978 = ctx;
var G__81979 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81978,G__81979) : sci.impl.interpreter.interpret.call(null,G__81978,G__81979));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81599 = (function (){var G__81980 = ctx;
var G__81981 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81980,G__81981) : sci.impl.interpreter.interpret.call(null,G__81980,G__81981));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81600 = (function (){var G__81982 = ctx;
var G__81983 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81982,G__81983) : sci.impl.interpreter.interpret.call(null,G__81982,G__81983));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81601 = (function (){var G__81984 = ctx;
var G__81985 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81984,G__81985) : sci.impl.interpreter.interpret.call(null,G__81984,G__81985));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81602 = (function (){var G__81986 = ctx;
var G__81987 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81986,G__81987) : sci.impl.interpreter.interpret.call(null,G__81986,G__81987));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81603 = (function (){var G__81988 = ctx;
var G__81989 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81988,G__81989) : sci.impl.interpreter.interpret.call(null,G__81988,G__81989));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81604 = (function (){var G__81990 = ctx;
var G__81991 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81990,G__81991) : sci.impl.interpreter.interpret.call(null,G__81990,G__81991));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81605 = (function (){var G__81992 = ctx;
var G__81993 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81992,G__81993) : sci.impl.interpreter.interpret.call(null,G__81992,G__81993));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg81606 = (function (){var G__81994 = ctx;
var G__81995 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81994,G__81995) : sci.impl.interpreter.interpret.call(null,G__81994,G__81995));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg81589,arg81590,arg81591,arg81592,arg81593,arg81594,arg81595,arg81596,arg81597,arg81598,arg81599,arg81600,arg81601,arg81602,arg81603,arg81604,arg81605,arg81606) : f.call(null,arg81589,arg81590,arg81591,arg81592,arg81593,arg81594,arg81595,arg81596,arg81597,arg81598,arg81599,arg81600,arg81601,arg81602,arg81603,arg81604,arg81605,arg81606));

break;
case (19):
var arg81607 = (function (){var G__81996 = ctx;
var G__81997 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81996,G__81997) : sci.impl.interpreter.interpret.call(null,G__81996,G__81997));
})();
var args__$1 = cljs.core.rest(args);
var arg81608 = (function (){var G__81998 = ctx;
var G__81999 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81998,G__81999) : sci.impl.interpreter.interpret.call(null,G__81998,G__81999));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81609 = (function (){var G__82000 = ctx;
var G__82001 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82000,G__82001) : sci.impl.interpreter.interpret.call(null,G__82000,G__82001));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81610 = (function (){var G__82002 = ctx;
var G__82003 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82002,G__82003) : sci.impl.interpreter.interpret.call(null,G__82002,G__82003));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81611 = (function (){var G__82004 = ctx;
var G__82005 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82004,G__82005) : sci.impl.interpreter.interpret.call(null,G__82004,G__82005));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81612 = (function (){var G__82006 = ctx;
var G__82007 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82006,G__82007) : sci.impl.interpreter.interpret.call(null,G__82006,G__82007));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81613 = (function (){var G__82008 = ctx;
var G__82009 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82008,G__82009) : sci.impl.interpreter.interpret.call(null,G__82008,G__82009));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81614 = (function (){var G__82010 = ctx;
var G__82011 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82010,G__82011) : sci.impl.interpreter.interpret.call(null,G__82010,G__82011));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81615 = (function (){var G__82012 = ctx;
var G__82013 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82012,G__82013) : sci.impl.interpreter.interpret.call(null,G__82012,G__82013));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81616 = (function (){var G__82014 = ctx;
var G__82015 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82014,G__82015) : sci.impl.interpreter.interpret.call(null,G__82014,G__82015));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81617 = (function (){var G__82016 = ctx;
var G__82017 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82016,G__82017) : sci.impl.interpreter.interpret.call(null,G__82016,G__82017));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81618 = (function (){var G__82018 = ctx;
var G__82019 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82018,G__82019) : sci.impl.interpreter.interpret.call(null,G__82018,G__82019));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81619 = (function (){var G__82020 = ctx;
var G__82021 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82020,G__82021) : sci.impl.interpreter.interpret.call(null,G__82020,G__82021));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81620 = (function (){var G__82022 = ctx;
var G__82023 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82022,G__82023) : sci.impl.interpreter.interpret.call(null,G__82022,G__82023));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81621 = (function (){var G__82024 = ctx;
var G__82025 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82024,G__82025) : sci.impl.interpreter.interpret.call(null,G__82024,G__82025));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81622 = (function (){var G__82026 = ctx;
var G__82027 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82026,G__82027) : sci.impl.interpreter.interpret.call(null,G__82026,G__82027));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81623 = (function (){var G__82028 = ctx;
var G__82029 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82028,G__82029) : sci.impl.interpreter.interpret.call(null,G__82028,G__82029));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg81624 = (function (){var G__82030 = ctx;
var G__82031 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82030,G__82031) : sci.impl.interpreter.interpret.call(null,G__82030,G__82031));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg81625 = (function (){var G__82032 = ctx;
var G__82033 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82032,G__82033) : sci.impl.interpreter.interpret.call(null,G__82032,G__82033));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg81607,arg81608,arg81609,arg81610,arg81611,arg81612,arg81613,arg81614,arg81615,arg81616,arg81617,arg81618,arg81619,arg81620,arg81621,arg81622,arg81623,arg81624,arg81625) : f.call(null,arg81607,arg81608,arg81609,arg81610,arg81611,arg81612,arg81613,arg81614,arg81615,arg81616,arg81617,arg81618,arg81619,arg81620,arg81621,arg81622,arg81623,arg81624,arg81625));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__82034 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__82034)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__82034)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__82034)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__82034)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__82034)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__82034)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__82035 = ctx;
var G__82036 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82035,G__82036) : sci.impl.interpreter.interpret.call(null,G__82035,G__82036));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__82034)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__82034)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__82034)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__82034)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__82034)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__82034)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__82034)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__82034)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__82034)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__82037 = ctx;
var G__82038 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82037,G__82038) : sci.impl.interpreter.interpret.call(null,G__82037,G__82038));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__82034)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__82034)){
return (new cljs.core.LazySeq(null,(function (){var G__82039 = ctx;
var G__82040 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82039,G__82040) : sci.impl.interpreter.interpret.call(null,G__82039,G__82040));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__82034)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__82034)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__82034)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__82034)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82034)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__82042 = op;
var G__82043 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__82042,G__82043) : sci.impl.utils.kw_identical_QMARK_.call(null,G__82042,G__82043));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e82041){if((e82041 instanceof Error)){
var e = e82041;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e82041;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__82050 = op;
var G__82050__$1 = (((G__82050 instanceof cljs.core.Keyword))?G__82050.fqn:null);
switch (G__82050__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82047_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__82047_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__82047_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82048_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__82048_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__82048_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82049_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__82049_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__82049_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__82296 = cljs.core.rest(exprs);
var G__82297 = (function (){var G__82053 = ctx;
var G__82054 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__82053,G__82054) : sci.impl.interpreter.eval_form.call(null,G__82053,G__82054));
})();
exprs = G__82296;
ret = G__82297;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((function (){var G__82057 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__82058 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__82057,G__82058) : sci.impl.utils.kw_identical_QMARK_.call(null,G__82057,G__82058));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__82298 = ret__$1;
ret = G__82298;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__82060 = arguments.length;
switch (G__82060) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
