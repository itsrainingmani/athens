goog.provide('reitit.core');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_60922 = (function (this$,opts){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.expand[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4429__auto__.call(null,this$,opts));
} else {
var m__4426__auto__ = (reitit.core.expand["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4426__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_60922(this$,opts);
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.core.Expand,"function",true);

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

var reitit$core$Router$router_name$dyn_60924 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.router_name[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (reitit.core.router_name["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_60924(this$);
}
});

var reitit$core$Router$routes$dyn_60927 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.routes[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (reitit.core.routes["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_60927(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_60928 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_60928(this$);
}
});

var reitit$core$Router$options$dyn_60931 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.options[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (reitit.core.options["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_60931(this$);
}
});

var reitit$core$Router$route_names$dyn_60935 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.route_names[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (reitit.core.route_names["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_60935(this$);
}
});

var reitit$core$Router$match_by_path$dyn_60936 = (function (this$,path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4429__auto__.call(null,this$,path));
} else {
var m__4426__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4426__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_60936(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_60937 = (function() {
var G__60938 = null;
var G__60938__2 = (function (this$,name){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4429__auto__.call(null,this$,name));
} else {
var m__4426__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4426__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__60938__3 = (function (this$,name,path_params){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4429__auto__.call(null,this$,name,path_params));
} else {
var m__4426__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4426__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
G__60938 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__60938__2.call(this,this$,name);
case 3:
return G__60938__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60938.cljs$core$IFn$_invoke$arity$2 = G__60938__2;
G__60938.cljs$core$IFn$_invoke$arity$3 = G__60938__3;
return G__60938;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__60775 = arguments.length;
switch (G__60775) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
return reitit$core$Router$match_by_name$dyn_60937(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_60937(this$,name,path_params);
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 3);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60778,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60782 = k60778;
var G__60782__$1 = (((G__60782 instanceof cljs.core.Keyword))?G__60782.fqn:null);
switch (G__60782__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60778,else__4383__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60783){
var vec__60784 = p__60783;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60784,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60784,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#reitit.core.Match{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60777){
var self__ = this;
var G__60777__$1 = this;
return (new cljs.core.RecordIter((0),G__60777__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60779,other60780){
var self__ = this;
var this60779__$1 = this;
return (((!((other60780 == null)))) && ((this60779__$1.constructor === other60780.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60779__$1.template,other60780.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60779__$1.data,other60780.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60779__$1.result,other60780.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60779__$1.path_params,other60780.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60779__$1.path,other60780.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60779__$1.__extmap,other60780.__extmap)));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60777){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60787 = cljs.core.keyword_identical_QMARK_;
var expr__60788 = k__4388__auto__;
if(cljs.core.truth_((pred__60787.cljs$core$IFn$_invoke$arity$2 ? pred__60787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__60788) : pred__60787.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__60788)))){
return (new reitit.core.Match(G__60777,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60787.cljs$core$IFn$_invoke$arity$2 ? pred__60787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__60788) : pred__60787.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__60788)))){
return (new reitit.core.Match(self__.template,G__60777,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60787.cljs$core$IFn$_invoke$arity$2 ? pred__60787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__60788) : pred__60787.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__60788)))){
return (new reitit.core.Match(self__.template,self__.data,G__60777,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60787.cljs$core$IFn$_invoke$arity$2 ? pred__60787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__60788) : pred__60787.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__60788)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__60777,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60787.cljs$core$IFn$_invoke$arity$2 ? pred__60787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__60788) : pred__60787.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__60788)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__60777,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60777),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60777){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__60777,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__60781){
var extmap__4419__auto__ = (function (){var G__60790 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60781,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__60781)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60790);
} else {
return G__60790;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__60781),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__60781),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__60781),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__60781),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__60781),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60792,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60796 = k60792;
var G__60796__$1 = (((G__60796 instanceof cljs.core.Keyword))?G__60796.fqn:null);
switch (G__60796__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60792,else__4383__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60797){
var vec__60798 = p__60797;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60798,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60798,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60791){
var self__ = this;
var G__60791__$1 = this;
return (new cljs.core.RecordIter((0),G__60791__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60793,other60794){
var self__ = this;
var this60793__$1 = this;
return (((!((other60794 == null)))) && ((this60793__$1.constructor === other60794.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60793__$1.template,other60794.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60793__$1.data,other60794.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60793__$1.result,other60794.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60793__$1.path_params,other60794.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60793__$1.required,other60794.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60793__$1.__extmap,other60794.__extmap)));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60791){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60801 = cljs.core.keyword_identical_QMARK_;
var expr__60802 = k__4388__auto__;
if(cljs.core.truth_((pred__60801.cljs$core$IFn$_invoke$arity$2 ? pred__60801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__60802) : pred__60801.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__60802)))){
return (new reitit.core.PartialMatch(G__60791,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60801.cljs$core$IFn$_invoke$arity$2 ? pred__60801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__60802) : pred__60801.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__60802)))){
return (new reitit.core.PartialMatch(self__.template,G__60791,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60801.cljs$core$IFn$_invoke$arity$2 ? pred__60801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__60802) : pred__60801.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__60802)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__60791,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60801.cljs$core$IFn$_invoke$arity$2 ? pred__60801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__60802) : pred__60801.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__60802)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__60791,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60801.cljs$core$IFn$_invoke$arity$2 ? pred__60801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__60802) : pred__60801.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__60802)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__60791,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60791),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60791){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__60791,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__60795){
var extmap__4419__auto__ = (function (){var G__60804 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60795,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__60795)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60804);
} else {
return G__60804;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__60795),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__60795),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__60795),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__60795),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__60795),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__60806 = arguments.length;
switch (G__60806) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5733__auto__ = reitit.core.match_by_name(this$,name,path_params);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__60808 = arguments.length;
switch (G__60808) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__60809 = match;
var G__60809__$1 = (((G__60809 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__60809));
if((G__60809__$1 == null)){
return null;
} else {
var G__60810 = G__60809__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60810),"?",reitit.impl.query_string(query_params)].join('');
} else {
return G__60810;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__60813 = arguments.length;
switch (G__60813) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__60814 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60817,p__60818){
var vec__60819 = p__60817;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60819,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60819,(1),null);
var vec__60822 = p__60818;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60822,(0),null);
var map__60825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60822,(1),null);
var map__60825__$1 = (((((!((map__60825 == null))))?(((((map__60825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60825):map__60825);
var data = map__60825__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60825__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60822,(2),null);
var map__60827 = reitit.impl.parse(p,opts);
var map__60827__$1 = (((((!((map__60827 == null))))?(((((map__60827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60827):map__60827);
var route = map__60827__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60827__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__60811_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for(route,p1__60811_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__60811_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__60811_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60814,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60814,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core60829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core60829 = (function (matcher,names,compiled_routes,routes,lookup,vec__60814,pl,nl,match_by_path,compiler,opts,meta60830){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__60814 = vec__60814;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta60830 = meta60830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core60829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60831,meta60830__$1){
var self__ = this;
var _60831__$1 = this;
return (new reitit.core.t_reitit$core60829(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__60814,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta60830__$1));
}));

(reitit.core.t_reitit$core60829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60831){
var self__ = this;
var _60831__$1 = this;
return self__.meta60830;
}));

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core60829.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__60832 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__60832) : match.call(null,G__60832));
} else {
return null;
}
}));

(reitit.core.t_reitit$core60829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__60814","vec__60814",265149037,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta60830","meta60830",1452416119,null)], null);
}));

(reitit.core.t_reitit$core60829.cljs$lang$type = true);

(reitit.core.t_reitit$core60829.cljs$lang$ctorStr = "reitit.core/t_reitit$core60829");

(reitit.core.t_reitit$core60829.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.core/t_reitit$core60829");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core60829.
 */
reitit.core.__GT_t_reitit$core60829 = (function reitit$core$__GT_t_reitit$core60829(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__60814__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta60830){
return (new reitit.core.t_reitit$core60829(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__60814__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta60830));
});

}

return (new reitit.core.t_reitit$core60829(matcher,names,compiled_routes,routes,lookup,vec__60814,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__60835 = arguments.length;
switch (G__60835) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5735__auto___61014 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5735__auto___61014){
var wilds_61015 = temp__5735__auto___61014;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_61015)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_61015,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__60836 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60839,p__60840){
var vec__60841 = p__60839;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60841,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60841,(1),null);
var vec__60844 = p__60840;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60844,(0),null);
var map__60847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60844,(1),null);
var map__60847__$1 = (((((!((map__60847 == null))))?(((((map__60847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60847):map__60847);
var data = map__60847__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60844,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__60833_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__60833_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60836,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60836,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core60849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core60849 = (function (names,data,compiled_routes,routes,lookup,vec__60836,pl,nl,opts,meta60850){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__60836 = vec__60836;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta60850 = meta60850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core60849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60851,meta60850__$1){
var self__ = this;
var _60851__$1 = this;
return (new reitit.core.t_reitit$core60849(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__60836,self__.pl,self__.nl,self__.opts,meta60850__$1));
}));

(reitit.core.t_reitit$core60849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60851){
var self__ = this;
var _60851__$1 = this;
return self__.meta60850;
}));

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core60849.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__60852 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__60852) : match.call(null,G__60852));
} else {
return null;
}
}));

(reitit.core.t_reitit$core60849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__60836","vec__60836",-606324527,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta60850","meta60850",-1960263587,null)], null);
}));

(reitit.core.t_reitit$core60849.cljs$lang$type = true);

(reitit.core.t_reitit$core60849.cljs$lang$ctorStr = "reitit.core/t_reitit$core60849");

(reitit.core.t_reitit$core60849.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.core/t_reitit$core60849");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core60849.
 */
reitit.core.__GT_t_reitit$core60849 = (function reitit$core$__GT_t_reitit$core60849(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__60836__$1,pl__$1,nl__$1,opts__$1,meta60850){
return (new reitit.core.t_reitit$core60849(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__60836__$1,pl__$1,nl__$1,opts__$1,meta60850));
});

}

return (new reitit.core.t_reitit$core60849(names,data,compiled_routes,routes,lookup,vec__60836,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__60855 = arguments.length;
switch (G__60855) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__60856 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60859,p__60860){
var vec__60861 = p__60859;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60861,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60861,(1),null);
var vec__60864 = p__60860;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60864,(0),null);
var map__60867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60864,(1),null);
var map__60867__$1 = (((((!((map__60867 == null))))?(((((map__60867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60867):map__60867);
var data = map__60867__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60867__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60864,(2),null);
var map__60869 = reitit.impl.parse(p,opts);
var map__60869__$1 = (((((!((map__60869 == null))))?(((((map__60869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60869):map__60869);
var route = map__60869__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__60853_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for(route,p1__60853_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__60853_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__60853_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60856,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60856,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core60871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core60871 = (function (vec__60856,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta60872){
this.vec__60856 = vec__60856;
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta60872 = meta60872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core60871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60873,meta60872__$1){
var self__ = this;
var _60873__$1 = this;
return (new reitit.core.t_reitit$core60871(self__.vec__60856,self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta60872__$1));
}));

(reitit.core.t_reitit$core60871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60873){
var self__ = this;
var _60873__$1 = this;
return self__.meta60872;
}));

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
}));

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core60871.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__60874 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__60874) : match.call(null,G__60874));
} else {
return null;
}
}));

(reitit.core.t_reitit$core60871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__60856","vec__60856",1510865507,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta60872","meta60872",-1360030652,null)], null);
}));

(reitit.core.t_reitit$core60871.cljs$lang$type = true);

(reitit.core.t_reitit$core60871.cljs$lang$ctorStr = "reitit.core/t_reitit$core60871");

(reitit.core.t_reitit$core60871.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.core/t_reitit$core60871");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core60871.
 */
reitit.core.__GT_t_reitit$core60871 = (function reitit$core$__GT_t_reitit$core60871(vec__60856__$1,matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta60872){
return (new reitit.core.t_reitit$core60871(vec__60856__$1,matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta60872));
});

}

return (new reitit.core.t_reitit$core60871(vec__60856,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__60876 = arguments.length;
switch (G__60876) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__60877 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60877,(0),null);
var names = vec__60877;
var vec__60880 = compiled_routes;
var vec__60883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60883,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60883,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60883,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core60886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core60886 = (function (p,names,match,data,compiled_routes,routes,n,vec__60877,vec__60880,result,opts,vec__60883,meta60887){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.n = n;
this.vec__60877 = vec__60877;
this.vec__60880 = vec__60880;
this.result = result;
this.opts = opts;
this.vec__60883 = vec__60883;
this.meta60887 = meta60887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core60886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60888,meta60887__$1){
var self__ = this;
var _60888__$1 = this;
return (new reitit.core.t_reitit$core60886(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.n,self__.vec__60877,self__.vec__60880,self__.result,self__.opts,self__.vec__60883,meta60887__$1));
}));

(reitit.core.t_reitit$core60886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60888){
var self__ = this;
var _60888__$1 = this;
return self__.meta60887;
}));

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core60886.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core60886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__60877","vec__60877",1436696311,null),new cljs.core.Symbol(null,"vec__60880","vec__60880",984814809,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__60883","vec__60883",-691175875,null),new cljs.core.Symbol(null,"meta60887","meta60887",326142386,null)], null);
}));

(reitit.core.t_reitit$core60886.cljs$lang$type = true);

(reitit.core.t_reitit$core60886.cljs$lang$ctorStr = "reitit.core/t_reitit$core60886");

(reitit.core.t_reitit$core60886.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.core/t_reitit$core60886");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core60886.
 */
reitit.core.__GT_t_reitit$core60886 = (function reitit$core$__GT_t_reitit$core60886(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__60877__$1,vec__60880__$1,result__$1,opts__$1,vec__60883__$1,meta60887){
return (new reitit.core.t_reitit$core60886(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__60877__$1,vec__60880__$1,result__$1,opts__$1,vec__60883__$1,meta60887));
});

}

return (new reitit.core.t_reitit$core60886(p__$1,names,match,data,compiled_routes,routes,n,vec__60877,vec__60880,result,opts,vec__60883,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__60890 = arguments.length;
switch (G__60890) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__60891 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__60891__$1 = (((((!((map__60891 == null))))?(((((map__60891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60891):map__60891);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core60893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core60893 = (function (names,compiled_routes,routes,map__60891,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta60894){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.map__60891 = map__60891;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta60894 = meta60894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core60893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60895,meta60894__$1){
var self__ = this;
var _60895__$1 = this;
return (new reitit.core.t_reitit$core60893(self__.names,self__.compiled_routes,self__.routes,self__.map__60891,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta60894__$1));
}));

(reitit.core.t_reitit$core60893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60895){
var self__ = this;
var _60895__$1 = this;
return self__.meta60894;
}));

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_name(self__.static_router,name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core60893.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_name(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core60893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"map__60891","map__60891",-1439730421,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta60894","meta60894",2124905963,null)], null);
}));

(reitit.core.t_reitit$core60893.cljs$lang$type = true);

(reitit.core.t_reitit$core60893.cljs$lang$ctorStr = "reitit.core/t_reitit$core60893");

(reitit.core.t_reitit$core60893.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.core/t_reitit$core60893");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core60893.
 */
reitit.core.__GT_t_reitit$core60893 = (function reitit$core$__GT_t_reitit$core60893(names__$1,compiled_routes__$1,routes__$1,map__60891__$2,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta60894){
return (new reitit.core.t_reitit$core60893(names__$1,compiled_routes__$1,routes__$1,map__60891__$2,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta60894));
});

}

return (new reitit.core.t_reitit$core60893(names,compiled_routes,routes,map__60891__$1,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__60898 = arguments.length;
switch (G__60898) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths(reitit.impl.path_conflicting_routes(compiled_routes,opts));
var conflicting_QMARK_ = (function (p1__60896_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__60896_SHARP_));
});
var map__60899 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__60899__$1 = (((((!((map__60899 == null))))?(((((map__60899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60899):map__60899);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60899__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60899__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core60901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core60901 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,map__60899,meta60902){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.map__60899 = map__60899;
this.meta60902 = meta60902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core60901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60903,meta60902__$1){
var self__ = this;
var _60903__$1 = this;
return (new reitit.core.t_reitit$core60901(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,self__.map__60899,meta60902__$1));
}));

(reitit.core.t_reitit$core60901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60903){
var self__ = this;
var _60903__$1 = this;
return self__.meta60902;
}));

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_name(self__.mixed_router,name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core60901.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_name(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core60901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"map__60899","map__60899",673780701,null),new cljs.core.Symbol(null,"meta60902","meta60902",833878692,null)], null);
}));

(reitit.core.t_reitit$core60901.cljs$lang$type = true);

(reitit.core.t_reitit$core60901.cljs$lang$ctorStr = "reitit.core/t_reitit$core60901");

(reitit.core.t_reitit$core60901.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.core/t_reitit$core60901");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core60901.
 */
reitit.core.__GT_t_reitit$core60901 = (function reitit$core$__GT_t_reitit$core60901(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,map__60899__$2,meta60902){
return (new reitit.core.t_reitit$core60901(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,map__60899__$2,meta60902));
});

}

return (new reitit.core.t_reitit$core60901(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,map__60899__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__60904,_){
var vec__60905 = p__60904;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60905,(0),null);
var map__60908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60905,(1),null);
var map__60908__$1 = (((((!((map__60908 == null))))?(((((map__60908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60908):map__60908);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__60910,_){
var vec__60911 = p__60910;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(0),null);
var map__60914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(1),null);
var map__60914__$1 = (((((!((map__60914 == null))))?(((((map__60914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60914):map__60914);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__60917 = arguments.length;
switch (G__60917) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__60918 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__60918__$1 = (((((!((map__60918 == null))))?(((((map__60918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60918):map__60918);
var opts__$1 = map__60918__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60918__$1,new cljs.core.Keyword(null,"router","router",1091916230));
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.impl.path_conflicting_routes(routes,opts__$1);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5735__auto___61042 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___61042)){
var conflicts_61043 = temp__5735__auto___61042;
var temp__5735__auto___61044__$1 = reitit.impl.unresolved_conflicts(path_conflicting);
if(cljs.core.truth_(temp__5735__auto___61044__$1)){
var conflict_report_61045 = temp__5735__auto___61044__$1;
(conflicts_61043.cljs$core$IFn$_invoke$arity$1 ? conflicts_61043.cljs$core$IFn$_invoke$arity$1(conflict_report_61045) : conflicts_61043.call(null,conflict_report_61045));
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5735__auto___61046 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___61046)){
var validate_61047 = temp__5735__auto___61046;
(validate_61047.cljs$core$IFn$_invoke$arity$2 ? validate_61047.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_61047.call(null,compiled_routes,opts__$1));
} else {
}

return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : router__$1.call(null,compiled_routes,opts__$1));
}catch (e60920){if((e60920 instanceof Error)){
var e = e60920;
throw (function (){var fexpr__60921 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity);
return (fexpr__60921.cljs$core$IFn$_invoke$arity$1 ? fexpr__60921.cljs$core$IFn$_invoke$arity$1(e) : fexpr__60921.call(null,e));
})();
} else {
throw e60920;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.core.js.map
