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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50224,match){
var map__50225 = p__50224;
var map__50225__$1 = (((((!((map__50225 == null))))?(((((map__50225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50225):map__50225);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50227(s__50228){
return (new cljs.core.LazySeq(null,(function (){
var s__50228__$1 = s__50228;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50228__$1);
if(temp__5735__auto__){
var s__50228__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50228__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50228__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50230 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50229 = (0);
while(true){
if((i__50229 < size__4581__auto__)){
var vec__50231 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50229);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50231,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50231,(1),null);
cljs.core.chunk_append(b__50230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50249 = (i__50229 + (1));
i__50229 = G__50249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50230),reitit$frontend$controllers$get_identity_$_iter__50227(cljs.core.chunk_rest(s__50228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50230),null);
}
} else {
var vec__50234 = cljs.core.first(s__50228__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50234,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50234,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50227(cljs.core.rest(s__50228__$2)));
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
var G__50237 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50237) : f.call(null,G__50237));
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
var seq__50238_50250 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50239_50251 = null;
var count__50240_50252 = (0);
var i__50241_50253 = (0);
while(true){
if((i__50241_50253 < count__50240_50252)){
var controller_50254 = chunk__50239_50251.cljs$core$IIndexed$_nth$arity$2(null,i__50241_50253);
reitit.frontend.controllers.apply_controller(controller_50254,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50255 = seq__50238_50250;
var G__50256 = chunk__50239_50251;
var G__50257 = count__50240_50252;
var G__50258 = (i__50241_50253 + (1));
seq__50238_50250 = G__50255;
chunk__50239_50251 = G__50256;
count__50240_50252 = G__50257;
i__50241_50253 = G__50258;
continue;
} else {
var temp__5735__auto___50259 = cljs.core.seq(seq__50238_50250);
if(temp__5735__auto___50259){
var seq__50238_50260__$1 = temp__5735__auto___50259;
if(cljs.core.chunked_seq_QMARK_(seq__50238_50260__$1)){
var c__4609__auto___50261 = cljs.core.chunk_first(seq__50238_50260__$1);
var G__50262 = cljs.core.chunk_rest(seq__50238_50260__$1);
var G__50263 = c__4609__auto___50261;
var G__50264 = cljs.core.count(c__4609__auto___50261);
var G__50265 = (0);
seq__50238_50250 = G__50262;
chunk__50239_50251 = G__50263;
count__50240_50252 = G__50264;
i__50241_50253 = G__50265;
continue;
} else {
var controller_50266 = cljs.core.first(seq__50238_50260__$1);
reitit.frontend.controllers.apply_controller(controller_50266,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50267 = cljs.core.next(seq__50238_50260__$1);
var G__50268 = null;
var G__50269 = (0);
var G__50270 = (0);
seq__50238_50250 = G__50267;
chunk__50239_50251 = G__50268;
count__50240_50252 = G__50269;
i__50241_50253 = G__50270;
continue;
}
} else {
}
}
break;
}

var seq__50244_50271 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50245_50272 = null;
var count__50246_50273 = (0);
var i__50247_50274 = (0);
while(true){
if((i__50247_50274 < count__50246_50273)){
var controller_50276 = chunk__50245_50272.cljs$core$IIndexed$_nth$arity$2(null,i__50247_50274);
reitit.frontend.controllers.apply_controller(controller_50276,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50277 = seq__50244_50271;
var G__50278 = chunk__50245_50272;
var G__50279 = count__50246_50273;
var G__50280 = (i__50247_50274 + (1));
seq__50244_50271 = G__50277;
chunk__50245_50272 = G__50278;
count__50246_50273 = G__50279;
i__50247_50274 = G__50280;
continue;
} else {
var temp__5735__auto___50281 = cljs.core.seq(seq__50244_50271);
if(temp__5735__auto___50281){
var seq__50244_50282__$1 = temp__5735__auto___50281;
if(cljs.core.chunked_seq_QMARK_(seq__50244_50282__$1)){
var c__4609__auto___50284 = cljs.core.chunk_first(seq__50244_50282__$1);
var G__50285 = cljs.core.chunk_rest(seq__50244_50282__$1);
var G__50286 = c__4609__auto___50284;
var G__50287 = cljs.core.count(c__4609__auto___50284);
var G__50288 = (0);
seq__50244_50271 = G__50285;
chunk__50245_50272 = G__50286;
count__50246_50273 = G__50287;
i__50247_50274 = G__50288;
continue;
} else {
var controller_50290 = cljs.core.first(seq__50244_50282__$1);
reitit.frontend.controllers.apply_controller(controller_50290,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50291 = cljs.core.next(seq__50244_50282__$1);
var G__50292 = null;
var G__50293 = (0);
var G__50294 = (0);
seq__50244_50271 = G__50291;
chunk__50245_50272 = G__50292;
count__50246_50273 = G__50293;
i__50247_50274 = G__50294;
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
