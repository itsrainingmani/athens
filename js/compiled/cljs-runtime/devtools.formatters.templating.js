goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x23502_23569 = value;
(x23502_23569.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x23504_23570 = value;
(x23504_23570.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x23506_23571 = value;
(x23506_23571.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23572 = arguments.length;
var i__4737__auto___23573 = (0);
while(true){
if((i__4737__auto___23573 < len__4736__auto___23572)){
args__4742__auto__.push((arguments[i__4737__auto___23573]));

var G__23574 = (i__4737__auto___23573 + (1));
i__4737__auto___23573 = G__23574;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__23509_23575 = cljs.core.seq(items);
var chunk__23510_23576 = null;
var count__23511_23577 = (0);
var i__23512_23578 = (0);
while(true){
if((i__23512_23578 < count__23511_23577)){
var item_23579 = chunk__23510_23576.cljs$core$IIndexed$_nth$arity$2(null,i__23512_23578);
if((!((item_23579 == null)))){
if(cljs.core.coll_QMARK_(item_23579)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_23579)));
} else {
group.push(devtools.formatters.helpers.pref(item_23579));
}
} else {
}


var G__23580 = seq__23509_23575;
var G__23581 = chunk__23510_23576;
var G__23582 = count__23511_23577;
var G__23583 = (i__23512_23578 + (1));
seq__23509_23575 = G__23580;
chunk__23510_23576 = G__23581;
count__23511_23577 = G__23582;
i__23512_23578 = G__23583;
continue;
} else {
var temp__5735__auto___23584 = cljs.core.seq(seq__23509_23575);
if(temp__5735__auto___23584){
var seq__23509_23585__$1 = temp__5735__auto___23584;
if(cljs.core.chunked_seq_QMARK_(seq__23509_23585__$1)){
var c__4556__auto___23586 = cljs.core.chunk_first(seq__23509_23585__$1);
var G__23587 = cljs.core.chunk_rest(seq__23509_23585__$1);
var G__23588 = c__4556__auto___23586;
var G__23589 = cljs.core.count(c__4556__auto___23586);
var G__23590 = (0);
seq__23509_23575 = G__23587;
chunk__23510_23576 = G__23588;
count__23511_23577 = G__23589;
i__23512_23578 = G__23590;
continue;
} else {
var item_23591 = cljs.core.first(seq__23509_23585__$1);
if((!((item_23591 == null)))){
if(cljs.core.coll_QMARK_(item_23591)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_23591)));
} else {
group.push(devtools.formatters.helpers.pref(item_23591));
}
} else {
}


var G__23592 = cljs.core.next(seq__23509_23585__$1);
var G__23593 = null;
var G__23594 = (0);
var G__23595 = (0);
seq__23509_23575 = G__23592;
chunk__23510_23576 = G__23593;
count__23511_23577 = G__23594;
i__23512_23578 = G__23595;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq23508){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23508));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23596 = arguments.length;
var i__4737__auto___23597 = (0);
while(true){
if((i__4737__auto___23597 < len__4736__auto___23596)){
args__4742__auto__.push((arguments[i__4737__auto___23597]));

var G__23598 = (i__4737__auto___23597 + (1));
i__4737__auto___23597 = G__23598;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__23519_23599 = cljs.core.seq(children);
var chunk__23520_23600 = null;
var count__23521_23601 = (0);
var i__23522_23602 = (0);
while(true){
if((i__23522_23602 < count__23521_23601)){
var child_23603 = chunk__23520_23600.cljs$core$IIndexed$_nth$arity$2(null,i__23522_23602);
if((!((child_23603 == null)))){
if(cljs.core.coll_QMARK_(child_23603)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_23603))));
} else {
var temp__5733__auto___23604 = devtools.formatters.helpers.pref(child_23603);
if(cljs.core.truth_(temp__5733__auto___23604)){
var child_value_23605 = temp__5733__auto___23604;
template.push(child_value_23605);
} else {
}
}
} else {
}


var G__23606 = seq__23519_23599;
var G__23607 = chunk__23520_23600;
var G__23608 = count__23521_23601;
var G__23609 = (i__23522_23602 + (1));
seq__23519_23599 = G__23606;
chunk__23520_23600 = G__23607;
count__23521_23601 = G__23608;
i__23522_23602 = G__23609;
continue;
} else {
var temp__5735__auto___23610 = cljs.core.seq(seq__23519_23599);
if(temp__5735__auto___23610){
var seq__23519_23611__$1 = temp__5735__auto___23610;
if(cljs.core.chunked_seq_QMARK_(seq__23519_23611__$1)){
var c__4556__auto___23612 = cljs.core.chunk_first(seq__23519_23611__$1);
var G__23613 = cljs.core.chunk_rest(seq__23519_23611__$1);
var G__23614 = c__4556__auto___23612;
var G__23615 = cljs.core.count(c__4556__auto___23612);
var G__23616 = (0);
seq__23519_23599 = G__23613;
chunk__23520_23600 = G__23614;
count__23521_23601 = G__23615;
i__23522_23602 = G__23616;
continue;
} else {
var child_23617 = cljs.core.first(seq__23519_23611__$1);
if((!((child_23617 == null)))){
if(cljs.core.coll_QMARK_(child_23617)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_23617))));
} else {
var temp__5733__auto___23618 = devtools.formatters.helpers.pref(child_23617);
if(cljs.core.truth_(temp__5733__auto___23618)){
var child_value_23619 = temp__5733__auto___23618;
template.push(child_value_23619);
} else {
}
}
} else {
}


var G__23620 = cljs.core.next(seq__23519_23611__$1);
var G__23621 = null;
var G__23622 = (0);
var G__23623 = (0);
seq__23519_23599 = G__23620;
chunk__23520_23600 = G__23621;
count__23521_23601 = G__23622;
i__23522_23602 = G__23623;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq23516){
var G__23517 = cljs.core.first(seq23516);
var seq23516__$1 = cljs.core.next(seq23516);
var G__23518 = cljs.core.first(seq23516__$1);
var seq23516__$2 = cljs.core.next(seq23516__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23517,G__23518,seq23516__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23624 = arguments.length;
var i__4737__auto___23625 = (0);
while(true){
if((i__4737__auto___23625 < len__4736__auto___23624)){
args__4742__auto__.push((arguments[i__4737__auto___23625]));

var G__23626 = (i__4737__auto___23625 + (1));
i__4737__auto___23625 = G__23626;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq23523){
var G__23524 = cljs.core.first(seq23523);
var seq23523__$1 = cljs.core.next(seq23523);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23524,seq23523__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23631 = arguments.length;
var i__4737__auto___23632 = (0);
while(true){
if((i__4737__auto___23632 < len__4736__auto___23631)){
args__4742__auto__.push((arguments[i__4737__auto___23632]));

var G__23633 = (i__4737__auto___23632 + (1));
i__4737__auto___23632 = G__23633;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq23525){
var G__23526 = cljs.core.first(seq23525);
var seq23525__$1 = cljs.core.next(seq23525);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23526,seq23525__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__23529 = arguments.length;
switch (G__23529) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj23531 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4126__auto__ = start_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()});
return obj23531;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23635 = arguments.length;
var i__4737__auto___23636 = (0);
while(true){
if((i__4737__auto___23636 < len__4736__auto___23635)){
args__4742__auto__.push((arguments[i__4737__auto___23636]));

var G__23637 = (i__4737__auto___23636 + (1));
i__4737__auto___23636 = G__23637;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__23540){
var vec__23541 = p__23540;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23541,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__23544 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__23544) : state_override_fn.call(null,G__23544));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq23534){
var G__23535 = cljs.core.first(seq23534);
var seq23534__$1 = cljs.core.next(seq23534);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23535,seq23534__$1);
}));

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__23547 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__23548 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__23548);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__23547);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__23556 = name;
switch (G__23556) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
default:
return devtools.formatters.templating.assert_markup_error(["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_(v)) || (cljs.core.array_QMARK_(v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__23560 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__23563 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__23564 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__23564);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error(["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__23563);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__23565 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__23566 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__23567 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__23568 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__23567);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__23568);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__23566);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__23565);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"initial value: ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__23639 = initial_value;
var G__23640 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__23639;
value = G__23640;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__23641 = initial_value;
var G__23642 = devtools.formatters.helpers.pref(value);
initial_value = G__23641;
value = G__23642;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__23643 = initial_value;
var G__23644 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__23643;
value = G__23644;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});

//# sourceMappingURL=devtools.formatters.templating.js.map
