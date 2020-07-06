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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57974,match){
var map__57975 = p__57974;
var map__57975__$1 = (((((!((map__57975 == null))))?(((((map__57975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57975):map__57975);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57975__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57975__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57975__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57977(s__57978){
return (new cljs.core.LazySeq(null,(function (){
var s__57978__$1 = s__57978;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57978__$1);
if(temp__5735__auto__){
var s__57978__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57978__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57978__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57980 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57979 = (0);
while(true){
if((i__57979 < size__4581__auto__)){
var vec__57981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57979);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57981,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57981,(1),null);
cljs.core.chunk_append(b__57980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57999 = (i__57979 + (1));
i__57979 = G__57999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57980),reitit$frontend$controllers$get_identity_$_iter__57977(cljs.core.chunk_rest(s__57978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57980),null);
}
} else {
var vec__57984 = cljs.core.first(s__57978__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57984,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57984,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57977(cljs.core.rest(s__57978__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
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
var G__57988 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57988) : f.call(null,G__57988));
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
var seq__57990_58003 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57991_58004 = null;
var count__57992_58005 = (0);
var i__57994_58006 = (0);
while(true){
if((i__57994_58006 < count__57992_58005)){
var controller_58007 = chunk__57991_58004.cljs$core$IIndexed$_nth$arity$2(null,i__57994_58006);
reitit.frontend.controllers.apply_controller(controller_58007,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58008 = seq__57990_58003;
var G__58009 = chunk__57991_58004;
var G__58010 = count__57992_58005;
var G__58011 = (i__57994_58006 + (1));
seq__57990_58003 = G__58008;
chunk__57991_58004 = G__58009;
count__57992_58005 = G__58010;
i__57994_58006 = G__58011;
continue;
} else {
var temp__5735__auto___58012 = cljs.core.seq(seq__57990_58003);
if(temp__5735__auto___58012){
var seq__57990_58013__$1 = temp__5735__auto___58012;
if(cljs.core.chunked_seq_QMARK_(seq__57990_58013__$1)){
var c__4609__auto___58014 = cljs.core.chunk_first(seq__57990_58013__$1);
var G__58015 = cljs.core.chunk_rest(seq__57990_58013__$1);
var G__58016 = c__4609__auto___58014;
var G__58017 = cljs.core.count(c__4609__auto___58014);
var G__58018 = (0);
seq__57990_58003 = G__58015;
chunk__57991_58004 = G__58016;
count__57992_58005 = G__58017;
i__57994_58006 = G__58018;
continue;
} else {
var controller_58019 = cljs.core.first(seq__57990_58013__$1);
reitit.frontend.controllers.apply_controller(controller_58019,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58020 = cljs.core.next(seq__57990_58013__$1);
var G__58021 = null;
var G__58022 = (0);
var G__58023 = (0);
seq__57990_58003 = G__58020;
chunk__57991_58004 = G__58021;
count__57992_58005 = G__58022;
i__57994_58006 = G__58023;
continue;
}
} else {
}
}
break;
}

var seq__57995_58024 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57996_58025 = null;
var count__57997_58026 = (0);
var i__57998_58027 = (0);
while(true){
if((i__57998_58027 < count__57997_58026)){
var controller_58028 = chunk__57996_58025.cljs$core$IIndexed$_nth$arity$2(null,i__57998_58027);
reitit.frontend.controllers.apply_controller(controller_58028,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58029 = seq__57995_58024;
var G__58030 = chunk__57996_58025;
var G__58031 = count__57997_58026;
var G__58032 = (i__57998_58027 + (1));
seq__57995_58024 = G__58029;
chunk__57996_58025 = G__58030;
count__57997_58026 = G__58031;
i__57998_58027 = G__58032;
continue;
} else {
var temp__5735__auto___58033 = cljs.core.seq(seq__57995_58024);
if(temp__5735__auto___58033){
var seq__57995_58034__$1 = temp__5735__auto___58033;
if(cljs.core.chunked_seq_QMARK_(seq__57995_58034__$1)){
var c__4609__auto___58035 = cljs.core.chunk_first(seq__57995_58034__$1);
var G__58036 = cljs.core.chunk_rest(seq__57995_58034__$1);
var G__58037 = c__4609__auto___58035;
var G__58038 = cljs.core.count(c__4609__auto___58035);
var G__58039 = (0);
seq__57995_58024 = G__58036;
chunk__57996_58025 = G__58037;
count__57997_58026 = G__58038;
i__57998_58027 = G__58039;
continue;
} else {
var controller_58040 = cljs.core.first(seq__57995_58034__$1);
reitit.frontend.controllers.apply_controller(controller_58040,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58041 = cljs.core.next(seq__57995_58034__$1);
var G__58042 = null;
var G__58043 = (0);
var G__58044 = (0);
seq__57995_58024 = G__58041;
chunk__57996_58025 = G__58042;
count__57997_58026 = G__58043;
i__57998_58027 = G__58044;
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
