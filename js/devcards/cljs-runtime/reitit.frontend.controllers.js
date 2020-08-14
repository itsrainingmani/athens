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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__54571,match){
var map__54572 = p__54571;
var map__54572__$1 = (((((!((map__54572 == null))))?(((((map__54572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54572):map__54572);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__54575(s__54576){
return (new cljs.core.LazySeq(null,(function (){
var s__54576__$1 = s__54576;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54576__$1);
if(temp__5735__auto__){
var s__54576__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54576__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54576__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54578 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54577 = (0);
while(true){
if((i__54577 < size__4528__auto__)){
var vec__54579 = cljs.core._nth(c__4527__auto__,i__54577);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54579,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54579,(1),null);
cljs.core.chunk_append(b__54578,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__54597 = (i__54577 + (1));
i__54577 = G__54597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54578),reitit$frontend$controllers$get_identity_$_iter__54575(cljs.core.chunk_rest(s__54576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54578),null);
}
} else {
var vec__54582 = cljs.core.first(s__54576__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54582,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54582,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__54575(cljs.core.rest(s__54576__$2)));
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
var G__54585 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54585) : f.call(null,G__54585));
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
var seq__54586_54599 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__54587_54600 = null;
var count__54588_54601 = (0);
var i__54589_54602 = (0);
while(true){
if((i__54589_54602 < count__54588_54601)){
var controller_54603 = chunk__54587_54600.cljs$core$IIndexed$_nth$arity$2(null,i__54589_54602);
reitit.frontend.controllers.apply_controller(controller_54603,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54604 = seq__54586_54599;
var G__54605 = chunk__54587_54600;
var G__54606 = count__54588_54601;
var G__54607 = (i__54589_54602 + (1));
seq__54586_54599 = G__54604;
chunk__54587_54600 = G__54605;
count__54588_54601 = G__54606;
i__54589_54602 = G__54607;
continue;
} else {
var temp__5735__auto___54608 = cljs.core.seq(seq__54586_54599);
if(temp__5735__auto___54608){
var seq__54586_54609__$1 = temp__5735__auto___54608;
if(cljs.core.chunked_seq_QMARK_(seq__54586_54609__$1)){
var c__4556__auto___54610 = cljs.core.chunk_first(seq__54586_54609__$1);
var G__54611 = cljs.core.chunk_rest(seq__54586_54609__$1);
var G__54612 = c__4556__auto___54610;
var G__54613 = cljs.core.count(c__4556__auto___54610);
var G__54614 = (0);
seq__54586_54599 = G__54611;
chunk__54587_54600 = G__54612;
count__54588_54601 = G__54613;
i__54589_54602 = G__54614;
continue;
} else {
var controller_54615 = cljs.core.first(seq__54586_54609__$1);
reitit.frontend.controllers.apply_controller(controller_54615,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54616 = cljs.core.next(seq__54586_54609__$1);
var G__54617 = null;
var G__54618 = (0);
var G__54619 = (0);
seq__54586_54599 = G__54616;
chunk__54587_54600 = G__54617;
count__54588_54601 = G__54618;
i__54589_54602 = G__54619;
continue;
}
} else {
}
}
break;
}

var seq__54591_54620 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__54592_54621 = null;
var count__54593_54622 = (0);
var i__54594_54623 = (0);
while(true){
if((i__54594_54623 < count__54593_54622)){
var controller_54624 = chunk__54592_54621.cljs$core$IIndexed$_nth$arity$2(null,i__54594_54623);
reitit.frontend.controllers.apply_controller(controller_54624,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54625 = seq__54591_54620;
var G__54626 = chunk__54592_54621;
var G__54627 = count__54593_54622;
var G__54628 = (i__54594_54623 + (1));
seq__54591_54620 = G__54625;
chunk__54592_54621 = G__54626;
count__54593_54622 = G__54627;
i__54594_54623 = G__54628;
continue;
} else {
var temp__5735__auto___54629 = cljs.core.seq(seq__54591_54620);
if(temp__5735__auto___54629){
var seq__54591_54630__$1 = temp__5735__auto___54629;
if(cljs.core.chunked_seq_QMARK_(seq__54591_54630__$1)){
var c__4556__auto___54631 = cljs.core.chunk_first(seq__54591_54630__$1);
var G__54632 = cljs.core.chunk_rest(seq__54591_54630__$1);
var G__54633 = c__4556__auto___54631;
var G__54634 = cljs.core.count(c__4556__auto___54631);
var G__54635 = (0);
seq__54591_54620 = G__54632;
chunk__54592_54621 = G__54633;
count__54593_54622 = G__54634;
i__54594_54623 = G__54635;
continue;
} else {
var controller_54636 = cljs.core.first(seq__54591_54630__$1);
reitit.frontend.controllers.apply_controller(controller_54636,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54637 = cljs.core.next(seq__54591_54630__$1);
var G__54638 = null;
var G__54639 = (0);
var G__54640 = (0);
seq__54591_54620 = G__54637;
chunk__54592_54621 = G__54638;
count__54593_54622 = G__54639;
i__54594_54623 = G__54640;
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
