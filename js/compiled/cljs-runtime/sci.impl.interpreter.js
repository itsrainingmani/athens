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
var G__67868 = xs;
args__$2 = G__67868;
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
var G__67869 = xs;
args__$2 = G__67869;
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
var len__4789__auto___67870 = arguments.length;
var i__4790__auto___67871 = (0);
while(true){
if((i__4790__auto___67871 < len__4789__auto___67870)){
args__4795__auto__.push((arguments[i__4790__auto___67871]));

var G__67872 = (i__4790__auto___67871 + (1));
i__4790__auto___67871 = G__67872;
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
var G__67873 = ctx__$2;
var G__67874 = rest_let_bindings;
ctx__$1 = G__67873;
let_bindings__$1 = G__67874;
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
var G__67875 = nexprs;
exprs__$1 = G__67875;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq67090){
var G__67091 = cljs.core.first(seq67090);
var seq67090__$1 = cljs.core.next(seq67090);
var G__67092 = cljs.core.first(seq67090__$1);
var seq67090__$2 = cljs.core.next(seq67090__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67091,G__67092,seq67090__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__67099){
var vec__67100 = p__67099;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67100,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67100,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67100,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67100,(3),null);
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
var v = (cljs.core.truth_((function (){var G__67103 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__67104 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67103,G__67104) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67103,G__67104));
})())?(function (){var G__67105 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67105,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__67105;
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
var vec__67109 = libspec;
var seq__67110 = cljs.core.seq(vec__67109);
var first__67111 = cljs.core.first(seq__67110);
var seq__67110__$1 = cljs.core.next(seq__67110);
var lib_name = first__67111;
var opts = seq__67110__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__67115 = opts;
var vec__67118 = G__67115;
var seq__67119 = cljs.core.seq(vec__67118);
var first__67120 = cljs.core.first(seq__67119);
var seq__67119__$1 = cljs.core.next(seq__67119);
var opt_name = first__67120;
var first__67120__$1 = cljs.core.first(seq__67119__$1);
var seq__67119__$2 = cljs.core.next(seq__67119__$1);
var fst_opt = first__67120__$1;
var rst_opts = seq__67119__$2;
var ret__$1 = ret;
var G__67115__$1 = G__67115;
while(true){
var ret__$2 = ret__$1;
var vec__67126 = G__67115__$1;
var seq__67127 = cljs.core.seq(vec__67126);
var first__67128 = cljs.core.first(seq__67127);
var seq__67127__$1 = cljs.core.next(seq__67127);
var opt_name__$1 = first__67128;
var first__67128__$1 = cljs.core.first(seq__67127__$1);
var seq__67127__$2 = cljs.core.next(seq__67127__$1);
var fst_opt__$1 = first__67128__$1;
var rst_opts__$1 = seq__67127__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__67129 = opt_name__$1;
var G__67129__$1 = (((G__67129 instanceof cljs.core.Keyword))?G__67129.fqn:null);
switch (G__67129__$1) {
case "as":
var G__67877 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__67878 = rst_opts__$1;
ret__$1 = G__67877;
G__67115__$1 = G__67878;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__67879 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__67880 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__67879;
G__67115__$1 = G__67880;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__67881 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__67882 = rst_opts__$1;
ret__$1 = G__67881;
G__67115__$1 = G__67882;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67129__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__67130){
var vec__67131 = p__67130;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67131,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__67134){
var map__67135 = p__67134;
var map__67135__$1 = (((((!((map__67135 == null))))?(((((map__67135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67135):map__67135);
var _parsed_libspec = map__67135__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67135__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67135__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67135__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67135__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67135__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__67139 = new cljs.core.Keyword(null,"all","all",892129742);
var G__67140 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67139,G__67140) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67139,G__67140));
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
var vec__67141 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67141,(1),null);
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
var map__67144 = sci.impl.interpreter.parse_libspec(libspec);
var map__67144__$1 = (((((!((map__67144 == null))))?(((((map__67144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67144):map__67144);
var parsed_libspec = map__67144__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67144__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67144__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__67149 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__67149) : load_fn.call(null,G__67149));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__67150 = temp__5733__auto____$2;
var map__67150__$1 = (((((!((map__67150 == null))))?(((((map__67150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67150):map__67150);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67150__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__67153_67883 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__67154_67884 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__67153_67883,G__67154_67884) : sci.impl.interpreter.eval_string_STAR_.call(null,G__67153_67883,G__67154_67884));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e67152){if((e67152 instanceof Error)){
var e_67885 = e67152;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_67885;
} else {
throw e67152;

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
var len__4789__auto___67886 = arguments.length;
var i__4790__auto___67887 = (0);
while(true){
if((i__4790__auto___67887 < len__4789__auto___67886)){
args__4795__auto__.push((arguments[i__4790__auto___67887]));

var G__67888 = (i__4790__auto___67887 + (1));
i__4790__auto___67887 = G__67888;
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
var ret = (function (){var G__67167 = ctx;
var G__67168 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67167,G__67168) : sci.impl.interpreter.interpret.call(null,G__67167,G__67168));
})();
if((ret instanceof cljs.core.Symbol)){
var G__67889 = (function (){var G__67169 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67169,current_libspec);
} else {
return G__67169;
}
})();
var G__67890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__67891 = cljs.core.next(args__$1);
libspecs = G__67889;
current_libspec = G__67890;
args__$1 = G__67891;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__67892 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__67893 = null;
var G__67894 = cljs.core.next(args__$1);
libspecs = G__67892;
current_libspec = G__67893;
args__$1 = G__67894;
continue;
} else {
var G__67895 = (function (){var G__67170 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67170,current_libspec);
} else {
return G__67170;
}
})();
var G__67896 = ret;
var G__67897 = cljs.core.next(args__$1);
libspecs = G__67895;
current_libspec = G__67896;
args__$1 = G__67897;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__67171 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67171,current_libspec);
} else {
return G__67171;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__67159_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__67159_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq67160){
var G__67161 = cljs.core.first(seq67160);
var seq67160__$1 = cljs.core.next(seq67160);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67161,seq67160__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67898 = arguments.length;
var i__4790__auto___67899 = (0);
while(true){
if((i__4790__auto___67899 < len__4789__auto___67898)){
args__4795__auto__.push((arguments[i__4790__auto___67899]));

var G__67900 = (i__4790__auto___67899 + (1));
i__4790__auto___67899 = G__67900;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq67172){
var G__67173 = cljs.core.first(seq67172);
var seq67172__$1 = cljs.core.next(seq67172);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67173,seq67172__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__67174){
var vec__67175 = p__67174;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67175,(0),null);
var map__67178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67175,(1),null);
var map__67178__$1 = (((((!((map__67178 == null))))?(((((map__67178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67178):map__67178);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67178__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67178__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67178__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67180 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67180,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67180,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__67183 = ctx;
var G__67184 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67183,G__67184) : sci.impl.interpreter.interpret.call(null,G__67183,G__67184));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__67185 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__67185__$1 = (((((!((map__67185 == null))))?(((((map__67185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67185):map__67185);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67185__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67185__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67185__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__67193 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__67194 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__67194);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__67193);
}}catch (e67187){if((e67187 instanceof Error)){
var e = e67187;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__67188 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__67189 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67188,G__67189) : sci.impl.interpreter.interpret.call(null,G__67188,G__67189));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67190 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67190,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67190,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e67187;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__67196){
var vec__67197 = p__67196;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67197,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67197,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67200_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67200_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67200_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__67202){
var vec__67203 = p__67202;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67203,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67203,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67203,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67201_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67201_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67201_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__67208,p__67209){
var map__67210 = p__67208;
var map__67210__$1 = (((((!((map__67210 == null))))?(((((map__67210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67210):map__67210);
var ctx = map__67210__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67210__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__67211 = p__67209;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67211,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67211,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67211,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67211,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67207_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67207_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67207_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__67222){
var vec__67223 = p__67222;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67223,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67223,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__67226){
var vec__67227 = p__67226;
var seq__67228 = cljs.core.seq(vec__67227);
var first__67229 = cljs.core.first(seq__67228);
var seq__67228__$1 = cljs.core.next(seq__67228);
var _ = first__67229;
var first__67229__$1 = cljs.core.first(seq__67228__$1);
var seq__67228__$2 = cljs.core.next(seq__67228__$1);
var ns_sym = first__67229__$1;
var exprs = seq__67228__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__67231 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67231,(1),null);
var G__67234_67901 = k;
var G__67234_67902__$1 = (((G__67234_67901 instanceof cljs.core.Keyword))?G__67234_67901.fqn:null);
switch (G__67234_67902__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__67234_67901,G__67234_67902__$1,vec__67231,k,v,ns_sym__$1,vec__67227,seq__67228,first__67229,seq__67228__$1,_,first__67229__$1,seq__67228__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__67234_67901,G__67234_67902__$1,vec__67231,k,v,ns_sym__$1,vec__67227,seq__67228,first__67229,seq__67228__$1,_,first__67229__$1,seq__67228__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67234_67902__$1)].join('')));

}

var G__67904 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__67904;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__67238){
var vec__67239 = p__67238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67239,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67239,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67239,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__67249 = exprs;
var vec__67250 = G__67249;
var seq__67251 = cljs.core.seq(vec__67250);
var first__67252 = cljs.core.first(seq__67251);
var seq__67251__$1 = cljs.core.next(seq__67251);
var expr = first__67252;
var exprs__$1 = seq__67251__$1;
var G__67249__$1 = G__67249;
while(true){
var vec__67257 = G__67249__$1;
var seq__67258 = cljs.core.seq(vec__67257);
var first__67259 = cljs.core.first(seq__67258);
var seq__67258__$1 = cljs.core.next(seq__67258);
var expr__$1 = first__67259;
var exprs__$2 = seq__67258__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e67260){if((e67260 instanceof Error)){
var e = e67260;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e67260;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__67905 = exprs__$3;
G__67249__$1 = G__67905;
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
var G__67460 = cljs.core.count(args);
switch (G__67460) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg67270 = (function (){var G__67461 = ctx;
var G__67462 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67461,G__67462) : sci.impl.interpreter.interpret.call(null,G__67461,G__67462));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg67270) : f.call(null,arg67270));

break;
case (2):
var arg67271 = (function (){var G__67463 = ctx;
var G__67464 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67463,G__67464) : sci.impl.interpreter.interpret.call(null,G__67463,G__67464));
})();
var args__$1 = cljs.core.rest(args);
var arg67272 = (function (){var G__67465 = ctx;
var G__67466 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67465,G__67466) : sci.impl.interpreter.interpret.call(null,G__67465,G__67466));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg67271,arg67272) : f.call(null,arg67271,arg67272));

break;
case (3):
var arg67273 = (function (){var G__67467 = ctx;
var G__67468 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67467,G__67468) : sci.impl.interpreter.interpret.call(null,G__67467,G__67468));
})();
var args__$1 = cljs.core.rest(args);
var arg67274 = (function (){var G__67469 = ctx;
var G__67470 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67469,G__67470) : sci.impl.interpreter.interpret.call(null,G__67469,G__67470));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67275 = (function (){var G__67471 = ctx;
var G__67472 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67471,G__67472) : sci.impl.interpreter.interpret.call(null,G__67471,G__67472));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg67273,arg67274,arg67275) : f.call(null,arg67273,arg67274,arg67275));

break;
case (4):
var arg67276 = (function (){var G__67473 = ctx;
var G__67474 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67473,G__67474) : sci.impl.interpreter.interpret.call(null,G__67473,G__67474));
})();
var args__$1 = cljs.core.rest(args);
var arg67277 = (function (){var G__67475 = ctx;
var G__67476 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67475,G__67476) : sci.impl.interpreter.interpret.call(null,G__67475,G__67476));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67278 = (function (){var G__67477 = ctx;
var G__67478 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67477,G__67478) : sci.impl.interpreter.interpret.call(null,G__67477,G__67478));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67279 = (function (){var G__67479 = ctx;
var G__67480 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67479,G__67480) : sci.impl.interpreter.interpret.call(null,G__67479,G__67480));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg67276,arg67277,arg67278,arg67279) : f.call(null,arg67276,arg67277,arg67278,arg67279));

break;
case (5):
var arg67280 = (function (){var G__67481 = ctx;
var G__67482 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67481,G__67482) : sci.impl.interpreter.interpret.call(null,G__67481,G__67482));
})();
var args__$1 = cljs.core.rest(args);
var arg67281 = (function (){var G__67483 = ctx;
var G__67484 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67483,G__67484) : sci.impl.interpreter.interpret.call(null,G__67483,G__67484));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67282 = (function (){var G__67485 = ctx;
var G__67486 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67485,G__67486) : sci.impl.interpreter.interpret.call(null,G__67485,G__67486));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67283 = (function (){var G__67487 = ctx;
var G__67488 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67487,G__67488) : sci.impl.interpreter.interpret.call(null,G__67487,G__67488));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67284 = (function (){var G__67489 = ctx;
var G__67490 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67489,G__67490) : sci.impl.interpreter.interpret.call(null,G__67489,G__67490));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg67280,arg67281,arg67282,arg67283,arg67284) : f.call(null,arg67280,arg67281,arg67282,arg67283,arg67284));

break;
case (6):
var arg67285 = (function (){var G__67491 = ctx;
var G__67492 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67491,G__67492) : sci.impl.interpreter.interpret.call(null,G__67491,G__67492));
})();
var args__$1 = cljs.core.rest(args);
var arg67286 = (function (){var G__67493 = ctx;
var G__67494 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67493,G__67494) : sci.impl.interpreter.interpret.call(null,G__67493,G__67494));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67287 = (function (){var G__67495 = ctx;
var G__67496 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67495,G__67496) : sci.impl.interpreter.interpret.call(null,G__67495,G__67496));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67288 = (function (){var G__67497 = ctx;
var G__67498 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67497,G__67498) : sci.impl.interpreter.interpret.call(null,G__67497,G__67498));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67289 = (function (){var G__67499 = ctx;
var G__67500 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67499,G__67500) : sci.impl.interpreter.interpret.call(null,G__67499,G__67500));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67290 = (function (){var G__67501 = ctx;
var G__67502 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67501,G__67502) : sci.impl.interpreter.interpret.call(null,G__67501,G__67502));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg67285,arg67286,arg67287,arg67288,arg67289,arg67290) : f.call(null,arg67285,arg67286,arg67287,arg67288,arg67289,arg67290));

break;
case (7):
var arg67291 = (function (){var G__67503 = ctx;
var G__67504 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67503,G__67504) : sci.impl.interpreter.interpret.call(null,G__67503,G__67504));
})();
var args__$1 = cljs.core.rest(args);
var arg67292 = (function (){var G__67505 = ctx;
var G__67506 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67505,G__67506) : sci.impl.interpreter.interpret.call(null,G__67505,G__67506));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67293 = (function (){var G__67507 = ctx;
var G__67508 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67507,G__67508) : sci.impl.interpreter.interpret.call(null,G__67507,G__67508));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67294 = (function (){var G__67509 = ctx;
var G__67510 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67509,G__67510) : sci.impl.interpreter.interpret.call(null,G__67509,G__67510));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67295 = (function (){var G__67511 = ctx;
var G__67512 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67511,G__67512) : sci.impl.interpreter.interpret.call(null,G__67511,G__67512));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67296 = (function (){var G__67513 = ctx;
var G__67514 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67513,G__67514) : sci.impl.interpreter.interpret.call(null,G__67513,G__67514));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67297 = (function (){var G__67515 = ctx;
var G__67516 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67515,G__67516) : sci.impl.interpreter.interpret.call(null,G__67515,G__67516));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg67291,arg67292,arg67293,arg67294,arg67295,arg67296,arg67297) : f.call(null,arg67291,arg67292,arg67293,arg67294,arg67295,arg67296,arg67297));

break;
case (8):
var arg67298 = (function (){var G__67517 = ctx;
var G__67518 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67517,G__67518) : sci.impl.interpreter.interpret.call(null,G__67517,G__67518));
})();
var args__$1 = cljs.core.rest(args);
var arg67299 = (function (){var G__67519 = ctx;
var G__67520 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67519,G__67520) : sci.impl.interpreter.interpret.call(null,G__67519,G__67520));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67300 = (function (){var G__67521 = ctx;
var G__67522 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67521,G__67522) : sci.impl.interpreter.interpret.call(null,G__67521,G__67522));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67301 = (function (){var G__67523 = ctx;
var G__67524 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67523,G__67524) : sci.impl.interpreter.interpret.call(null,G__67523,G__67524));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67302 = (function (){var G__67525 = ctx;
var G__67526 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67525,G__67526) : sci.impl.interpreter.interpret.call(null,G__67525,G__67526));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67303 = (function (){var G__67527 = ctx;
var G__67528 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67527,G__67528) : sci.impl.interpreter.interpret.call(null,G__67527,G__67528));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67304 = (function (){var G__67529 = ctx;
var G__67530 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67529,G__67530) : sci.impl.interpreter.interpret.call(null,G__67529,G__67530));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67305 = (function (){var G__67531 = ctx;
var G__67532 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67531,G__67532) : sci.impl.interpreter.interpret.call(null,G__67531,G__67532));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg67298,arg67299,arg67300,arg67301,arg67302,arg67303,arg67304,arg67305) : f.call(null,arg67298,arg67299,arg67300,arg67301,arg67302,arg67303,arg67304,arg67305));

break;
case (9):
var arg67306 = (function (){var G__67533 = ctx;
var G__67534 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67533,G__67534) : sci.impl.interpreter.interpret.call(null,G__67533,G__67534));
})();
var args__$1 = cljs.core.rest(args);
var arg67307 = (function (){var G__67535 = ctx;
var G__67536 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67535,G__67536) : sci.impl.interpreter.interpret.call(null,G__67535,G__67536));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67308 = (function (){var G__67537 = ctx;
var G__67538 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67537,G__67538) : sci.impl.interpreter.interpret.call(null,G__67537,G__67538));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67309 = (function (){var G__67539 = ctx;
var G__67540 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67539,G__67540) : sci.impl.interpreter.interpret.call(null,G__67539,G__67540));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67310 = (function (){var G__67541 = ctx;
var G__67542 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67541,G__67542) : sci.impl.interpreter.interpret.call(null,G__67541,G__67542));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67311 = (function (){var G__67543 = ctx;
var G__67544 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67543,G__67544) : sci.impl.interpreter.interpret.call(null,G__67543,G__67544));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67312 = (function (){var G__67545 = ctx;
var G__67546 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67545,G__67546) : sci.impl.interpreter.interpret.call(null,G__67545,G__67546));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67313 = (function (){var G__67547 = ctx;
var G__67548 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67547,G__67548) : sci.impl.interpreter.interpret.call(null,G__67547,G__67548));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67314 = (function (){var G__67549 = ctx;
var G__67550 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67549,G__67550) : sci.impl.interpreter.interpret.call(null,G__67549,G__67550));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg67306,arg67307,arg67308,arg67309,arg67310,arg67311,arg67312,arg67313,arg67314) : f.call(null,arg67306,arg67307,arg67308,arg67309,arg67310,arg67311,arg67312,arg67313,arg67314));

break;
case (10):
var arg67315 = (function (){var G__67551 = ctx;
var G__67552 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67551,G__67552) : sci.impl.interpreter.interpret.call(null,G__67551,G__67552));
})();
var args__$1 = cljs.core.rest(args);
var arg67316 = (function (){var G__67553 = ctx;
var G__67554 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67553,G__67554) : sci.impl.interpreter.interpret.call(null,G__67553,G__67554));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67317 = (function (){var G__67555 = ctx;
var G__67556 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67555,G__67556) : sci.impl.interpreter.interpret.call(null,G__67555,G__67556));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67318 = (function (){var G__67557 = ctx;
var G__67558 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67557,G__67558) : sci.impl.interpreter.interpret.call(null,G__67557,G__67558));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67319 = (function (){var G__67559 = ctx;
var G__67560 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67559,G__67560) : sci.impl.interpreter.interpret.call(null,G__67559,G__67560));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67320 = (function (){var G__67561 = ctx;
var G__67562 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67561,G__67562) : sci.impl.interpreter.interpret.call(null,G__67561,G__67562));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67321 = (function (){var G__67563 = ctx;
var G__67564 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67563,G__67564) : sci.impl.interpreter.interpret.call(null,G__67563,G__67564));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67322 = (function (){var G__67565 = ctx;
var G__67566 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67565,G__67566) : sci.impl.interpreter.interpret.call(null,G__67565,G__67566));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67323 = (function (){var G__67567 = ctx;
var G__67568 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67567,G__67568) : sci.impl.interpreter.interpret.call(null,G__67567,G__67568));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67324 = (function (){var G__67569 = ctx;
var G__67570 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67569,G__67570) : sci.impl.interpreter.interpret.call(null,G__67569,G__67570));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg67315,arg67316,arg67317,arg67318,arg67319,arg67320,arg67321,arg67322,arg67323,arg67324) : f.call(null,arg67315,arg67316,arg67317,arg67318,arg67319,arg67320,arg67321,arg67322,arg67323,arg67324));

break;
case (11):
var arg67325 = (function (){var G__67571 = ctx;
var G__67572 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67571,G__67572) : sci.impl.interpreter.interpret.call(null,G__67571,G__67572));
})();
var args__$1 = cljs.core.rest(args);
var arg67326 = (function (){var G__67573 = ctx;
var G__67574 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67573,G__67574) : sci.impl.interpreter.interpret.call(null,G__67573,G__67574));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67327 = (function (){var G__67575 = ctx;
var G__67576 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67575,G__67576) : sci.impl.interpreter.interpret.call(null,G__67575,G__67576));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67328 = (function (){var G__67577 = ctx;
var G__67578 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67577,G__67578) : sci.impl.interpreter.interpret.call(null,G__67577,G__67578));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67329 = (function (){var G__67579 = ctx;
var G__67580 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67579,G__67580) : sci.impl.interpreter.interpret.call(null,G__67579,G__67580));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67330 = (function (){var G__67581 = ctx;
var G__67582 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67581,G__67582) : sci.impl.interpreter.interpret.call(null,G__67581,G__67582));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67331 = (function (){var G__67583 = ctx;
var G__67584 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67583,G__67584) : sci.impl.interpreter.interpret.call(null,G__67583,G__67584));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67332 = (function (){var G__67585 = ctx;
var G__67586 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67585,G__67586) : sci.impl.interpreter.interpret.call(null,G__67585,G__67586));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67333 = (function (){var G__67587 = ctx;
var G__67588 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67587,G__67588) : sci.impl.interpreter.interpret.call(null,G__67587,G__67588));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67334 = (function (){var G__67589 = ctx;
var G__67590 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67589,G__67590) : sci.impl.interpreter.interpret.call(null,G__67589,G__67590));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67335 = (function (){var G__67591 = ctx;
var G__67592 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67591,G__67592) : sci.impl.interpreter.interpret.call(null,G__67591,G__67592));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg67325,arg67326,arg67327,arg67328,arg67329,arg67330,arg67331,arg67332,arg67333,arg67334,arg67335) : f.call(null,arg67325,arg67326,arg67327,arg67328,arg67329,arg67330,arg67331,arg67332,arg67333,arg67334,arg67335));

break;
case (12):
var arg67336 = (function (){var G__67593 = ctx;
var G__67594 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67593,G__67594) : sci.impl.interpreter.interpret.call(null,G__67593,G__67594));
})();
var args__$1 = cljs.core.rest(args);
var arg67337 = (function (){var G__67595 = ctx;
var G__67596 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67595,G__67596) : sci.impl.interpreter.interpret.call(null,G__67595,G__67596));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67338 = (function (){var G__67597 = ctx;
var G__67598 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67597,G__67598) : sci.impl.interpreter.interpret.call(null,G__67597,G__67598));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67339 = (function (){var G__67599 = ctx;
var G__67600 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67599,G__67600) : sci.impl.interpreter.interpret.call(null,G__67599,G__67600));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67340 = (function (){var G__67601 = ctx;
var G__67602 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67601,G__67602) : sci.impl.interpreter.interpret.call(null,G__67601,G__67602));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67341 = (function (){var G__67603 = ctx;
var G__67604 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67603,G__67604) : sci.impl.interpreter.interpret.call(null,G__67603,G__67604));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67342 = (function (){var G__67605 = ctx;
var G__67606 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67605,G__67606) : sci.impl.interpreter.interpret.call(null,G__67605,G__67606));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67343 = (function (){var G__67607 = ctx;
var G__67608 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67607,G__67608) : sci.impl.interpreter.interpret.call(null,G__67607,G__67608));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67344 = (function (){var G__67609 = ctx;
var G__67610 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67609,G__67610) : sci.impl.interpreter.interpret.call(null,G__67609,G__67610));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67345 = (function (){var G__67611 = ctx;
var G__67612 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67611,G__67612) : sci.impl.interpreter.interpret.call(null,G__67611,G__67612));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67346 = (function (){var G__67613 = ctx;
var G__67614 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67613,G__67614) : sci.impl.interpreter.interpret.call(null,G__67613,G__67614));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67347 = (function (){var G__67615 = ctx;
var G__67616 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67615,G__67616) : sci.impl.interpreter.interpret.call(null,G__67615,G__67616));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg67336,arg67337,arg67338,arg67339,arg67340,arg67341,arg67342,arg67343,arg67344,arg67345,arg67346,arg67347) : f.call(null,arg67336,arg67337,arg67338,arg67339,arg67340,arg67341,arg67342,arg67343,arg67344,arg67345,arg67346,arg67347));

break;
case (13):
var arg67348 = (function (){var G__67617 = ctx;
var G__67618 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67617,G__67618) : sci.impl.interpreter.interpret.call(null,G__67617,G__67618));
})();
var args__$1 = cljs.core.rest(args);
var arg67349 = (function (){var G__67619 = ctx;
var G__67620 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67619,G__67620) : sci.impl.interpreter.interpret.call(null,G__67619,G__67620));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67350 = (function (){var G__67621 = ctx;
var G__67622 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67621,G__67622) : sci.impl.interpreter.interpret.call(null,G__67621,G__67622));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67351 = (function (){var G__67623 = ctx;
var G__67624 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67623,G__67624) : sci.impl.interpreter.interpret.call(null,G__67623,G__67624));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67352 = (function (){var G__67625 = ctx;
var G__67626 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67625,G__67626) : sci.impl.interpreter.interpret.call(null,G__67625,G__67626));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67353 = (function (){var G__67627 = ctx;
var G__67628 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67627,G__67628) : sci.impl.interpreter.interpret.call(null,G__67627,G__67628));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67354 = (function (){var G__67629 = ctx;
var G__67630 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67629,G__67630) : sci.impl.interpreter.interpret.call(null,G__67629,G__67630));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67355 = (function (){var G__67631 = ctx;
var G__67632 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67631,G__67632) : sci.impl.interpreter.interpret.call(null,G__67631,G__67632));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67356 = (function (){var G__67633 = ctx;
var G__67634 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67633,G__67634) : sci.impl.interpreter.interpret.call(null,G__67633,G__67634));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67357 = (function (){var G__67635 = ctx;
var G__67636 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67635,G__67636) : sci.impl.interpreter.interpret.call(null,G__67635,G__67636));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67358 = (function (){var G__67637 = ctx;
var G__67638 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67637,G__67638) : sci.impl.interpreter.interpret.call(null,G__67637,G__67638));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67359 = (function (){var G__67639 = ctx;
var G__67640 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67639,G__67640) : sci.impl.interpreter.interpret.call(null,G__67639,G__67640));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67360 = (function (){var G__67641 = ctx;
var G__67642 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67641,G__67642) : sci.impl.interpreter.interpret.call(null,G__67641,G__67642));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg67348,arg67349,arg67350,arg67351,arg67352,arg67353,arg67354,arg67355,arg67356,arg67357,arg67358,arg67359,arg67360) : f.call(null,arg67348,arg67349,arg67350,arg67351,arg67352,arg67353,arg67354,arg67355,arg67356,arg67357,arg67358,arg67359,arg67360));

break;
case (14):
var arg67361 = (function (){var G__67643 = ctx;
var G__67644 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67643,G__67644) : sci.impl.interpreter.interpret.call(null,G__67643,G__67644));
})();
var args__$1 = cljs.core.rest(args);
var arg67362 = (function (){var G__67645 = ctx;
var G__67646 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67645,G__67646) : sci.impl.interpreter.interpret.call(null,G__67645,G__67646));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67363 = (function (){var G__67647 = ctx;
var G__67648 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67647,G__67648) : sci.impl.interpreter.interpret.call(null,G__67647,G__67648));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67364 = (function (){var G__67649 = ctx;
var G__67650 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67649,G__67650) : sci.impl.interpreter.interpret.call(null,G__67649,G__67650));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67365 = (function (){var G__67651 = ctx;
var G__67652 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67651,G__67652) : sci.impl.interpreter.interpret.call(null,G__67651,G__67652));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67366 = (function (){var G__67653 = ctx;
var G__67654 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67653,G__67654) : sci.impl.interpreter.interpret.call(null,G__67653,G__67654));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67367 = (function (){var G__67655 = ctx;
var G__67656 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67655,G__67656) : sci.impl.interpreter.interpret.call(null,G__67655,G__67656));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67368 = (function (){var G__67657 = ctx;
var G__67658 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67657,G__67658) : sci.impl.interpreter.interpret.call(null,G__67657,G__67658));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67369 = (function (){var G__67659 = ctx;
var G__67660 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67659,G__67660) : sci.impl.interpreter.interpret.call(null,G__67659,G__67660));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67370 = (function (){var G__67661 = ctx;
var G__67662 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67661,G__67662) : sci.impl.interpreter.interpret.call(null,G__67661,G__67662));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67371 = (function (){var G__67663 = ctx;
var G__67664 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67663,G__67664) : sci.impl.interpreter.interpret.call(null,G__67663,G__67664));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67372 = (function (){var G__67665 = ctx;
var G__67666 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67665,G__67666) : sci.impl.interpreter.interpret.call(null,G__67665,G__67666));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67373 = (function (){var G__67667 = ctx;
var G__67668 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67667,G__67668) : sci.impl.interpreter.interpret.call(null,G__67667,G__67668));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67374 = (function (){var G__67669 = ctx;
var G__67670 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67669,G__67670) : sci.impl.interpreter.interpret.call(null,G__67669,G__67670));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg67361,arg67362,arg67363,arg67364,arg67365,arg67366,arg67367,arg67368,arg67369,arg67370,arg67371,arg67372,arg67373,arg67374) : f.call(null,arg67361,arg67362,arg67363,arg67364,arg67365,arg67366,arg67367,arg67368,arg67369,arg67370,arg67371,arg67372,arg67373,arg67374));

break;
case (15):
var arg67375 = (function (){var G__67671 = ctx;
var G__67672 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67671,G__67672) : sci.impl.interpreter.interpret.call(null,G__67671,G__67672));
})();
var args__$1 = cljs.core.rest(args);
var arg67376 = (function (){var G__67673 = ctx;
var G__67674 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67673,G__67674) : sci.impl.interpreter.interpret.call(null,G__67673,G__67674));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67377 = (function (){var G__67675 = ctx;
var G__67676 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67675,G__67676) : sci.impl.interpreter.interpret.call(null,G__67675,G__67676));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67378 = (function (){var G__67677 = ctx;
var G__67678 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67677,G__67678) : sci.impl.interpreter.interpret.call(null,G__67677,G__67678));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67379 = (function (){var G__67679 = ctx;
var G__67680 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67679,G__67680) : sci.impl.interpreter.interpret.call(null,G__67679,G__67680));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67380 = (function (){var G__67681 = ctx;
var G__67682 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67681,G__67682) : sci.impl.interpreter.interpret.call(null,G__67681,G__67682));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67381 = (function (){var G__67683 = ctx;
var G__67684 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67683,G__67684) : sci.impl.interpreter.interpret.call(null,G__67683,G__67684));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67382 = (function (){var G__67685 = ctx;
var G__67686 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67685,G__67686) : sci.impl.interpreter.interpret.call(null,G__67685,G__67686));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67383 = (function (){var G__67687 = ctx;
var G__67688 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67687,G__67688) : sci.impl.interpreter.interpret.call(null,G__67687,G__67688));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67384 = (function (){var G__67689 = ctx;
var G__67690 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67689,G__67690) : sci.impl.interpreter.interpret.call(null,G__67689,G__67690));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67385 = (function (){var G__67691 = ctx;
var G__67692 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67691,G__67692) : sci.impl.interpreter.interpret.call(null,G__67691,G__67692));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67386 = (function (){var G__67693 = ctx;
var G__67694 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67693,G__67694) : sci.impl.interpreter.interpret.call(null,G__67693,G__67694));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67387 = (function (){var G__67695 = ctx;
var G__67696 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67695,G__67696) : sci.impl.interpreter.interpret.call(null,G__67695,G__67696));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67388 = (function (){var G__67697 = ctx;
var G__67698 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67697,G__67698) : sci.impl.interpreter.interpret.call(null,G__67697,G__67698));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67389 = (function (){var G__67699 = ctx;
var G__67700 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67699,G__67700) : sci.impl.interpreter.interpret.call(null,G__67699,G__67700));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg67375,arg67376,arg67377,arg67378,arg67379,arg67380,arg67381,arg67382,arg67383,arg67384,arg67385,arg67386,arg67387,arg67388,arg67389) : f.call(null,arg67375,arg67376,arg67377,arg67378,arg67379,arg67380,arg67381,arg67382,arg67383,arg67384,arg67385,arg67386,arg67387,arg67388,arg67389));

break;
case (16):
var arg67390 = (function (){var G__67701 = ctx;
var G__67702 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67701,G__67702) : sci.impl.interpreter.interpret.call(null,G__67701,G__67702));
})();
var args__$1 = cljs.core.rest(args);
var arg67391 = (function (){var G__67703 = ctx;
var G__67704 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67703,G__67704) : sci.impl.interpreter.interpret.call(null,G__67703,G__67704));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67392 = (function (){var G__67705 = ctx;
var G__67706 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67705,G__67706) : sci.impl.interpreter.interpret.call(null,G__67705,G__67706));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67393 = (function (){var G__67707 = ctx;
var G__67708 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67707,G__67708) : sci.impl.interpreter.interpret.call(null,G__67707,G__67708));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67394 = (function (){var G__67709 = ctx;
var G__67710 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67709,G__67710) : sci.impl.interpreter.interpret.call(null,G__67709,G__67710));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67395 = (function (){var G__67711 = ctx;
var G__67712 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67711,G__67712) : sci.impl.interpreter.interpret.call(null,G__67711,G__67712));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67396 = (function (){var G__67713 = ctx;
var G__67714 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67713,G__67714) : sci.impl.interpreter.interpret.call(null,G__67713,G__67714));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67397 = (function (){var G__67715 = ctx;
var G__67716 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67715,G__67716) : sci.impl.interpreter.interpret.call(null,G__67715,G__67716));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67398 = (function (){var G__67717 = ctx;
var G__67718 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67717,G__67718) : sci.impl.interpreter.interpret.call(null,G__67717,G__67718));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67399 = (function (){var G__67719 = ctx;
var G__67720 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67719,G__67720) : sci.impl.interpreter.interpret.call(null,G__67719,G__67720));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67400 = (function (){var G__67721 = ctx;
var G__67722 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67721,G__67722) : sci.impl.interpreter.interpret.call(null,G__67721,G__67722));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67401 = (function (){var G__67723 = ctx;
var G__67724 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67723,G__67724) : sci.impl.interpreter.interpret.call(null,G__67723,G__67724));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67402 = (function (){var G__67725 = ctx;
var G__67726 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67725,G__67726) : sci.impl.interpreter.interpret.call(null,G__67725,G__67726));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67403 = (function (){var G__67727 = ctx;
var G__67728 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67727,G__67728) : sci.impl.interpreter.interpret.call(null,G__67727,G__67728));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67404 = (function (){var G__67729 = ctx;
var G__67730 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67729,G__67730) : sci.impl.interpreter.interpret.call(null,G__67729,G__67730));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67405 = (function (){var G__67731 = ctx;
var G__67732 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67731,G__67732) : sci.impl.interpreter.interpret.call(null,G__67731,G__67732));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg67390,arg67391,arg67392,arg67393,arg67394,arg67395,arg67396,arg67397,arg67398,arg67399,arg67400,arg67401,arg67402,arg67403,arg67404,arg67405) : f.call(null,arg67390,arg67391,arg67392,arg67393,arg67394,arg67395,arg67396,arg67397,arg67398,arg67399,arg67400,arg67401,arg67402,arg67403,arg67404,arg67405));

break;
case (17):
var arg67406 = (function (){var G__67733 = ctx;
var G__67734 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67733,G__67734) : sci.impl.interpreter.interpret.call(null,G__67733,G__67734));
})();
var args__$1 = cljs.core.rest(args);
var arg67407 = (function (){var G__67735 = ctx;
var G__67736 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67735,G__67736) : sci.impl.interpreter.interpret.call(null,G__67735,G__67736));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67408 = (function (){var G__67737 = ctx;
var G__67738 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67737,G__67738) : sci.impl.interpreter.interpret.call(null,G__67737,G__67738));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67409 = (function (){var G__67739 = ctx;
var G__67740 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67739,G__67740) : sci.impl.interpreter.interpret.call(null,G__67739,G__67740));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67410 = (function (){var G__67741 = ctx;
var G__67742 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67741,G__67742) : sci.impl.interpreter.interpret.call(null,G__67741,G__67742));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67411 = (function (){var G__67743 = ctx;
var G__67744 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67743,G__67744) : sci.impl.interpreter.interpret.call(null,G__67743,G__67744));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67412 = (function (){var G__67745 = ctx;
var G__67746 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67745,G__67746) : sci.impl.interpreter.interpret.call(null,G__67745,G__67746));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67413 = (function (){var G__67747 = ctx;
var G__67748 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67747,G__67748) : sci.impl.interpreter.interpret.call(null,G__67747,G__67748));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67414 = (function (){var G__67749 = ctx;
var G__67750 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67749,G__67750) : sci.impl.interpreter.interpret.call(null,G__67749,G__67750));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67415 = (function (){var G__67751 = ctx;
var G__67752 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67751,G__67752) : sci.impl.interpreter.interpret.call(null,G__67751,G__67752));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67416 = (function (){var G__67753 = ctx;
var G__67754 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67753,G__67754) : sci.impl.interpreter.interpret.call(null,G__67753,G__67754));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67417 = (function (){var G__67755 = ctx;
var G__67756 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67755,G__67756) : sci.impl.interpreter.interpret.call(null,G__67755,G__67756));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67418 = (function (){var G__67757 = ctx;
var G__67758 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67757,G__67758) : sci.impl.interpreter.interpret.call(null,G__67757,G__67758));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67419 = (function (){var G__67759 = ctx;
var G__67760 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67759,G__67760) : sci.impl.interpreter.interpret.call(null,G__67759,G__67760));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67420 = (function (){var G__67761 = ctx;
var G__67762 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67761,G__67762) : sci.impl.interpreter.interpret.call(null,G__67761,G__67762));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67421 = (function (){var G__67763 = ctx;
var G__67764 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67763,G__67764) : sci.impl.interpreter.interpret.call(null,G__67763,G__67764));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67422 = (function (){var G__67765 = ctx;
var G__67766 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67765,G__67766) : sci.impl.interpreter.interpret.call(null,G__67765,G__67766));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg67406,arg67407,arg67408,arg67409,arg67410,arg67411,arg67412,arg67413,arg67414,arg67415,arg67416,arg67417,arg67418,arg67419,arg67420,arg67421,arg67422) : f.call(null,arg67406,arg67407,arg67408,arg67409,arg67410,arg67411,arg67412,arg67413,arg67414,arg67415,arg67416,arg67417,arg67418,arg67419,arg67420,arg67421,arg67422));

break;
case (18):
var arg67423 = (function (){var G__67767 = ctx;
var G__67768 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67767,G__67768) : sci.impl.interpreter.interpret.call(null,G__67767,G__67768));
})();
var args__$1 = cljs.core.rest(args);
var arg67424 = (function (){var G__67769 = ctx;
var G__67770 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67769,G__67770) : sci.impl.interpreter.interpret.call(null,G__67769,G__67770));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67425 = (function (){var G__67771 = ctx;
var G__67772 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67771,G__67772) : sci.impl.interpreter.interpret.call(null,G__67771,G__67772));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67426 = (function (){var G__67773 = ctx;
var G__67774 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67773,G__67774) : sci.impl.interpreter.interpret.call(null,G__67773,G__67774));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67427 = (function (){var G__67775 = ctx;
var G__67776 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67775,G__67776) : sci.impl.interpreter.interpret.call(null,G__67775,G__67776));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67428 = (function (){var G__67777 = ctx;
var G__67778 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67777,G__67778) : sci.impl.interpreter.interpret.call(null,G__67777,G__67778));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67429 = (function (){var G__67779 = ctx;
var G__67780 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67779,G__67780) : sci.impl.interpreter.interpret.call(null,G__67779,G__67780));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67430 = (function (){var G__67781 = ctx;
var G__67782 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67781,G__67782) : sci.impl.interpreter.interpret.call(null,G__67781,G__67782));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67431 = (function (){var G__67783 = ctx;
var G__67784 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67783,G__67784) : sci.impl.interpreter.interpret.call(null,G__67783,G__67784));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67432 = (function (){var G__67785 = ctx;
var G__67786 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67785,G__67786) : sci.impl.interpreter.interpret.call(null,G__67785,G__67786));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67433 = (function (){var G__67787 = ctx;
var G__67788 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67787,G__67788) : sci.impl.interpreter.interpret.call(null,G__67787,G__67788));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67434 = (function (){var G__67789 = ctx;
var G__67790 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67789,G__67790) : sci.impl.interpreter.interpret.call(null,G__67789,G__67790));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67435 = (function (){var G__67791 = ctx;
var G__67792 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67791,G__67792) : sci.impl.interpreter.interpret.call(null,G__67791,G__67792));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67436 = (function (){var G__67793 = ctx;
var G__67794 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67793,G__67794) : sci.impl.interpreter.interpret.call(null,G__67793,G__67794));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67437 = (function (){var G__67795 = ctx;
var G__67796 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67795,G__67796) : sci.impl.interpreter.interpret.call(null,G__67795,G__67796));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67438 = (function (){var G__67797 = ctx;
var G__67798 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67797,G__67798) : sci.impl.interpreter.interpret.call(null,G__67797,G__67798));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67439 = (function (){var G__67799 = ctx;
var G__67800 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67799,G__67800) : sci.impl.interpreter.interpret.call(null,G__67799,G__67800));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67440 = (function (){var G__67801 = ctx;
var G__67802 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67801,G__67802) : sci.impl.interpreter.interpret.call(null,G__67801,G__67802));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg67423,arg67424,arg67425,arg67426,arg67427,arg67428,arg67429,arg67430,arg67431,arg67432,arg67433,arg67434,arg67435,arg67436,arg67437,arg67438,arg67439,arg67440) : f.call(null,arg67423,arg67424,arg67425,arg67426,arg67427,arg67428,arg67429,arg67430,arg67431,arg67432,arg67433,arg67434,arg67435,arg67436,arg67437,arg67438,arg67439,arg67440));

break;
case (19):
var arg67441 = (function (){var G__67803 = ctx;
var G__67804 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67803,G__67804) : sci.impl.interpreter.interpret.call(null,G__67803,G__67804));
})();
var args__$1 = cljs.core.rest(args);
var arg67442 = (function (){var G__67805 = ctx;
var G__67806 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67805,G__67806) : sci.impl.interpreter.interpret.call(null,G__67805,G__67806));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67443 = (function (){var G__67807 = ctx;
var G__67808 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67807,G__67808) : sci.impl.interpreter.interpret.call(null,G__67807,G__67808));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67444 = (function (){var G__67809 = ctx;
var G__67810 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67809,G__67810) : sci.impl.interpreter.interpret.call(null,G__67809,G__67810));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67445 = (function (){var G__67811 = ctx;
var G__67812 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67811,G__67812) : sci.impl.interpreter.interpret.call(null,G__67811,G__67812));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67446 = (function (){var G__67813 = ctx;
var G__67814 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67813,G__67814) : sci.impl.interpreter.interpret.call(null,G__67813,G__67814));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67447 = (function (){var G__67815 = ctx;
var G__67816 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67815,G__67816) : sci.impl.interpreter.interpret.call(null,G__67815,G__67816));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67448 = (function (){var G__67817 = ctx;
var G__67818 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67817,G__67818) : sci.impl.interpreter.interpret.call(null,G__67817,G__67818));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67449 = (function (){var G__67819 = ctx;
var G__67820 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67819,G__67820) : sci.impl.interpreter.interpret.call(null,G__67819,G__67820));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67450 = (function (){var G__67821 = ctx;
var G__67822 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67821,G__67822) : sci.impl.interpreter.interpret.call(null,G__67821,G__67822));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67451 = (function (){var G__67823 = ctx;
var G__67824 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67823,G__67824) : sci.impl.interpreter.interpret.call(null,G__67823,G__67824));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67452 = (function (){var G__67825 = ctx;
var G__67826 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67825,G__67826) : sci.impl.interpreter.interpret.call(null,G__67825,G__67826));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67453 = (function (){var G__67827 = ctx;
var G__67828 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67827,G__67828) : sci.impl.interpreter.interpret.call(null,G__67827,G__67828));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67454 = (function (){var G__67829 = ctx;
var G__67830 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67829,G__67830) : sci.impl.interpreter.interpret.call(null,G__67829,G__67830));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67455 = (function (){var G__67831 = ctx;
var G__67832 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67831,G__67832) : sci.impl.interpreter.interpret.call(null,G__67831,G__67832));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67456 = (function (){var G__67833 = ctx;
var G__67834 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67833,G__67834) : sci.impl.interpreter.interpret.call(null,G__67833,G__67834));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67457 = (function (){var G__67835 = ctx;
var G__67836 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67835,G__67836) : sci.impl.interpreter.interpret.call(null,G__67835,G__67836));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67458 = (function (){var G__67837 = ctx;
var G__67838 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67837,G__67838) : sci.impl.interpreter.interpret.call(null,G__67837,G__67838));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg67459 = (function (){var G__67839 = ctx;
var G__67840 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67839,G__67840) : sci.impl.interpreter.interpret.call(null,G__67839,G__67840));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg67441,arg67442,arg67443,arg67444,arg67445,arg67446,arg67447,arg67448,arg67449,arg67450,arg67451,arg67452,arg67453,arg67454,arg67455,arg67456,arg67457,arg67458,arg67459) : f.call(null,arg67441,arg67442,arg67443,arg67444,arg67445,arg67446,arg67447,arg67448,arg67449,arg67450,arg67451,arg67452,arg67453,arg67454,arg67455,arg67456,arg67457,arg67458,arg67459));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__67841 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__67841)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__67841)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__67841)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__67841)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__67841)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__67841)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__67842 = ctx;
var G__67843 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67842,G__67843) : sci.impl.interpreter.interpret.call(null,G__67842,G__67843));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__67841)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__67841)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__67841)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__67841)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__67841)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__67841)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__67841)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__67841)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__67841)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__67844 = ctx;
var G__67845 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67844,G__67845) : sci.impl.interpreter.interpret.call(null,G__67844,G__67845));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__67841)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__67841)){
return (new cljs.core.LazySeq(null,(function (){var G__67846 = ctx;
var G__67847 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67846,G__67847) : sci.impl.interpreter.interpret.call(null,G__67846,G__67847));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__67841)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__67841)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__67841)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__67841)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67841)].join('')));

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
if(cljs.core.truth_((function (){var G__67849 = op;
var G__67850 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67849,G__67850) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67849,G__67850));
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
}catch (e67848){if((e67848 instanceof Error)){
var e = e67848;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e67848;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__67857 = op;
var G__67857__$1 = (((G__67857 instanceof cljs.core.Keyword))?G__67857.fqn:null);
switch (G__67857__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67854_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67854_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67854_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67855_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67855_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67855_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67856_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67856_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67856_SHARP_));
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
var G__67908 = cljs.core.rest(exprs);
var G__67909 = (function (){var G__67860 = ctx;
var G__67861 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__67860,G__67861) : sci.impl.interpreter.eval_form.call(null,G__67860,G__67861));
})();
exprs = G__67908;
ret = G__67909;
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
if(cljs.core.truth_((function (){var G__67864 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__67865 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67864,G__67865) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67864,G__67865));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__67910 = ret__$1;
ret = G__67910;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__67867 = arguments.length;
switch (G__67867) {
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
