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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__79745,match){
var map__79747 = p__79745;
var map__79747__$1 = (((((!((map__79747 == null))))?(((((map__79747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79747):map__79747);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79747__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79747__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79747__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__79749(s__79750){
return (new cljs.core.LazySeq(null,(function (){
var s__79750__$1 = s__79750;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__79750__$1);
if(temp__5735__auto__){
var s__79750__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79750__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__79750__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__79752 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__79751 = (0);
while(true){
if((i__79751 < size__4581__auto__)){
var vec__79758 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__79751);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79758,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79758,(1),null);
cljs.core.chunk_append(b__79752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__79781 = (i__79751 + (1));
i__79751 = G__79781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79752),reitit$frontend$controllers$get_identity_$_iter__79749(cljs.core.chunk_rest(s__79750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79752),null);
}
} else {
var vec__79761 = cljs.core.first(s__79750__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79761,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79761,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__79749(cljs.core.rest(s__79750__$2)));
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
var G__79764 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__79764) : f.call(null,G__79764));
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
var seq__79765_79782 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__79766_79783 = null;
var count__79767_79784 = (0);
var i__79768_79785 = (0);
while(true){
if((i__79768_79785 < count__79767_79784)){
var controller_79786 = chunk__79766_79783.cljs$core$IIndexed$_nth$arity$2(null,i__79768_79785);
reitit.frontend.controllers.apply_controller(controller_79786,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79787 = seq__79765_79782;
var G__79788 = chunk__79766_79783;
var G__79789 = count__79767_79784;
var G__79790 = (i__79768_79785 + (1));
seq__79765_79782 = G__79787;
chunk__79766_79783 = G__79788;
count__79767_79784 = G__79789;
i__79768_79785 = G__79790;
continue;
} else {
var temp__5735__auto___79791 = cljs.core.seq(seq__79765_79782);
if(temp__5735__auto___79791){
var seq__79765_79792__$1 = temp__5735__auto___79791;
if(cljs.core.chunked_seq_QMARK_(seq__79765_79792__$1)){
var c__4609__auto___79793 = cljs.core.chunk_first(seq__79765_79792__$1);
var G__79794 = cljs.core.chunk_rest(seq__79765_79792__$1);
var G__79795 = c__4609__auto___79793;
var G__79796 = cljs.core.count(c__4609__auto___79793);
var G__79797 = (0);
seq__79765_79782 = G__79794;
chunk__79766_79783 = G__79795;
count__79767_79784 = G__79796;
i__79768_79785 = G__79797;
continue;
} else {
var controller_79798 = cljs.core.first(seq__79765_79792__$1);
reitit.frontend.controllers.apply_controller(controller_79798,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79799 = cljs.core.next(seq__79765_79792__$1);
var G__79800 = null;
var G__79801 = (0);
var G__79802 = (0);
seq__79765_79782 = G__79799;
chunk__79766_79783 = G__79800;
count__79767_79784 = G__79801;
i__79768_79785 = G__79802;
continue;
}
} else {
}
}
break;
}

var seq__79770_79803 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__79771_79804 = null;
var count__79772_79805 = (0);
var i__79773_79806 = (0);
while(true){
if((i__79773_79806 < count__79772_79805)){
var controller_79807 = chunk__79771_79804.cljs$core$IIndexed$_nth$arity$2(null,i__79773_79806);
reitit.frontend.controllers.apply_controller(controller_79807,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79808 = seq__79770_79803;
var G__79809 = chunk__79771_79804;
var G__79810 = count__79772_79805;
var G__79811 = (i__79773_79806 + (1));
seq__79770_79803 = G__79808;
chunk__79771_79804 = G__79809;
count__79772_79805 = G__79810;
i__79773_79806 = G__79811;
continue;
} else {
var temp__5735__auto___79812 = cljs.core.seq(seq__79770_79803);
if(temp__5735__auto___79812){
var seq__79770_79813__$1 = temp__5735__auto___79812;
if(cljs.core.chunked_seq_QMARK_(seq__79770_79813__$1)){
var c__4609__auto___79814 = cljs.core.chunk_first(seq__79770_79813__$1);
var G__79815 = cljs.core.chunk_rest(seq__79770_79813__$1);
var G__79816 = c__4609__auto___79814;
var G__79817 = cljs.core.count(c__4609__auto___79814);
var G__79818 = (0);
seq__79770_79803 = G__79815;
chunk__79771_79804 = G__79816;
count__79772_79805 = G__79817;
i__79773_79806 = G__79818;
continue;
} else {
var controller_79819 = cljs.core.first(seq__79770_79813__$1);
reitit.frontend.controllers.apply_controller(controller_79819,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79820 = cljs.core.next(seq__79770_79813__$1);
var G__79821 = null;
var G__79822 = (0);
var G__79823 = (0);
seq__79770_79803 = G__79820;
chunk__79771_79804 = G__79821;
count__79772_79805 = G__79822;
i__79773_79806 = G__79823;
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
