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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50216,match){
var map__50217 = p__50216;
var map__50217__$1 = (((((!((map__50217 == null))))?(((((map__50217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50217):map__50217);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50217__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50217__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50217__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50219(s__50220){
return (new cljs.core.LazySeq(null,(function (){
var s__50220__$1 = s__50220;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50220__$1);
if(temp__5735__auto__){
var s__50220__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50220__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50220__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50222 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50221 = (0);
while(true){
if((i__50221 < size__4581__auto__)){
var vec__50223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50221);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50223,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50223,(1),null);
cljs.core.chunk_append(b__50222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50241 = (i__50221 + (1));
i__50221 = G__50241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50222),reitit$frontend$controllers$get_identity_$_iter__50219(cljs.core.chunk_rest(s__50220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50222),null);
}
} else {
var vec__50226 = cljs.core.first(s__50220__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50226,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50226,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50219(cljs.core.rest(s__50220__$2)));
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
var G__50229 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50229) : f.call(null,G__50229));
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
var seq__50230_50242 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50231_50243 = null;
var count__50232_50244 = (0);
var i__50233_50245 = (0);
while(true){
if((i__50233_50245 < count__50232_50244)){
var controller_50246 = chunk__50231_50243.cljs$core$IIndexed$_nth$arity$2(null,i__50233_50245);
reitit.frontend.controllers.apply_controller(controller_50246,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50247 = seq__50230_50242;
var G__50248 = chunk__50231_50243;
var G__50249 = count__50232_50244;
var G__50250 = (i__50233_50245 + (1));
seq__50230_50242 = G__50247;
chunk__50231_50243 = G__50248;
count__50232_50244 = G__50249;
i__50233_50245 = G__50250;
continue;
} else {
var temp__5735__auto___50251 = cljs.core.seq(seq__50230_50242);
if(temp__5735__auto___50251){
var seq__50230_50252__$1 = temp__5735__auto___50251;
if(cljs.core.chunked_seq_QMARK_(seq__50230_50252__$1)){
var c__4609__auto___50253 = cljs.core.chunk_first(seq__50230_50252__$1);
var G__50254 = cljs.core.chunk_rest(seq__50230_50252__$1);
var G__50255 = c__4609__auto___50253;
var G__50256 = cljs.core.count(c__4609__auto___50253);
var G__50257 = (0);
seq__50230_50242 = G__50254;
chunk__50231_50243 = G__50255;
count__50232_50244 = G__50256;
i__50233_50245 = G__50257;
continue;
} else {
var controller_50258 = cljs.core.first(seq__50230_50252__$1);
reitit.frontend.controllers.apply_controller(controller_50258,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50259 = cljs.core.next(seq__50230_50252__$1);
var G__50260 = null;
var G__50261 = (0);
var G__50262 = (0);
seq__50230_50242 = G__50259;
chunk__50231_50243 = G__50260;
count__50232_50244 = G__50261;
i__50233_50245 = G__50262;
continue;
}
} else {
}
}
break;
}

var seq__50235_50263 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50236_50264 = null;
var count__50237_50265 = (0);
var i__50238_50266 = (0);
while(true){
if((i__50238_50266 < count__50237_50265)){
var controller_50267 = chunk__50236_50264.cljs$core$IIndexed$_nth$arity$2(null,i__50238_50266);
reitit.frontend.controllers.apply_controller(controller_50267,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50268 = seq__50235_50263;
var G__50269 = chunk__50236_50264;
var G__50270 = count__50237_50265;
var G__50271 = (i__50238_50266 + (1));
seq__50235_50263 = G__50268;
chunk__50236_50264 = G__50269;
count__50237_50265 = G__50270;
i__50238_50266 = G__50271;
continue;
} else {
var temp__5735__auto___50272 = cljs.core.seq(seq__50235_50263);
if(temp__5735__auto___50272){
var seq__50235_50273__$1 = temp__5735__auto___50272;
if(cljs.core.chunked_seq_QMARK_(seq__50235_50273__$1)){
var c__4609__auto___50274 = cljs.core.chunk_first(seq__50235_50273__$1);
var G__50276 = cljs.core.chunk_rest(seq__50235_50273__$1);
var G__50277 = c__4609__auto___50274;
var G__50278 = cljs.core.count(c__4609__auto___50274);
var G__50279 = (0);
seq__50235_50263 = G__50276;
chunk__50236_50264 = G__50277;
count__50237_50265 = G__50278;
i__50238_50266 = G__50279;
continue;
} else {
var controller_50280 = cljs.core.first(seq__50235_50273__$1);
reitit.frontend.controllers.apply_controller(controller_50280,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50281 = cljs.core.next(seq__50235_50273__$1);
var G__50282 = null;
var G__50283 = (0);
var G__50284 = (0);
seq__50235_50263 = G__50281;
chunk__50236_50264 = G__50282;
count__50237_50265 = G__50283;
i__50238_50266 = G__50284;
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
