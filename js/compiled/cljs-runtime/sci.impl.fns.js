goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(fn_name,macro_QMARK_,args){
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.parse_fn_args_PLUS_body = (function sci$impl$fns$parse_fn_args_PLUS_body(ctx,interpret,eval_do_STAR_,p__62595,fn_name,macro_QMARK_,with_meta_QMARK_){
var map__62596 = p__62595;
var map__62596__$1 = (((((!((map__62596 == null))))?(((((map__62596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62596):map__62596);
var _m = map__62596__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62596__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62596__$1,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62596__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62596__$1,new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648));
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var f = (function() { 
var sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate = function (args){
while(true){
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var bindings__$1 = (function (){var args__$1 = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args__$1);
} else {
if(args__$1){
} else {
sci.impl.fns.throw_arity(fn_name,macro_QMARK_,args__$1);
}

var G__62614 = cljs.core.next(args__$1);
var G__62615 = cljs.core.next(params__$1);
var G__62616 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,fp,cljs.core.first(args__$1));
args__$1 = G__62614;
params__$1 = G__62615;
ret = G__62616;
continue;
}
} else {
if(args__$1){
sci.impl.fns.throw_arity(fn_name,macro_QMARK_,args__$1);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body)))?(function (){var G__62598 = ctx__$1;
var G__62599 = cljs.core.first(body);
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(G__62598,G__62599) : interpret.call(null,G__62598,G__62599));
})():(eval_do_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_do_STAR_.cljs$core$IFn$_invoke$arity$2(ctx__$1,body) : eval_do_STAR_.call(null,ctx__$1,body)));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
if(cljs.core.truth_(min_var_args_arity)){
var vec__62600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62600,(0),null);
var vec__62603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62600,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62603,(0),null);
var G__62617 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__62617;
continue;
} else {
var G__62618 = recur_val;
args = G__62618;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62619__i = 0, G__62619__a = new Array(arguments.length -  0);
while (G__62619__i < G__62619__a.length) {G__62619__a[G__62619__i] = arguments[G__62619__i + 0]; ++G__62619__i;}
  args = new cljs.core.IndexedSeq(G__62619__a,0,null);
} 
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate.call(this,args);};
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$lang$maxFixedArity = 0;
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$lang$applyTo = (function (arglist__62620){
var args = cljs.core.seq(arglist__62620);
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate(args);
});
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate;
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn;
})()
;
if(cljs.core.truth_(with_meta_QMARK_)){
return cljs.core.with_meta(f,(cljs.core.truth_(min_var_args_arity)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721),min_var_args_arity], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity], null)));
} else {
return f;
}
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
return cljs.core.some((function (f){
var map__62607 = cljs.core.meta(f);
var map__62607__$1 = (((((!((map__62607 == null))))?(((((map__62607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62607):map__62607);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62607__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62607__$1,new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721));
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,fixed_arity);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = min_var_args_arity;
if(cljs.core.truth_(and__4115__auto__)){
return (arity >= min_var_args_arity);
} else {
return and__4115__auto__;
}
}
})())){
return f;
} else {
return null;
}
}),arities);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,eval_do_STAR_,p__62611){
var map__62612 = p__62611;
var map__62612__$1 = (((((!((map__62612 == null))))?(((((map__62612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62612):map__62612);
var f = map__62612__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62612__$1,new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62612__$1,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569));
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var call_self = (function() { 
var G__62623__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var G__62623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62624__i = 0, G__62624__a = new Array(arguments.length -  0);
while (G__62624__i < G__62624__a.length) {G__62624__a[G__62624__i] = arguments[G__62624__i + 0]; ++G__62624__i;}
  args = new cljs.core.IndexedSeq(G__62624__a,0,null);
} 
return G__62623__delegate.call(this,args);};
G__62623.cljs$lang$maxFixedArity = 0;
G__62623.cljs$lang$applyTo = (function (arglist__62625){
var args = cljs.core.seq(arglist__62625);
return G__62623__delegate(args);
});
G__62623.cljs$core$IFn$_invoke$arity$variadic = G__62623__delegate;
return G__62623;
})()
;
var ctx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),call_self):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.parse_fn_args_PLUS_body(ctx__$1,interpret,eval_do_STAR_,cljs.core.first(fn_bodies),fn_name,macro_QMARK_,false):(function (){var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62609_SHARP_){
return sci.impl.fns.parse_fn_args_PLUS_body(ctx__$1,interpret,eval_do_STAR_,p1__62609_SHARP_,fn_name,macro_QMARK_,true);
}),fn_bodies);
return (function() { 
var G__62627__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5733__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5733__auto__)){
var f__$1 = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__62627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62629__i = 0, G__62629__a = new Array(arguments.length -  0);
while (G__62629__i < G__62629__a.length) {G__62629__a[G__62629__i] = arguments[G__62629__i + 0]; ++G__62629__i;}
  args = new cljs.core.IndexedSeq(G__62629__a,0,null);
} 
return G__62627__delegate.call(this,args);};
G__62627.cljs$lang$maxFixedArity = 0;
G__62627.cljs$lang$applyTo = (function (arglist__62630){
var args = cljs.core.seq(arglist__62630);
return G__62627__delegate(args);
});
G__62627.cljs$core$IFn$_invoke$arity$variadic = G__62627__delegate;
return G__62627;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__62610_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62610_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});

//# sourceMappingURL=sci.impl.fns.js.map
