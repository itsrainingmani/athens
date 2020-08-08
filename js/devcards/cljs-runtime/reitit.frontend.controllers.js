goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__54560,match){
var map__54561 = p__54560;
var map__54561__$1 = (((((!((map__54561 == null))))?(((((map__54561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54561):map__54561);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54561__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54561__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54561__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__54563(s__54564){
return (new cljs.core.LazySeq(null,(function (){
var s__54564__$1 = s__54564;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54564__$1);
if(temp__5735__auto__){
var s__54564__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54564__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54564__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54566 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54565 = (0);
while(true){
if((i__54565 < size__4528__auto__)){
var vec__54567 = cljs.core._nth(c__4527__auto__,i__54565);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54567,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54567,(1),null);
cljs.core.chunk_append(b__54566,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__54585 = (i__54565 + (1));
i__54565 = G__54585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54566),reitit$frontend$controllers$get_identity_$_iter__54563(cljs.core.chunk_rest(s__54564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54566),null);
}
} else {
var vec__54570 = cljs.core.first(s__54564__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54570,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54570,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__54563(cljs.core.rest(s__54564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__54573 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54573) : f.call(null,G__54573));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__54574_54586 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__54575_54587 = null;
var count__54576_54588 = (0);
var i__54577_54589 = (0);
while(true){
if((i__54577_54589 < count__54576_54588)){
var controller_54590 = chunk__54575_54587.cljs$core$IIndexed$_nth$arity$2(null,i__54577_54589);
reitit.frontend.controllers.apply_controller(controller_54590,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54591 = seq__54574_54586;
var G__54592 = chunk__54575_54587;
var G__54593 = count__54576_54588;
var G__54594 = (i__54577_54589 + (1));
seq__54574_54586 = G__54591;
chunk__54575_54587 = G__54592;
count__54576_54588 = G__54593;
i__54577_54589 = G__54594;
continue;
} else {
var temp__5735__auto___54595 = cljs.core.seq(seq__54574_54586);
if(temp__5735__auto___54595){
var seq__54574_54596__$1 = temp__5735__auto___54595;
if(cljs.core.chunked_seq_QMARK_(seq__54574_54596__$1)){
var c__4556__auto___54597 = cljs.core.chunk_first(seq__54574_54596__$1);
var G__54598 = cljs.core.chunk_rest(seq__54574_54596__$1);
var G__54599 = c__4556__auto___54597;
var G__54600 = cljs.core.count(c__4556__auto___54597);
var G__54601 = (0);
seq__54574_54586 = G__54598;
chunk__54575_54587 = G__54599;
count__54576_54588 = G__54600;
i__54577_54589 = G__54601;
continue;
} else {
var controller_54602 = cljs.core.first(seq__54574_54596__$1);
reitit.frontend.controllers.apply_controller(controller_54602,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54603 = cljs.core.next(seq__54574_54596__$1);
var G__54604 = null;
var G__54605 = (0);
var G__54606 = (0);
seq__54574_54586 = G__54603;
chunk__54575_54587 = G__54604;
count__54576_54588 = G__54605;
i__54577_54589 = G__54606;
continue;
}
} else {
}
}
break;
}

var seq__54578_54607 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__54579_54608 = null;
var count__54580_54609 = (0);
var i__54581_54610 = (0);
while(true){
if((i__54581_54610 < count__54580_54609)){
var controller_54611 = chunk__54579_54608.cljs$core$IIndexed$_nth$arity$2(null,i__54581_54610);
reitit.frontend.controllers.apply_controller(controller_54611,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54612 = seq__54578_54607;
var G__54613 = chunk__54579_54608;
var G__54614 = count__54580_54609;
var G__54615 = (i__54581_54610 + (1));
seq__54578_54607 = G__54612;
chunk__54579_54608 = G__54613;
count__54580_54609 = G__54614;
i__54581_54610 = G__54615;
continue;
} else {
var temp__5735__auto___54616 = cljs.core.seq(seq__54578_54607);
if(temp__5735__auto___54616){
var seq__54578_54617__$1 = temp__5735__auto___54616;
if(cljs.core.chunked_seq_QMARK_(seq__54578_54617__$1)){
var c__4556__auto___54618 = cljs.core.chunk_first(seq__54578_54617__$1);
var G__54619 = cljs.core.chunk_rest(seq__54578_54617__$1);
var G__54620 = c__4556__auto___54618;
var G__54621 = cljs.core.count(c__4556__auto___54618);
var G__54622 = (0);
seq__54578_54607 = G__54619;
chunk__54579_54608 = G__54620;
count__54580_54609 = G__54621;
i__54581_54610 = G__54622;
continue;
} else {
var controller_54623 = cljs.core.first(seq__54578_54617__$1);
reitit.frontend.controllers.apply_controller(controller_54623,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54624 = cljs.core.next(seq__54578_54617__$1);
var G__54625 = null;
var G__54626 = (0);
var G__54627 = (0);
seq__54578_54607 = G__54624;
chunk__54579_54608 = G__54625;
count__54580_54609 = G__54626;
i__54581_54610 = G__54627;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
