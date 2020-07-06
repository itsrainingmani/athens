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
var G__89556 = xs;
args__$2 = G__89556;
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
var G__89557 = xs;
args__$2 = G__89557;
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
var len__4789__auto___89558 = arguments.length;
var i__4790__auto___89559 = (0);
while(true){
if((i__4790__auto___89559 < len__4789__auto___89558)){
args__4795__auto__.push((arguments[i__4790__auto___89559]));

var G__89560 = (i__4790__auto___89559 + (1));
i__4790__auto___89559 = G__89560;
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
var G__89561 = ctx__$2;
var G__89562 = rest_let_bindings;
ctx__$1 = G__89561;
let_bindings__$1 = G__89562;
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
var G__89563 = nexprs;
exprs__$1 = G__89563;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq88642){
var G__88643 = cljs.core.first(seq88642);
var seq88642__$1 = cljs.core.next(seq88642);
var G__88644 = cljs.core.first(seq88642__$1);
var seq88642__$2 = cljs.core.next(seq88642__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88643,G__88644,seq88642__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__88652){
var vec__88653 = p__88652;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88653,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88653,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88653,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88653,(3),null);
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
var v = (cljs.core.truth_((function (){var G__88656 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__88657 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__88656,G__88657) : sci.impl.utils.kw_identical_QMARK_.call(null,G__88656,G__88657));
})())?(function (){var G__88658 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__88658,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__88658;
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
var vec__88660 = libspec;
var seq__88661 = cljs.core.seq(vec__88660);
var first__88662 = cljs.core.first(seq__88661);
var seq__88661__$1 = cljs.core.next(seq__88661);
var lib_name = first__88662;
var opts = seq__88661__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__88666 = opts;
var vec__88667 = G__88666;
var seq__88668 = cljs.core.seq(vec__88667);
var first__88669 = cljs.core.first(seq__88668);
var seq__88668__$1 = cljs.core.next(seq__88668);
var opt_name = first__88669;
var first__88669__$1 = cljs.core.first(seq__88668__$1);
var seq__88668__$2 = cljs.core.next(seq__88668__$1);
var fst_opt = first__88669__$1;
var rst_opts = seq__88668__$2;
var ret__$1 = ret;
var G__88666__$1 = G__88666;
while(true){
var ret__$2 = ret__$1;
var vec__88674 = G__88666__$1;
var seq__88675 = cljs.core.seq(vec__88674);
var first__88676 = cljs.core.first(seq__88675);
var seq__88675__$1 = cljs.core.next(seq__88675);
var opt_name__$1 = first__88676;
var first__88676__$1 = cljs.core.first(seq__88675__$1);
var seq__88675__$2 = cljs.core.next(seq__88675__$1);
var fst_opt__$1 = first__88676__$1;
var rst_opts__$1 = seq__88675__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__88677 = opt_name__$1;
var G__88677__$1 = (((G__88677 instanceof cljs.core.Keyword))?G__88677.fqn:null);
switch (G__88677__$1) {
case "as":
var G__89583 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__89584 = rst_opts__$1;
ret__$1 = G__89583;
G__88666__$1 = G__89584;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__89585 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__89586 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__89585;
G__88666__$1 = G__89586;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__89587 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__89588 = rst_opts__$1;
ret__$1 = G__89587;
G__88666__$1 = G__89588;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__88677__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__88678){
var vec__88679 = p__88678;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88679,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__88685){
var map__88686 = p__88685;
var map__88686__$1 = (((((!((map__88686 == null))))?(((((map__88686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88686):map__88686);
var _parsed_libspec = map__88686__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88686__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88686__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88686__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88686__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88686__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__88693 = new cljs.core.Keyword(null,"all","all",892129742);
var G__88694 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__88693,G__88694) : sci.impl.utils.kw_identical_QMARK_.call(null,G__88693,G__88694));
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
var vec__88695 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88695,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88695,(1),null);
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
var map__88698 = sci.impl.interpreter.parse_libspec(libspec);
var map__88698__$1 = (((((!((map__88698 == null))))?(((((map__88698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88698):map__88698);
var parsed_libspec = map__88698__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88698__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88698__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__88700 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__88700) : load_fn.call(null,G__88700));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__88701 = temp__5733__auto____$2;
var map__88701__$1 = (((((!((map__88701 == null))))?(((((map__88701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88701):map__88701);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88701__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88701__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__88706_89621 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__88707_89622 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__88706_89621,G__88707_89622) : sci.impl.interpreter.eval_string_STAR_.call(null,G__88706_89621,G__88707_89622));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e88703){if((e88703 instanceof Error)){
var e_89628 = e88703;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_89628;
} else {
throw e88703;

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
var len__4789__auto___89630 = arguments.length;
var i__4790__auto___89631 = (0);
while(true){
if((i__4790__auto___89631 < len__4789__auto___89630)){
args__4795__auto__.push((arguments[i__4790__auto___89631]));

var G__89632 = (i__4790__auto___89631 + (1));
i__4790__auto___89631 = G__89632;
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
var ret = (function (){var G__88721 = ctx;
var G__88722 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__88721,G__88722) : sci.impl.interpreter.interpret.call(null,G__88721,G__88722));
})();
if((ret instanceof cljs.core.Symbol)){
var G__89637 = (function (){var G__88723 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__88723,current_libspec);
} else {
return G__88723;
}
})();
var G__89638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__89639 = cljs.core.next(args__$1);
libspecs = G__89637;
current_libspec = G__89638;
args__$1 = G__89639;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__89640 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__89641 = null;
var G__89642 = cljs.core.next(args__$1);
libspecs = G__89640;
current_libspec = G__89641;
args__$1 = G__89642;
continue;
} else {
var G__89643 = (function (){var G__88724 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__88724,current_libspec);
} else {
return G__88724;
}
})();
var G__89644 = ret;
var G__89645 = cljs.core.next(args__$1);
libspecs = G__89643;
current_libspec = G__89644;
args__$1 = G__89645;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__88727 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__88727,current_libspec);
} else {
return G__88727;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__88709_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__88709_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq88710){
var G__88711 = cljs.core.first(seq88710);
var seq88710__$1 = cljs.core.next(seq88710);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88711,seq88710__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___89650 = arguments.length;
var i__4790__auto___89651 = (0);
while(true){
if((i__4790__auto___89651 < len__4789__auto___89650)){
args__4795__auto__.push((arguments[i__4790__auto___89651]));

var G__89652 = (i__4790__auto___89651 + (1));
i__4790__auto___89651 = G__89652;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq88729){
var G__88730 = cljs.core.first(seq88729);
var seq88729__$1 = cljs.core.next(seq88729);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88730,seq88729__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__88734){
var vec__88735 = p__88734;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88735,(0),null);
var map__88738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88735,(1),null);
var map__88738__$1 = (((((!((map__88738 == null))))?(((((map__88738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88738):map__88738);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88738__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88738__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88738__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__88740 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88740,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88740,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__88743 = ctx;
var G__88744 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__88743,G__88744) : sci.impl.interpreter.interpret.call(null,G__88743,G__88744));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__88745 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__88745__$1 = (((((!((map__88745 == null))))?(((((map__88745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88745):map__88745);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88745__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88745__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88745__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__88753 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__88754 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__88754);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__88753);
}}catch (e88747){if((e88747 instanceof Error)){
var e = e88747;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__88748 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__88749 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__88748,G__88749) : sci.impl.interpreter.interpret.call(null,G__88748,G__88749));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__88750 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88750,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88750,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e88747;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__88755){
var vec__88756 = p__88755;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88756,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88756,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__88762_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__88762_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__88762_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__88764){
var vec__88765 = p__88764;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88765,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88765,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88765,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__88763_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__88763_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__88763_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__88774,p__88775){
var map__88776 = p__88774;
var map__88776__$1 = (((((!((map__88776 == null))))?(((((map__88776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88776):map__88776);
var ctx = map__88776__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88776__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__88777 = p__88775;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88777,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88777,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88777,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88777,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__88771_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__88771_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__88771_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__88790){
var vec__88793 = p__88790;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88793,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88793,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__88803){
var vec__88804 = p__88803;
var seq__88805 = cljs.core.seq(vec__88804);
var first__88806 = cljs.core.first(seq__88805);
var seq__88805__$1 = cljs.core.next(seq__88805);
var _ = first__88806;
var first__88806__$1 = cljs.core.first(seq__88805__$1);
var seq__88805__$2 = cljs.core.next(seq__88805__$1);
var ns_sym = first__88806__$1;
var exprs = seq__88805__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__88809 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88809,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88809,(1),null);
var G__88812_89677 = k;
var G__88812_89678__$1 = (((G__88812_89677 instanceof cljs.core.Keyword))?G__88812_89677.fqn:null);
switch (G__88812_89678__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__88812_89677,G__88812_89678__$1,vec__88809,k,v,ns_sym__$1,vec__88804,seq__88805,first__88806,seq__88805__$1,_,first__88806__$1,seq__88805__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__88812_89677,G__88812_89678__$1,vec__88809,k,v,ns_sym__$1,vec__88804,seq__88805,first__88806,seq__88805__$1,_,first__88806__$1,seq__88805__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__88812_89678__$1)].join('')));

}

var G__89680 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__89680;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__88822){
var vec__88823 = p__88822;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88823,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88823,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88823,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__88835 = exprs;
var vec__88836 = G__88835;
var seq__88837 = cljs.core.seq(vec__88836);
var first__88838 = cljs.core.first(seq__88837);
var seq__88837__$1 = cljs.core.next(seq__88837);
var expr = first__88838;
var exprs__$1 = seq__88837__$1;
var G__88835__$1 = G__88835;
while(true){
var vec__88840 = G__88835__$1;
var seq__88841 = cljs.core.seq(vec__88840);
var first__88842 = cljs.core.first(seq__88841);
var seq__88841__$1 = cljs.core.next(seq__88841);
var expr__$1 = first__88842;
var exprs__$2 = seq__88841__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e88844){if((e88844 instanceof Error)){
var e = e88844;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e88844;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__89696 = exprs__$3;
G__88835__$1 = G__89696;
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
var G__89047 = cljs.core.count(args);
switch (G__89047) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg88857 = (function (){var G__89048 = ctx;
var G__89049 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89048,G__89049) : sci.impl.interpreter.interpret.call(null,G__89048,G__89049));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg88857) : f.call(null,arg88857));

break;
case (2):
var arg88858 = (function (){var G__89050 = ctx;
var G__89051 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89050,G__89051) : sci.impl.interpreter.interpret.call(null,G__89050,G__89051));
})();
var args__$1 = cljs.core.rest(args);
var arg88859 = (function (){var G__89052 = ctx;
var G__89053 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89052,G__89053) : sci.impl.interpreter.interpret.call(null,G__89052,G__89053));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg88858,arg88859) : f.call(null,arg88858,arg88859));

break;
case (3):
var arg88860 = (function (){var G__89056 = ctx;
var G__89057 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89056,G__89057) : sci.impl.interpreter.interpret.call(null,G__89056,G__89057));
})();
var args__$1 = cljs.core.rest(args);
var arg88861 = (function (){var G__89060 = ctx;
var G__89061 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89060,G__89061) : sci.impl.interpreter.interpret.call(null,G__89060,G__89061));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88862 = (function (){var G__89063 = ctx;
var G__89064 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89063,G__89064) : sci.impl.interpreter.interpret.call(null,G__89063,G__89064));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg88860,arg88861,arg88862) : f.call(null,arg88860,arg88861,arg88862));

break;
case (4):
var arg88863 = (function (){var G__89066 = ctx;
var G__89067 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89066,G__89067) : sci.impl.interpreter.interpret.call(null,G__89066,G__89067));
})();
var args__$1 = cljs.core.rest(args);
var arg88864 = (function (){var G__89069 = ctx;
var G__89070 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89069,G__89070) : sci.impl.interpreter.interpret.call(null,G__89069,G__89070));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88865 = (function (){var G__89071 = ctx;
var G__89072 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89071,G__89072) : sci.impl.interpreter.interpret.call(null,G__89071,G__89072));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88866 = (function (){var G__89073 = ctx;
var G__89074 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89073,G__89074) : sci.impl.interpreter.interpret.call(null,G__89073,G__89074));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg88863,arg88864,arg88865,arg88866) : f.call(null,arg88863,arg88864,arg88865,arg88866));

break;
case (5):
var arg88867 = (function (){var G__89075 = ctx;
var G__89076 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89075,G__89076) : sci.impl.interpreter.interpret.call(null,G__89075,G__89076));
})();
var args__$1 = cljs.core.rest(args);
var arg88868 = (function (){var G__89077 = ctx;
var G__89078 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89077,G__89078) : sci.impl.interpreter.interpret.call(null,G__89077,G__89078));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88869 = (function (){var G__89084 = ctx;
var G__89086 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89084,G__89086) : sci.impl.interpreter.interpret.call(null,G__89084,G__89086));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88870 = (function (){var G__89089 = ctx;
var G__89090 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89089,G__89090) : sci.impl.interpreter.interpret.call(null,G__89089,G__89090));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88871 = (function (){var G__89091 = ctx;
var G__89092 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89091,G__89092) : sci.impl.interpreter.interpret.call(null,G__89091,G__89092));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg88867,arg88868,arg88869,arg88870,arg88871) : f.call(null,arg88867,arg88868,arg88869,arg88870,arg88871));

break;
case (6):
var arg88872 = (function (){var G__89094 = ctx;
var G__89095 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89094,G__89095) : sci.impl.interpreter.interpret.call(null,G__89094,G__89095));
})();
var args__$1 = cljs.core.rest(args);
var arg88873 = (function (){var G__89096 = ctx;
var G__89097 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89096,G__89097) : sci.impl.interpreter.interpret.call(null,G__89096,G__89097));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88874 = (function (){var G__89098 = ctx;
var G__89099 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89098,G__89099) : sci.impl.interpreter.interpret.call(null,G__89098,G__89099));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88875 = (function (){var G__89100 = ctx;
var G__89101 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89100,G__89101) : sci.impl.interpreter.interpret.call(null,G__89100,G__89101));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88876 = (function (){var G__89103 = ctx;
var G__89104 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89103,G__89104) : sci.impl.interpreter.interpret.call(null,G__89103,G__89104));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88877 = (function (){var G__89105 = ctx;
var G__89106 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89105,G__89106) : sci.impl.interpreter.interpret.call(null,G__89105,G__89106));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg88872,arg88873,arg88874,arg88875,arg88876,arg88877) : f.call(null,arg88872,arg88873,arg88874,arg88875,arg88876,arg88877));

break;
case (7):
var arg88878 = (function (){var G__89114 = ctx;
var G__89115 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89114,G__89115) : sci.impl.interpreter.interpret.call(null,G__89114,G__89115));
})();
var args__$1 = cljs.core.rest(args);
var arg88879 = (function (){var G__89117 = ctx;
var G__89118 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89117,G__89118) : sci.impl.interpreter.interpret.call(null,G__89117,G__89118));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88880 = (function (){var G__89119 = ctx;
var G__89120 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89119,G__89120) : sci.impl.interpreter.interpret.call(null,G__89119,G__89120));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88881 = (function (){var G__89121 = ctx;
var G__89122 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89121,G__89122) : sci.impl.interpreter.interpret.call(null,G__89121,G__89122));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88882 = (function (){var G__89123 = ctx;
var G__89124 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89123,G__89124) : sci.impl.interpreter.interpret.call(null,G__89123,G__89124));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88883 = (function (){var G__89125 = ctx;
var G__89126 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89125,G__89126) : sci.impl.interpreter.interpret.call(null,G__89125,G__89126));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88884 = (function (){var G__89129 = ctx;
var G__89130 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89129,G__89130) : sci.impl.interpreter.interpret.call(null,G__89129,G__89130));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg88878,arg88879,arg88880,arg88881,arg88882,arg88883,arg88884) : f.call(null,arg88878,arg88879,arg88880,arg88881,arg88882,arg88883,arg88884));

break;
case (8):
var arg88885 = (function (){var G__89133 = ctx;
var G__89134 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89133,G__89134) : sci.impl.interpreter.interpret.call(null,G__89133,G__89134));
})();
var args__$1 = cljs.core.rest(args);
var arg88886 = (function (){var G__89136 = ctx;
var G__89137 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89136,G__89137) : sci.impl.interpreter.interpret.call(null,G__89136,G__89137));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88887 = (function (){var G__89139 = ctx;
var G__89140 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89139,G__89140) : sci.impl.interpreter.interpret.call(null,G__89139,G__89140));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88888 = (function (){var G__89142 = ctx;
var G__89143 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89142,G__89143) : sci.impl.interpreter.interpret.call(null,G__89142,G__89143));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88889 = (function (){var G__89144 = ctx;
var G__89145 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89144,G__89145) : sci.impl.interpreter.interpret.call(null,G__89144,G__89145));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88890 = (function (){var G__89146 = ctx;
var G__89147 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89146,G__89147) : sci.impl.interpreter.interpret.call(null,G__89146,G__89147));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88891 = (function (){var G__89148 = ctx;
var G__89149 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89148,G__89149) : sci.impl.interpreter.interpret.call(null,G__89148,G__89149));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88892 = (function (){var G__89150 = ctx;
var G__89151 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89150,G__89151) : sci.impl.interpreter.interpret.call(null,G__89150,G__89151));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg88885,arg88886,arg88887,arg88888,arg88889,arg88890,arg88891,arg88892) : f.call(null,arg88885,arg88886,arg88887,arg88888,arg88889,arg88890,arg88891,arg88892));

break;
case (9):
var arg88893 = (function (){var G__89154 = ctx;
var G__89155 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89154,G__89155) : sci.impl.interpreter.interpret.call(null,G__89154,G__89155));
})();
var args__$1 = cljs.core.rest(args);
var arg88894 = (function (){var G__89156 = ctx;
var G__89157 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89156,G__89157) : sci.impl.interpreter.interpret.call(null,G__89156,G__89157));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88895 = (function (){var G__89158 = ctx;
var G__89159 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89158,G__89159) : sci.impl.interpreter.interpret.call(null,G__89158,G__89159));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88896 = (function (){var G__89160 = ctx;
var G__89161 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89160,G__89161) : sci.impl.interpreter.interpret.call(null,G__89160,G__89161));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88897 = (function (){var G__89162 = ctx;
var G__89163 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89162,G__89163) : sci.impl.interpreter.interpret.call(null,G__89162,G__89163));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88898 = (function (){var G__89164 = ctx;
var G__89165 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89164,G__89165) : sci.impl.interpreter.interpret.call(null,G__89164,G__89165));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88899 = (function (){var G__89166 = ctx;
var G__89167 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89166,G__89167) : sci.impl.interpreter.interpret.call(null,G__89166,G__89167));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88900 = (function (){var G__89172 = ctx;
var G__89173 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89172,G__89173) : sci.impl.interpreter.interpret.call(null,G__89172,G__89173));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg88901 = (function (){var G__89174 = ctx;
var G__89175 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89174,G__89175) : sci.impl.interpreter.interpret.call(null,G__89174,G__89175));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg88893,arg88894,arg88895,arg88896,arg88897,arg88898,arg88899,arg88900,arg88901) : f.call(null,arg88893,arg88894,arg88895,arg88896,arg88897,arg88898,arg88899,arg88900,arg88901));

break;
case (10):
var arg88902 = (function (){var G__89184 = ctx;
var G__89185 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89184,G__89185) : sci.impl.interpreter.interpret.call(null,G__89184,G__89185));
})();
var args__$1 = cljs.core.rest(args);
var arg88903 = (function (){var G__89186 = ctx;
var G__89187 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89186,G__89187) : sci.impl.interpreter.interpret.call(null,G__89186,G__89187));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88904 = (function (){var G__89188 = ctx;
var G__89189 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89188,G__89189) : sci.impl.interpreter.interpret.call(null,G__89188,G__89189));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88905 = (function (){var G__89190 = ctx;
var G__89191 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89190,G__89191) : sci.impl.interpreter.interpret.call(null,G__89190,G__89191));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88906 = (function (){var G__89195 = ctx;
var G__89196 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89195,G__89196) : sci.impl.interpreter.interpret.call(null,G__89195,G__89196));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88907 = (function (){var G__89197 = ctx;
var G__89198 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89197,G__89198) : sci.impl.interpreter.interpret.call(null,G__89197,G__89198));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88908 = (function (){var G__89199 = ctx;
var G__89200 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89199,G__89200) : sci.impl.interpreter.interpret.call(null,G__89199,G__89200));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88909 = (function (){var G__89209 = ctx;
var G__89210 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89209,G__89210) : sci.impl.interpreter.interpret.call(null,G__89209,G__89210));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg88910 = (function (){var G__89211 = ctx;
var G__89212 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89211,G__89212) : sci.impl.interpreter.interpret.call(null,G__89211,G__89212));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg88911 = (function (){var G__89213 = ctx;
var G__89214 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89213,G__89214) : sci.impl.interpreter.interpret.call(null,G__89213,G__89214));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg88902,arg88903,arg88904,arg88905,arg88906,arg88907,arg88908,arg88909,arg88910,arg88911) : f.call(null,arg88902,arg88903,arg88904,arg88905,arg88906,arg88907,arg88908,arg88909,arg88910,arg88911));

break;
case (11):
var arg88912 = (function (){var G__89219 = ctx;
var G__89220 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89219,G__89220) : sci.impl.interpreter.interpret.call(null,G__89219,G__89220));
})();
var args__$1 = cljs.core.rest(args);
var arg88913 = (function (){var G__89221 = ctx;
var G__89222 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89221,G__89222) : sci.impl.interpreter.interpret.call(null,G__89221,G__89222));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88914 = (function (){var G__89227 = ctx;
var G__89228 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89227,G__89228) : sci.impl.interpreter.interpret.call(null,G__89227,G__89228));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88915 = (function (){var G__89229 = ctx;
var G__89230 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89229,G__89230) : sci.impl.interpreter.interpret.call(null,G__89229,G__89230));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88916 = (function (){var G__89231 = ctx;
var G__89232 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89231,G__89232) : sci.impl.interpreter.interpret.call(null,G__89231,G__89232));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88917 = (function (){var G__89233 = ctx;
var G__89234 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89233,G__89234) : sci.impl.interpreter.interpret.call(null,G__89233,G__89234));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88918 = (function (){var G__89235 = ctx;
var G__89236 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89235,G__89236) : sci.impl.interpreter.interpret.call(null,G__89235,G__89236));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88919 = (function (){var G__89237 = ctx;
var G__89238 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89237,G__89238) : sci.impl.interpreter.interpret.call(null,G__89237,G__89238));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg88920 = (function (){var G__89239 = ctx;
var G__89240 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89239,G__89240) : sci.impl.interpreter.interpret.call(null,G__89239,G__89240));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg88921 = (function (){var G__89245 = ctx;
var G__89246 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89245,G__89246) : sci.impl.interpreter.interpret.call(null,G__89245,G__89246));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg88922 = (function (){var G__89247 = ctx;
var G__89248 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89247,G__89248) : sci.impl.interpreter.interpret.call(null,G__89247,G__89248));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg88912,arg88913,arg88914,arg88915,arg88916,arg88917,arg88918,arg88919,arg88920,arg88921,arg88922) : f.call(null,arg88912,arg88913,arg88914,arg88915,arg88916,arg88917,arg88918,arg88919,arg88920,arg88921,arg88922));

break;
case (12):
var arg88923 = (function (){var G__89249 = ctx;
var G__89250 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89249,G__89250) : sci.impl.interpreter.interpret.call(null,G__89249,G__89250));
})();
var args__$1 = cljs.core.rest(args);
var arg88924 = (function (){var G__89251 = ctx;
var G__89252 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89251,G__89252) : sci.impl.interpreter.interpret.call(null,G__89251,G__89252));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88925 = (function (){var G__89253 = ctx;
var G__89254 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89253,G__89254) : sci.impl.interpreter.interpret.call(null,G__89253,G__89254));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88926 = (function (){var G__89255 = ctx;
var G__89256 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89255,G__89256) : sci.impl.interpreter.interpret.call(null,G__89255,G__89256));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88927 = (function (){var G__89257 = ctx;
var G__89258 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89257,G__89258) : sci.impl.interpreter.interpret.call(null,G__89257,G__89258));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88928 = (function (){var G__89259 = ctx;
var G__89260 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89259,G__89260) : sci.impl.interpreter.interpret.call(null,G__89259,G__89260));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88929 = (function (){var G__89261 = ctx;
var G__89262 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89261,G__89262) : sci.impl.interpreter.interpret.call(null,G__89261,G__89262));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88930 = (function (){var G__89263 = ctx;
var G__89264 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89263,G__89264) : sci.impl.interpreter.interpret.call(null,G__89263,G__89264));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg88931 = (function (){var G__89265 = ctx;
var G__89266 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89265,G__89266) : sci.impl.interpreter.interpret.call(null,G__89265,G__89266));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg88932 = (function (){var G__89267 = ctx;
var G__89268 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89267,G__89268) : sci.impl.interpreter.interpret.call(null,G__89267,G__89268));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg88933 = (function (){var G__89269 = ctx;
var G__89270 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89269,G__89270) : sci.impl.interpreter.interpret.call(null,G__89269,G__89270));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg88934 = (function (){var G__89271 = ctx;
var G__89272 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89271,G__89272) : sci.impl.interpreter.interpret.call(null,G__89271,G__89272));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg88923,arg88924,arg88925,arg88926,arg88927,arg88928,arg88929,arg88930,arg88931,arg88932,arg88933,arg88934) : f.call(null,arg88923,arg88924,arg88925,arg88926,arg88927,arg88928,arg88929,arg88930,arg88931,arg88932,arg88933,arg88934));

break;
case (13):
var arg88935 = (function (){var G__89273 = ctx;
var G__89274 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89273,G__89274) : sci.impl.interpreter.interpret.call(null,G__89273,G__89274));
})();
var args__$1 = cljs.core.rest(args);
var arg88936 = (function (){var G__89275 = ctx;
var G__89276 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89275,G__89276) : sci.impl.interpreter.interpret.call(null,G__89275,G__89276));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88937 = (function (){var G__89277 = ctx;
var G__89278 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89277,G__89278) : sci.impl.interpreter.interpret.call(null,G__89277,G__89278));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88938 = (function (){var G__89279 = ctx;
var G__89280 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89279,G__89280) : sci.impl.interpreter.interpret.call(null,G__89279,G__89280));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88939 = (function (){var G__89281 = ctx;
var G__89282 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89281,G__89282) : sci.impl.interpreter.interpret.call(null,G__89281,G__89282));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88940 = (function (){var G__89283 = ctx;
var G__89284 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89283,G__89284) : sci.impl.interpreter.interpret.call(null,G__89283,G__89284));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88941 = (function (){var G__89285 = ctx;
var G__89286 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89285,G__89286) : sci.impl.interpreter.interpret.call(null,G__89285,G__89286));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88942 = (function (){var G__89287 = ctx;
var G__89288 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89287,G__89288) : sci.impl.interpreter.interpret.call(null,G__89287,G__89288));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg88943 = (function (){var G__89289 = ctx;
var G__89290 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89289,G__89290) : sci.impl.interpreter.interpret.call(null,G__89289,G__89290));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg88944 = (function (){var G__89291 = ctx;
var G__89292 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89291,G__89292) : sci.impl.interpreter.interpret.call(null,G__89291,G__89292));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg88945 = (function (){var G__89293 = ctx;
var G__89294 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89293,G__89294) : sci.impl.interpreter.interpret.call(null,G__89293,G__89294));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg88946 = (function (){var G__89295 = ctx;
var G__89296 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89295,G__89296) : sci.impl.interpreter.interpret.call(null,G__89295,G__89296));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg88947 = (function (){var G__89297 = ctx;
var G__89298 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89297,G__89298) : sci.impl.interpreter.interpret.call(null,G__89297,G__89298));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg88935,arg88936,arg88937,arg88938,arg88939,arg88940,arg88941,arg88942,arg88943,arg88944,arg88945,arg88946,arg88947) : f.call(null,arg88935,arg88936,arg88937,arg88938,arg88939,arg88940,arg88941,arg88942,arg88943,arg88944,arg88945,arg88946,arg88947));

break;
case (14):
var arg88948 = (function (){var G__89299 = ctx;
var G__89300 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89299,G__89300) : sci.impl.interpreter.interpret.call(null,G__89299,G__89300));
})();
var args__$1 = cljs.core.rest(args);
var arg88949 = (function (){var G__89301 = ctx;
var G__89302 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89301,G__89302) : sci.impl.interpreter.interpret.call(null,G__89301,G__89302));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88950 = (function (){var G__89303 = ctx;
var G__89304 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89303,G__89304) : sci.impl.interpreter.interpret.call(null,G__89303,G__89304));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88951 = (function (){var G__89305 = ctx;
var G__89306 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89305,G__89306) : sci.impl.interpreter.interpret.call(null,G__89305,G__89306));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88952 = (function (){var G__89307 = ctx;
var G__89308 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89307,G__89308) : sci.impl.interpreter.interpret.call(null,G__89307,G__89308));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88953 = (function (){var G__89309 = ctx;
var G__89310 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89309,G__89310) : sci.impl.interpreter.interpret.call(null,G__89309,G__89310));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88954 = (function (){var G__89311 = ctx;
var G__89312 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89311,G__89312) : sci.impl.interpreter.interpret.call(null,G__89311,G__89312));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88955 = (function (){var G__89313 = ctx;
var G__89314 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89313,G__89314) : sci.impl.interpreter.interpret.call(null,G__89313,G__89314));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg88956 = (function (){var G__89315 = ctx;
var G__89316 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89315,G__89316) : sci.impl.interpreter.interpret.call(null,G__89315,G__89316));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg88957 = (function (){var G__89317 = ctx;
var G__89318 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89317,G__89318) : sci.impl.interpreter.interpret.call(null,G__89317,G__89318));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg88958 = (function (){var G__89319 = ctx;
var G__89320 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89319,G__89320) : sci.impl.interpreter.interpret.call(null,G__89319,G__89320));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg88959 = (function (){var G__89321 = ctx;
var G__89322 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89321,G__89322) : sci.impl.interpreter.interpret.call(null,G__89321,G__89322));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg88960 = (function (){var G__89323 = ctx;
var G__89324 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89323,G__89324) : sci.impl.interpreter.interpret.call(null,G__89323,G__89324));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg88961 = (function (){var G__89345 = ctx;
var G__89346 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89345,G__89346) : sci.impl.interpreter.interpret.call(null,G__89345,G__89346));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg88948,arg88949,arg88950,arg88951,arg88952,arg88953,arg88954,arg88955,arg88956,arg88957,arg88958,arg88959,arg88960,arg88961) : f.call(null,arg88948,arg88949,arg88950,arg88951,arg88952,arg88953,arg88954,arg88955,arg88956,arg88957,arg88958,arg88959,arg88960,arg88961));

break;
case (15):
var arg88962 = (function (){var G__89347 = ctx;
var G__89348 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89347,G__89348) : sci.impl.interpreter.interpret.call(null,G__89347,G__89348));
})();
var args__$1 = cljs.core.rest(args);
var arg88963 = (function (){var G__89349 = ctx;
var G__89350 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89349,G__89350) : sci.impl.interpreter.interpret.call(null,G__89349,G__89350));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88964 = (function (){var G__89351 = ctx;
var G__89352 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89351,G__89352) : sci.impl.interpreter.interpret.call(null,G__89351,G__89352));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88965 = (function (){var G__89353 = ctx;
var G__89354 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89353,G__89354) : sci.impl.interpreter.interpret.call(null,G__89353,G__89354));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88966 = (function (){var G__89355 = ctx;
var G__89356 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89355,G__89356) : sci.impl.interpreter.interpret.call(null,G__89355,G__89356));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88967 = (function (){var G__89357 = ctx;
var G__89358 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89357,G__89358) : sci.impl.interpreter.interpret.call(null,G__89357,G__89358));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88968 = (function (){var G__89359 = ctx;
var G__89360 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89359,G__89360) : sci.impl.interpreter.interpret.call(null,G__89359,G__89360));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88969 = (function (){var G__89361 = ctx;
var G__89362 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89361,G__89362) : sci.impl.interpreter.interpret.call(null,G__89361,G__89362));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg88970 = (function (){var G__89363 = ctx;
var G__89364 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89363,G__89364) : sci.impl.interpreter.interpret.call(null,G__89363,G__89364));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg88971 = (function (){var G__89365 = ctx;
var G__89366 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89365,G__89366) : sci.impl.interpreter.interpret.call(null,G__89365,G__89366));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg88972 = (function (){var G__89367 = ctx;
var G__89368 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89367,G__89368) : sci.impl.interpreter.interpret.call(null,G__89367,G__89368));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg88973 = (function (){var G__89369 = ctx;
var G__89370 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89369,G__89370) : sci.impl.interpreter.interpret.call(null,G__89369,G__89370));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg88974 = (function (){var G__89371 = ctx;
var G__89372 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89371,G__89372) : sci.impl.interpreter.interpret.call(null,G__89371,G__89372));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg88975 = (function (){var G__89373 = ctx;
var G__89374 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89373,G__89374) : sci.impl.interpreter.interpret.call(null,G__89373,G__89374));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg88976 = (function (){var G__89375 = ctx;
var G__89376 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89375,G__89376) : sci.impl.interpreter.interpret.call(null,G__89375,G__89376));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg88962,arg88963,arg88964,arg88965,arg88966,arg88967,arg88968,arg88969,arg88970,arg88971,arg88972,arg88973,arg88974,arg88975,arg88976) : f.call(null,arg88962,arg88963,arg88964,arg88965,arg88966,arg88967,arg88968,arg88969,arg88970,arg88971,arg88972,arg88973,arg88974,arg88975,arg88976));

break;
case (16):
var arg88977 = (function (){var G__89377 = ctx;
var G__89378 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89377,G__89378) : sci.impl.interpreter.interpret.call(null,G__89377,G__89378));
})();
var args__$1 = cljs.core.rest(args);
var arg88978 = (function (){var G__89379 = ctx;
var G__89380 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89379,G__89380) : sci.impl.interpreter.interpret.call(null,G__89379,G__89380));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88979 = (function (){var G__89381 = ctx;
var G__89382 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89381,G__89382) : sci.impl.interpreter.interpret.call(null,G__89381,G__89382));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88980 = (function (){var G__89383 = ctx;
var G__89384 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89383,G__89384) : sci.impl.interpreter.interpret.call(null,G__89383,G__89384));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88981 = (function (){var G__89385 = ctx;
var G__89386 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89385,G__89386) : sci.impl.interpreter.interpret.call(null,G__89385,G__89386));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88982 = (function (){var G__89387 = ctx;
var G__89388 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89387,G__89388) : sci.impl.interpreter.interpret.call(null,G__89387,G__89388));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88983 = (function (){var G__89389 = ctx;
var G__89390 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89389,G__89390) : sci.impl.interpreter.interpret.call(null,G__89389,G__89390));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg88984 = (function (){var G__89391 = ctx;
var G__89392 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89391,G__89392) : sci.impl.interpreter.interpret.call(null,G__89391,G__89392));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg88985 = (function (){var G__89393 = ctx;
var G__89394 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89393,G__89394) : sci.impl.interpreter.interpret.call(null,G__89393,G__89394));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg88986 = (function (){var G__89395 = ctx;
var G__89396 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89395,G__89396) : sci.impl.interpreter.interpret.call(null,G__89395,G__89396));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg88987 = (function (){var G__89397 = ctx;
var G__89398 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89397,G__89398) : sci.impl.interpreter.interpret.call(null,G__89397,G__89398));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg88988 = (function (){var G__89399 = ctx;
var G__89400 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89399,G__89400) : sci.impl.interpreter.interpret.call(null,G__89399,G__89400));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg88989 = (function (){var G__89401 = ctx;
var G__89402 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89401,G__89402) : sci.impl.interpreter.interpret.call(null,G__89401,G__89402));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg88990 = (function (){var G__89403 = ctx;
var G__89404 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89403,G__89404) : sci.impl.interpreter.interpret.call(null,G__89403,G__89404));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg88991 = (function (){var G__89405 = ctx;
var G__89406 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89405,G__89406) : sci.impl.interpreter.interpret.call(null,G__89405,G__89406));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg88992 = (function (){var G__89407 = ctx;
var G__89408 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89407,G__89408) : sci.impl.interpreter.interpret.call(null,G__89407,G__89408));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg88977,arg88978,arg88979,arg88980,arg88981,arg88982,arg88983,arg88984,arg88985,arg88986,arg88987,arg88988,arg88989,arg88990,arg88991,arg88992) : f.call(null,arg88977,arg88978,arg88979,arg88980,arg88981,arg88982,arg88983,arg88984,arg88985,arg88986,arg88987,arg88988,arg88989,arg88990,arg88991,arg88992));

break;
case (17):
var arg88993 = (function (){var G__89409 = ctx;
var G__89410 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89409,G__89410) : sci.impl.interpreter.interpret.call(null,G__89409,G__89410));
})();
var args__$1 = cljs.core.rest(args);
var arg88994 = (function (){var G__89411 = ctx;
var G__89412 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89411,G__89412) : sci.impl.interpreter.interpret.call(null,G__89411,G__89412));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg88995 = (function (){var G__89413 = ctx;
var G__89414 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89413,G__89414) : sci.impl.interpreter.interpret.call(null,G__89413,G__89414));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg88996 = (function (){var G__89415 = ctx;
var G__89416 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89415,G__89416) : sci.impl.interpreter.interpret.call(null,G__89415,G__89416));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg88997 = (function (){var G__89417 = ctx;
var G__89418 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89417,G__89418) : sci.impl.interpreter.interpret.call(null,G__89417,G__89418));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg88998 = (function (){var G__89419 = ctx;
var G__89420 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89419,G__89420) : sci.impl.interpreter.interpret.call(null,G__89419,G__89420));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg88999 = (function (){var G__89421 = ctx;
var G__89422 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89421,G__89422) : sci.impl.interpreter.interpret.call(null,G__89421,G__89422));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89000 = (function (){var G__89423 = ctx;
var G__89424 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89423,G__89424) : sci.impl.interpreter.interpret.call(null,G__89423,G__89424));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89001 = (function (){var G__89425 = ctx;
var G__89426 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89425,G__89426) : sci.impl.interpreter.interpret.call(null,G__89425,G__89426));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89002 = (function (){var G__89427 = ctx;
var G__89428 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89427,G__89428) : sci.impl.interpreter.interpret.call(null,G__89427,G__89428));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89003 = (function (){var G__89429 = ctx;
var G__89430 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89429,G__89430) : sci.impl.interpreter.interpret.call(null,G__89429,G__89430));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89004 = (function (){var G__89431 = ctx;
var G__89432 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89431,G__89432) : sci.impl.interpreter.interpret.call(null,G__89431,G__89432));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89005 = (function (){var G__89433 = ctx;
var G__89434 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89433,G__89434) : sci.impl.interpreter.interpret.call(null,G__89433,G__89434));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89006 = (function (){var G__89435 = ctx;
var G__89436 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89435,G__89436) : sci.impl.interpreter.interpret.call(null,G__89435,G__89436));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg89007 = (function (){var G__89437 = ctx;
var G__89438 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89437,G__89438) : sci.impl.interpreter.interpret.call(null,G__89437,G__89438));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg89008 = (function (){var G__89439 = ctx;
var G__89440 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89439,G__89440) : sci.impl.interpreter.interpret.call(null,G__89439,G__89440));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg89009 = (function (){var G__89441 = ctx;
var G__89442 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89441,G__89442) : sci.impl.interpreter.interpret.call(null,G__89441,G__89442));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg88993,arg88994,arg88995,arg88996,arg88997,arg88998,arg88999,arg89000,arg89001,arg89002,arg89003,arg89004,arg89005,arg89006,arg89007,arg89008,arg89009) : f.call(null,arg88993,arg88994,arg88995,arg88996,arg88997,arg88998,arg88999,arg89000,arg89001,arg89002,arg89003,arg89004,arg89005,arg89006,arg89007,arg89008,arg89009));

break;
case (18):
var arg89010 = (function (){var G__89443 = ctx;
var G__89444 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89443,G__89444) : sci.impl.interpreter.interpret.call(null,G__89443,G__89444));
})();
var args__$1 = cljs.core.rest(args);
var arg89011 = (function (){var G__89445 = ctx;
var G__89446 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89445,G__89446) : sci.impl.interpreter.interpret.call(null,G__89445,G__89446));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89012 = (function (){var G__89447 = ctx;
var G__89448 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89447,G__89448) : sci.impl.interpreter.interpret.call(null,G__89447,G__89448));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89013 = (function (){var G__89449 = ctx;
var G__89450 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89449,G__89450) : sci.impl.interpreter.interpret.call(null,G__89449,G__89450));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89014 = (function (){var G__89451 = ctx;
var G__89452 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89451,G__89452) : sci.impl.interpreter.interpret.call(null,G__89451,G__89452));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89015 = (function (){var G__89453 = ctx;
var G__89454 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89453,G__89454) : sci.impl.interpreter.interpret.call(null,G__89453,G__89454));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89016 = (function (){var G__89455 = ctx;
var G__89456 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89455,G__89456) : sci.impl.interpreter.interpret.call(null,G__89455,G__89456));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89017 = (function (){var G__89457 = ctx;
var G__89458 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89457,G__89458) : sci.impl.interpreter.interpret.call(null,G__89457,G__89458));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89018 = (function (){var G__89459 = ctx;
var G__89460 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89459,G__89460) : sci.impl.interpreter.interpret.call(null,G__89459,G__89460));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89019 = (function (){var G__89461 = ctx;
var G__89462 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89461,G__89462) : sci.impl.interpreter.interpret.call(null,G__89461,G__89462));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89020 = (function (){var G__89463 = ctx;
var G__89464 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89463,G__89464) : sci.impl.interpreter.interpret.call(null,G__89463,G__89464));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89021 = (function (){var G__89465 = ctx;
var G__89466 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89465,G__89466) : sci.impl.interpreter.interpret.call(null,G__89465,G__89466));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89022 = (function (){var G__89467 = ctx;
var G__89468 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89467,G__89468) : sci.impl.interpreter.interpret.call(null,G__89467,G__89468));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89023 = (function (){var G__89469 = ctx;
var G__89470 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89469,G__89470) : sci.impl.interpreter.interpret.call(null,G__89469,G__89470));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg89024 = (function (){var G__89471 = ctx;
var G__89472 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89471,G__89472) : sci.impl.interpreter.interpret.call(null,G__89471,G__89472));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg89025 = (function (){var G__89473 = ctx;
var G__89474 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89473,G__89474) : sci.impl.interpreter.interpret.call(null,G__89473,G__89474));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg89026 = (function (){var G__89475 = ctx;
var G__89476 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89475,G__89476) : sci.impl.interpreter.interpret.call(null,G__89475,G__89476));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg89027 = (function (){var G__89477 = ctx;
var G__89478 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89477,G__89478) : sci.impl.interpreter.interpret.call(null,G__89477,G__89478));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg89010,arg89011,arg89012,arg89013,arg89014,arg89015,arg89016,arg89017,arg89018,arg89019,arg89020,arg89021,arg89022,arg89023,arg89024,arg89025,arg89026,arg89027) : f.call(null,arg89010,arg89011,arg89012,arg89013,arg89014,arg89015,arg89016,arg89017,arg89018,arg89019,arg89020,arg89021,arg89022,arg89023,arg89024,arg89025,arg89026,arg89027));

break;
case (19):
var arg89028 = (function (){var G__89479 = ctx;
var G__89480 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89479,G__89480) : sci.impl.interpreter.interpret.call(null,G__89479,G__89480));
})();
var args__$1 = cljs.core.rest(args);
var arg89029 = (function (){var G__89481 = ctx;
var G__89482 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89481,G__89482) : sci.impl.interpreter.interpret.call(null,G__89481,G__89482));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89030 = (function (){var G__89483 = ctx;
var G__89484 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89483,G__89484) : sci.impl.interpreter.interpret.call(null,G__89483,G__89484));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89031 = (function (){var G__89485 = ctx;
var G__89486 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89485,G__89486) : sci.impl.interpreter.interpret.call(null,G__89485,G__89486));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89032 = (function (){var G__89487 = ctx;
var G__89488 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89487,G__89488) : sci.impl.interpreter.interpret.call(null,G__89487,G__89488));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89033 = (function (){var G__89489 = ctx;
var G__89490 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89489,G__89490) : sci.impl.interpreter.interpret.call(null,G__89489,G__89490));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89034 = (function (){var G__89491 = ctx;
var G__89492 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89491,G__89492) : sci.impl.interpreter.interpret.call(null,G__89491,G__89492));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89035 = (function (){var G__89493 = ctx;
var G__89494 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89493,G__89494) : sci.impl.interpreter.interpret.call(null,G__89493,G__89494));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89036 = (function (){var G__89495 = ctx;
var G__89496 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89495,G__89496) : sci.impl.interpreter.interpret.call(null,G__89495,G__89496));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89037 = (function (){var G__89497 = ctx;
var G__89498 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89497,G__89498) : sci.impl.interpreter.interpret.call(null,G__89497,G__89498));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89038 = (function (){var G__89499 = ctx;
var G__89500 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89499,G__89500) : sci.impl.interpreter.interpret.call(null,G__89499,G__89500));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89039 = (function (){var G__89501 = ctx;
var G__89502 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89501,G__89502) : sci.impl.interpreter.interpret.call(null,G__89501,G__89502));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89040 = (function (){var G__89503 = ctx;
var G__89504 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89503,G__89504) : sci.impl.interpreter.interpret.call(null,G__89503,G__89504));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89041 = (function (){var G__89505 = ctx;
var G__89506 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89505,G__89506) : sci.impl.interpreter.interpret.call(null,G__89505,G__89506));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg89042 = (function (){var G__89507 = ctx;
var G__89508 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89507,G__89508) : sci.impl.interpreter.interpret.call(null,G__89507,G__89508));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg89043 = (function (){var G__89509 = ctx;
var G__89510 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89509,G__89510) : sci.impl.interpreter.interpret.call(null,G__89509,G__89510));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg89044 = (function (){var G__89511 = ctx;
var G__89512 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89511,G__89512) : sci.impl.interpreter.interpret.call(null,G__89511,G__89512));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg89045 = (function (){var G__89513 = ctx;
var G__89514 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89513,G__89514) : sci.impl.interpreter.interpret.call(null,G__89513,G__89514));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg89046 = (function (){var G__89515 = ctx;
var G__89516 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89515,G__89516) : sci.impl.interpreter.interpret.call(null,G__89515,G__89516));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg89028,arg89029,arg89030,arg89031,arg89032,arg89033,arg89034,arg89035,arg89036,arg89037,arg89038,arg89039,arg89040,arg89041,arg89042,arg89043,arg89044,arg89045,arg89046) : f.call(null,arg89028,arg89029,arg89030,arg89031,arg89032,arg89033,arg89034,arg89035,arg89036,arg89037,arg89038,arg89039,arg89040,arg89041,arg89042,arg89043,arg89044,arg89045,arg89046));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__89517 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__89517)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__89517)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__89517)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__89517)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__89517)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__89517)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__89518 = ctx;
var G__89519 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89518,G__89519) : sci.impl.interpreter.interpret.call(null,G__89518,G__89519));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__89517)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__89517)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__89517)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__89517)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__89517)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__89517)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__89517)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__89517)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__89517)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__89520 = ctx;
var G__89521 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89520,G__89521) : sci.impl.interpreter.interpret.call(null,G__89520,G__89521));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__89517)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__89517)){
return (new cljs.core.LazySeq(null,(function (){var G__89522 = ctx;
var G__89523 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89522,G__89523) : sci.impl.interpreter.interpret.call(null,G__89522,G__89523));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__89517)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__89517)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__89517)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__89517)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89517)].join('')));

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
if(cljs.core.truth_((function (){var G__89525 = op;
var G__89526 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__89525,G__89526) : sci.impl.utils.kw_identical_QMARK_.call(null,G__89525,G__89526));
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
}catch (e89524){if((e89524 instanceof Error)){
var e = e89524;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e89524;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__89536 = op;
var G__89536__$1 = (((G__89536 instanceof cljs.core.Keyword))?G__89536.fqn:null);
switch (G__89536__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89530_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89530_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89530_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89531_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89531_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89531_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89532_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89532_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89532_SHARP_));
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
var G__89831 = cljs.core.rest(exprs);
var G__89832 = (function (){var G__89548 = ctx;
var G__89549 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__89548,G__89549) : sci.impl.interpreter.eval_form.call(null,G__89548,G__89549));
})();
exprs = G__89831;
ret = G__89832;
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
if(cljs.core.truth_((function (){var G__89552 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__89553 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__89552,G__89553) : sci.impl.utils.kw_identical_QMARK_.call(null,G__89552,G__89553));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__89853 = ret__$1;
ret = G__89853;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__89555 = arguments.length;
switch (G__89555) {
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
