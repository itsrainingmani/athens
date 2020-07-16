goog.provide('athens.views.data_browser');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('garden.color');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.views.data_browser.attr_unique_QMARK_ = (function athens$views$data_browser$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.views.data_browser.attr_many_QMARK_ = (function athens$views$data_browser$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.views.data_browser.attr_ref_QMARK_ = (function athens$views$data_browser$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.views.data_browser.attr_reverse_QMARK_ = (function athens$views$data_browser$attr_reverse_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return clojure.string.starts_with_QMARK_(cljs.core.name(attr),"_");
} else {
return null;
}
});
athens.views.data_browser.headings = (function athens$views$data_browser$headings(data,mode){
var G__58760 = mode;
var G__58760__$1 = (((G__58760 instanceof cljs.core.Keyword))?G__58760.fqn:null);
switch (G__58760__$1) {
case "coll":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","val"], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","val"], null);

break;
case "tuples":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,data))));

break;
case "maps":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58760__$1)].join('')));

}
});
athens.views.data_browser.coll_rows = (function athens$views$data_browser$coll_rows(coll){
var row = (function (p__58761){
var vec__58762 = p__58761;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58762,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58762,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.views.data_browser.reverse_refs_for_attr = (function athens$views$data_browser$reverse_refs_for_attr(attr,eid){
var G__58765 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__58766 = cljs.core.deref(athens.db.dsdb);
var G__58767 = attr;
var G__58768 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__58765,G__58766,G__58767,G__58768) : datascript.core.q.call(null,G__58765,G__58766,G__58767,G__58768));
});
athens.views.data_browser.reverse_attr = (function athens$views$data_browser$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.views.data_browser.wrap_with_db_id = (function athens$views$data_browser$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.views.data_browser.reverse_refs = (function athens$views$data_browser$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$views$data_browser$reverse_refs_$_iter__58769(s__58770){
return (new cljs.core.LazySeq(null,(function (){
var s__58770__$1 = s__58770;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58770__$1);
if(temp__5735__auto__){
var s__58770__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58770__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58770__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58772 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58771 = (0);
while(true){
if((i__58771 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58771);
cljs.core.chunk_append(b__58772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.wrap_with_db_id,athens.views.data_browser.reverse_refs_for_attr(attr,eid))], null));

var G__58834 = (i__58771 + (1));
i__58771 = G__58834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58772),athens$views$data_browser$reverse_refs_$_iter__58769(cljs.core.chunk_rest(s__58770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58772),null);
}
} else {
var attr = cljs.core.first(s__58770__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.wrap_with_db_id,athens.views.data_browser.reverse_refs_for_attr(attr,eid))], null),athens$views$data_browser$reverse_refs_$_iter__58769(cljs.core.rest(s__58770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_attrs);
})());
});
athens.views.data_browser.reverse_rows = (function athens$views$data_browser$reverse_rows(p__58773){
var map__58774 = p__58773;
var map__58774__$1 = (((((!((map__58774 == null))))?(((((map__58774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58774):map__58774);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58774__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.views.data_browser.reverse_refs(id);
} else {
return null;
}
});
athens.views.data_browser.map_rows = (function athens$views$data_browser$map_rows(m){
var row = (function (p__58776){
var vec__58777 = p__58776;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58777,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.views.data_browser.reverse_rows(m)));
});
athens.views.data_browser.tuple_rows = (function athens$views$data_browser$tuple_rows(tuples){
var row = (function (p__58780){
var vec__58781 = p__58780;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58781,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58781,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.views.data_browser.maps_rows = (function athens$views$data_browser$maps_rows(ms){
var hs = athens.views.data_browser.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$views$data_browser$maps_rows_$_iter__58784(s__58785){
return (new cljs.core.LazySeq(null,(function (){
var s__58785__$1 = s__58785;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58785__$1);
if(temp__5735__auto__){
var s__58785__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58785__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58785__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58787 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58786 = (0);
while(true){
if((i__58786 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58786);
cljs.core.chunk_append(b__58787,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__58786,idx,c__4580__auto__,size__4581__auto__,b__58787,s__58785__$2,temp__5735__auto__,hs){
return (function athens$views$data_browser$maps_rows_$_iter__58784_$_iter__58788(s__58789){
return (new cljs.core.LazySeq(null,((function (i__58786,idx,c__4580__auto__,size__4581__auto__,b__58787,s__58785__$2,temp__5735__auto__,hs){
return (function (){
var s__58789__$1 = s__58789;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58789__$1);
if(temp__5735__auto____$1){
var s__58789__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58789__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58789__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58791 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58790 = (0);
while(true){
if((i__58790 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58790);
cljs.core.chunk_append(b__58791,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58835 = (i__58790 + (1));
i__58790 = G__58835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58791),athens$views$data_browser$maps_rows_$_iter__58784_$_iter__58788(cljs.core.chunk_rest(s__58789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58791),null);
}
} else {
var h = cljs.core.first(s__58789__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$views$data_browser$maps_rows_$_iter__58784_$_iter__58788(cljs.core.rest(s__58789__$2)));
}
} else {
return null;
}
break;
}
});})(i__58786,idx,c__4580__auto__,size__4581__auto__,b__58787,s__58785__$2,temp__5735__auto__,hs))
,null,null));
});})(i__58786,idx,c__4580__auto__,size__4581__auto__,b__58787,s__58785__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__58836 = (i__58786 + (1));
i__58786 = G__58836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58787),athens$views$data_browser$maps_rows_$_iter__58784(cljs.core.chunk_rest(s__58785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58787),null);
}
} else {
var idx = cljs.core.first(s__58785__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__58785__$2,temp__5735__auto__,hs){
return (function athens$views$data_browser$maps_rows_$_iter__58784_$_iter__58792(s__58793){
return (new cljs.core.LazySeq(null,(function (){
var s__58793__$1 = s__58793;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58793__$1);
if(temp__5735__auto____$1){
var s__58793__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58793__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58793__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58795 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58794 = (0);
while(true){
if((i__58794 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58794);
cljs.core.chunk_append(b__58795,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58837 = (i__58794 + (1));
i__58794 = G__58837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58795),athens$views$data_browser$maps_rows_$_iter__58784_$_iter__58792(cljs.core.chunk_rest(s__58793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58795),null);
}
} else {
var h = cljs.core.first(s__58793__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$views$data_browser$maps_rows_$_iter__58784_$_iter__58792(cljs.core.rest(s__58793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__58785__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$views$data_browser$maps_rows_$_iter__58784(cljs.core.rest(s__58785__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms)));
});
athens.views.data_browser.get_rows = (function athens$views$data_browser$get_rows(data,mode){
var G__58796 = mode;
var G__58796__$1 = (((G__58796 instanceof cljs.core.Keyword))?G__58796.fqn:null);
switch (G__58796__$1) {
case "coll":
return athens.views.data_browser.coll_rows(data);

break;
case "map":
return athens.views.data_browser.map_rows(data);

break;
case "tuples":
return athens.views.data_browser.tuple_rows(data);

break;
case "maps":
return athens.views.data_browser.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58796__$1)].join('')));

}
});
athens.views.data_browser.cell = (function athens$views$data_browser$cell(p__58797){
var map__58798 = p__58797;
var map__58798__$1 = (((((!((map__58798 == null))))?(((((map__58798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58798):map__58798);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
});
athens.views.data_browser.table_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761)))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),garden.color.opacify(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761)))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.data_browser.footer_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null)], null);
athens.views.data_browser.table_view = (function athens$views$data_browser$table_view(data,mode,limit,p__58800){
var map__58801 = p__58800;
var map__58801__$1 = (((((!((map__58801 == null))))?(((((map__58801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58801):map__58801);
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58801__$1,new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.views.data_browser.cell);
var hs = athens.views.data_browser.headings(data,mode);
var rows = athens.views.data_browser.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.data_browser.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$views$data_browser$table_view_$_iter__58803(s__58804){
return (new cljs.core.LazySeq(null,(function (){
var s__58804__$1 = s__58804;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58804__$1);
if(temp__5735__auto__){
var s__58804__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58804__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58804__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58806 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58805 = (0);
while(true){
if((i__58805 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58805);
cljs.core.chunk_append(b__58806,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__58839 = (i__58805 + (1));
i__58805 = G__58839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58806),athens$views$data_browser$table_view_$_iter__58803(cljs.core.chunk_rest(s__58804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58806),null);
}
} else {
var h = cljs.core.first(s__58804__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$views$data_browser$table_view_$_iter__58803(cljs.core.rest(s__58804__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$views$data_browser$table_view_$_iter__58807(s__58808){
return (new cljs.core.LazySeq(null,(function (){
var s__58808__$1 = s__58808;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58808__$1);
if(temp__5735__auto__){
var s__58808__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58808__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58808__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58810 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58809 = (0);
while(true){
if((i__58809 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58809);
cljs.core.chunk_append(b__58810,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__58809,row,c__4580__auto__,size__4581__auto__,b__58810,s__58808__$2,temp__5735__auto__,hs,rows,map__58801,map__58801__$1,cell_fn){
return (function athens$views$data_browser$table_view_$_iter__58807_$_iter__58811(s__58812){
return (new cljs.core.LazySeq(null,((function (i__58809,row,c__4580__auto__,size__4581__auto__,b__58810,s__58808__$2,temp__5735__auto__,hs,rows,map__58801,map__58801__$1,cell_fn){
return (function (){
var s__58812__$1 = s__58812;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58812__$1);
if(temp__5735__auto____$1){
var s__58812__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58812__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58812__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58814 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58813 = (0);
while(true){
if((i__58813 < size__4581__auto____$1)){
var map__58815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58813);
var map__58815__$1 = (((((!((map__58815 == null))))?(((((map__58815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58815):map__58815);
var c = map__58815__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58815__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58815__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58814,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58840 = (i__58813 + (1));
i__58813 = G__58840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58814),athens$views$data_browser$table_view_$_iter__58807_$_iter__58811(cljs.core.chunk_rest(s__58812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58814),null);
}
} else {
var map__58817 = cljs.core.first(s__58812__$2);
var map__58817__$1 = (((((!((map__58817 == null))))?(((((map__58817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58817):map__58817);
var c = map__58817__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58817__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58817__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$views$data_browser$table_view_$_iter__58807_$_iter__58811(cljs.core.rest(s__58812__$2)));
}
} else {
return null;
}
break;
}
});})(i__58809,row,c__4580__auto__,size__4581__auto__,b__58810,s__58808__$2,temp__5735__auto__,hs,rows,map__58801,map__58801__$1,cell_fn))
,null,null));
});})(i__58809,row,c__4580__auto__,size__4581__auto__,b__58810,s__58808__$2,temp__5735__auto__,hs,rows,map__58801,map__58801__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__58841 = (i__58809 + (1));
i__58809 = G__58841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58810),athens$views$data_browser$table_view_$_iter__58807(cljs.core.chunk_rest(s__58808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58810),null);
}
} else {
var row = cljs.core.first(s__58808__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__58808__$2,temp__5735__auto__,hs,rows,map__58801,map__58801__$1,cell_fn){
return (function athens$views$data_browser$table_view_$_iter__58807_$_iter__58819(s__58820){
return (new cljs.core.LazySeq(null,(function (){
var s__58820__$1 = s__58820;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58820__$1);
if(temp__5735__auto____$1){
var s__58820__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58820__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58820__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58822 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58821 = (0);
while(true){
if((i__58821 < size__4581__auto__)){
var map__58823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58821);
var map__58823__$1 = (((((!((map__58823 == null))))?(((((map__58823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58823):map__58823);
var c = map__58823__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58823__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58823__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58822,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58842 = (i__58821 + (1));
i__58821 = G__58842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58822),athens$views$data_browser$table_view_$_iter__58807_$_iter__58819(cljs.core.chunk_rest(s__58820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58822),null);
}
} else {
var map__58825 = cljs.core.first(s__58820__$2);
var map__58825__$1 = (((((!((map__58825 == null))))?(((((map__58825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58825):map__58825);
var c = map__58825__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58825__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58825__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$views$data_browser$table_view_$_iter__58807_$_iter__58819(cljs.core.rest(s__58820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__58808__$2,temp__5735__auto__,hs,rows,map__58801,map__58801__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$views$data_browser$table_view_$_iter__58807(cljs.core.rest(s__58808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"map","map",1371690461)))?rows:cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,rows)));
})()], null)], null)], null);
});
athens.views.data_browser.coll_of_maps_QMARK_ = (function athens$views$data_browser$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.associative_QMARK_,x)) && ((!(cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)))));
});
athens.views.data_browser.tuples_QMARK_ = (function athens$views$data_browser$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)));
});
athens.views.data_browser.browser = (function athens$views$data_browser$browser(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58843 = arguments.length;
var i__4790__auto___58844 = (0);
while(true){
if((i__4790__auto___58844 < len__4789__auto___58843)){
args__4795__auto__.push((arguments[i__4790__auto___58844]));

var G__58845 = (i__4790__auto___58844 + (1));
i__4790__auto___58844 = G__58845;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.views.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.views.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic = (function (_,p__58829){
var vec__58830 = p__58829;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58830,(0),null);
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
var increase_limit = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
});
return (function() { 
var G__58846__delegate = function (result,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.views.data_browser.coll_of_maps_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.deref(limit),opts):((((cljs.core.associative_QMARK_(result)) && ((!(cljs.core.sequential_QMARK_(result))))))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref(limit),opts):((athens.views.data_browser.tuples_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.deref(limit),opts):((cljs.core.coll_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.deref(limit),opts):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.data_browser.footer_style),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((cljs.core.deref(limit) < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(limit))," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increase_limit,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
};
var G__58846 = function (result,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__58847__i = 0, G__58847__a = new Array(arguments.length -  1);
while (G__58847__i < G__58847__a.length) {G__58847__a[G__58847__i] = arguments[G__58847__i + 1]; ++G__58847__i;}
  ___$1 = new cljs.core.IndexedSeq(G__58847__a,0,null);
} 
return G__58846__delegate.call(this,result,___$1);};
G__58846.cljs$lang$maxFixedArity = 1;
G__58846.cljs$lang$applyTo = (function (arglist__58848){
var result = cljs.core.first(arglist__58848);
var ___$1 = cljs.core.rest(arglist__58848);
return G__58846__delegate(result,___$1);
});
G__58846.cljs$core$IFn$_invoke$arity$variadic = G__58846__delegate;
return G__58846;
})()
;
}));

(athens.views.data_browser.browser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.views.data_browser.browser.cljs$lang$applyTo = (function (seq58827){
var G__58828 = cljs.core.first(seq58827);
var seq58827__$1 = cljs.core.next(seq58827);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58828,seq58827__$1);
}));


//# sourceMappingURL=athens.views.data_browser.js.map
