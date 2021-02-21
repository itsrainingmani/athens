goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__62639 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62640 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62640);

try{var G__62641 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__62641);

return G__62641;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62639);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__62642 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62643 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62643);

try{var G__62644 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__62644);

return G__62644;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62642);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__62645 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62646 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62646);

try{var G__62648 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__62648);

return G__62648;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62645);
}})();
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62671 = arguments.length;
var i__4737__auto___62672 = (0);
while(true){
if((i__4737__auto___62672 < len__4736__auto___62671)){
args__4742__auto__.push((arguments[i__4737__auto___62672]));

var G__62673 = (i__4737__auto___62672 + (1));
i__4737__auto___62672 = G__62673;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62652 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__62653 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62653);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62652);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq62649){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62649));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62677 = arguments.length;
var i__4737__auto___62678 = (0);
while(true){
if((i__4737__auto___62678 < len__4736__auto___62677)){
args__4742__auto__.push((arguments[i__4737__auto___62678]));

var G__62679 = (i__4737__auto___62678 + (1));
i__4737__auto___62678 = G__62679;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62658 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__62659 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62659);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62658);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq62656){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62656));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62680 = arguments.length;
var i__4737__auto___62681 = (0);
while(true){
if((i__4737__auto___62681 < len__4736__auto___62680)){
args__4742__auto__.push((arguments[i__4737__auto___62681]));

var G__62682 = (i__4737__auto___62681 + (1));
i__4737__auto___62681 = G__62682;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62661 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__62662 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62662);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62661);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq62660){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62660));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62693 = arguments.length;
var i__4737__auto___62694 = (0);
while(true){
if((i__4737__auto___62694 < len__4736__auto___62693)){
args__4742__auto__.push((arguments[i__4737__auto___62694]));

var G__62695 = (i__4737__auto___62694 + (1));
i__4737__auto___62694 = G__62695;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62664 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__62665 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62665);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62664);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq62663){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62663));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62696 = arguments.length;
var i__4737__auto___62697 = (0);
while(true){
if((i__4737__auto___62697 < len__4736__auto___62696)){
args__4742__auto__.push((arguments[i__4737__auto___62697]));

var G__62698 = (i__4737__auto___62697 + (1));
i__4737__auto___62697 = G__62698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__62666__auto__","s__62666__auto__",-2096516690,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__62666__auto__","s__62666__auto__",-2096516690,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__62666__auto__","s__62666__auto__",-2096516690,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq62667){
var G__62668 = cljs.core.first(seq62667);
var seq62667__$1 = cljs.core.next(seq62667);
var G__62669 = cljs.core.first(seq62667__$1);
var seq62667__$2 = cljs.core.next(seq62667__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62668,G__62669,seq62667__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
