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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__55656,match){
var map__55657 = p__55656;
var map__55657__$1 = (((((!((map__55657 == null))))?(((((map__55657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55657):map__55657);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55657__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55657__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55657__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__55659(s__55660){
return (new cljs.core.LazySeq(null,(function (){
var s__55660__$1 = s__55660;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55660__$1);
if(temp__5735__auto__){
var s__55660__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55660__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55660__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55662 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55661 = (0);
while(true){
if((i__55661 < size__4581__auto__)){
var vec__55663 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55661);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55663,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55663,(1),null);
cljs.core.chunk_append(b__55662,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__55681 = (i__55661 + (1));
i__55661 = G__55681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55662),reitit$frontend$controllers$get_identity_$_iter__55659(cljs.core.chunk_rest(s__55660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55662),null);
}
} else {
var vec__55666 = cljs.core.first(s__55660__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55666,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55666,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__55659(cljs.core.rest(s__55660__$2)));
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
var G__55670 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55670) : f.call(null,G__55670));
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
var seq__55673_55685 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__55674_55686 = null;
var count__55675_55687 = (0);
var i__55676_55688 = (0);
while(true){
if((i__55676_55688 < count__55675_55687)){
var controller_55689 = chunk__55674_55686.cljs$core$IIndexed$_nth$arity$2(null,i__55676_55688);
reitit.frontend.controllers.apply_controller(controller_55689,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55690 = seq__55673_55685;
var G__55691 = chunk__55674_55686;
var G__55692 = count__55675_55687;
var G__55693 = (i__55676_55688 + (1));
seq__55673_55685 = G__55690;
chunk__55674_55686 = G__55691;
count__55675_55687 = G__55692;
i__55676_55688 = G__55693;
continue;
} else {
var temp__5735__auto___55694 = cljs.core.seq(seq__55673_55685);
if(temp__5735__auto___55694){
var seq__55673_55695__$1 = temp__5735__auto___55694;
if(cljs.core.chunked_seq_QMARK_(seq__55673_55695__$1)){
var c__4609__auto___55696 = cljs.core.chunk_first(seq__55673_55695__$1);
var G__55697 = cljs.core.chunk_rest(seq__55673_55695__$1);
var G__55698 = c__4609__auto___55696;
var G__55699 = cljs.core.count(c__4609__auto___55696);
var G__55700 = (0);
seq__55673_55685 = G__55697;
chunk__55674_55686 = G__55698;
count__55675_55687 = G__55699;
i__55676_55688 = G__55700;
continue;
} else {
var controller_55701 = cljs.core.first(seq__55673_55695__$1);
reitit.frontend.controllers.apply_controller(controller_55701,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55702 = cljs.core.next(seq__55673_55695__$1);
var G__55703 = null;
var G__55704 = (0);
var G__55705 = (0);
seq__55673_55685 = G__55702;
chunk__55674_55686 = G__55703;
count__55675_55687 = G__55704;
i__55676_55688 = G__55705;
continue;
}
} else {
}
}
break;
}

var seq__55677_55706 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__55678_55707 = null;
var count__55679_55708 = (0);
var i__55680_55709 = (0);
while(true){
if((i__55680_55709 < count__55679_55708)){
var controller_55710 = chunk__55678_55707.cljs$core$IIndexed$_nth$arity$2(null,i__55680_55709);
reitit.frontend.controllers.apply_controller(controller_55710,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55711 = seq__55677_55706;
var G__55712 = chunk__55678_55707;
var G__55713 = count__55679_55708;
var G__55714 = (i__55680_55709 + (1));
seq__55677_55706 = G__55711;
chunk__55678_55707 = G__55712;
count__55679_55708 = G__55713;
i__55680_55709 = G__55714;
continue;
} else {
var temp__5735__auto___55715 = cljs.core.seq(seq__55677_55706);
if(temp__5735__auto___55715){
var seq__55677_55716__$1 = temp__5735__auto___55715;
if(cljs.core.chunked_seq_QMARK_(seq__55677_55716__$1)){
var c__4609__auto___55717 = cljs.core.chunk_first(seq__55677_55716__$1);
var G__55718 = cljs.core.chunk_rest(seq__55677_55716__$1);
var G__55719 = c__4609__auto___55717;
var G__55720 = cljs.core.count(c__4609__auto___55717);
var G__55721 = (0);
seq__55677_55706 = G__55718;
chunk__55678_55707 = G__55719;
count__55679_55708 = G__55720;
i__55680_55709 = G__55721;
continue;
} else {
var controller_55722 = cljs.core.first(seq__55677_55716__$1);
reitit.frontend.controllers.apply_controller(controller_55722,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55723 = cljs.core.next(seq__55677_55716__$1);
var G__55724 = null;
var G__55725 = (0);
var G__55726 = (0);
seq__55677_55706 = G__55723;
chunk__55678_55707 = G__55724;
count__55679_55708 = G__55725;
i__55680_55709 = G__55726;
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
