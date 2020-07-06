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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__72038,match){
var map__72039 = p__72038;
var map__72039__$1 = (((((!((map__72039 == null))))?(((((map__72039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72039):map__72039);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72039__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72039__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72039__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__72045(s__72046){
return (new cljs.core.LazySeq(null,(function (){
var s__72046__$1 = s__72046;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72046__$1);
if(temp__5735__auto__){
var s__72046__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72046__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__72046__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__72048 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__72047 = (0);
while(true){
if((i__72047 < size__4581__auto__)){
var vec__72049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__72047);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72049,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72049,(1),null);
cljs.core.chunk_append(b__72048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__72072 = (i__72047 + (1));
i__72047 = G__72072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72048),reitit$frontend$controllers$get_identity_$_iter__72045(cljs.core.chunk_rest(s__72046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72048),null);
}
} else {
var vec__72052 = cljs.core.first(s__72046__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72052,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72052,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__72045(cljs.core.rest(s__72046__$2)));
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
var G__72055 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72055) : f.call(null,G__72055));
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
var seq__72056_72073 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__72057_72074 = null;
var count__72058_72075 = (0);
var i__72059_72076 = (0);
while(true){
if((i__72059_72076 < count__72058_72075)){
var controller_72077 = chunk__72057_72074.cljs$core$IIndexed$_nth$arity$2(null,i__72059_72076);
reitit.frontend.controllers.apply_controller(controller_72077,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__72078 = seq__72056_72073;
var G__72079 = chunk__72057_72074;
var G__72080 = count__72058_72075;
var G__72081 = (i__72059_72076 + (1));
seq__72056_72073 = G__72078;
chunk__72057_72074 = G__72079;
count__72058_72075 = G__72080;
i__72059_72076 = G__72081;
continue;
} else {
var temp__5735__auto___72082 = cljs.core.seq(seq__72056_72073);
if(temp__5735__auto___72082){
var seq__72056_72083__$1 = temp__5735__auto___72082;
if(cljs.core.chunked_seq_QMARK_(seq__72056_72083__$1)){
var c__4609__auto___72084 = cljs.core.chunk_first(seq__72056_72083__$1);
var G__72085 = cljs.core.chunk_rest(seq__72056_72083__$1);
var G__72086 = c__4609__auto___72084;
var G__72087 = cljs.core.count(c__4609__auto___72084);
var G__72088 = (0);
seq__72056_72073 = G__72085;
chunk__72057_72074 = G__72086;
count__72058_72075 = G__72087;
i__72059_72076 = G__72088;
continue;
} else {
var controller_72089 = cljs.core.first(seq__72056_72083__$1);
reitit.frontend.controllers.apply_controller(controller_72089,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__72091 = cljs.core.next(seq__72056_72083__$1);
var G__72092 = null;
var G__72093 = (0);
var G__72094 = (0);
seq__72056_72073 = G__72091;
chunk__72057_72074 = G__72092;
count__72058_72075 = G__72093;
i__72059_72076 = G__72094;
continue;
}
} else {
}
}
break;
}

var seq__72062_72099 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__72063_72100 = null;
var count__72064_72101 = (0);
var i__72065_72102 = (0);
while(true){
if((i__72065_72102 < count__72064_72101)){
var controller_72104 = chunk__72063_72100.cljs$core$IIndexed$_nth$arity$2(null,i__72065_72102);
reitit.frontend.controllers.apply_controller(controller_72104,new cljs.core.Keyword(null,"start","start",-355208981));


var G__72105 = seq__72062_72099;
var G__72106 = chunk__72063_72100;
var G__72107 = count__72064_72101;
var G__72108 = (i__72065_72102 + (1));
seq__72062_72099 = G__72105;
chunk__72063_72100 = G__72106;
count__72064_72101 = G__72107;
i__72065_72102 = G__72108;
continue;
} else {
var temp__5735__auto___72109 = cljs.core.seq(seq__72062_72099);
if(temp__5735__auto___72109){
var seq__72062_72115__$1 = temp__5735__auto___72109;
if(cljs.core.chunked_seq_QMARK_(seq__72062_72115__$1)){
var c__4609__auto___72117 = cljs.core.chunk_first(seq__72062_72115__$1);
var G__72118 = cljs.core.chunk_rest(seq__72062_72115__$1);
var G__72119 = c__4609__auto___72117;
var G__72120 = cljs.core.count(c__4609__auto___72117);
var G__72121 = (0);
seq__72062_72099 = G__72118;
chunk__72063_72100 = G__72119;
count__72064_72101 = G__72120;
i__72065_72102 = G__72121;
continue;
} else {
var controller_72122 = cljs.core.first(seq__72062_72115__$1);
reitit.frontend.controllers.apply_controller(controller_72122,new cljs.core.Keyword(null,"start","start",-355208981));


var G__72123 = cljs.core.next(seq__72062_72115__$1);
var G__72124 = null;
var G__72125 = (0);
var G__72126 = (0);
seq__72062_72099 = G__72123;
chunk__72063_72100 = G__72124;
count__72064_72101 = G__72125;
i__72065_72102 = G__72126;
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
