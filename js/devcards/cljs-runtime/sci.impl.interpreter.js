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
var G__60684 = xs;
args__$2 = G__60684;
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
var G__60685 = xs;
args__$2 = G__60685;
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
var len__4789__auto___60686 = arguments.length;
var i__4790__auto___60687 = (0);
while(true){
if((i__4790__auto___60687 < len__4789__auto___60686)){
args__4795__auto__.push((arguments[i__4790__auto___60687]));

var G__60688 = (i__4790__auto___60687 + (1));
i__4790__auto___60687 = G__60688;
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
var G__60689 = ctx__$2;
var G__60690 = rest_let_bindings;
ctx__$1 = G__60689;
let_bindings__$1 = G__60690;
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
var G__60691 = nexprs;
exprs__$1 = G__60691;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59911){
var G__59913 = cljs.core.first(seq59911);
var seq59911__$1 = cljs.core.next(seq59911);
var G__59914 = cljs.core.first(seq59911__$1);
var seq59911__$2 = cljs.core.next(seq59911__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59913,G__59914,seq59911__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59921){
var vec__59922 = p__59921;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59922,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59922,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59922,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59922,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59925 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59926 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59925,G__59926) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59925,G__59926));
})())?(function (){var G__59927 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59927,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59927;
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
var vec__59928 = libspec;
var seq__59929 = cljs.core.seq(vec__59928);
var first__59930 = cljs.core.first(seq__59929);
var seq__59929__$1 = cljs.core.next(seq__59929);
var lib_name = first__59930;
var opts = seq__59929__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59934 = opts;
var vec__59935 = G__59934;
var seq__59936 = cljs.core.seq(vec__59935);
var first__59937 = cljs.core.first(seq__59936);
var seq__59936__$1 = cljs.core.next(seq__59936);
var opt_name = first__59937;
var first__59937__$1 = cljs.core.first(seq__59936__$1);
var seq__59936__$2 = cljs.core.next(seq__59936__$1);
var fst_opt = first__59937__$1;
var rst_opts = seq__59936__$2;
var ret__$1 = ret;
var G__59934__$1 = G__59934;
while(true){
var ret__$2 = ret__$1;
var vec__59945 = G__59934__$1;
var seq__59946 = cljs.core.seq(vec__59945);
var first__59947 = cljs.core.first(seq__59946);
var seq__59946__$1 = cljs.core.next(seq__59946);
var opt_name__$1 = first__59947;
var first__59947__$1 = cljs.core.first(seq__59946__$1);
var seq__59946__$2 = cljs.core.next(seq__59946__$1);
var fst_opt__$1 = first__59947__$1;
var rst_opts__$1 = seq__59946__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59948 = opt_name__$1;
var G__59948__$1 = (((G__59948 instanceof cljs.core.Keyword))?G__59948.fqn:null);
switch (G__59948__$1) {
case "as":
var G__60693 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__60694 = rst_opts__$1;
ret__$1 = G__60693;
G__59934__$1 = G__60694;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__60695 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__60696 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__60695;
G__59934__$1 = G__60696;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__60697 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__60698 = rst_opts__$1;
ret__$1 = G__60697;
G__59934__$1 = G__60698;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59948__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59953){
var vec__59954 = p__59953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59954,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59954,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59957){
var map__59958 = p__59957;
var map__59958__$1 = (((((!((map__59958 == null))))?(((((map__59958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59958):map__59958);
var _parsed_libspec = map__59958__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59958__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59958__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59958__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59958__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59958__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59962 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59963 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59962,G__59963) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59962,G__59963));
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
var vec__59964 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59964,(1),null);
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
var map__59967 = sci.impl.interpreter.parse_libspec(libspec);
var map__59967__$1 = (((((!((map__59967 == null))))?(((((map__59967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59967):map__59967);
var parsed_libspec = map__59967__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59967__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59967__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59969 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59969) : load_fn.call(null,G__59969));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59970 = temp__5733__auto____$2;
var map__59970__$1 = (((((!((map__59970 == null))))?(((((map__59970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59970):map__59970);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59970__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59970__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59973_60699 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59974_60700 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59973_60699,G__59974_60700) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59973_60699,G__59974_60700));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59972){if((e59972 instanceof Error)){
var e_60701 = e59972;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_60701;
} else {
throw e59972;

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
var len__4789__auto___60702 = arguments.length;
var i__4790__auto___60703 = (0);
while(true){
if((i__4790__auto___60703 < len__4789__auto___60702)){
args__4795__auto__.push((arguments[i__4790__auto___60703]));

var G__60704 = (i__4790__auto___60703 + (1));
i__4790__auto___60703 = G__60704;
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
var ret = (function (){var G__59984 = ctx;
var G__59985 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59984,G__59985) : sci.impl.interpreter.interpret.call(null,G__59984,G__59985));
})();
if((ret instanceof cljs.core.Symbol)){
var G__60705 = (function (){var G__59986 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59986,current_libspec);
} else {
return G__59986;
}
})();
var G__60706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__60707 = cljs.core.next(args__$1);
libspecs = G__60705;
current_libspec = G__60706;
args__$1 = G__60707;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__60708 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__60709 = null;
var G__60710 = cljs.core.next(args__$1);
libspecs = G__60708;
current_libspec = G__60709;
args__$1 = G__60710;
continue;
} else {
var G__60711 = (function (){var G__59990 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59990,current_libspec);
} else {
return G__59990;
}
})();
var G__60712 = ret;
var G__60713 = cljs.core.next(args__$1);
libspecs = G__60711;
current_libspec = G__60712;
args__$1 = G__60713;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59992 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59992,current_libspec);
} else {
return G__59992;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59975_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59975_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59977){
var G__59978 = cljs.core.first(seq59977);
var seq59977__$1 = cljs.core.next(seq59977);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59978,seq59977__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60714 = arguments.length;
var i__4790__auto___60715 = (0);
while(true){
if((i__4790__auto___60715 < len__4789__auto___60714)){
args__4795__auto__.push((arguments[i__4790__auto___60715]));

var G__60716 = (i__4790__auto___60715 + (1));
i__4790__auto___60715 = G__60716;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59996){
var G__59997 = cljs.core.first(seq59996);
var seq59996__$1 = cljs.core.next(seq59996);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59997,seq59996__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59999){
var vec__60000 = p__59999;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60000,(0),null);
var map__60003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60000,(1),null);
var map__60003__$1 = (((((!((map__60003 == null))))?(((((map__60003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60003):map__60003);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60003__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60003__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60003__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__60008 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60008,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60008,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__60011 = ctx;
var G__60012 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60011,G__60012) : sci.impl.interpreter.interpret.call(null,G__60011,G__60012));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__60013 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__60013__$1 = (((((!((map__60013 == null))))?(((((map__60013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60013):map__60013);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60013__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60013__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60013__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__60025 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__60026 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__60026);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__60025);
}}catch (e60015){if((e60015 instanceof Error)){
var e = e60015;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__60016 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__60017 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60016,G__60017) : sci.impl.interpreter.interpret.call(null,G__60016,G__60017));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__60022 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60022,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60022,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e60015;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__60035){
var vec__60036 = p__60035;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60036,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60036,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60039_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60039_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60039_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__60044){
var vec__60045 = p__60044;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60045,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60045,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60045,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60043_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60043_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60043_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__60050,p__60051){
var map__60052 = p__60050;
var map__60052__$1 = (((((!((map__60052 == null))))?(((((map__60052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60052):map__60052);
var ctx = map__60052__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60052__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__60053 = p__60051;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60053,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60053,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60053,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60053,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60049_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60049_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60049_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__60057){
var vec__60058 = p__60057;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60058,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60058,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__60061){
var vec__60062 = p__60061;
var seq__60063 = cljs.core.seq(vec__60062);
var first__60064 = cljs.core.first(seq__60063);
var seq__60063__$1 = cljs.core.next(seq__60063);
var _ = first__60064;
var first__60064__$1 = cljs.core.first(seq__60063__$1);
var seq__60063__$2 = cljs.core.next(seq__60063__$1);
var ns_sym = first__60064__$1;
var exprs = seq__60063__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__60065 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(1),null);
var G__60068_60717 = k;
var G__60068_60718__$1 = (((G__60068_60717 instanceof cljs.core.Keyword))?G__60068_60717.fqn:null);
switch (G__60068_60718__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60068_60717,G__60068_60718__$1,vec__60065,k,v,ns_sym__$1,vec__60062,seq__60063,first__60064,seq__60063__$1,_,first__60064__$1,seq__60063__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__60068_60717,G__60068_60718__$1,vec__60065,k,v,ns_sym__$1,vec__60062,seq__60063,first__60064,seq__60063__$1,_,first__60064__$1,seq__60063__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60068_60718__$1)].join('')));

}

var G__60720 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60720;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__60069){
var vec__60070 = p__60069;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__60076 = exprs;
var vec__60077 = G__60076;
var seq__60078 = cljs.core.seq(vec__60077);
var first__60079 = cljs.core.first(seq__60078);
var seq__60078__$1 = cljs.core.next(seq__60078);
var expr = first__60079;
var exprs__$1 = seq__60078__$1;
var G__60076__$1 = G__60076;
while(true){
var vec__60080 = G__60076__$1;
var seq__60081 = cljs.core.seq(vec__60080);
var first__60082 = cljs.core.first(seq__60081);
var seq__60081__$1 = cljs.core.next(seq__60081);
var expr__$1 = first__60082;
var exprs__$2 = seq__60081__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e60083){if((e60083 instanceof Error)){
var e = e60083;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e60083;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__60721 = exprs__$3;
G__60076__$1 = G__60721;
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
var G__60276 = cljs.core.count(args);
switch (G__60276) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg60086 = (function (){var G__60277 = ctx;
var G__60278 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60277,G__60278) : sci.impl.interpreter.interpret.call(null,G__60277,G__60278));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg60086) : f.call(null,arg60086));

break;
case (2):
var arg60087 = (function (){var G__60279 = ctx;
var G__60280 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60279,G__60280) : sci.impl.interpreter.interpret.call(null,G__60279,G__60280));
})();
var args__$1 = cljs.core.rest(args);
var arg60088 = (function (){var G__60281 = ctx;
var G__60282 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60281,G__60282) : sci.impl.interpreter.interpret.call(null,G__60281,G__60282));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg60087,arg60088) : f.call(null,arg60087,arg60088));

break;
case (3):
var arg60089 = (function (){var G__60283 = ctx;
var G__60284 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60283,G__60284) : sci.impl.interpreter.interpret.call(null,G__60283,G__60284));
})();
var args__$1 = cljs.core.rest(args);
var arg60090 = (function (){var G__60285 = ctx;
var G__60286 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60285,G__60286) : sci.impl.interpreter.interpret.call(null,G__60285,G__60286));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60091 = (function (){var G__60287 = ctx;
var G__60288 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60287,G__60288) : sci.impl.interpreter.interpret.call(null,G__60287,G__60288));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg60089,arg60090,arg60091) : f.call(null,arg60089,arg60090,arg60091));

break;
case (4):
var arg60092 = (function (){var G__60289 = ctx;
var G__60290 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60289,G__60290) : sci.impl.interpreter.interpret.call(null,G__60289,G__60290));
})();
var args__$1 = cljs.core.rest(args);
var arg60093 = (function (){var G__60291 = ctx;
var G__60292 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60291,G__60292) : sci.impl.interpreter.interpret.call(null,G__60291,G__60292));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60094 = (function (){var G__60293 = ctx;
var G__60294 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60293,G__60294) : sci.impl.interpreter.interpret.call(null,G__60293,G__60294));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60095 = (function (){var G__60295 = ctx;
var G__60296 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60295,G__60296) : sci.impl.interpreter.interpret.call(null,G__60295,G__60296));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg60092,arg60093,arg60094,arg60095) : f.call(null,arg60092,arg60093,arg60094,arg60095));

break;
case (5):
var arg60096 = (function (){var G__60297 = ctx;
var G__60298 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60297,G__60298) : sci.impl.interpreter.interpret.call(null,G__60297,G__60298));
})();
var args__$1 = cljs.core.rest(args);
var arg60097 = (function (){var G__60299 = ctx;
var G__60300 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60299,G__60300) : sci.impl.interpreter.interpret.call(null,G__60299,G__60300));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60098 = (function (){var G__60301 = ctx;
var G__60302 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60301,G__60302) : sci.impl.interpreter.interpret.call(null,G__60301,G__60302));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60099 = (function (){var G__60303 = ctx;
var G__60304 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60303,G__60304) : sci.impl.interpreter.interpret.call(null,G__60303,G__60304));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60100 = (function (){var G__60305 = ctx;
var G__60306 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60305,G__60306) : sci.impl.interpreter.interpret.call(null,G__60305,G__60306));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg60096,arg60097,arg60098,arg60099,arg60100) : f.call(null,arg60096,arg60097,arg60098,arg60099,arg60100));

break;
case (6):
var arg60101 = (function (){var G__60307 = ctx;
var G__60308 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60307,G__60308) : sci.impl.interpreter.interpret.call(null,G__60307,G__60308));
})();
var args__$1 = cljs.core.rest(args);
var arg60102 = (function (){var G__60309 = ctx;
var G__60310 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60309,G__60310) : sci.impl.interpreter.interpret.call(null,G__60309,G__60310));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60103 = (function (){var G__60311 = ctx;
var G__60312 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60311,G__60312) : sci.impl.interpreter.interpret.call(null,G__60311,G__60312));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60104 = (function (){var G__60313 = ctx;
var G__60314 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60313,G__60314) : sci.impl.interpreter.interpret.call(null,G__60313,G__60314));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60105 = (function (){var G__60315 = ctx;
var G__60316 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60315,G__60316) : sci.impl.interpreter.interpret.call(null,G__60315,G__60316));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60106 = (function (){var G__60317 = ctx;
var G__60318 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60317,G__60318) : sci.impl.interpreter.interpret.call(null,G__60317,G__60318));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg60101,arg60102,arg60103,arg60104,arg60105,arg60106) : f.call(null,arg60101,arg60102,arg60103,arg60104,arg60105,arg60106));

break;
case (7):
var arg60107 = (function (){var G__60319 = ctx;
var G__60320 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60319,G__60320) : sci.impl.interpreter.interpret.call(null,G__60319,G__60320));
})();
var args__$1 = cljs.core.rest(args);
var arg60108 = (function (){var G__60321 = ctx;
var G__60322 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60321,G__60322) : sci.impl.interpreter.interpret.call(null,G__60321,G__60322));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60109 = (function (){var G__60323 = ctx;
var G__60324 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60323,G__60324) : sci.impl.interpreter.interpret.call(null,G__60323,G__60324));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60110 = (function (){var G__60325 = ctx;
var G__60326 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60325,G__60326) : sci.impl.interpreter.interpret.call(null,G__60325,G__60326));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60111 = (function (){var G__60327 = ctx;
var G__60328 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60327,G__60328) : sci.impl.interpreter.interpret.call(null,G__60327,G__60328));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60112 = (function (){var G__60329 = ctx;
var G__60330 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60329,G__60330) : sci.impl.interpreter.interpret.call(null,G__60329,G__60330));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60113 = (function (){var G__60331 = ctx;
var G__60332 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60331,G__60332) : sci.impl.interpreter.interpret.call(null,G__60331,G__60332));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg60107,arg60108,arg60109,arg60110,arg60111,arg60112,arg60113) : f.call(null,arg60107,arg60108,arg60109,arg60110,arg60111,arg60112,arg60113));

break;
case (8):
var arg60114 = (function (){var G__60333 = ctx;
var G__60334 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60333,G__60334) : sci.impl.interpreter.interpret.call(null,G__60333,G__60334));
})();
var args__$1 = cljs.core.rest(args);
var arg60115 = (function (){var G__60335 = ctx;
var G__60336 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60335,G__60336) : sci.impl.interpreter.interpret.call(null,G__60335,G__60336));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60116 = (function (){var G__60337 = ctx;
var G__60338 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60337,G__60338) : sci.impl.interpreter.interpret.call(null,G__60337,G__60338));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60117 = (function (){var G__60339 = ctx;
var G__60340 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60339,G__60340) : sci.impl.interpreter.interpret.call(null,G__60339,G__60340));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60118 = (function (){var G__60341 = ctx;
var G__60342 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60341,G__60342) : sci.impl.interpreter.interpret.call(null,G__60341,G__60342));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60119 = (function (){var G__60343 = ctx;
var G__60344 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60343,G__60344) : sci.impl.interpreter.interpret.call(null,G__60343,G__60344));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60120 = (function (){var G__60345 = ctx;
var G__60346 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60345,G__60346) : sci.impl.interpreter.interpret.call(null,G__60345,G__60346));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60121 = (function (){var G__60347 = ctx;
var G__60348 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60347,G__60348) : sci.impl.interpreter.interpret.call(null,G__60347,G__60348));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg60114,arg60115,arg60116,arg60117,arg60118,arg60119,arg60120,arg60121) : f.call(null,arg60114,arg60115,arg60116,arg60117,arg60118,arg60119,arg60120,arg60121));

break;
case (9):
var arg60122 = (function (){var G__60349 = ctx;
var G__60350 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60349,G__60350) : sci.impl.interpreter.interpret.call(null,G__60349,G__60350));
})();
var args__$1 = cljs.core.rest(args);
var arg60123 = (function (){var G__60351 = ctx;
var G__60352 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60351,G__60352) : sci.impl.interpreter.interpret.call(null,G__60351,G__60352));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60124 = (function (){var G__60353 = ctx;
var G__60354 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60353,G__60354) : sci.impl.interpreter.interpret.call(null,G__60353,G__60354));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60125 = (function (){var G__60355 = ctx;
var G__60356 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60355,G__60356) : sci.impl.interpreter.interpret.call(null,G__60355,G__60356));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60126 = (function (){var G__60357 = ctx;
var G__60358 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60357,G__60358) : sci.impl.interpreter.interpret.call(null,G__60357,G__60358));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60127 = (function (){var G__60359 = ctx;
var G__60360 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60359,G__60360) : sci.impl.interpreter.interpret.call(null,G__60359,G__60360));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60128 = (function (){var G__60361 = ctx;
var G__60362 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60361,G__60362) : sci.impl.interpreter.interpret.call(null,G__60361,G__60362));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60129 = (function (){var G__60363 = ctx;
var G__60364 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60363,G__60364) : sci.impl.interpreter.interpret.call(null,G__60363,G__60364));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60130 = (function (){var G__60365 = ctx;
var G__60366 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60365,G__60366) : sci.impl.interpreter.interpret.call(null,G__60365,G__60366));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg60122,arg60123,arg60124,arg60125,arg60126,arg60127,arg60128,arg60129,arg60130) : f.call(null,arg60122,arg60123,arg60124,arg60125,arg60126,arg60127,arg60128,arg60129,arg60130));

break;
case (10):
var arg60131 = (function (){var G__60367 = ctx;
var G__60368 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60367,G__60368) : sci.impl.interpreter.interpret.call(null,G__60367,G__60368));
})();
var args__$1 = cljs.core.rest(args);
var arg60132 = (function (){var G__60369 = ctx;
var G__60370 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60369,G__60370) : sci.impl.interpreter.interpret.call(null,G__60369,G__60370));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60133 = (function (){var G__60371 = ctx;
var G__60372 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60371,G__60372) : sci.impl.interpreter.interpret.call(null,G__60371,G__60372));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60134 = (function (){var G__60373 = ctx;
var G__60374 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60373,G__60374) : sci.impl.interpreter.interpret.call(null,G__60373,G__60374));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60135 = (function (){var G__60375 = ctx;
var G__60376 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60375,G__60376) : sci.impl.interpreter.interpret.call(null,G__60375,G__60376));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60136 = (function (){var G__60377 = ctx;
var G__60378 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60377,G__60378) : sci.impl.interpreter.interpret.call(null,G__60377,G__60378));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60137 = (function (){var G__60379 = ctx;
var G__60380 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60379,G__60380) : sci.impl.interpreter.interpret.call(null,G__60379,G__60380));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60138 = (function (){var G__60381 = ctx;
var G__60382 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60381,G__60382) : sci.impl.interpreter.interpret.call(null,G__60381,G__60382));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60139 = (function (){var G__60383 = ctx;
var G__60384 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60383,G__60384) : sci.impl.interpreter.interpret.call(null,G__60383,G__60384));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60140 = (function (){var G__60385 = ctx;
var G__60386 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60385,G__60386) : sci.impl.interpreter.interpret.call(null,G__60385,G__60386));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg60131,arg60132,arg60133,arg60134,arg60135,arg60136,arg60137,arg60138,arg60139,arg60140) : f.call(null,arg60131,arg60132,arg60133,arg60134,arg60135,arg60136,arg60137,arg60138,arg60139,arg60140));

break;
case (11):
var arg60141 = (function (){var G__60387 = ctx;
var G__60388 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60387,G__60388) : sci.impl.interpreter.interpret.call(null,G__60387,G__60388));
})();
var args__$1 = cljs.core.rest(args);
var arg60142 = (function (){var G__60389 = ctx;
var G__60390 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60389,G__60390) : sci.impl.interpreter.interpret.call(null,G__60389,G__60390));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60143 = (function (){var G__60391 = ctx;
var G__60392 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60391,G__60392) : sci.impl.interpreter.interpret.call(null,G__60391,G__60392));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60144 = (function (){var G__60393 = ctx;
var G__60394 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60393,G__60394) : sci.impl.interpreter.interpret.call(null,G__60393,G__60394));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60145 = (function (){var G__60395 = ctx;
var G__60396 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60395,G__60396) : sci.impl.interpreter.interpret.call(null,G__60395,G__60396));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60146 = (function (){var G__60397 = ctx;
var G__60398 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60397,G__60398) : sci.impl.interpreter.interpret.call(null,G__60397,G__60398));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60147 = (function (){var G__60399 = ctx;
var G__60400 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60399,G__60400) : sci.impl.interpreter.interpret.call(null,G__60399,G__60400));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60148 = (function (){var G__60401 = ctx;
var G__60402 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60401,G__60402) : sci.impl.interpreter.interpret.call(null,G__60401,G__60402));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60149 = (function (){var G__60403 = ctx;
var G__60404 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60403,G__60404) : sci.impl.interpreter.interpret.call(null,G__60403,G__60404));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60150 = (function (){var G__60405 = ctx;
var G__60406 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60405,G__60406) : sci.impl.interpreter.interpret.call(null,G__60405,G__60406));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60151 = (function (){var G__60407 = ctx;
var G__60408 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60407,G__60408) : sci.impl.interpreter.interpret.call(null,G__60407,G__60408));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg60141,arg60142,arg60143,arg60144,arg60145,arg60146,arg60147,arg60148,arg60149,arg60150,arg60151) : f.call(null,arg60141,arg60142,arg60143,arg60144,arg60145,arg60146,arg60147,arg60148,arg60149,arg60150,arg60151));

break;
case (12):
var arg60152 = (function (){var G__60409 = ctx;
var G__60410 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60409,G__60410) : sci.impl.interpreter.interpret.call(null,G__60409,G__60410));
})();
var args__$1 = cljs.core.rest(args);
var arg60153 = (function (){var G__60411 = ctx;
var G__60412 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60411,G__60412) : sci.impl.interpreter.interpret.call(null,G__60411,G__60412));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60154 = (function (){var G__60413 = ctx;
var G__60414 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60413,G__60414) : sci.impl.interpreter.interpret.call(null,G__60413,G__60414));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60155 = (function (){var G__60415 = ctx;
var G__60416 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60415,G__60416) : sci.impl.interpreter.interpret.call(null,G__60415,G__60416));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60156 = (function (){var G__60417 = ctx;
var G__60418 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60417,G__60418) : sci.impl.interpreter.interpret.call(null,G__60417,G__60418));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60157 = (function (){var G__60419 = ctx;
var G__60420 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60419,G__60420) : sci.impl.interpreter.interpret.call(null,G__60419,G__60420));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60158 = (function (){var G__60421 = ctx;
var G__60422 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60421,G__60422) : sci.impl.interpreter.interpret.call(null,G__60421,G__60422));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60159 = (function (){var G__60423 = ctx;
var G__60424 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60423,G__60424) : sci.impl.interpreter.interpret.call(null,G__60423,G__60424));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60160 = (function (){var G__60425 = ctx;
var G__60426 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60425,G__60426) : sci.impl.interpreter.interpret.call(null,G__60425,G__60426));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60161 = (function (){var G__60427 = ctx;
var G__60428 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60427,G__60428) : sci.impl.interpreter.interpret.call(null,G__60427,G__60428));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60162 = (function (){var G__60429 = ctx;
var G__60430 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60429,G__60430) : sci.impl.interpreter.interpret.call(null,G__60429,G__60430));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60163 = (function (){var G__60431 = ctx;
var G__60432 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60431,G__60432) : sci.impl.interpreter.interpret.call(null,G__60431,G__60432));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg60152,arg60153,arg60154,arg60155,arg60156,arg60157,arg60158,arg60159,arg60160,arg60161,arg60162,arg60163) : f.call(null,arg60152,arg60153,arg60154,arg60155,arg60156,arg60157,arg60158,arg60159,arg60160,arg60161,arg60162,arg60163));

break;
case (13):
var arg60164 = (function (){var G__60433 = ctx;
var G__60434 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60433,G__60434) : sci.impl.interpreter.interpret.call(null,G__60433,G__60434));
})();
var args__$1 = cljs.core.rest(args);
var arg60165 = (function (){var G__60435 = ctx;
var G__60436 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60435,G__60436) : sci.impl.interpreter.interpret.call(null,G__60435,G__60436));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60166 = (function (){var G__60437 = ctx;
var G__60438 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60437,G__60438) : sci.impl.interpreter.interpret.call(null,G__60437,G__60438));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60167 = (function (){var G__60439 = ctx;
var G__60440 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60439,G__60440) : sci.impl.interpreter.interpret.call(null,G__60439,G__60440));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60168 = (function (){var G__60441 = ctx;
var G__60442 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60441,G__60442) : sci.impl.interpreter.interpret.call(null,G__60441,G__60442));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60169 = (function (){var G__60443 = ctx;
var G__60444 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60443,G__60444) : sci.impl.interpreter.interpret.call(null,G__60443,G__60444));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60170 = (function (){var G__60445 = ctx;
var G__60446 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60445,G__60446) : sci.impl.interpreter.interpret.call(null,G__60445,G__60446));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60171 = (function (){var G__60447 = ctx;
var G__60448 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60447,G__60448) : sci.impl.interpreter.interpret.call(null,G__60447,G__60448));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60172 = (function (){var G__60449 = ctx;
var G__60450 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60449,G__60450) : sci.impl.interpreter.interpret.call(null,G__60449,G__60450));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60173 = (function (){var G__60451 = ctx;
var G__60452 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60451,G__60452) : sci.impl.interpreter.interpret.call(null,G__60451,G__60452));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60174 = (function (){var G__60453 = ctx;
var G__60454 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60453,G__60454) : sci.impl.interpreter.interpret.call(null,G__60453,G__60454));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60175 = (function (){var G__60455 = ctx;
var G__60456 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60455,G__60456) : sci.impl.interpreter.interpret.call(null,G__60455,G__60456));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60176 = (function (){var G__60457 = ctx;
var G__60458 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60457,G__60458) : sci.impl.interpreter.interpret.call(null,G__60457,G__60458));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg60164,arg60165,arg60166,arg60167,arg60168,arg60169,arg60170,arg60171,arg60172,arg60173,arg60174,arg60175,arg60176) : f.call(null,arg60164,arg60165,arg60166,arg60167,arg60168,arg60169,arg60170,arg60171,arg60172,arg60173,arg60174,arg60175,arg60176));

break;
case (14):
var arg60177 = (function (){var G__60459 = ctx;
var G__60460 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60459,G__60460) : sci.impl.interpreter.interpret.call(null,G__60459,G__60460));
})();
var args__$1 = cljs.core.rest(args);
var arg60178 = (function (){var G__60461 = ctx;
var G__60462 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60461,G__60462) : sci.impl.interpreter.interpret.call(null,G__60461,G__60462));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60179 = (function (){var G__60463 = ctx;
var G__60464 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60463,G__60464) : sci.impl.interpreter.interpret.call(null,G__60463,G__60464));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60180 = (function (){var G__60465 = ctx;
var G__60466 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60465,G__60466) : sci.impl.interpreter.interpret.call(null,G__60465,G__60466));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60181 = (function (){var G__60467 = ctx;
var G__60468 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60467,G__60468) : sci.impl.interpreter.interpret.call(null,G__60467,G__60468));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60182 = (function (){var G__60469 = ctx;
var G__60470 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60469,G__60470) : sci.impl.interpreter.interpret.call(null,G__60469,G__60470));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60183 = (function (){var G__60471 = ctx;
var G__60472 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60471,G__60472) : sci.impl.interpreter.interpret.call(null,G__60471,G__60472));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60184 = (function (){var G__60473 = ctx;
var G__60474 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60473,G__60474) : sci.impl.interpreter.interpret.call(null,G__60473,G__60474));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60185 = (function (){var G__60475 = ctx;
var G__60476 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60475,G__60476) : sci.impl.interpreter.interpret.call(null,G__60475,G__60476));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60186 = (function (){var G__60477 = ctx;
var G__60478 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60477,G__60478) : sci.impl.interpreter.interpret.call(null,G__60477,G__60478));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60187 = (function (){var G__60479 = ctx;
var G__60480 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60479,G__60480) : sci.impl.interpreter.interpret.call(null,G__60479,G__60480));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60188 = (function (){var G__60481 = ctx;
var G__60482 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60481,G__60482) : sci.impl.interpreter.interpret.call(null,G__60481,G__60482));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60189 = (function (){var G__60483 = ctx;
var G__60484 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60483,G__60484) : sci.impl.interpreter.interpret.call(null,G__60483,G__60484));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60190 = (function (){var G__60485 = ctx;
var G__60486 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60485,G__60486) : sci.impl.interpreter.interpret.call(null,G__60485,G__60486));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg60177,arg60178,arg60179,arg60180,arg60181,arg60182,arg60183,arg60184,arg60185,arg60186,arg60187,arg60188,arg60189,arg60190) : f.call(null,arg60177,arg60178,arg60179,arg60180,arg60181,arg60182,arg60183,arg60184,arg60185,arg60186,arg60187,arg60188,arg60189,arg60190));

break;
case (15):
var arg60191 = (function (){var G__60487 = ctx;
var G__60488 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60487,G__60488) : sci.impl.interpreter.interpret.call(null,G__60487,G__60488));
})();
var args__$1 = cljs.core.rest(args);
var arg60192 = (function (){var G__60489 = ctx;
var G__60490 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60489,G__60490) : sci.impl.interpreter.interpret.call(null,G__60489,G__60490));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60193 = (function (){var G__60491 = ctx;
var G__60492 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60491,G__60492) : sci.impl.interpreter.interpret.call(null,G__60491,G__60492));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60194 = (function (){var G__60493 = ctx;
var G__60494 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60493,G__60494) : sci.impl.interpreter.interpret.call(null,G__60493,G__60494));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60195 = (function (){var G__60495 = ctx;
var G__60496 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60495,G__60496) : sci.impl.interpreter.interpret.call(null,G__60495,G__60496));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60196 = (function (){var G__60497 = ctx;
var G__60498 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60497,G__60498) : sci.impl.interpreter.interpret.call(null,G__60497,G__60498));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60197 = (function (){var G__60499 = ctx;
var G__60500 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60499,G__60500) : sci.impl.interpreter.interpret.call(null,G__60499,G__60500));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60198 = (function (){var G__60501 = ctx;
var G__60502 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60501,G__60502) : sci.impl.interpreter.interpret.call(null,G__60501,G__60502));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60199 = (function (){var G__60503 = ctx;
var G__60504 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60503,G__60504) : sci.impl.interpreter.interpret.call(null,G__60503,G__60504));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60200 = (function (){var G__60505 = ctx;
var G__60506 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60505,G__60506) : sci.impl.interpreter.interpret.call(null,G__60505,G__60506));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60201 = (function (){var G__60507 = ctx;
var G__60508 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60507,G__60508) : sci.impl.interpreter.interpret.call(null,G__60507,G__60508));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60202 = (function (){var G__60509 = ctx;
var G__60510 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60509,G__60510) : sci.impl.interpreter.interpret.call(null,G__60509,G__60510));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60203 = (function (){var G__60511 = ctx;
var G__60512 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60511,G__60512) : sci.impl.interpreter.interpret.call(null,G__60511,G__60512));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60204 = (function (){var G__60513 = ctx;
var G__60514 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60513,G__60514) : sci.impl.interpreter.interpret.call(null,G__60513,G__60514));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60205 = (function (){var G__60515 = ctx;
var G__60516 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60515,G__60516) : sci.impl.interpreter.interpret.call(null,G__60515,G__60516));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg60191,arg60192,arg60193,arg60194,arg60195,arg60196,arg60197,arg60198,arg60199,arg60200,arg60201,arg60202,arg60203,arg60204,arg60205) : f.call(null,arg60191,arg60192,arg60193,arg60194,arg60195,arg60196,arg60197,arg60198,arg60199,arg60200,arg60201,arg60202,arg60203,arg60204,arg60205));

break;
case (16):
var arg60206 = (function (){var G__60517 = ctx;
var G__60518 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60517,G__60518) : sci.impl.interpreter.interpret.call(null,G__60517,G__60518));
})();
var args__$1 = cljs.core.rest(args);
var arg60207 = (function (){var G__60519 = ctx;
var G__60520 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60519,G__60520) : sci.impl.interpreter.interpret.call(null,G__60519,G__60520));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60208 = (function (){var G__60521 = ctx;
var G__60522 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60521,G__60522) : sci.impl.interpreter.interpret.call(null,G__60521,G__60522));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60209 = (function (){var G__60523 = ctx;
var G__60524 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60523,G__60524) : sci.impl.interpreter.interpret.call(null,G__60523,G__60524));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60210 = (function (){var G__60525 = ctx;
var G__60526 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60525,G__60526) : sci.impl.interpreter.interpret.call(null,G__60525,G__60526));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60211 = (function (){var G__60527 = ctx;
var G__60528 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60527,G__60528) : sci.impl.interpreter.interpret.call(null,G__60527,G__60528));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60212 = (function (){var G__60529 = ctx;
var G__60530 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60529,G__60530) : sci.impl.interpreter.interpret.call(null,G__60529,G__60530));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60213 = (function (){var G__60531 = ctx;
var G__60532 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60531,G__60532) : sci.impl.interpreter.interpret.call(null,G__60531,G__60532));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60214 = (function (){var G__60533 = ctx;
var G__60534 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60533,G__60534) : sci.impl.interpreter.interpret.call(null,G__60533,G__60534));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60215 = (function (){var G__60535 = ctx;
var G__60536 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60535,G__60536) : sci.impl.interpreter.interpret.call(null,G__60535,G__60536));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60216 = (function (){var G__60537 = ctx;
var G__60538 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60537,G__60538) : sci.impl.interpreter.interpret.call(null,G__60537,G__60538));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60217 = (function (){var G__60539 = ctx;
var G__60540 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60539,G__60540) : sci.impl.interpreter.interpret.call(null,G__60539,G__60540));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60218 = (function (){var G__60541 = ctx;
var G__60542 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60541,G__60542) : sci.impl.interpreter.interpret.call(null,G__60541,G__60542));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60219 = (function (){var G__60543 = ctx;
var G__60544 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60543,G__60544) : sci.impl.interpreter.interpret.call(null,G__60543,G__60544));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60220 = (function (){var G__60545 = ctx;
var G__60546 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60545,G__60546) : sci.impl.interpreter.interpret.call(null,G__60545,G__60546));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60221 = (function (){var G__60547 = ctx;
var G__60548 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60547,G__60548) : sci.impl.interpreter.interpret.call(null,G__60547,G__60548));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg60206,arg60207,arg60208,arg60209,arg60210,arg60211,arg60212,arg60213,arg60214,arg60215,arg60216,arg60217,arg60218,arg60219,arg60220,arg60221) : f.call(null,arg60206,arg60207,arg60208,arg60209,arg60210,arg60211,arg60212,arg60213,arg60214,arg60215,arg60216,arg60217,arg60218,arg60219,arg60220,arg60221));

break;
case (17):
var arg60222 = (function (){var G__60549 = ctx;
var G__60550 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60549,G__60550) : sci.impl.interpreter.interpret.call(null,G__60549,G__60550));
})();
var args__$1 = cljs.core.rest(args);
var arg60223 = (function (){var G__60551 = ctx;
var G__60552 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60551,G__60552) : sci.impl.interpreter.interpret.call(null,G__60551,G__60552));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60224 = (function (){var G__60553 = ctx;
var G__60554 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60553,G__60554) : sci.impl.interpreter.interpret.call(null,G__60553,G__60554));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60225 = (function (){var G__60555 = ctx;
var G__60556 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60555,G__60556) : sci.impl.interpreter.interpret.call(null,G__60555,G__60556));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60226 = (function (){var G__60557 = ctx;
var G__60558 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60557,G__60558) : sci.impl.interpreter.interpret.call(null,G__60557,G__60558));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60227 = (function (){var G__60559 = ctx;
var G__60560 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60559,G__60560) : sci.impl.interpreter.interpret.call(null,G__60559,G__60560));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60228 = (function (){var G__60561 = ctx;
var G__60562 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60561,G__60562) : sci.impl.interpreter.interpret.call(null,G__60561,G__60562));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60229 = (function (){var G__60563 = ctx;
var G__60564 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60563,G__60564) : sci.impl.interpreter.interpret.call(null,G__60563,G__60564));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60230 = (function (){var G__60565 = ctx;
var G__60566 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60565,G__60566) : sci.impl.interpreter.interpret.call(null,G__60565,G__60566));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60231 = (function (){var G__60567 = ctx;
var G__60568 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60567,G__60568) : sci.impl.interpreter.interpret.call(null,G__60567,G__60568));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60232 = (function (){var G__60569 = ctx;
var G__60570 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60569,G__60570) : sci.impl.interpreter.interpret.call(null,G__60569,G__60570));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60233 = (function (){var G__60571 = ctx;
var G__60572 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60571,G__60572) : sci.impl.interpreter.interpret.call(null,G__60571,G__60572));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60234 = (function (){var G__60573 = ctx;
var G__60574 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60573,G__60574) : sci.impl.interpreter.interpret.call(null,G__60573,G__60574));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60235 = (function (){var G__60575 = ctx;
var G__60576 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60575,G__60576) : sci.impl.interpreter.interpret.call(null,G__60575,G__60576));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60236 = (function (){var G__60577 = ctx;
var G__60578 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60577,G__60578) : sci.impl.interpreter.interpret.call(null,G__60577,G__60578));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60237 = (function (){var G__60579 = ctx;
var G__60580 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60579,G__60580) : sci.impl.interpreter.interpret.call(null,G__60579,G__60580));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60238 = (function (){var G__60581 = ctx;
var G__60582 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60581,G__60582) : sci.impl.interpreter.interpret.call(null,G__60581,G__60582));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg60222,arg60223,arg60224,arg60225,arg60226,arg60227,arg60228,arg60229,arg60230,arg60231,arg60232,arg60233,arg60234,arg60235,arg60236,arg60237,arg60238) : f.call(null,arg60222,arg60223,arg60224,arg60225,arg60226,arg60227,arg60228,arg60229,arg60230,arg60231,arg60232,arg60233,arg60234,arg60235,arg60236,arg60237,arg60238));

break;
case (18):
var arg60239 = (function (){var G__60583 = ctx;
var G__60584 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60583,G__60584) : sci.impl.interpreter.interpret.call(null,G__60583,G__60584));
})();
var args__$1 = cljs.core.rest(args);
var arg60240 = (function (){var G__60585 = ctx;
var G__60586 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60585,G__60586) : sci.impl.interpreter.interpret.call(null,G__60585,G__60586));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60241 = (function (){var G__60587 = ctx;
var G__60588 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60587,G__60588) : sci.impl.interpreter.interpret.call(null,G__60587,G__60588));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60242 = (function (){var G__60589 = ctx;
var G__60590 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60589,G__60590) : sci.impl.interpreter.interpret.call(null,G__60589,G__60590));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60243 = (function (){var G__60591 = ctx;
var G__60592 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60591,G__60592) : sci.impl.interpreter.interpret.call(null,G__60591,G__60592));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60244 = (function (){var G__60593 = ctx;
var G__60594 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60593,G__60594) : sci.impl.interpreter.interpret.call(null,G__60593,G__60594));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60245 = (function (){var G__60595 = ctx;
var G__60596 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60595,G__60596) : sci.impl.interpreter.interpret.call(null,G__60595,G__60596));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60246 = (function (){var G__60597 = ctx;
var G__60598 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60597,G__60598) : sci.impl.interpreter.interpret.call(null,G__60597,G__60598));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60247 = (function (){var G__60599 = ctx;
var G__60600 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60599,G__60600) : sci.impl.interpreter.interpret.call(null,G__60599,G__60600));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60248 = (function (){var G__60601 = ctx;
var G__60602 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60601,G__60602) : sci.impl.interpreter.interpret.call(null,G__60601,G__60602));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60249 = (function (){var G__60603 = ctx;
var G__60604 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60603,G__60604) : sci.impl.interpreter.interpret.call(null,G__60603,G__60604));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60250 = (function (){var G__60605 = ctx;
var G__60606 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60605,G__60606) : sci.impl.interpreter.interpret.call(null,G__60605,G__60606));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60251 = (function (){var G__60607 = ctx;
var G__60608 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60607,G__60608) : sci.impl.interpreter.interpret.call(null,G__60607,G__60608));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60252 = (function (){var G__60609 = ctx;
var G__60610 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60609,G__60610) : sci.impl.interpreter.interpret.call(null,G__60609,G__60610));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60253 = (function (){var G__60611 = ctx;
var G__60612 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60611,G__60612) : sci.impl.interpreter.interpret.call(null,G__60611,G__60612));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60254 = (function (){var G__60613 = ctx;
var G__60614 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60613,G__60614) : sci.impl.interpreter.interpret.call(null,G__60613,G__60614));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60255 = (function (){var G__60615 = ctx;
var G__60616 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60615,G__60616) : sci.impl.interpreter.interpret.call(null,G__60615,G__60616));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg60256 = (function (){var G__60617 = ctx;
var G__60618 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60617,G__60618) : sci.impl.interpreter.interpret.call(null,G__60617,G__60618));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg60239,arg60240,arg60241,arg60242,arg60243,arg60244,arg60245,arg60246,arg60247,arg60248,arg60249,arg60250,arg60251,arg60252,arg60253,arg60254,arg60255,arg60256) : f.call(null,arg60239,arg60240,arg60241,arg60242,arg60243,arg60244,arg60245,arg60246,arg60247,arg60248,arg60249,arg60250,arg60251,arg60252,arg60253,arg60254,arg60255,arg60256));

break;
case (19):
var arg60257 = (function (){var G__60619 = ctx;
var G__60620 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60619,G__60620) : sci.impl.interpreter.interpret.call(null,G__60619,G__60620));
})();
var args__$1 = cljs.core.rest(args);
var arg60258 = (function (){var G__60621 = ctx;
var G__60622 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60621,G__60622) : sci.impl.interpreter.interpret.call(null,G__60621,G__60622));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60259 = (function (){var G__60623 = ctx;
var G__60624 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60623,G__60624) : sci.impl.interpreter.interpret.call(null,G__60623,G__60624));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60260 = (function (){var G__60625 = ctx;
var G__60626 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60625,G__60626) : sci.impl.interpreter.interpret.call(null,G__60625,G__60626));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60261 = (function (){var G__60627 = ctx;
var G__60628 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60627,G__60628) : sci.impl.interpreter.interpret.call(null,G__60627,G__60628));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60262 = (function (){var G__60629 = ctx;
var G__60630 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60629,G__60630) : sci.impl.interpreter.interpret.call(null,G__60629,G__60630));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60263 = (function (){var G__60631 = ctx;
var G__60632 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60631,G__60632) : sci.impl.interpreter.interpret.call(null,G__60631,G__60632));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60264 = (function (){var G__60633 = ctx;
var G__60634 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60633,G__60634) : sci.impl.interpreter.interpret.call(null,G__60633,G__60634));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60265 = (function (){var G__60635 = ctx;
var G__60636 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60635,G__60636) : sci.impl.interpreter.interpret.call(null,G__60635,G__60636));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60266 = (function (){var G__60637 = ctx;
var G__60638 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60637,G__60638) : sci.impl.interpreter.interpret.call(null,G__60637,G__60638));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60267 = (function (){var G__60639 = ctx;
var G__60640 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60639,G__60640) : sci.impl.interpreter.interpret.call(null,G__60639,G__60640));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60268 = (function (){var G__60641 = ctx;
var G__60642 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60641,G__60642) : sci.impl.interpreter.interpret.call(null,G__60641,G__60642));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60269 = (function (){var G__60643 = ctx;
var G__60644 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60643,G__60644) : sci.impl.interpreter.interpret.call(null,G__60643,G__60644));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60270 = (function (){var G__60645 = ctx;
var G__60646 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60645,G__60646) : sci.impl.interpreter.interpret.call(null,G__60645,G__60646));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60271 = (function (){var G__60647 = ctx;
var G__60648 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60647,G__60648) : sci.impl.interpreter.interpret.call(null,G__60647,G__60648));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60272 = (function (){var G__60649 = ctx;
var G__60650 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60649,G__60650) : sci.impl.interpreter.interpret.call(null,G__60649,G__60650));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60273 = (function (){var G__60651 = ctx;
var G__60652 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60651,G__60652) : sci.impl.interpreter.interpret.call(null,G__60651,G__60652));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg60274 = (function (){var G__60653 = ctx;
var G__60654 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60653,G__60654) : sci.impl.interpreter.interpret.call(null,G__60653,G__60654));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg60275 = (function (){var G__60655 = ctx;
var G__60656 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60655,G__60656) : sci.impl.interpreter.interpret.call(null,G__60655,G__60656));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg60257,arg60258,arg60259,arg60260,arg60261,arg60262,arg60263,arg60264,arg60265,arg60266,arg60267,arg60268,arg60269,arg60270,arg60271,arg60272,arg60273,arg60274,arg60275) : f.call(null,arg60257,arg60258,arg60259,arg60260,arg60261,arg60262,arg60263,arg60264,arg60265,arg60266,arg60267,arg60268,arg60269,arg60270,arg60271,arg60272,arg60273,arg60274,arg60275));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__60657 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__60657)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__60657)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__60657)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__60657)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__60657)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__60657)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__60658 = ctx;
var G__60659 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60658,G__60659) : sci.impl.interpreter.interpret.call(null,G__60658,G__60659));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__60657)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__60657)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__60657)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__60657)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__60657)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__60657)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__60657)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__60657)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__60657)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__60660 = ctx;
var G__60661 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60660,G__60661) : sci.impl.interpreter.interpret.call(null,G__60660,G__60661));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__60657)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__60657)){
return (new cljs.core.LazySeq(null,(function (){var G__60662 = ctx;
var G__60663 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60662,G__60663) : sci.impl.interpreter.interpret.call(null,G__60662,G__60663));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__60657)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__60657)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__60657)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__60657)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60657)].join('')));

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
if(cljs.core.truth_((function (){var G__60665 = op;
var G__60666 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60665,G__60666) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60665,G__60666));
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
}catch (e60664){if((e60664 instanceof Error)){
var e = e60664;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e60664;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__60673 = op;
var G__60673__$1 = (((G__60673 instanceof cljs.core.Keyword))?G__60673.fqn:null);
switch (G__60673__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60670_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60670_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60670_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60671_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60671_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60671_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60672_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60672_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60672_SHARP_));
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
var G__60724 = cljs.core.rest(exprs);
var G__60725 = (function (){var G__60676 = ctx;
var G__60677 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__60676,G__60677) : sci.impl.interpreter.eval_form.call(null,G__60676,G__60677));
})();
exprs = G__60724;
ret = G__60725;
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
if(cljs.core.truth_((function (){var G__60680 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__60681 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60680,G__60681) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60680,G__60681));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__60726 = ret__$1;
ret = G__60726;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__60683 = arguments.length;
switch (G__60683) {
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
