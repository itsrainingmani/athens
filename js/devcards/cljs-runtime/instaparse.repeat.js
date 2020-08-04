goog.provide('instaparse.repeat');
goog.require('cljs.core');
goog.require('instaparse.gll');
goog.require('instaparse.combinators_source');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.viz');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');
instaparse.repeat.empty_result_QMARK_ = (function instaparse$repeat$empty_result_QMARK_(result){
return ((((cljs.core.vector_QMARK_(result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),(1))))) || (((cljs.core.map_QMARK_(result)) && (cljs.core.contains_QMARK_(result,new cljs.core.Keyword(null,"tag","tag",-1290361223))) && (cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"content","content",15833224)))))) || (cljs.core.empty_QMARK_(result)));
});
instaparse.repeat.failure_signal = instaparse.gll.__GT_Failure(null,null);
instaparse.repeat.get_end = (function instaparse$repeat$get_end(var_args){
var G__56449 = arguments.length;
switch (G__56449) {
case 1:
return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1 = (function (parse){
var vec__56450 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56450,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56450,(1),null);
if(cljs.core.truth_(end)){
return cljs.core.long$(end);
} else {
return cljs.core.count(parse);
}
}));

(instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2 = (function (parse,index){
var vec__56453 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56453,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56453,(1),null);
if(cljs.core.truth_(end)){
return cljs.core.long$(end);
} else {
return (index + cljs.core.count(parse));
}
}));

(instaparse.repeat.get_end.cljs$lang$maxFixedArity = 2);

instaparse.repeat.parse_from_index = (function instaparse$repeat$parse_from_index(grammar,initial_parser,text,segment,index){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3(grammar,text,segment);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,initial_parser], null),instaparse.gll.TopListener(tramp));

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
});
/**
 * Returns either:
 * [a-parse end-index a-list-of-valid-follow-up-parses]
 * [a-parse end-index nil] (successfully reached end of text)
 * nil (hit a dead-end with this strategy)
 */
instaparse.repeat.select_parse = (function instaparse$repeat$select_parse(grammar,initial_parser,text,segment,index,parses){
var length = cljs.core.count(text);
var parses__$1 = cljs.core.seq(parses);
while(true){
if(parses__$1){
var parse = cljs.core.first(parses__$1);
var vec__56456 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56456,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56456,(1),null);
var end__$1 = (cljs.core.truth_(end)?end:(index + cljs.core.count(parse)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end__$1,length)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,null], null);
} else {
var temp__5733__auto__ = cljs.core.seq(instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,end__$1));
if(temp__5733__auto__){
var follow_ups = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,follow_ups], null);
} else {
var G__56517 = cljs.core.next(parses__$1);
parses__$1 = G__56517;
continue;
}

}
} else {
return null;
}
break;
}
});
instaparse.repeat.repeat_parse_hiccup = (function instaparse$repeat$repeat_parse_hiccup(var_args){
var G__56460 = arguments.length;
switch (G__56460) {
case 5:
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,root_tag,text,segment){
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6(grammar,initial_parser,root_tag,text,segment,(0));
}));

(instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6 = (function (grammar,initial_parser,root_tag,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null));
var G__56464 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__56465 = G__56464;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465,(2),null);
var selection = vec__56465;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__56464__$1 = G__56464;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__56471 = G__56464__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(2),null);
var selection__$1 = vec__56471;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__56519 = cljs.core.long$(end__$1);
var G__56520 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__56521 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__56519;
parses__$1 = G__56520;
G__56464__$1 = G__56521;
continue;

}
}
}
break;
}
}));

(instaparse.repeat.repeat_parse_hiccup.cljs$lang$maxFixedArity = 6);

instaparse.repeat.repeat_parse_enlive = (function instaparse$repeat$repeat_parse_enlive(var_args){
var G__56475 = arguments.length;
switch (G__56475) {
case 5:
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,root_tag,text,segment){
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6(grammar,initial_parser,root_tag,text,segment,(0));
}));

(instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6 = (function (grammar,initial_parser,root_tag,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.EMPTY;
var G__56479 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__56480 = G__56479;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56480,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56480,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56480,(2),null);
var selection = vec__56480;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__56479__$1 = G__56479;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__56486 = G__56479__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56486,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56486,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56486,(2),null);
var selection__$1 = vec__56486;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),root_tag,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.seq(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__56523 = cljs.core.long$(end__$1);
var G__56524 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__56525 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__56523;
parses__$1 = G__56524;
G__56479__$1 = G__56525;
continue;

}
}
}
break;
}
}));

(instaparse.repeat.repeat_parse_enlive.cljs$lang$maxFixedArity = 6);

instaparse.repeat.repeat_parse_no_tag = (function instaparse$repeat$repeat_parse_no_tag(var_args){
var G__56490 = arguments.length;
switch (G__56490) {
case 4:
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4 = (function (grammar,initial_parser,text,segment){
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,text,segment,(0));
}));

(instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.EMPTY;
var G__56494 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__56495 = G__56494;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56495,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56495,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56495,(2),null);
var selection = vec__56495;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__56494__$1 = G__56494;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__56501 = G__56494__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56501,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56501,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56501,(2),null);
var selection__$1 = vec__56501;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__56527 = cljs.core.long$(end__$1);
var G__56528 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__56529 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__56527;
parses__$1 = G__56528;
G__56494__$1 = G__56529;
continue;

}
}
}
break;
}
}));

(instaparse.repeat.repeat_parse_no_tag.cljs$lang$maxFixedArity = 5);

instaparse.repeat.repeat_parse = (function instaparse$repeat$repeat_parse(var_args){
var G__56505 = arguments.length;
switch (G__56505) {
case 4:
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4 = (function (grammar,initial_parser,output_format,text){
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4(grammar,initial_parser,text,instaparse.gll.text__GT_segment(text));
}));

(instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,output_format,root_tag,text){
if(cljs.core.truth_((function (){var fexpr__56506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null);
return (fexpr__56506.cljs$core$IFn$_invoke$arity$1 ? fexpr__56506.cljs$core$IFn$_invoke$arity$1(output_format) : fexpr__56506.call(null,output_format));
})())){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} output-format)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_format,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238))){
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,root_tag,text,instaparse.gll.text__GT_segment(text));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_format,new cljs.core.Keyword(null,"enlive","enlive",1679023921))){
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,root_tag,text,instaparse.gll.text__GT_segment(text));
} else {
return null;
}
}
}));

(instaparse.repeat.repeat_parse.cljs$lang$maxFixedArity = 5);

instaparse.repeat.repeat_parse_with_header = (function instaparse$repeat$repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,root_tag,text){
var segment = instaparse.gll.text__GT_segment(text);
var length = cljs.core.count(text);
var header_results = instaparse.repeat.parse_from_index(grammar,header_parser,text,segment,(0));
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(header_results);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(header_parser);
}
})())){
return instaparse.repeat.failure_signal;
} else {
var header_result = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,instaparse.repeat.get_end,header_results);
var end = instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1(header_result);
var repeat_result = instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(repeating_parser),text,segment,end);
var span_meta = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null);
if((((repeat_result instanceof instaparse.gll.Failure)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(repeating_parser),new cljs.core.Keyword(null,"star","star",279424429))) && (instaparse.repeat.empty_result_QMARK_(repeat_result)))))){
return instaparse.repeat.failure_signal;
} else {
var G__56507 = output_format;
var G__56507__$1 = (((G__56507 instanceof cljs.core.Keyword))?G__56507.fqn:null);
switch (G__56507__$1) {
case "enlive":
return instaparse.gll.safe_with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),root_tag,new cljs.core.Keyword(null,"content","content",15833224),instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,header_result),repeat_result)], null),span_meta);

break;
case "hiccup":
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null)).instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,header_result),repeat_result)),span_meta);

break;
default:
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,header_result),repeat_result),span_meta);

}
}
}
});
instaparse.repeat.try_repeating_parse_strategy_with_header = (function instaparse$repeat$try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format){

var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(start_rule);
var repeating_parser = cljs.core.last(parsers);
if(cljs.core.not(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"cat","cat",-1457810207)))?(function (){var and__4115__auto__ = (function (){var G__56515 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(repeating_parser);
var fexpr__56514 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"star","star",279424429),null,new cljs.core.Keyword(null,"plus","plus",211540661),null], null), null);
return (fexpr__56514.cljs$core$IFn$_invoke$arity$1 ? fexpr__56514.cljs$core$IFn$_invoke$arity$1(G__56515) : fexpr__56514.call(null,G__56515));
})();
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(repeating_parser))) && (cljs.core.not(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(repeating_parser)))));
} else {
return and__4115__auto__;
}
})():false))){
return instaparse.repeat.failure_signal;
} else {
var header_parser = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.butlast(parsers));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction)){
return instaparse.repeat.repeat_parse_with_header(grammar,header_parser,repeating_parser,null,start_production,text);
} else {
return instaparse.repeat.repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,start_production,text);
}
}
});
instaparse.repeat.try_repeating_parse_strategy = (function instaparse$repeat$try_repeating_parse_strategy(parser,text,start_production){
var grammar = new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser);
var output_format = new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser);
var start_rule = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grammar,start_production);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(start_rule),true)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"star","star",279424429))){
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"plus","plus",211540661))){
var result = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
if(instaparse.repeat.empty_result_QMARK_(result)){
return instaparse.repeat.failure_signal;
} else {
return result;
}
} else {
return instaparse.repeat.try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"star","star",279424429))){
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"plus","plus",211540661))){
var result = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
if(instaparse.repeat.empty_result_QMARK_(result)){
return instaparse.repeat.failure_signal;
} else {
return result;
}
} else {
return instaparse.repeat.try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format);

}
}
}
}
});
instaparse.repeat.used_memory_optimization_QMARK_ = (function instaparse$repeat$used_memory_optimization_QMARK_(tree){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tree)));
});

//# sourceMappingURL=instaparse.repeat.js.map
