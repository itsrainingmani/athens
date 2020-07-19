goog.provide('datascript.db');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('clojure.data');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('me.tonsky.persistent_sorted_set.arrays');
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.e0 = (0);
datascript.db.tx0 = (536870912);
datascript.db.emax = (2147483647);
datascript.db.txmax = (2147483647);
datascript.db.implicit_schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
datascript.db.seqable_QMARK_ = (function datascript$db$seqable_QMARK_(x){
return (((!(typeof x === 'string'))) && (((cljs.core.seqable_QMARK_(x)) || (me.tonsky.persistent_sorted_set.arrays.array_QMARK_(x)))));
});
datascript.db.conjv = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
datascript.db.conjs = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
/**
 * Same as reduce, but `f` takes [acc el idx]
 */
datascript.db.reduce_indexed = (function datascript$db$reduce_indexed(f,init,xs){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25776,x){
var vec__25777 = p__25776;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25777,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25777,(1),null);
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(acc,x,idx) : f.call(null,acc,x,idx));
if(cljs.core.reduced_QMARK_(res)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,idx], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(idx + (1))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,(0)], null),xs));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
datascript.db.combine_hashes = (function datascript$db$combine_hashes(x,y){
return cljs.core.hash_combine(x,y);
});






/**
 * @interface
 */
datascript.db.IDatom = function(){};

datascript.db.datom_tx = (function datascript$db$datom_tx(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$db$IDatom$datom_tx$arity$1 == null)))))){
return this$.datascript$db$IDatom$datom_tx$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (datascript.db.datom_tx[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (datascript.db.datom_tx["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDatom.datom-tx",this$);
}
}
}
});

datascript.db.datom_added = (function datascript$db$datom_added(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$db$IDatom$datom_added$arity$1 == null)))))){
return this$.datascript$db$IDatom$datom_added$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (datascript.db.datom_added[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (datascript.db.datom_added["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDatom.datom-added",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {datascript.db.IDatom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,_hash){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(datascript.db.Datom.prototype.datascript$db$IDatom$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.Datom.prototype.datascript$db$IDatom$datom_tx$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
if((self__.tx > (0))){
return self__.tx;
} else {
return (- self__.tx);
}
}));

(datascript.db.Datom.prototype.datascript$db$IDatom$datom_added$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (self__.tx > (0));
}));

(datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
if((self__._hash === (0))){
return (self__._hash = (datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.hash_datom.call(null,d__$1)));
} else {
return self__._hash;
}
}));

(datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
if((o instanceof datascript.db.Datom)){
return (datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2(d__$1,o) : datascript.db.equiv_datom.call(null,d__$1,o));
} else {
return false;
}
}));

(datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.seq_datom.call(null,d__$1));
}));

(datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,null) : datascript.db.val_at_datom.call(null,d__$1,k,null));
}));

(datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,nf) : datascript.db.val_at_datom.call(null,d__$1,k,nf));
}));

(datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2(this$__$1,i) : datascript.db.nth_datom.call(null,this$__$1,i));
}));

(datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3(this$__$1,i,not_found) : datascript.db.nth_datom.call(null,this$__$1,i,not_found));
}));

(datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return (datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,v__$1) : datascript.db.assoc_datom.call(null,d__$1,k,v__$1));
}));

(datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.datascript$db$IDatom$datom_tx$arity$1(null),d__$1.datascript$db$IDatom$datom_added$arity$1(null)], null));
}));

(datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.with_meta(new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(datascript.db.Datom.cljs$lang$type = true);

(datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom");

(datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"datascript.db/Datom");
}));

/**
 * Positional factory function for datascript.db/Datom.
 */
datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,_hash){
return (new datascript.db.Datom(e,a,v,tx,_hash));
});

goog.exportSymbol("datascript.db.Datom",datascript.db.Datom);
datascript.db.datom = (function datascript$db$datom(var_args){
var G__25781 = arguments.length;
switch (G__25781) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,(536870912),(0)));
}));

(datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,(0)));
}));

(datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,(cljs.core.truth_(added)?tx:(- tx)),(0)));
}));

(datascript.db.datom.cljs$lang$maxFixedArity = 5);

datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return datascript.db.combine_hashes(datascript.db.combine_hashes(cljs.core.hash(d.e),cljs.core.hash(d.a)),cljs.core.hash(d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (((d.e === o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,o.v)));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
return (new cljs.core.List(null,d.e,(new cljs.core.List(null,d.a,(new cljs.core.List(null,d.v,(new cljs.core.List(null,d.datascript$db$IDatom$datom_tx$arity$1(null),(new cljs.core.List(null,d.datascript$db$IDatom$datom_added$arity$1(null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
var G__25782 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),G__25782)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("e",G__25782)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),G__25782)){
return d.datascript$db$IDatom$datom_added$arity$1(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("v",G__25782)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),G__25782)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",G__25782)){
return d.a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),G__25782)){
return d.datascript$db$IDatom$datom_tx$arity$1(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("added",G__25782)){
return d.datascript$db$IDatom$datom_added$arity$1(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tx",G__25782)){
return d.datascript$db$IDatom$datom_tx$arity$1(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),G__25782)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var G__25784 = arguments.length;
switch (G__25784) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__25785 = i;
switch (G__25785) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.datascript$db$IDatom$datom_tx$arity$1(null);

break;
case (4):
return d.datascript$db$IDatom$datom_added$arity$1(null);

break;
default:
throw (new Error(["Datom/-nth: Index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

}
}));

(datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__25786 = i;
switch (G__25786) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.datascript$db$IDatom$datom_tx$arity$1(null);

break;
case (4):
return d.datascript$db$IDatom$datom_added$arity$1(null);

break;
default:
return not_found;

}
}));

(datascript.db.nth_datom.cljs$lang$maxFixedArity = 3);

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__25787 = k;
var G__25787__$1 = (((G__25787 instanceof cljs.core.Keyword))?G__25787.fqn:null);
switch (G__25787__$1) {
case "e":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(v,d.a,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "a":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,v,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "v":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "tx":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,v,d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "added":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),v);

break;
default:
throw (new datascript.db.IllegalArgumentException(["invalid key for #datascript/Datom: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(x,y){
if((x == null)){
return (0);
} else {
if((y == null)){
return (0);
} else {
return cljs.core.compare(x,y);
}
}
});
datascript.db.value_compare = (function datascript$db$value_compare(x,y){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return (0);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2048))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IComparable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IComparable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IComparable,x))){
return cljs.core._compare(x,y);
} else {
if(((((typeof x === 'string') || (cljs.core.array_QMARK_(x)) || (x === true) || (x === false))) && ((cljs.core.type(x) === cljs.core.type(y))))){
return goog.array.defaultCompare(x,y);
} else {
return (cljs.core.hash(x) - cljs.core.hash(y));

}
}
}
});
datascript.db.value_cmp = (function datascript$db$value_cmp(x,y){
if((x == null)){
return (0);
} else {
if((y == null)){
return (0);
} else {
return datascript.db.value_compare(x,y);

}
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__25159__auto__ = (d1.e - d2.e);
if(((0) === c__25159__auto__)){
var c__25159__auto____$1 = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__25159__auto____$1)){
var c__25159__auto____$2 = datascript.db.value_cmp(d1.v,d2.v);
if(((0) === c__25159__auto____$2)){
var c__25159__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__25159__auto____$3)){
return (0);
} else {
return c__25159__auto____$3;
}
} else {
return c__25159__auto____$2;
}
} else {
return c__25159__auto____$1;
}
} else {
return c__25159__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__25159__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__25159__auto__)){
var c__25159__auto____$1 = (d1.e - d2.e);
if(((0) === c__25159__auto____$1)){
var c__25159__auto____$2 = datascript.db.value_cmp(d1.v,d2.v);
if(((0) === c__25159__auto____$2)){
var c__25159__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__25159__auto____$3)){
return (0);
} else {
return c__25159__auto____$3;
}
} else {
return c__25159__auto____$2;
}
} else {
return c__25159__auto____$1;
}
} else {
return c__25159__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__25159__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__25159__auto__)){
var c__25159__auto____$1 = datascript.db.value_cmp(d1.v,d2.v);
if(((0) === c__25159__auto____$1)){
var c__25159__auto____$2 = (d1.e - d2.e);
if(((0) === c__25159__auto____$2)){
var c__25159__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__25159__auto____$3)){
return (0);
} else {
return c__25159__auto____$3;
}
} else {
return c__25159__auto____$2;
}
} else {
return c__25159__auto____$1;
}
} else {
return c__25159__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare(a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eav_quick = (function datascript$db$cmp_datoms_eav_quick(d1,d2){
var c__25159__auto__ = (d1.e - d2.e);
if(((0) === c__25159__auto__)){
var c__25159__auto____$1 = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__25159__auto____$1)){
var c__25159__auto____$2 = datascript.db.value_compare(d1.v,d2.v);
if(((0) === c__25159__auto____$2)){
return (0);
} else {
return c__25159__auto____$2;
}
} else {
return c__25159__auto____$1;
}
} else {
return c__25159__auto__;
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__25159__auto__ = (d1.e - d2.e);
if(((0) === c__25159__auto__)){
var c__25159__auto____$1 = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__25159__auto____$1)){
var c__25159__auto____$2 = datascript.db.value_compare(d1.v,d2.v);
if(((0) === c__25159__auto____$2)){
var c__25159__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__25159__auto____$3)){
return (0);
} else {
return c__25159__auto____$3;
}
} else {
return c__25159__auto____$2;
}
} else {
return c__25159__auto____$1;
}
} else {
return c__25159__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__25159__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__25159__auto__)){
var c__25159__auto____$1 = (d1.e - d2.e);
if(((0) === c__25159__auto____$1)){
var c__25159__auto____$2 = datascript.db.value_compare(d1.v,d2.v);
if(((0) === c__25159__auto____$2)){
var c__25159__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__25159__auto____$3)){
return (0);
} else {
return c__25159__auto____$3;
}
} else {
return c__25159__auto____$2;
}
} else {
return c__25159__auto____$1;
}
} else {
return c__25159__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__25159__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__25159__auto__)){
var c__25159__auto____$1 = datascript.db.value_compare(d1.v,d2.v);
if(((0) === c__25159__auto____$1)){
var c__25159__auto____$2 = (d1.e - d2.e);
if(((0) === c__25159__auto____$2)){
var c__25159__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__25159__auto____$3)){
return (0);
} else {
return c__25159__auto____$3;
}
} else {
return c__25159__auto____$2;
}
} else {
return c__25159__auto____$1;
}
} else {
return c__25159__auto__;
}
});
datascript.db.diff_sorted = (function datascript$db$diff_sorted(a,b,cmp){
var only_a = cljs.core.PersistentVector.EMPTY;
var only_b = cljs.core.PersistentVector.EMPTY;
var both = cljs.core.PersistentVector.EMPTY;
var a__$1 = a;
var b__$1 = b;
while(true){
if(cljs.core.empty_QMARK_(a__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(only_a),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(only_b,b__$1)),cljs.core.not_empty(both)], null);
} else {
if(cljs.core.empty_QMARK_(b__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(only_a,a__$1)),cljs.core.not_empty(only_b),cljs.core.not_empty(both)], null);
} else {
var first_a = cljs.core.first(a__$1);
var first_b = cljs.core.first(b__$1);
var diff = (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(first_a,first_b) : cmp.call(null,first_a,first_b));
if((diff === (0))){
var G__26067 = only_a;
var G__26068 = only_b;
var G__26069 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(both,first_a);
var G__26070 = cljs.core.next(a__$1);
var G__26071 = cljs.core.next(b__$1);
only_a = G__26067;
only_b = G__26068;
both = G__26069;
a__$1 = G__26070;
b__$1 = G__26071;
continue;
} else {
if((diff < (0))){
var G__26072 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(only_a,first_a);
var G__26073 = only_b;
var G__26074 = both;
var G__26075 = cljs.core.next(a__$1);
var G__26076 = b__$1;
only_a = G__26072;
only_b = G__26073;
both = G__26074;
a__$1 = G__26075;
b__$1 = G__26076;
continue;
} else {
if((diff > (0))){
var G__26077 = only_a;
var G__26078 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(only_b,first_b);
var G__26079 = both;
var G__26080 = a__$1;
var G__26081 = cljs.core.next(b__$1);
only_a = G__26077;
only_b = G__26078;
both = G__26079;
a__$1 = G__26080;
b__$1 = G__26081;
continue;
} else {
return null;
}
}
}

}
}
break;
}
});








/**
 * @interface
 */
datascript.db.ISearch = function(){};

datascript.db._search = (function datascript$db$_search(data,pattern){
if((((!((data == null)))) && ((!((data.datascript$db$ISearch$_search$arity$2 == null)))))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__4487__auto__ = (((data == null))?null:data);
var m__4488__auto__ = (datascript.db._search[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__4488__auto__.call(null,data,pattern));
} else {
var m__4485__auto__ = (datascript.db._search["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__4485__auto__.call(null,data,pattern));
} else {
throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

datascript.db._datoms = (function datascript$db$_datoms(db,index,components){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_datoms$arity$3 == null)))))){
return db.datascript$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__4487__auto__ = (((db == null))?null:db);
var m__4488__auto__ = (datascript.db._datoms[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4488__auto__.call(null,db,index,components));
} else {
var m__4485__auto__ = (datascript.db._datoms["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4485__auto__.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-datoms",db);
}
}
}
});

datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,components){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_seek_datoms$arity$3 == null)))))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__4487__auto__ = (((db == null))?null:db);
var m__4488__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4488__auto__.call(null,db,index,components));
} else {
var m__4485__auto__ = (datascript.db._seek_datoms["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4485__auto__.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-seek-datoms",db);
}
}
}
});

datascript.db._rseek_datoms = (function datascript$db$_rseek_datoms(db,index,components){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_rseek_datoms$arity$3 == null)))))){
return db.datascript$db$IIndexAccess$_rseek_datoms$arity$3(db,index,components);
} else {
var x__4487__auto__ = (((db == null))?null:db);
var m__4488__auto__ = (datascript.db._rseek_datoms[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4488__auto__.call(null,db,index,components));
} else {
var m__4485__auto__ = (datascript.db._rseek_datoms["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4485__auto__.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-rseek-datoms",db);
}
}
}
});

datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null)))))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__4487__auto__ = (((db == null))?null:db);
var m__4488__auto__ = (datascript.db._index_range[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__4488__auto__.call(null,db,attr,start,end));
} else {
var m__4485__auto__ = (datascript.db._index_range["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__4485__auto__.call(null,db,attr,start,end));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-index-range",db);
}
}
}
});

datascript.db.validate_indexed = (function datascript$db$validate_indexed(db,index,components){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,new cljs.core.Keyword(null,"avet","avet",1383857032))){
var temp__5739__auto__ = cljs.core.first(components);
if((temp__5739__auto__ == null)){
return null;
} else {
var attr = temp__5739__auto__;
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db,attr) : datascript.db.indexing_QMARK_.call(null,db,attr)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0))," should be marked as :db/index true"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"index-access","index-access",-1548960265),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"components","components",-1073188942),components], null));
}
}
} else {
return null;
}
});

/**
 * @interface
 */
datascript.db.IDB = function(){};

datascript.db._schema = (function datascript$db$_schema(db){
if((((!((db == null)))) && ((!((db.datascript$db$IDB$_schema$arity$1 == null)))))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
var x__4487__auto__ = (((db == null))?null:db);
var m__4488__auto__ = (datascript.db._schema[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__4488__auto__.call(null,db));
} else {
var m__4485__auto__ = (datascript.db._schema["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__4485__auto__.call(null,db));
} else {
throw cljs.core.missing_protocol("IDB.-schema",db);
}
}
}
});

datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if((((!((db == null)))) && ((!((db.datascript$db$IDB$_attrs_by$arity$2 == null)))))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__4487__auto__ = (((db == null))?null:db);
var m__4488__auto__ = (datascript.db._attrs_by[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(db,property) : m__4488__auto__.call(null,db,property));
} else {
var m__4485__auto__ = (datascript.db._attrs_by["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(db,property) : m__4485__auto__.call(null,db,property));
} else {
throw cljs.core.missing_protocol("IDB.-attrs-by",db);
}
}
}
});

datascript.db.db_transient = (function datascript$db$db_transient(db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.transient$),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.transient$),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.transient$);
});
datascript.db.db_persistent_BANG_ = (function datascript$db$db_persistent_BANG_(db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.persistent_BANG_),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.persistent_BANG_),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.persistent_BANG_);
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
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25792,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25796 = k25792;
var G__25796__$1 = (((G__25796 instanceof cljs.core.Keyword))?G__25796.fqn:null);
switch (G__25796__$1) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25792,else__4442__auto__);

}
}));

(datascript.db.DB.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__25797){
var vec__25798 = p__25797;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25798,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25798,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.db.DB{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
}));

(datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25791){
var self__ = this;
var G__25791__$1 = this;
return (new cljs.core.RecordIter((0),G__25791__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__25801 = (function (coll__4436__auto__){
return (-1515640948 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__25801(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25793,other25794){
var self__ = this;
var this25793__$1 = this;
return (((!((other25794 == null)))) && ((this25793__$1.constructor === other25794.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.schema,other25794.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.eavt,other25794.eavt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.aevt,other25794.aevt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.avet,other25794.avet)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.max_eid,other25794.max_eid)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.max_tx,other25794.max_tx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.rschema,other25794.rschema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.hash,other25794.hash)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25793__$1.__extmap,other25794.__extmap)));
}));

(datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25791){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25802 = cljs.core.keyword_identical_QMARK_;
var expr__25803 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__25805 = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var G__25806 = expr__25803;
return (pred__25802.cljs$core$IFn$_invoke$arity$2 ? pred__25802.cljs$core$IFn$_invoke$arity$2(G__25805,G__25806) : pred__25802.call(null,G__25805,G__25806));
})())){
return (new datascript.db.DB(G__25791,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25807 = new cljs.core.Keyword(null,"eavt","eavt",-666437073);
var G__25808 = expr__25803;
return (pred__25802.cljs$core$IFn$_invoke$arity$2 ? pred__25802.cljs$core$IFn$_invoke$arity$2(G__25807,G__25808) : pred__25802.call(null,G__25807,G__25808));
})())){
return (new datascript.db.DB(self__.schema,G__25791,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25809 = new cljs.core.Keyword(null,"aevt","aevt",-585148059);
var G__25810 = expr__25803;
return (pred__25802.cljs$core$IFn$_invoke$arity$2 ? pred__25802.cljs$core$IFn$_invoke$arity$2(G__25809,G__25810) : pred__25802.call(null,G__25809,G__25810));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,G__25791,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25811 = new cljs.core.Keyword(null,"avet","avet",1383857032);
var G__25812 = expr__25803;
return (pred__25802.cljs$core$IFn$_invoke$arity$2 ? pred__25802.cljs$core$IFn$_invoke$arity$2(G__25811,G__25812) : pred__25802.call(null,G__25811,G__25812));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__25791,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25813 = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075);
var G__25814 = expr__25803;
return (pred__25802.cljs$core$IFn$_invoke$arity$2 ? pred__25802.cljs$core$IFn$_invoke$arity$2(G__25813,G__25814) : pred__25802.call(null,G__25813,G__25814));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__25791,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25815 = new cljs.core.Keyword(null,"max-tx","max-tx",1119558339);
var G__25816 = expr__25803;
return (pred__25802.cljs$core$IFn$_invoke$arity$2 ? pred__25802.cljs$core$IFn$_invoke$arity$2(G__25815,G__25816) : pred__25802.call(null,G__25815,G__25816));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__25791,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25817 = new cljs.core.Keyword(null,"rschema","rschema",-1196134054);
var G__25818 = expr__25803;
return (pred__25802.cljs$core$IFn$_invoke$arity$2 ? pred__25802.cljs$core$IFn$_invoke$arity$2(G__25817,G__25818) : pred__25802.call(null,G__25817,G__25818));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__25791,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25819 = new cljs.core.Keyword(null,"hash","hash",-13781596);
var G__25820 = expr__25803;
return (pred__25802.cljs$core$IFn$_invoke$arity$2 ? pred__25802.cljs$core$IFn$_invoke$arity$2(G__25819,G__25820) : pred__25802.call(null,G__25819,G__25820));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__25791,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__25791),null));
}
}
}
}
}
}
}
}
}));

(datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash,null))], null),self__.__extmap));
}));

(datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25791){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,G__25791,self__.__extmap,self__.__hash));
}));

(datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"eavt","eavt",974094454,null),new cljs.core.Symbol(null,"aevt","aevt",1055383468,null),new cljs.core.Symbol(null,"avet","avet",-1270578737,null),new cljs.core.Symbol(null,"max-eid","max-eid",-519567694,null),new cljs.core.Symbol(null,"max-tx","max-tx",-1534877430,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
}));

(datascript.db.DB.cljs$lang$type = true);

(datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.db/DB",null,(1),null));
}));

(datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.db/DB");
}));

/**
 * Positional factory function for datascript.db/DB.
 */
datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,null,null,null));
});

/**
 * Factory function for datascript.db/DB, taking a map of keywords to field values.
 */
datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__25795){
var extmap__4478__auto__ = (function (){var G__25821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25795,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"hash","hash",-13781596)], 0));
if(cljs.core.record_QMARK_(G__25795)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25821);
} else {
return G__25821;
}
})();
return (new datascript.db.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__25795),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__25795),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__25795),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__25795),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__25795),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__25795),new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(G__25795),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__25795),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


(datascript.db.DB.prototype.clojure$data$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.clojure$data$Diff$diff_similar$arity$2 = (function (a,b){
var a__$1 = this;
return datascript.db.diff_sorted(a__$1.eavt,new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(b),datascript.db.cmp_datoms_eav_quick);
}));

(datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
}));

(datascript.db.DB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(db__$1.eavt);
}));

(datascript.db.DB.prototype.cljs$core$IReversible$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq(db__$1.eavt);
}));

(datascript.db.DB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_db.call(null,db__$1));
}));

(datascript.db.DB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
}));

(datascript.db.DB.prototype.cljs$core$IEditableCollection$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.db_transient(db__$1);
}));

(datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.with_meta((function (){var G__25822 = db__$1.schema;
return (datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(G__25822) : datascript.db.empty_db.call(null,G__25822));
})(),cljs.core.meta(db__$1));
}));

(datascript.db.DB.prototype.cljs$core$ITransientCollection$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (db,key){
var db__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("datascript.DB/conj! is not supported",cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.db.DB.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.db_persistent_BANG_(db__$1);
}));

(datascript.db.DB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq(db__$1.eavt);
}));

(datascript.db.DB.prototype.clojure$data$EqualityPartition$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.clojure$data$EqualityPartition$equality_partition$arity$1 = (function (x){
var x__$1 = this;
return new cljs.core.Keyword("datascript","db","datascript/db",-1190971692);
}));

(datascript.db.DB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
datascript.db.validate_indexed(db__$1,index,cs);

return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5(db__$1,index,cs,(0),(536870912)) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(0),(536870912))),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5(db__$1,index,cs,(2147483647),(2147483647)) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(2147483647),(2147483647))));
}));

(datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
datascript.db.validate_indexed(db__$1,index,cs);

return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5(db__$1,index,cs,(0),(536870912)) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(0),(536870912))),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),null,null,(2147483647)));
}));

(datascript.db.DB.prototype.datascript$db$IIndexAccess$_rseek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
datascript.db.validate_indexed(db__$1,index,cs);

return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5(db__$1,index,cs,(2147483647),(2147483647)) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(2147483647),(2147483647))),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),null,null,(536870912)));
}));

(datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
datascript.db.validate_indexed(db__$1,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));

var G__25823_26127 = attr;
var G__25824_26128 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-index-range","-index-range",898114142,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"db","db",-1661185010,null),(new cljs.core.List(null,attr,(new cljs.core.List(null,start,(new cljs.core.List(null,end,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__25823_26127,G__25824_26128) : datascript.db.validate_attr.call(null,G__25823_26127,G__25824_26128));

return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db__$1.avet,(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$7 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$7(db__$1,null,attr,start,null,(0),(536870912)) : datascript.db.resolve_datom.call(null,db__$1,null,attr,start,null,(0),(536870912))),(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$7 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$7(db__$1,null,attr,end,null,(2147483647),(2147483647)) : datascript.db.resolve_datom.call(null,db__$1,null,attr,end,null,(2147483647),(2147483647))));
}));

(datascript.db.DB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
}));

(datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
var fexpr__25825 = db__$1.rschema;
return (fexpr__25825.cljs$core$IFn$_invoke$arity$1 ? fexpr__25825.cljs$core$IFn$_invoke$arity$1(property) : fexpr__25825.call(null,property));
}));

(datascript.db.DB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__25826 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25826,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25826,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25826,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25826,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
var multival_QMARK_ = cljs.core.contains_QMARK_(datascript.db._attrs_by(db__$1,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)),a);
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,(2147483647)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
}),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(2147483647)));
}
}
} else {
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
}),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
}),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
}),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if((!((v == null)))){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
}),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,v,(2147483647))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
}),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
}
} else {
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,v,(2147483647)));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
}),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
}),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647)));
}
}
} else {
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
}),eavt);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
}),eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
}),eavt);
} else {
return eavt;
}
}
}
}
}));
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$ISearch$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x))){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IIndexAccess$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x))){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IDB$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
}
} else {
return false;
}
} else {
return false;
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
datascript.db.FilteredDB = (function (unfiltered_db,pred,hash,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25840,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25844 = k25840;
var G__25844__$1 = (((G__25844 instanceof cljs.core.Keyword))?G__25844.fqn:null);
switch (G__25844__$1) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25840,else__4442__auto__);

}
}));

(datascript.db.FilteredDB.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__25845){
var vec__25846 = p__25845;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25846,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25846,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.db.FilteredDB{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25839){
var self__ = this;
var G__25839__$1 = this;
return (new cljs.core.RecordIter((0),G__25839__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__25849 = (function (coll__4436__auto__){
return (-351969977 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__25849(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25841,other25842){
var self__ = this;
var this25841__$1 = this;
return (((!((other25842 == null)))) && ((this25841__$1.constructor === other25842.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25841__$1.unfiltered_db,other25842.unfiltered_db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25841__$1.pred,other25842.pred)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25841__$1.hash,other25842.hash)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25841__$1.__extmap,other25842.__extmap)));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25839){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25850 = cljs.core.keyword_identical_QMARK_;
var expr__25851 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__25853 = new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391);
var G__25854 = expr__25851;
return (pred__25850.cljs$core$IFn$_invoke$arity$2 ? pred__25850.cljs$core$IFn$_invoke$arity$2(G__25853,G__25854) : pred__25850.call(null,G__25853,G__25854));
})())){
return (new datascript.db.FilteredDB(G__25839,self__.pred,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25855 = new cljs.core.Keyword(null,"pred","pred",1927423397);
var G__25856 = expr__25851;
return (pred__25850.cljs$core$IFn$_invoke$arity$2 ? pred__25850.cljs$core$IFn$_invoke$arity$2(G__25855,G__25856) : pred__25850.call(null,G__25855,G__25856));
})())){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__25839,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25857 = new cljs.core.Keyword(null,"hash","hash",-13781596);
var G__25858 = expr__25851;
return (pred__25850.cljs$core$IFn$_invoke$arity$2 ? pred__25850.cljs$core$IFn$_invoke$arity$2(G__25857,G__25858) : pred__25850.call(null,G__25857,G__25858));
})())){
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__25839,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__25839),null));
}
}
}
}));

(datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash,null))], null),self__.__extmap));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25839){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,G__25839,self__.__extmap,self__.__hash));
}));

(datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unfiltered-db","unfiltered-db",276811136,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
}));

(datascript.db.FilteredDB.cljs$lang$type = true);

(datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.db/FilteredDB",null,(1),null));
}));

(datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.db/FilteredDB");
}));

/**
 * Positional factory function for datascript.db/FilteredDB.
 */
datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred,hash){
return (new datascript.db.FilteredDB(unfiltered_db,pred,hash,null,null,null));
});

/**
 * Factory function for datascript.db/FilteredDB, taking a map of keywords to field values.
 */
datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__25843){
var extmap__4478__auto__ = (function (){var G__25859 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25843,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)], 0));
if(cljs.core.record_QMARK_(G__25843)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25859);
} else {
return G__25859;
}
})();
return (new datascript.db.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__25843),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__25843),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__25843),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


(datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
}));

(datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(datascript.db._datoms(db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_fdb.call(null,db__$1));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.seq(datascript.db._datoms(db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._datoms(db__$1.unfiltered_db,index,cs));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._seek_datoms(db__$1.unfiltered_db,index,cs));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_rseek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._rseek_datoms(db__$1.unfiltered_db,index,cs));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._index_range(db__$1.unfiltered_db,attr,start,end));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema(db__$1.unfiltered_db);
}));

(datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by(db__$1.unfiltered_db,property);
}));

(datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._search(db__$1.unfiltered_db,pattern));
}));
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
var G__25860 = v;
var G__25860__$1 = (((G__25860 instanceof cljs.core.Keyword))?G__25860.fqn:null);
switch (G__25860__$1) {
case "db.unique/identity":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
case "db.unique/value":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
case "db.cardinality/many":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null);

break;
case "db.type/ref":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
default:
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),k)) && (v === true))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","index","db/index",-1531680669),k)) && (v === true))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092),k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}

}
});
/**
 * e.g. :reg/semester => #{:reg/semester+course+student ...}
 */
datascript.db.attr_tuples = (function datascript$db$attr_tuples(schema,rschema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,tuple_attr){
return datascript.db.reduce_indexed((function (m__$1,src_attr,idx){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(m__$1,src_attr,cljs.core.assoc,tuple_attr,idx);
}),m,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092).cljs$core$IFn$_invoke$arity$1((tuple_attr.cljs$core$IFn$_invoke$arity$1 ? tuple_attr.cljs$core$IFn$_invoke$arity$1(schema) : tuple_attr.call(null,schema))));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914).cljs$core$IFn$_invoke$arity$1(rschema));
});
/**
 * :db/unique           => #{attr ...}
 * :db.unique/identity  => #{attr ...}
 * :db.unique/value     => #{attr ...}
 * :db/index            => #{attr ...}
 * :db.cardinality/many => #{attr ...}
 * :db.type/ref         => #{attr ...}
 * :db/isComponent      => #{attr ...}
 * :db.type/tuple       => #{attr ...}
 * :db/attrTuples       => {attr => {tuple-attr => idx}}
 */
datascript.db.rschema = (function datascript$db$rschema(schema){
var rschema = cljs.core.reduce_kv((function (rschema,attr,attr_schema){
return cljs.core.reduce_kv((function (rschema__$1,key,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (rschema__$2,prop){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(rschema__$2,prop,datascript.db.conjs,attr);
}),rschema__$1,datascript.db.attr__GT_properties(key,value));
}),rschema,attr_schema);
}),cljs.core.PersistentArrayMap.EMPTY,schema);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rschema,new cljs.core.Keyword("db","attrTuples","db/attrTuples",860541631),datascript.db.attr_tuples(schema,rschema));
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if((((v == null)) || (cljs.core.contains_QMARK_(expected,v)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([a,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v])])], 0)),", expected one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__25861 = cljs.core.seq(schema);
var chunk__25862 = null;
var count__25863 = (0);
var i__25864 = (0);
while(true){
if((i__25864 < count__25863)){
var vec__25883 = chunk__25862.cljs$core$IIndexed$_nth$arity$2(null,i__25864);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25883,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25883,(1),null);
var comp_QMARK__26176 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv,false);
datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__4174__auto__ = comp_QMARK__26176;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__4174__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

if(cljs.core.contains_QMARK_(kv,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
var ex_data_26178 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," has :db/tupleAttrs, must be :db.cardinality/one"].join(''),ex_data_26178);
} else {
}

var attrs_26179 = new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092).cljs$core$IFn$_invoke$arity$1(kv);
if(cljs.core.sequential_QMARK_(attrs_26179)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs must be a sequential collection, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_26179], 0))].join(''),ex_data_26178);
}

if(cljs.core.empty_QMARK_(attrs_26179)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t be empty"].join(''),ex_data_26178);
} else {
}

var seq__25886_26183 = cljs.core.seq(attrs_26179);
var chunk__25888_26184 = null;
var count__25889_26185 = (0);
var i__25890_26186 = (0);
while(true){
if((i__25890_26186 < count__25889_26185)){
var attr_26189 = chunk__25888_26184.cljs$core$IIndexed$_nth$arity$2(null,i__25890_26186);
var ex_data_26190__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data_26178,new cljs.core.Keyword(null,"value","value",305978217),attr_26189);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_26189),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on another tuple attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_26189], 0))].join(''),ex_data_26190__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_26189)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on :db.cardinality/many attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_26189], 0))].join(''),ex_data_26190__$1);
} else {
}


var G__26191 = seq__25886_26183;
var G__26192 = chunk__25888_26184;
var G__26193 = count__25889_26185;
var G__26194 = (i__25890_26186 + (1));
seq__25886_26183 = G__26191;
chunk__25888_26184 = G__26192;
count__25889_26185 = G__26193;
i__25890_26186 = G__26194;
continue;
} else {
var temp__5735__auto___26195 = cljs.core.seq(seq__25886_26183);
if(temp__5735__auto___26195){
var seq__25886_26196__$1 = temp__5735__auto___26195;
if(cljs.core.chunked_seq_QMARK_(seq__25886_26196__$1)){
var c__4609__auto___26197 = cljs.core.chunk_first(seq__25886_26196__$1);
var G__26198 = cljs.core.chunk_rest(seq__25886_26196__$1);
var G__26199 = c__4609__auto___26197;
var G__26200 = cljs.core.count(c__4609__auto___26197);
var G__26201 = (0);
seq__25886_26183 = G__26198;
chunk__25888_26184 = G__26199;
count__25889_26185 = G__26200;
i__25890_26186 = G__26201;
continue;
} else {
var attr_26202 = cljs.core.first(seq__25886_26196__$1);
var ex_data_26203__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data_26178,new cljs.core.Keyword(null,"value","value",305978217),attr_26202);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_26202),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on another tuple attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_26202], 0))].join(''),ex_data_26203__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_26202)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on :db.cardinality/many attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_26202], 0))].join(''),ex_data_26203__$1);
} else {
}


var G__26204 = cljs.core.next(seq__25886_26196__$1);
var G__26205 = null;
var G__26206 = (0);
var G__26207 = (0);
seq__25886_26183 = G__26204;
chunk__25888_26184 = G__26205;
count__25889_26185 = G__26206;
i__25890_26186 = G__26207;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__26209 = seq__25861;
var G__26210 = chunk__25862;
var G__26211 = count__25863;
var G__26212 = (i__25864 + (1));
seq__25861 = G__26209;
chunk__25862 = G__26210;
count__25863 = G__26211;
i__25864 = G__26212;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25861);
if(temp__5735__auto__){
var seq__25861__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25861__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__25861__$1);
var G__26217 = cljs.core.chunk_rest(seq__25861__$1);
var G__26218 = c__4609__auto__;
var G__26219 = cljs.core.count(c__4609__auto__);
var G__26220 = (0);
seq__25861 = G__26217;
chunk__25862 = G__26218;
count__25863 = G__26219;
i__25864 = G__26220;
continue;
} else {
var vec__25892 = cljs.core.first(seq__25861__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25892,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25892,(1),null);
var comp_QMARK__26222 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv,false);
datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__4174__auto__ = comp_QMARK__26222;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__4174__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

if(cljs.core.contains_QMARK_(kv,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
var ex_data_26224 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," has :db/tupleAttrs, must be :db.cardinality/one"].join(''),ex_data_26224);
} else {
}

var attrs_26229 = new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092).cljs$core$IFn$_invoke$arity$1(kv);
if(cljs.core.sequential_QMARK_(attrs_26229)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs must be a sequential collection, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_26229], 0))].join(''),ex_data_26224);
}

if(cljs.core.empty_QMARK_(attrs_26229)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t be empty"].join(''),ex_data_26224);
} else {
}

var seq__25895_26230 = cljs.core.seq(attrs_26229);
var chunk__25897_26231 = null;
var count__25898_26232 = (0);
var i__25899_26233 = (0);
while(true){
if((i__25899_26233 < count__25898_26232)){
var attr_26234 = chunk__25897_26231.cljs$core$IIndexed$_nth$arity$2(null,i__25899_26233);
var ex_data_26235__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data_26224,new cljs.core.Keyword(null,"value","value",305978217),attr_26234);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_26234),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on another tuple attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_26234], 0))].join(''),ex_data_26235__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_26234)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on :db.cardinality/many attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_26234], 0))].join(''),ex_data_26235__$1);
} else {
}


var G__26236 = seq__25895_26230;
var G__26237 = chunk__25897_26231;
var G__26238 = count__25898_26232;
var G__26239 = (i__25899_26233 + (1));
seq__25895_26230 = G__26236;
chunk__25897_26231 = G__26237;
count__25898_26232 = G__26238;
i__25899_26233 = G__26239;
continue;
} else {
var temp__5735__auto___26240__$1 = cljs.core.seq(seq__25895_26230);
if(temp__5735__auto___26240__$1){
var seq__25895_26241__$1 = temp__5735__auto___26240__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25895_26241__$1)){
var c__4609__auto___26242 = cljs.core.chunk_first(seq__25895_26241__$1);
var G__26243 = cljs.core.chunk_rest(seq__25895_26241__$1);
var G__26244 = c__4609__auto___26242;
var G__26245 = cljs.core.count(c__4609__auto___26242);
var G__26246 = (0);
seq__25895_26230 = G__26243;
chunk__25897_26231 = G__26244;
count__25898_26232 = G__26245;
i__25899_26233 = G__26246;
continue;
} else {
var attr_26247 = cljs.core.first(seq__25895_26241__$1);
var ex_data_26248__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data_26224,new cljs.core.Keyword(null,"value","value",305978217),attr_26247);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_26247),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on another tuple attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_26247], 0))].join(''),ex_data_26248__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_26247)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on :db.cardinality/many attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_26247], 0))].join(''),ex_data_26248__$1);
} else {
}


var G__26250 = cljs.core.next(seq__25895_26241__$1);
var G__26251 = null;
var G__26252 = (0);
var G__26253 = (0);
seq__25895_26230 = G__26250;
chunk__25897_26231 = G__26251;
count__25898_26232 = G__26252;
i__25899_26233 = G__26253;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__26254 = cljs.core.next(seq__25861__$1);
var G__26255 = null;
var G__26256 = (0);
var G__26257 = (0);
seq__25861 = G__26254;
chunk__25862 = G__26255;
count__25863 = G__26256;
i__25864 = G__26257;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var G__25902 = arguments.length;
switch (G__25902) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(null);
}));

(datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if((((schema == null)) || (cljs.core.map_QMARK_(schema)))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

datascript.db.validate_schema(schema);

return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.db.rschema(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema], 0))),new cljs.core.Keyword(null,"eavt","eavt",-666437073),me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),(536870912),new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null));
}));

(datascript.db.empty_db.cljs$lang$maxFixedArity = 1);

datascript.db.init_max_eid = (function datascript$db$init_max_eid(eavt){
var or__4185__auto__ = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(((536870912) - (1)),null,null,(2147483647)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),null,null,(536870912)))));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
});
datascript.db.init_db = (function datascript$db$init_db(var_args){
var G__25904 = arguments.length;
switch (G__25904) {
case 1:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(datoms,null);
}));

(datascript.db.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
var temp__5739__auto___26267 = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(datascript.db.datom_QMARK_,datoms));
if((temp__5739__auto___26267 == null)){
} else {
var not_datom_26268 = temp__5739__auto___26267;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["init-db expects list of Datoms, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(not_datom_26268)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null));
}

datascript.db.validate_schema(schema);

var rschema = datascript.db.rschema(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema], 0)));
var indexed = new cljs.core.Keyword("db","index","db/index",-1531680669).cljs$core$IFn$_invoke$arity$1(rschema);
var arr = (function (){var G__25905 = datoms;
if((!(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(datoms)))){
return me.tonsky.persistent_sorted_set.arrays.into_array(G__25905);
} else {
return G__25905;
}
})();
var _ = me.tonsky.persistent_sorted_set.arrays.asort(arr,datascript.db.cmp_datoms_eavt_quick);
var eavt = me.tonsky.persistent_sorted_set.from_sorted_array(datascript.db.cmp_datoms_eavt,arr);
var ___$1 = me.tonsky.persistent_sorted_set.arrays.asort(arr,datascript.db.cmp_datoms_aevt_quick);
var aevt = me.tonsky.persistent_sorted_set.from_sorted_array(datascript.db.cmp_datoms_aevt,arr);
var avet_datoms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core.contains_QMARK_(indexed,d.a);
}),datoms);
var avet_arr = cljs.core.to_array(avet_datoms);
var ___$2 = me.tonsky.persistent_sorted_set.arrays.asort(avet_arr,datascript.db.cmp_datoms_avet_quick);
var avet = me.tonsky.persistent_sorted_set.from_sorted_array(datascript.db.cmp_datoms_avet,avet_arr);
var max_eid = datascript.db.init_max_eid(eavt);
var max_tx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return d.datascript$db$IDatom$datom_tx$arity$1(null);
})),cljs.core.max,(536870912),eavt);
return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),rschema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null));
}));

(datascript.db.init_db.cljs$lang$maxFixedArity = 2);

datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__26275 = cljs.core.next(xs);
var G__26276 = cljs.core.next(ys);
xs = G__26275;
ys = G__26276;
continue;
} else {
return false;

}
}
break;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
var h = cljs.core.deref(db.hash);
if((h === (0))){
return cljs.core.reset_BANG_(db.hash,datascript.db.combine_hashes(cljs.core.hash(db.schema),cljs.core.hash(db.eavt)));
} else {
return h;
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var h = cljs.core.deref(db.hash);
var datoms = (function (){var or__4185__auto__ = datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((h === (0))){
var datoms__$1 = (function (){var or__4185__auto__ = datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.reset_BANG_(db.hash,datascript.db.combine_hashes(cljs.core.hash(datascript.db._schema(db)),cljs.core.hash_unordered_coll(datoms__$1)));
} else {
return h;
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
return (((((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(datascript.db._schema(db),datascript.db._schema(other))) && (datascript.db.equiv_db_index(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datascript.db._datoms(other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY))));
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write(w,"#datascript/DB {");

cljs.core._write(w,":schema ");

cljs.core.pr_writer(datascript.db._schema(db),w,opts);

cljs.core._write(w,", :datoms ");

cljs.core.pr_sequential_writer(w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer(w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,datascript.db.datom_tx(d)], null));
}),"["," ","]",opts,datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write(w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__25906){
var map__25907 = p__25906;
var map__25907__$1 = (((((!((map__25907 == null))))?(((((map__25907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25907):map__25907);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25907__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25907__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25909){
var vec__25910 = p__25909;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(3),null);
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx);
}),datoms),schema);
});


datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t,default_e,default_tx){
if(cljs.core.truth_(a)){
var G__25913_26282 = a;
var G__25914_26283 = (new cljs.core.List(null,new cljs.core.Symbol(null,"resolve-datom","resolve-datom",-294110827,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"db","db",-1661185010,null),(new cljs.core.List(null,e,(new cljs.core.List(null,a,(new cljs.core.List(null,v,(new cljs.core.List(null,t,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null));
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__25913_26282,G__25914_26283) : datascript.db.validate_attr.call(null,G__25913_26282,G__25914_26283));
} else {
}

return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((function (){var or__4185__auto__ = (datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,e) : datascript.db.entid_some.call(null,db,e));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default_e;
}
})(),a,(cljs.core.truth_((((!((v == null))))?(datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2(db,a) : datascript.db.ref_QMARK_.call(null,db,a)):false))?(datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.db.entid_strict.call(null,db,v)):v),(function (){var or__4185__auto__ = (datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,t) : datascript.db.entid_some.call(null,db,t));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default_tx;
}
})());
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,p__25915,default_e,default_tx){
var vec__25916 = p__25915;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(3),null);
var G__25919 = index;
var G__25919__$1 = (((G__25919 instanceof cljs.core.Keyword))?G__25919.fqn:null);
switch (G__25919__$1) {
case "eavt":
return datascript.db.resolve_datom(db,c0,c1,c2,c3,default_e,default_tx);

break;
case "aevt":
return datascript.db.resolve_datom(db,c1,c0,c2,c3,default_e,default_tx);

break;
case "avet":
return datascript.db.resolve_datom(db,c2,c0,c1,c3,default_e,default_tx);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25919__$1)].join('')));

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
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25921,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25925 = k25921;
var G__25925__$1 = (((G__25925 instanceof cljs.core.Keyword))?G__25925.fqn:null);
switch (G__25925__$1) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25921,else__4442__auto__);

}
}));

(datascript.db.TxReport.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__25926){
var vec__25927 = p__25926;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25927,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25927,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.db.TxReport{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
}));

(datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25920){
var self__ = this;
var G__25920__$1 = this;
return (new cljs.core.RecordIter((0),G__25920__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__25930 = (function (coll__4436__auto__){
return (-2022644885 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__25930(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25922,other25923){
var self__ = this;
var this25922__$1 = this;
return (((!((other25923 == null)))) && ((this25922__$1.constructor === other25923.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25922__$1.db_before,other25923.db_before)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25922__$1.db_after,other25923.db_after)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25922__$1.tx_data,other25923.tx_data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25922__$1.tempids,other25923.tempids)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25922__$1.tx_meta,other25923.tx_meta)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25922__$1.__extmap,other25923.__extmap)));
}));

(datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25920){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25931 = cljs.core.keyword_identical_QMARK_;
var expr__25932 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__25934 = new cljs.core.Keyword(null,"db-before","db-before",-553691536);
var G__25935 = expr__25932;
return (pred__25931.cljs$core$IFn$_invoke$arity$2 ? pred__25931.cljs$core$IFn$_invoke$arity$2(G__25934,G__25935) : pred__25931.call(null,G__25934,G__25935));
})())){
return (new datascript.db.TxReport(G__25920,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25936 = new cljs.core.Keyword(null,"db-after","db-after",-571884666);
var G__25937 = expr__25932;
return (pred__25931.cljs$core$IFn$_invoke$arity$2 ? pred__25931.cljs$core$IFn$_invoke$arity$2(G__25936,G__25937) : pred__25931.call(null,G__25936,G__25937));
})())){
return (new datascript.db.TxReport(self__.db_before,G__25920,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25938 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761);
var G__25939 = expr__25932;
return (pred__25931.cljs$core$IFn$_invoke$arity$2 ? pred__25931.cljs$core$IFn$_invoke$arity$2(G__25938,G__25939) : pred__25931.call(null,G__25938,G__25939));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__25920,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25940 = new cljs.core.Keyword(null,"tempids","tempids",1767509089);
var G__25941 = expr__25932;
return (pred__25931.cljs$core$IFn$_invoke$arity$2 ? pred__25931.cljs$core$IFn$_invoke$arity$2(G__25940,G__25941) : pred__25931.call(null,G__25940,G__25941));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__25920,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25942 = new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194);
var G__25943 = expr__25932;
return (pred__25931.cljs$core$IFn$_invoke$arity$2 ? pred__25931.cljs$core$IFn$_invoke$arity$2(G__25942,G__25943) : pred__25931.call(null,G__25942,G__25943));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__25920,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__25920),null));
}
}
}
}
}
}));

(datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta,null))], null),self__.__extmap));
}));

(datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25920){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__25920,self__.__extmap,self__.__hash));
}));

(datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-before","db-before",1086839991,null),new cljs.core.Symbol(null,"db-after","db-after",1068646861,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tempids","tempids",-886926680,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null);
}));

(datascript.db.TxReport.cljs$lang$type = true);

(datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.db/TxReport",null,(1),null));
}));

(datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.db/TxReport");
}));

/**
 * Positional factory function for datascript.db/TxReport.
 */
datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

/**
 * Factory function for datascript.db/TxReport, taking a map of keywords to field values.
 */
datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__25924){
var extmap__4478__auto__ = (function (){var G__25944 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25924,new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], 0));
if(cljs.core.record_QMARK_(G__25924)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25944);
} else {
return G__25944;
}
})();
return (new datascript.db.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__25924),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__25924),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__25924),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__25924),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__25924),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_(datascript.db._attrs_by(db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398));
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db","index","db/index",-1531680669));
});
datascript.db.tuple_QMARK_ = (function datascript$db$tuple_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914));
});
datascript.db.tuple_source_QMARK_ = (function datascript$db$tuple_source_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db","attrTuples","db/attrTuples",860541631));
});
datascript.db.entid = (function datascript$db$entid(db,eid){
while(true){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(((typeof eid === 'number') && ((eid > (0))))){
if((eid > (2147483647))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Highest supported entity id is ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2147483647)], 0)),", got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),new cljs.core.Keyword(null,"value","value",305978217),eid], null));
} else {
return eid;
}
} else {
if(cljs.core.sequential_QMARK_(eid)){
var vec__25945 = eid;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25945,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25945,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(eid),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Lookup ref should contain 2 elements: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","syntax","lookup-ref/syntax",-317304012),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if((!(datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db","unique","db/unique",329396388))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Lookup ref attribute should be marked as :db/unique: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","unique","lookup-ref/unique",-960647710),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if((value == null)){
return null;
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),eid)));

}
}
}
} else {
if(cljs.core.array_QMARK_(eid)){
var G__26311 = db;
var G__26312 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(eid);
db = G__26311;
eid = G__26312;
continue;
} else {
if((eid instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),eid], null))));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected number or lookup ref for entity id, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));

}
}
}
}
break;
}
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__4185__auto__ = datascript.db.entid(db,eid);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Nothing found for entity id ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.db.entid_strict(db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__4174__auto__ = datom.datascript$db$IDatom$datom_added$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return datascript.db.is_attr_QMARK_(db,datom.a,new cljs.core.Keyword("db","unique","db/unique",329396388));
} else {
return and__4174__auto__;
}
})())){
var temp__5739__auto__ = cljs.core.not_empty(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if((temp__5739__auto__ == null)){
return null;
} else {
var found = temp__5739__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot add ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datom], 0))," because of unique constraint: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([found], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","unique","transact/unique",-940992320),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),datom.a,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));
}
} else {
return null;
}
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
if((((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string'))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.db.validate_val = (function datascript$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot store nil as a value at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,":db/current-tx")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"datomic.tx")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"datascript.tx")));
});
datascript.db.tempid_QMARK_ = (function datascript$db$tempid_QMARK_(x){
return ((((typeof x === 'number') && ((x < (0))))) || (typeof x === 'string'));
});
datascript.db.new_eid_QMARK_ = (function datascript$db$new_eid_QMARK_(db,eid){
return (((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < (536870912))));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__25948 = db;
if(datascript.db.new_eid_QMARK_(db,eid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25948,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid);
} else {
return G__25948;
}
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var G__25950 = arguments.length;
switch (G__25950) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.Keyword(null,"db-after","db-after",-571884666),datascript.db.advance_max_eid,eid);
}));

(datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__25951 = report;
var G__25951__$1 = ((datascript.db.tx_id_QMARK_(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25951,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.assoc,e,eid):G__25951);
var G__25951__$2 = ((datascript.db.tempid_QMARK_(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25951__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.assoc,e,eid):G__25951__$1);
var G__25951__$3 = (((((!(datascript.db.tempid_QMARK_(e)))) && (datascript.db.new_eid_QMARK_(new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report),eid))))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25951__$2,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.assoc,eid,eid):G__25951__$2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25951__$3,new cljs.core.Keyword(null,"db-after","db-after",-571884666),datascript.db.advance_max_eid,eid);

}));

(datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3);

datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom(db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_(db,datom.a);
if(cljs.core.truth_(datom.datascript$db$IDatom$datom_added$arity$1(null))){
var G__25952 = db;
var G__25952__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25952,new cljs.core.Keyword(null,"eavt","eavt",-666437073),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__25952__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25952__$1,new cljs.core.Keyword(null,"aevt","aevt",-585148059),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__25952__$3 = ((indexing_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25952__$2,new cljs.core.Keyword(null,"avet","avet",1383857032),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_avet_quick):G__25952__$2);
var G__25952__$4 = datascript.db.advance_max_eid(G__25952__$3,datom.e)
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25952__$4,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));

} else {
var temp__5737__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
if((temp__5737__auto__ == null)){
return db;
} else {
var removing = temp__5737__auto__;
var G__25953 = db;
var G__25953__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25953,new cljs.core.Keyword(null,"eavt","eavt",-666437073),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__25953__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25953__$1,new cljs.core.Keyword(null,"aevt","aevt",-585148059),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
var G__25953__$3 = ((indexing_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25953__$2,new cljs.core.Keyword(null,"avet","avet",1383857032),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_avet_quick):G__25953__$2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25953__$3,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));

}
}
});
datascript.db.queue_tuple = (function datascript$db$queue_tuple(queue,tuple,idx,db,e,a,v){
var tuple_value = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(queue,tuple);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,tuple], null))));
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.db._schema(db),tuple))),null));
}
}
})();
var tuple_value_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tuple_value,idx,v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(queue,tuple,tuple_value_SINGLEQUOTE_);
});
datascript.db.queue_tuples = (function datascript$db$queue_tuples(queue,tuples,db,e,a,v){
return cljs.core.reduce_kv((function (queue__$1,tuple,idx){
return datascript.db.queue_tuple(queue__$1,tuple,idx,db,e,a,v);
}),queue,tuples);
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom);
var report_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report,new cljs.core.Keyword(null,"db-after","db-after",-571884666),datascript.db.with_datom(db,datom)),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.conj,datom);
if(datascript.db.tuple_source_QMARK_(db,a)){
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
var v = (cljs.core.truth_(datascript.db.datom_added(datom))?new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom):null);
var queue = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029).cljs$core$IFn$_invoke$arity$1(report_SINGLEQUOTE_),e);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var tuples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.db._attrs_by(db,new cljs.core.Keyword("db","attrTuples","db/attrTuples",860541631)),a);
var queue_SINGLEQUOTE_ = datascript.db.queue_tuples(queue,tuples,db,e,a,v);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(report_SINGLEQUOTE_,new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029),cljs.core.assoc,e,queue_SINGLEQUOTE_);
} else {
return report_SINGLEQUOTE_;
}
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_(attr)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),["_",cljs.core.name(attr)].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__25954 = cljs.core.re_matches(/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25954,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25954,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25954,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1))].join('');
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return ["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
/**
 * Returns [entity' upserts]. Upsert attributes that resolve to existing entities
 * are removed from entity, rest are kept in entity for insertion. No validation is performed.
 * 
 * upserts :: {:name  {"Ivan"  1}
 *             :email {"ivan@" 2}
 *             :alias {"abc"   3
 *                     "def"   4}}}
 */
datascript.db.resolve_upserts = (function datascript$db$resolve_upserts(db,entity){
var temp__5737__auto__ = cljs.core.not_empty(datascript.db._attrs_by(db,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)));
if((temp__5737__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,null], null);
} else {
var idents = temp__5737__auto__;
var resolve = (function (a,v){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))));
});
var split = (function (a,vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
var temp__5737__auto____$1 = resolve(a,v);
if((temp__5737__auto____$1 == null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,(0),cljs.core.conj,v);
} else {
var e = temp__5737__auto____$1;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,(1),cljs.core.assoc,v,e);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),vs);
});
return cljs.core.reduce_kv((function (p__25957,a,v){
var vec__25958 = p__25957;
var entity__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25958,(0),null);
var upserts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25958,(1),null);
if((!(cljs.core.contains_QMARK_(idents,a)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity__$1,a,v),upserts], null);
} else {
if(((datascript.db.multival_QMARK_(db,a)) && (((me.tonsky.persistent_sorted_set.arrays.array_QMARK_(v)) || (((cljs.core.coll_QMARK_(v)) && ((!(cljs.core.map_QMARK_(v)))))))))){
var vec__25961 = split(a,v);
var insert = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25961,(0),null);
var upsert = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25961,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25964 = entity__$1;
if((!(cljs.core.empty_QMARK_(insert)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25964,a,insert);
} else {
return G__25964;
}
})(),(function (){var G__25965 = upserts;
if((!(cljs.core.empty_QMARK_(upsert)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25965,a,upsert);
} else {
return G__25965;
}
})()], null);
} else {
var temp__5737__auto____$1 = resolve(a,v);
if((temp__5737__auto____$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity__$1,a,v),upserts], null);
} else {
var e = temp__5737__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(upserts,a,cljs.core.PersistentArrayMap.createAsIfByAssoc([v,e]))], null);
}

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),entity);
}
});
/**
 * Throws if not all upserts point to the same entity. 
 * Returns single eid that all upserts point to, or null.
 */
datascript.db.validate_upserts = (function datascript$db$validate_upserts(entity,upserts){
var upsert_ids = cljs.core.reduce_kv((function (m,a,v__GT_e){
return cljs.core.reduce_kv((function (m__$1,v,e){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null));
}),m,v__GT_e);
}),cljs.core.PersistentArrayMap.EMPTY,upserts);
if(((2) <= cljs.core.count(upsert_ids))){
var vec__25966 = cljs.core.first(upsert_ids);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25966,(0),null);
var vec__25969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25966,(1),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25969,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25969,(1),null);
var vec__25972 = cljs.core.second(upsert_ids);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25972,(0),null);
var vec__25975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25972,(1),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25975,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25975,(1),null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upserts: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,v1], null)], 0))," resolves to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e1], 0)),", but ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,v2], null)], 0))," resolves to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e2], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,a1,v1], null),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,a2,v2], null)], null));
} else {
var vec__25978 = cljs.core.first(upsert_ids);
var upsert_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25978,(0),null);
var vec__25981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25978,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25981,(1),null);
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if((((!((upsert_id == null)))) && ((!((eid == null)))) && ((!(datascript.db.tempid_QMARK_(eid)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upsert_id,eid)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upsert: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)], 0))," resolves to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upsert_id], 0)),", but entity already has :db/id ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upsert_id,a,v], null),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)], null));
} else {
}

return upsert_id;
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if((!(((datascript.db.reverse_ref_QMARK_(a)) || (datascript.db.multival_QMARK_(db,a)))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((!(((me.tonsky.persistent_sorted_set.arrays.array_QMARK_(vs)) || (((cljs.core.coll_QMARK_(vs)) && ((!(cljs.core.map_QMARK_(vs)))))))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vs),(2))) && (datascript.db.is_attr_QMARK_(db,cljs.core.first(vs),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__4582__auto__ = (function datascript$db$explode_$_iter__25984(s__25985){
return (new cljs.core.LazySeq(null,(function (){
var s__25985__$1 = s__25985;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25985__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__25990 = cljs.core.first(xs__6292__auto__);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25990,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25990,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var _ = datascript.db.validate_attr(a,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs]));
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_(a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref(a):a);
var ___$1 = ((((reverse_QMARK_) && ((!(datascript.db.ref_QMARK_(db,straight_a))))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),": reverse attribute name requires {:db/valueType :db.type/ref} in schema"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs])], null))})():null);
var iterys__4578__auto__ = ((function (s__25985__$1,_,reverse_QMARK_,straight_a,___$1,vec__25990,a,vs,xs__6292__auto__,temp__5735__auto__,eid){
return (function datascript$db$explode_$_iter__25984_$_iter__25986(s__25987){
return (new cljs.core.LazySeq(null,((function (s__25985__$1,_,reverse_QMARK_,straight_a,___$1,vec__25990,a,vs,xs__6292__auto__,temp__5735__auto__,eid){
return (function (){
var s__25987__$1 = s__25987;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__25987__$1);
if(temp__5735__auto____$1){
var s__25987__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25987__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25987__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25989 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25988 = (0);
while(true){
if((i__25988 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25988);
cljs.core.chunk_append(b__25989,((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))));

var G__26332 = (i__25988 + (1));
i__25988 = G__26332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25989),datascript$db$explode_$_iter__25984_$_iter__25986(cljs.core.chunk_rest(s__25987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25989),null);
}
} else {
var v = cljs.core.first(s__25987__$2);
return cljs.core.cons(((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))),datascript$db$explode_$_iter__25984_$_iter__25986(cljs.core.rest(s__25987__$2)));
}
} else {
return null;
}
break;
}
});})(s__25985__$1,_,reverse_QMARK_,straight_a,___$1,vec__25990,a,vs,xs__6292__auto__,temp__5735__auto__,eid))
,null,null));
});})(s__25985__$1,_,reverse_QMARK_,straight_a,___$1,vec__25990,a,vs,xs__6292__auto__,temp__5735__auto__,eid))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(datascript.db.maybe_wrap_multival(db,a,vs)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,datascript$db$explode_$_iter__25984(cljs.core.rest(s__25985__$1)));
} else {
var G__26333 = cljs.core.rest(s__25985__$1);
s__25985__$1 = G__26333;
continue;
}
} else {
var G__26334 = cljs.core.rest(s__25985__$1);
s__25985__$1 = G__26334;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(entity);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__25993){
var vec__25994 = p__25993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(3),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(4),null);
var ent = vec__25994;
datascript.db.validate_attr(a,ent);

datascript.db.validate_val(v,ent);

var tx__$1 = (function (){var or__4185__auto__ = tx;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.db.current_tx(report);
}
})();
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict(db,e);
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
var new_datom = datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e__$1,a,v__$1,tx__$1);
if(datascript.db.multival_QMARK_(db,a)){
if(cljs.core.empty_QMARK_(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.db.transact_report(report,new_datom);
} else {
return report;
}
} else {
var temp__5737__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if((temp__5737__auto__ == null)){
return datascript.db.transact_report(report,new_datom);
} else {
var old_datom = temp__5737__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_datom.v,v__$1)){
return report;
} else {
return datascript.db.transact_report(datascript.db.transact_report(report,datascript.db.datom.cljs$core$IFn$_invoke$arity$5(e__$1,a,old_datom.v,tx__$1,false)),new_datom);
}
}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx(report);
return datascript.db.transact_report(report,datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,tx,false));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return datascript.db.component_QMARK_(db,d.a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),d.v], null);
}))),datoms);
});
datascript.db.retry_with_tempid = (function datascript$db$retry_with_tempid(initial_report,report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(initial_report),tempid)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upsert: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tempid], 0))," resolves"," both to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upserted_eid], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(initial_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempid], null))], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078)], null));
} else {
var tempids_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid,upserted_eid);
var report_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_report,new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempids_SINGLEQUOTE_);
return (datascript.db.transact_tx_data.cljs$core$IFn$_invoke$arity$2 ? datascript.db.transact_tx_data.cljs$core$IFn$_invoke$arity$2(report_SINGLEQUOTE_,es) : datascript.db.transact_tx_data.call(null,report_SINGLEQUOTE_,es));
}
});
datascript.db.builtin_fn_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),null,new cljs.core.Keyword("db","cas","db/cas",-451542322),null,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),null,new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),null,new cljs.core.Keyword("db","retract","db/retract",-1549825231),null,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),null,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172),null,new cljs.core.Keyword("db","add","db/add",235286841),null], null), null);
datascript.db.flush_tuples = (function datascript$db$flush_tuples(report){
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var schema = datascript.db._schema(db);
var attr_tuples = datascript.db._attrs_by(db,new cljs.core.Keyword("db","attrTuples","db/attrTuples",860541631));
return cljs.core.reduce_kv((function (entities,eid,tuples_PLUS_values){
return cljs.core.reduce_kv((function (entities__$1,tuple,value){
var value__$1 = ((cljs.core.every_QMARK_(cljs.core.nil_QMARK_,value))?null:value);
var current = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,tuple], null))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,current)){
return entities__$1;
} else {
if((value__$1 == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entities__$1,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,tuple,current], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datascript.db","internal","datascript.db/internal",-249301114),true], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entities__$1,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,tuple,value__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datascript.db","internal","datascript.db/internal",-249301114),true], null)));

}
}
}),entities,tuples_PLUS_values);
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029).cljs$core$IFn$_invoke$arity$1(report));
});
datascript.db.check_value_tempids = (function datascript$db$check_value_tempids(report){
var all_tempids = new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162).cljs$core$IFn$_invoke$arity$1(report);
var reduce_fn = (function (tempids,datom){
if(cljs.core.truth_(datascript.db.datom_added(datom))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tempids,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom));
} else {
return tempids;
}
});
var unused = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reduce_fn,all_tempids,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(report));
if(cljs.core.empty_QMARK_(unused)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Tempids used only as value in transaction: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(unused))], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tempids","tempids",1767509089),unused], null));
}
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
if((((initial_es == null)) || (cljs.core.sequential_QMARK_(initial_es)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad transaction data ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_es], 0)),", expected sequential collection"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),initial_es], null));
}

var initial_report_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(initial_report,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.transient$);
var has_tuples_QMARK_ = (!(cljs.core.empty_QMARK_(datascript.db._attrs_by(new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(initial_report),new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914)))));
var initial_es_SINGLEQUOTE_ = ((has_tuples_QMARK_)?cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(initial_es,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("datascript.db","flush-tuples","datascript.db/flush-tuples",-797350002))):initial_es);
var report = initial_report_SINGLEQUOTE_;
var es = initial_es_SINGLEQUOTE_;
while(true){
if(cljs.core.empty_QMARK_(es)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(datascript.db.check_value_tempids(report),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.assoc,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132),datascript.db.current_tx(report)),new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.update,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),cljs.core.inc),new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.persistent_BANG_);
} else {
var vec__26015 = es;
var seq__26016 = cljs.core.seq(vec__26015);
var first__26017 = cljs.core.first(seq__26016);
var seq__26016__$1 = cljs.core.next(seq__26016);
var entity = first__26017;
var entities = seq__26016__$1;
if((entity == null)){
var G__26336 = report;
var G__26337 = entities;
report = G__26336;
es = G__26337;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datascript.db","flush-tuples","datascript.db/flush-tuples",-797350002),entity)){
if(cljs.core.contains_QMARK_(report,new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029))){
var G__26338 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029));
var G__26339 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.flush_tuples(report),entities);
report = G__26338;
es = G__26339;
continue;
} else {
var G__26340 = report;
var G__26341 = entities;
report = G__26340;
es = G__26341;
continue;
}
} else {
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var tempids = new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report);
if(cljs.core.map_QMARK_(entity)){
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(datascript.db.tx_id_QMARK_(old_eid)){
var id = datascript.db.current_tx(report);
var G__26342 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,id);
var G__26343 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__26342;
es = G__26343;
continue;
} else {
if(cljs.core.sequential_QMARK_(old_eid)){
var id = datascript.db.entid_strict(db,old_eid);
var G__26344 = report;
var G__26345 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__26344;
es = G__26345;
continue;
} else {
var vec__26018 = datascript.db.resolve_upserts(db,entity);
var entity_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,(0),null);
var upserts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,(1),null);
var upserted_eid = datascript.db.validate_upserts(entity_SINGLEQUOTE_,upserts);
if((!((upserted_eid == null)))){
if(((datascript.db.tempid_QMARK_(old_eid)) && (cljs.core.contains_QMARK_(tempids,old_eid)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,old_eid))))){
return datascript.db.retry_with_tempid(initial_report,report,initial_es,old_eid,upserted_eid);
} else {
var G__26346 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,upserted_eid);
var G__26347 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity_SINGLEQUOTE_,new cljs.core.Keyword("db","id","db/id",-1388397098),upserted_eid)),entities);
report = G__26346;
es = G__26347;
continue;
}
} else {
if(((typeof old_eid === 'number') || ((old_eid == null)) || (typeof old_eid === 'string'))){
var new_eid = (((old_eid == null))?datascript.db.next_eid(db):((datascript.db.tempid_QMARK_(old_eid))?(function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,old_eid);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.db.next_eid(db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
var G__26349 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,new_eid);
var G__26350 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,new_entity),entities);
report = G__26349;
es = G__26350;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected number, string or lookup ref for :db/id, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_(entity)){
var vec__26021 = entity;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26021,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26021,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26021,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26021,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__26024 = entity;
var seq__26025 = cljs.core.seq(vec__26024);
var first__26026 = cljs.core.first(seq__26025);
var seq__26025__$1 = cljs.core.next(seq__26025);
var _ = first__26026;
var first__26026__$1 = cljs.core.first(seq__26025__$1);
var seq__26025__$2 = cljs.core.next(seq__26025__$1);
var f = first__26026__$1;
var args = seq__26025__$2;
var G__26351 = report;
var G__26352 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__26351;
es = G__26352;
continue;
} else {
if((((op instanceof cljs.core.Keyword)) && (cljs.core.not((datascript.db.builtin_fn_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.builtin_fn_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : datascript.db.builtin_fn_QMARK_.call(null,op)))))){
var temp__5737__auto__ = datascript.db.entid(db,op);
if((temp__5737__auto__ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t find entity for transaction fn ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));
} else {
var ident = temp__5737__auto__;
var fun = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,new cljs.core.Keyword("db","fn","db/fn",-1175261470)], null))));
var args = cljs.core.next(entity);
if(cljs.core.fn_QMARK_(fun)){
var G__26353 = report;
var G__26354 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fun,db,args),entities);
report = G__26353;
es = G__26354;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Entity ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op], 0))," expected to have :db/fn attribute with fn? value"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));
}
}
} else {
if(((datascript.db.tempid_QMARK_(e)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't use tempid in '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0)),"'. Tempids are allowed in :db/add only"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"op","op",-1882987955),entity], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","cas","db/cas",-451542322))))){
var vec__26027 = entity;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26027,(0),null);
var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26027,(1),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26027,(2),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26027,(3),null);
var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26027,(4),null);
var e__$2 = datascript.db.entid_strict(db,e__$1);
var ___$1 = datascript.db.validate_attr(a__$1,entity);
var ov__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,nv):nv);
var ___$2 = datascript.db.validate_val(nv__$1,entity);
var datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null)));
if(datascript.db.multival_QMARK_(db,a__$1)){
if(cljs.core.truth_(cljs.core.some(((function (report,es,vec__26027,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__26021,op,e,a,v,db,tempids,vec__26015,seq__26016,first__26017,seq__26016__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,ov__$1);
});})(report,es,vec__26027,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__26021,op,e,a,v,db,tempids,vec__26015,seq__26016,first__26017,seq__26016__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_))
,datoms))){
var G__26355 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__26356 = entities;
report = G__26355;
es = G__26356;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":db.fn/cas failed on datom [",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$2], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datoms)], 0)),"], expected ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ov__$1], 0))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),datoms,new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
} else {
var v__$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov__$1)){
var G__26358 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__26359 = entities;
report = G__26358;
es = G__26359;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":db.fn/cas failed on datom [",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$2], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0)),"], expected ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ov__$1], 0))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.first(datoms),new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_(e)){
var G__26360 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.db.current_tx(report));
var G__26361 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx(report),a,v], null),entities);
report = G__26360;
es = G__26361;
continue;
} else {
if(((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tx_id_QMARK_(v)))){
var G__26362 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.db.current_tx(report));
var G__26363 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx(report)], null),entities);
report = G__26362;
es = G__26363;
continue;
} else {
if(((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tempid_QMARK_(v)))){
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,v);
if((temp__5737__auto__ == null)){
var resolved = datascript.db.next_eid(db);
var report_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$5(datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,resolved),new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162),cljs.core.assoc,resolved,v);
var G__26364 = report_SINGLEQUOTE_;
var G__26365 = es;
report = G__26364;
es = G__26365;
continue;
} else {
var resolved = temp__5737__auto__;
var report_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$5(report,new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162),cljs.core.assoc,resolved,v);
var G__26366 = report_SINGLEQUOTE_;
var G__26367 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,resolved], null),entities);
report = G__26366;
es = G__26367;
continue;
}
} else {
if(datascript.db.tempid_QMARK_(e)){
var upserted_eid = ((datascript.db.is_attr_QMARK_(db,a,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))?new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)))):null);
var allocated_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,e);
if(cljs.core.truth_((function (){var and__4174__auto__ = upserted_eid;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,allocated_eid);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
return datascript.db.retry_with_tempid(initial_report,report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__4185__auto__ = upserted_eid;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return datascript.db.next_eid(db);
}
}
})();
var G__26368 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,eid);
var G__26369 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__26368;
es = G__26369;
continue;
}
} else {
if(((cljs.core.not(new cljs.core.Keyword("datascript.db","internal","datascript.db/internal",-249301114).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(entity)))) && (datascript.db.tuple_QMARK_(db,a)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t modify tuple attrs directly: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__26370 = datascript.db.transact_add(report,entity);
var G__26371 = entities;
report = G__26370;
es = G__26371;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))) && ((!((v == null)))))){
var temp__5737__auto__ = datascript.db.entid(db,e);
if((temp__5737__auto__ == null)){
var G__26372 = report;
var G__26373 = entities;
report = G__26372;
es = G__26373;
continue;
} else {
var e__$1 = temp__5737__auto__;
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
datascript.db.validate_attr(a,entity);

datascript.db.validate_val(v__$1,entity);

var temp__5737__auto____$1 = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if((temp__5737__auto____$1 == null)){
var G__26374 = report;
var G__26375 = entities;
report = G__26374;
es = G__26375;
continue;
} else {
var old_datom = temp__5737__auto____$1;
var G__26376 = datascript.db.transact_retract_datom(report,old_datom);
var G__26377 = entities;
report = G__26376;
es = G__26377;
continue;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))))){
var temp__5737__auto__ = datascript.db.entid(db,e);
if((temp__5737__auto__ == null)){
var G__26378 = report;
var G__26379 = entities;
report = G__26378;
es = G__26379;
continue;
} else {
var e__$1 = temp__5737__auto__;
var _ = datascript.db.validate_attr(a,entity);
var datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
var G__26380 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,datoms);
var G__26381 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,datoms),entities);
report = G__26380;
es = G__26381;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935))))){
var temp__5737__auto__ = datascript.db.entid(db,e);
if((temp__5737__auto__ == null)){
var G__26382 = report;
var G__26383 = entities;
report = G__26382;
es = G__26383;
continue;
} else {
var e__$1 = temp__5737__auto__;
var e_datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null)));
var v_datoms = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,es,e_datoms,e__$1,temp__5737__auto__,vec__26021,op,e,a,v,db,tempids,vec__26015,seq__26016,first__26017,seq__26016__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_){
return (function (a__$1){
return datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__5737__auto__,vec__26021,op,e,a,v,db,tempids,vec__26015,seq__26016,first__26017,seq__26016__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.db._attrs_by(db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))], 0)));
var G__26384 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__26385 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,e_datoms),entities);
report = G__26384;
es = G__26385;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown operation at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0)),", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute, :db.fn/retractEntity or an ident corresponding to an installed transaction function (e.g. {:db/ident <keyword> :db/fn <Ifn>}, usage of :db/ident requires {:db/unique :db.unique/identity} in schema)"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
if(datascript.db.datom_QMARK_(entity)){
var vec__26030 = entity;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(3),null);
var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(4),null);
if(cljs.core.truth_(added)){
var G__26387 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v,tx], null));
var G__26388 = entities;
report = G__26387;
es = G__26388;
continue;
} else {
var G__26389 = report;
var G__26390 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,a,v], null),entities);
report = G__26389;
es = G__26390;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity type at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0)),", expected map or vector"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=datascript.db.js.map
