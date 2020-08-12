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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__54569,match){
var map__54570 = p__54569;
var map__54570__$1 = (((((!((map__54570 == null))))?(((((map__54570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54570):map__54570);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54570__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54570__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54570__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__54572(s__54573){
return (new cljs.core.LazySeq(null,(function (){
var s__54573__$1 = s__54573;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54573__$1);
if(temp__5735__auto__){
var s__54573__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54573__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54573__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54575 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54574 = (0);
while(true){
if((i__54574 < size__4528__auto__)){
var vec__54576 = cljs.core._nth(c__4527__auto__,i__54574);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54576,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54576,(1),null);
cljs.core.chunk_append(b__54575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__54593 = (i__54574 + (1));
i__54574 = G__54593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54575),reitit$frontend$controllers$get_identity_$_iter__54572(cljs.core.chunk_rest(s__54573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54575),null);
}
} else {
var vec__54579 = cljs.core.first(s__54573__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54579,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54579,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__54572(cljs.core.rest(s__54573__$2)));
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
var G__54582 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54582) : f.call(null,G__54582));
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
var seq__54585_54594 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__54586_54595 = null;
var count__54587_54596 = (0);
var i__54588_54597 = (0);
while(true){
if((i__54588_54597 < count__54587_54596)){
var controller_54598 = chunk__54586_54595.cljs$core$IIndexed$_nth$arity$2(null,i__54588_54597);
reitit.frontend.controllers.apply_controller(controller_54598,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54599 = seq__54585_54594;
var G__54600 = chunk__54586_54595;
var G__54601 = count__54587_54596;
var G__54602 = (i__54588_54597 + (1));
seq__54585_54594 = G__54599;
chunk__54586_54595 = G__54600;
count__54587_54596 = G__54601;
i__54588_54597 = G__54602;
continue;
} else {
var temp__5735__auto___54603 = cljs.core.seq(seq__54585_54594);
if(temp__5735__auto___54603){
var seq__54585_54604__$1 = temp__5735__auto___54603;
if(cljs.core.chunked_seq_QMARK_(seq__54585_54604__$1)){
var c__4556__auto___54605 = cljs.core.chunk_first(seq__54585_54604__$1);
var G__54606 = cljs.core.chunk_rest(seq__54585_54604__$1);
var G__54607 = c__4556__auto___54605;
var G__54608 = cljs.core.count(c__4556__auto___54605);
var G__54609 = (0);
seq__54585_54594 = G__54606;
chunk__54586_54595 = G__54607;
count__54587_54596 = G__54608;
i__54588_54597 = G__54609;
continue;
} else {
var controller_54610 = cljs.core.first(seq__54585_54604__$1);
reitit.frontend.controllers.apply_controller(controller_54610,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54611 = cljs.core.next(seq__54585_54604__$1);
var G__54612 = null;
var G__54613 = (0);
var G__54614 = (0);
seq__54585_54594 = G__54611;
chunk__54586_54595 = G__54612;
count__54587_54596 = G__54613;
i__54588_54597 = G__54614;
continue;
}
} else {
}
}
break;
}

var seq__54589_54615 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__54590_54616 = null;
var count__54591_54617 = (0);
var i__54592_54618 = (0);
while(true){
if((i__54592_54618 < count__54591_54617)){
var controller_54619 = chunk__54590_54616.cljs$core$IIndexed$_nth$arity$2(null,i__54592_54618);
reitit.frontend.controllers.apply_controller(controller_54619,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54620 = seq__54589_54615;
var G__54621 = chunk__54590_54616;
var G__54622 = count__54591_54617;
var G__54623 = (i__54592_54618 + (1));
seq__54589_54615 = G__54620;
chunk__54590_54616 = G__54621;
count__54591_54617 = G__54622;
i__54592_54618 = G__54623;
continue;
} else {
var temp__5735__auto___54624 = cljs.core.seq(seq__54589_54615);
if(temp__5735__auto___54624){
var seq__54589_54625__$1 = temp__5735__auto___54624;
if(cljs.core.chunked_seq_QMARK_(seq__54589_54625__$1)){
var c__4556__auto___54626 = cljs.core.chunk_first(seq__54589_54625__$1);
var G__54627 = cljs.core.chunk_rest(seq__54589_54625__$1);
var G__54628 = c__4556__auto___54626;
var G__54629 = cljs.core.count(c__4556__auto___54626);
var G__54630 = (0);
seq__54589_54615 = G__54627;
chunk__54590_54616 = G__54628;
count__54591_54617 = G__54629;
i__54592_54618 = G__54630;
continue;
} else {
var controller_54631 = cljs.core.first(seq__54589_54625__$1);
reitit.frontend.controllers.apply_controller(controller_54631,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54632 = cljs.core.next(seq__54589_54625__$1);
var G__54633 = null;
var G__54634 = (0);
var G__54635 = (0);
seq__54589_54615 = G__54632;
chunk__54590_54616 = G__54633;
count__54591_54617 = G__54634;
i__54592_54618 = G__54635;
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
