goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');
reitit.impl.parse = (function reitit$impl$parse(path,opts){
var path__$1 = reitit.trie.normalize(path,opts);
var path_parts = reitit.trie.split_path(path__$1,opts);
var path_params = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,path_parts)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null);
});
reitit.impl.wild_path_QMARK_ = (function reitit$impl$wild_path_QMARK_(path,opts){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
reitit.impl.__GT_wild_route_QMARK_ = (function reitit$impl$__GT_wild_route_QMARK_(opts){
return (function (p__50018){
var vec__50019 = p__50018;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50019,(0),null);
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5737__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5737__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5737__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__50024){
var map__50025 = p__50024;
var map__50025__$1 = (((((!((map__50025 == null))))?(((((map__50025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50025):map__50025);
var opts = map__50025__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50025__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50025__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__50022_SHARP_,p2__50023_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__50022_SHARP_,walk_one(p,m,p2__50023_SHARP_));
}),cljs.core.PersistentVector.EMPTY,r);
});
var walk_one = (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__50036 = routes__$1;
var seq__50037 = cljs.core.seq(vec__50036);
var first__50038 = cljs.core.first(seq__50037);
var seq__50037__$1 = cljs.core.next(seq__50037);
var path__$1 = first__50038;
var vec__50039 = seq__50037__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50039,(0),null);
var args = vec__50039;
var vec__50042 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50042,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50042,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50045){
var vec__50046 = p__50045;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50046,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50046,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p,ds) : f.call(null,p,ds))], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__50049){
var vec__50050 = p__50049;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50050,(1),null);
try{return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e50053){if((e50053 instanceof Error)){
var e = e50053;
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e50053;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__50055){
var map__50056 = p__50055;
var map__50056__$1 = (((((!((map__50056 == null))))?(((((map__50056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50056):map__50056);
var opts = map__50056__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50056__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__50058 = reitit.impl.map_data(reitit.impl.merge_data,reitit.impl.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__50054_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__50054_SHARP_,opts) : coerce.call(null,p1__50054_SHARP_,opts));
})),G__50058);
} else {
return G__50058;
}
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes,opts){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__50059_SHARP_){
return reitit.trie.conflicting_paths_QMARK_(cljs.core.first(route),cljs.core.first(p1__50059_SHARP_),opts);
})),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.unresolved_conflicts = (function reitit$impl$unresolved_conflicts(path_conflicting){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__50060){
var vec__50061 = p__50060;
var vec__50064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50061,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064,(0),null);
var route_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064,(1),null);
var conflicts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50061,(1),null);
var and__4174__auto__ = new cljs.core.Keyword(null,"conflicting","conflicting",2003828416).cljs$core$IFn$_invoke$arity$1(route_data);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conflicting","conflicting",2003828416),cljs.core.second),conflicts);
} else {
return and__4174__auto__;
}
})),path_conflicting));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function reitit$impl$conflicting_paths_$_iter__50067(s__50068){
return (new cljs.core.LazySeq(null,(function (){
var s__50068__$1 = s__50068;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50068__$1);
if(temp__5735__auto__){
var s__50068__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50068__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50068__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50070 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50069 = (0);
while(true){
if((i__50069 < size__4581__auto__)){
var vec__50071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50069);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50071,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50071,(1),null);
cljs.core.chunk_append(b__50070,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__50113 = (i__50069 + (1));
i__50069 = G__50113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50070),reitit$impl$conflicting_paths_$_iter__50067(cljs.core.chunk_rest(s__50068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50070),null);
}
} else {
var vec__50074 = cljs.core.first(s__50068__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50074,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50074,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$impl$conflicting_paths_$_iter__50067(cljs.core.rest(s__50068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__50077 = routes;
var G__50077__$1 = (((G__50077 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__50077));
var G__50077__$2 = (((G__50077__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__50077__$1));
var G__50077__$3 = (((G__50077__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__50077__$2));
var G__50077__$4 = (((G__50077__$3 == null))?null:cljs.core.seq(G__50077__$3));
var G__50077__$5 = (((G__50077__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50078){
var vec__50079 = p__50078;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50079,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
}),G__50077__$4));
if((G__50077__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50077__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__50082_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50082_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__50083,p__50084){
var vec__50085 = p__50083;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50085,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50085,(1),null);
var route = vec__50085;
var map__50088 = p__50084;
var map__50088__$1 = (((((!((map__50088 == null))))?(((((map__50088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50088):map__50088);
var opts = map__50088__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50088__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__50090_SHARP_){
return reitit.impl.compile_route(p1__50090_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5733__auto__)){
var p = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5733__auto__)){
var parts = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__50091_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__50091_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,defined);
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4185__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (reitit.impl.into_string[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

var G__50093_50125 = reitit.impl.into_string;
var G__50094_50126 = "string";
var G__50095_50127 = (function (this$){
return this$;
});
goog.object.set(G__50093_50125,G__50094_50126,G__50095_50127);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name(this$__$1)].join('');
}));

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__50096_50128 = reitit.impl.into_string;
var G__50097_50129 = "boolean";
var G__50098_50130 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__50096_50128,G__50097_50129,G__50098_50130);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__50099_50131 = reitit.impl.into_string;
var G__50100_50132 = "number";
var G__50101_50133 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__50099_50131,G__50100_50132,G__50101_50133);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__50102_50137 = reitit.impl.into_string;
var G__50103_50138 = "object";
var G__50104_50139 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__50102_50137,G__50103_50138,G__50104_50139);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__50105_50140 = reitit.impl.into_string;
var G__50106_50141 = "null";
var G__50107_50142 = (function (_){
return null;
});
goog.object.set(G__50105_50140,G__50106_50141,G__50107_50142);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__50108_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__50108_SHARP_));
}),params);
});
reitit.impl.query_parameter = (function reitit$impl$query_parameter(k,v){
return [reitit.impl.form_encode(reitit.impl.into_string(k)),"=",reitit.impl.form_encode(reitit.impl.into_string(v))].join('');
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50109){
var vec__50110 = p__50109;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50110,(1),null);
if(((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$3(reitit.impl.query_parameter,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(k),v));
} else {
return reitit.impl.query_parameter(k,v);
}
}),params));
});

//# sourceMappingURL=reitit.impl.js.map
