goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types');
goog.require('cljs.core');

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
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k24977,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__24981 = k24977;
var G__24981__$1 = (((G__24981 instanceof cljs.core.Keyword))?G__24981.fqn:null);
switch (G__24981__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24977,else__4442__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__24982){
var vec__24983 = p__24982;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24983,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24983,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types.CSSUnit{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24976){
var self__ = this;
var G__24976__$1 = this;
return (new cljs.core.RecordIter((0),G__24976__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__24986 = (function (coll__4436__auto__){
return (-1965805359 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__24986(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24978,other24979){
var self__ = this;
var this24978__$1 = this;
return (((!((other24979 == null)))) && ((this24978__$1.constructor === other24979.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24978__$1.unit,other24979.unit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24978__$1.magnitude,other24979.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24978__$1.__extmap,other24979.__extmap)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__24976){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__24990 = cljs.core.keyword_identical_QMARK_;
var expr__24991 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__24993 = new cljs.core.Keyword(null,"unit","unit",375175175);
var G__24994 = expr__24991;
return (pred__24990.cljs$core$IFn$_invoke$arity$2 ? pred__24990.cljs$core$IFn$_invoke$arity$2(G__24993,G__24994) : pred__24990.call(null,G__24993,G__24994));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit(G__24976,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24995 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222);
var G__24996 = expr__24991;
return (pred__24990.cljs$core$IFn$_invoke$arity$2 ? pred__24990.cljs$core$IFn$_invoke$arity$2(G__24995,G__24996) : pred__24990.call(null,G__24995,G__24996));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit(self__.unit,G__24976,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__24976),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__24976){
var self__ = this;
var this__4438__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit(self__.unit,self__.magnitude,G__24976,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSUnit",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSUnit");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$types$__GT_CSSUnit(unit,magnitude){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSUnit, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.map__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$types$map__GT_CSSUnit(G__24980){
var extmap__4478__auto__ = (function (){var G__25002 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24980,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0));
if(cljs.core.record_QMARK_(G__24980)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25002);
} else {
return G__25002;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__24980),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__24980),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25004,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25012 = k25004;
var G__25012__$1 = (((G__25012 instanceof cljs.core.Keyword))?G__25012.fqn:null);
switch (G__25012__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25004,else__4442__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__25013){
var vec__25014 = p__25013;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25014,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25014,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types.CSSFunction{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25003){
var self__ = this;
var G__25003__$1 = this;
return (new cljs.core.RecordIter((0),G__25003__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__25041 = (function (coll__4436__auto__){
return (-259448340 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__25041(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25005,other25006){
var self__ = this;
var this25005__$1 = this;
return (((!((other25006 == null)))) && ((this25005__$1.constructor === other25006.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25005__$1.f,other25006.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25005__$1.args,other25006.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25005__$1.__extmap,other25006.__extmap)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25003){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25048 = cljs.core.keyword_identical_QMARK_;
var expr__25049 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__25051 = new cljs.core.Keyword(null,"f","f",-1597136552);
var G__25052 = expr__25049;
return (pred__25048.cljs$core$IFn$_invoke$arity$2 ? pred__25048.cljs$core$IFn$_invoke$arity$2(G__25051,G__25052) : pred__25048.call(null,G__25051,G__25052));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(G__25003,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25053 = new cljs.core.Keyword(null,"args","args",1315556576);
var G__25054 = expr__25049;
return (pred__25048.cljs$core$IFn$_invoke$arity$2 ? pred__25048.cljs$core$IFn$_invoke$arity$2(G__25053,G__25054) : pred__25048.call(null,G__25053,G__25054));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(self__.f,G__25003,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__25003),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25003){
var self__ = this;
var this__4438__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(self__.f,self__.args,G__25003,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSFunction",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSFunction");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSFunction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$types$__GT_CSSFunction(f,args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSFunction, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.map__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$types$map__GT_CSSFunction(G__25007){
var extmap__4478__auto__ = (function (){var G__25060 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25007,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__25007)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25060);
} else {
return G__25060;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__25007),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__25007),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25062,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25068 = k25062;
var G__25068__$1 = (((G__25068 instanceof cljs.core.Keyword))?G__25068.fqn:null);
switch (G__25068__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25062,else__4442__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__25069){
var vec__25070 = p__25069;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25070,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25070,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types.CSSAtRule{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25061){
var self__ = this;
var G__25061__$1 = this;
return (new cljs.core.RecordIter((0),G__25061__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__25074 = (function (coll__4436__auto__){
return (120772799 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__25074(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25063,other25064){
var self__ = this;
var this25063__$1 = this;
return (((!((other25064 == null)))) && ((this25063__$1.constructor === other25064.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25063__$1.identifier,other25064.identifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25063__$1.value,other25064.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25063__$1.__extmap,other25064.__extmap)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25061){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25075 = cljs.core.keyword_identical_QMARK_;
var expr__25076 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__25078 = new cljs.core.Keyword(null,"identifier","identifier",-805503498);
var G__25079 = expr__25076;
return (pred__25075.cljs$core$IFn$_invoke$arity$2 ? pred__25075.cljs$core$IFn$_invoke$arity$2(G__25078,G__25079) : pred__25075.call(null,G__25078,G__25079));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(G__25061,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25080 = new cljs.core.Keyword(null,"value","value",305978217);
var G__25081 = expr__25076;
return (pred__25075.cljs$core$IFn$_invoke$arity$2 ? pred__25075.cljs$core$IFn$_invoke$arity$2(G__25080,G__25081) : pred__25075.call(null,G__25080,G__25081));
})())){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(self__.identifier,G__25061,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__25061),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25061){
var self__ = this;
var this__4438__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(self__.identifier,self__.value,G__25061,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSAtRule",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSAtRule");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSAtRule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$types$__GT_CSSAtRule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.map__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$types$map__GT_CSSAtRule(G__25066){
var extmap__4478__auto__ = (function (){var G__25082 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25066,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__25066)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25082);
} else {
return G__25082;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__25066),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__25066),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.js.map
