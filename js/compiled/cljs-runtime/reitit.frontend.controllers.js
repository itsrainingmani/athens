goog.provide('reitit.frontend.controllers');
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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__60946,match){
var map__60947 = p__60946;
var map__60947__$1 = (((((!((map__60947 == null))))?(((((map__60947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60947):map__60947);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60947__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60947__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60947__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__60950(s__60951){
return (new cljs.core.LazySeq(null,(function (){
var s__60951__$1 = s__60951;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60951__$1);
if(temp__5735__auto__){
var s__60951__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60951__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60951__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60953 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60952 = (0);
while(true){
if((i__60952 < size__4528__auto__)){
var vec__60954 = cljs.core._nth(c__4527__auto__,i__60952);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60954,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60954,(1),null);
cljs.core.chunk_append(b__60953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__60972 = (i__60952 + (1));
i__60952 = G__60972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60953),reitit$frontend$controllers$get_identity_$_iter__60950(cljs.core.chunk_rest(s__60951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60953),null);
}
} else {
var vec__60957 = cljs.core.first(s__60951__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60957,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60957,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__60950(cljs.core.rest(s__60951__$2)));
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
var G__60960 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60960) : f.call(null,G__60960));
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
var seq__60961_60974 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__60962_60975 = null;
var count__60963_60976 = (0);
var i__60964_60977 = (0);
while(true){
if((i__60964_60977 < count__60963_60976)){
var controller_60978 = chunk__60962_60975.cljs$core$IIndexed$_nth$arity$2(null,i__60964_60977);
reitit.frontend.controllers.apply_controller(controller_60978,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60979 = seq__60961_60974;
var G__60980 = chunk__60962_60975;
var G__60981 = count__60963_60976;
var G__60982 = (i__60964_60977 + (1));
seq__60961_60974 = G__60979;
chunk__60962_60975 = G__60980;
count__60963_60976 = G__60981;
i__60964_60977 = G__60982;
continue;
} else {
var temp__5735__auto___60983 = cljs.core.seq(seq__60961_60974);
if(temp__5735__auto___60983){
var seq__60961_60984__$1 = temp__5735__auto___60983;
if(cljs.core.chunked_seq_QMARK_(seq__60961_60984__$1)){
var c__4556__auto___60985 = cljs.core.chunk_first(seq__60961_60984__$1);
var G__60986 = cljs.core.chunk_rest(seq__60961_60984__$1);
var G__60987 = c__4556__auto___60985;
var G__60988 = cljs.core.count(c__4556__auto___60985);
var G__60989 = (0);
seq__60961_60974 = G__60986;
chunk__60962_60975 = G__60987;
count__60963_60976 = G__60988;
i__60964_60977 = G__60989;
continue;
} else {
var controller_60990 = cljs.core.first(seq__60961_60984__$1);
reitit.frontend.controllers.apply_controller(controller_60990,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60991 = cljs.core.next(seq__60961_60984__$1);
var G__60992 = null;
var G__60993 = (0);
var G__60994 = (0);
seq__60961_60974 = G__60991;
chunk__60962_60975 = G__60992;
count__60963_60976 = G__60993;
i__60964_60977 = G__60994;
continue;
}
} else {
}
}
break;
}

var seq__60966_60995 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__60967_60996 = null;
var count__60968_60997 = (0);
var i__60969_60998 = (0);
while(true){
if((i__60969_60998 < count__60968_60997)){
var controller_60999 = chunk__60967_60996.cljs$core$IIndexed$_nth$arity$2(null,i__60969_60998);
reitit.frontend.controllers.apply_controller(controller_60999,new cljs.core.Keyword(null,"start","start",-355208981));


var G__61000 = seq__60966_60995;
var G__61001 = chunk__60967_60996;
var G__61002 = count__60968_60997;
var G__61003 = (i__60969_60998 + (1));
seq__60966_60995 = G__61000;
chunk__60967_60996 = G__61001;
count__60968_60997 = G__61002;
i__60969_60998 = G__61003;
continue;
} else {
var temp__5735__auto___61004 = cljs.core.seq(seq__60966_60995);
if(temp__5735__auto___61004){
var seq__60966_61005__$1 = temp__5735__auto___61004;
if(cljs.core.chunked_seq_QMARK_(seq__60966_61005__$1)){
var c__4556__auto___61006 = cljs.core.chunk_first(seq__60966_61005__$1);
var G__61007 = cljs.core.chunk_rest(seq__60966_61005__$1);
var G__61008 = c__4556__auto___61006;
var G__61009 = cljs.core.count(c__4556__auto___61006);
var G__61010 = (0);
seq__60966_60995 = G__61007;
chunk__60967_60996 = G__61008;
count__60968_60997 = G__61009;
i__60969_60998 = G__61010;
continue;
} else {
var controller_61011 = cljs.core.first(seq__60966_61005__$1);
reitit.frontend.controllers.apply_controller(controller_61011,new cljs.core.Keyword(null,"start","start",-355208981));


var G__61012 = cljs.core.next(seq__60966_61005__$1);
var G__61013 = null;
var G__61014 = (0);
var G__61015 = (0);
seq__60966_60995 = G__61012;
chunk__60967_60996 = G__61013;
count__60968_60997 = G__61014;
i__60969_60998 = G__61015;
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
