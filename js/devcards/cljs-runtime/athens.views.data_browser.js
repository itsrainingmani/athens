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
var G__58756 = mode;
var G__58756__$1 = (((G__58756 instanceof cljs.core.Keyword))?G__58756.fqn:null);
switch (G__58756__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58756__$1)].join('')));

}
});
athens.views.data_browser.coll_rows = (function athens$views$data_browser$coll_rows(coll){
var row = (function (p__58757){
var vec__58758 = p__58757;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58758,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58758,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.views.data_browser.reverse_refs_for_attr = (function athens$views$data_browser$reverse_refs_for_attr(attr,eid){
var G__58761 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__58762 = cljs.core.deref(athens.db.dsdb);
var G__58763 = attr;
var G__58764 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__58761,G__58762,G__58763,G__58764) : datascript.core.q.call(null,G__58761,G__58762,G__58763,G__58764));
});
athens.views.data_browser.reverse_attr = (function athens$views$data_browser$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.views.data_browser.wrap_with_db_id = (function athens$views$data_browser$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.views.data_browser.reverse_refs = (function athens$views$data_browser$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$views$data_browser$reverse_refs_$_iter__58765(s__58766){
return (new cljs.core.LazySeq(null,(function (){
var s__58766__$1 = s__58766;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58766__$1);
if(temp__5735__auto__){
var s__58766__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58766__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58766__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58768 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58767 = (0);
while(true){
if((i__58767 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58767);
cljs.core.chunk_append(b__58768,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.wrap_with_db_id,athens.views.data_browser.reverse_refs_for_attr(attr,eid))], null));

var G__58830 = (i__58767 + (1));
i__58767 = G__58830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58768),athens$views$data_browser$reverse_refs_$_iter__58765(cljs.core.chunk_rest(s__58766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58768),null);
}
} else {
var attr = cljs.core.first(s__58766__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.wrap_with_db_id,athens.views.data_browser.reverse_refs_for_attr(attr,eid))], null),athens$views$data_browser$reverse_refs_$_iter__58765(cljs.core.rest(s__58766__$2)));
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
athens.views.data_browser.reverse_rows = (function athens$views$data_browser$reverse_rows(p__58769){
var map__58770 = p__58769;
var map__58770__$1 = (((((!((map__58770 == null))))?(((((map__58770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58770):map__58770);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58770__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.views.data_browser.reverse_refs(id);
} else {
return null;
}
});
athens.views.data_browser.map_rows = (function athens$views$data_browser$map_rows(m){
var row = (function (p__58772){
var vec__58773 = p__58772;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58773,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.views.data_browser.reverse_rows(m)));
});
athens.views.data_browser.tuple_rows = (function athens$views$data_browser$tuple_rows(tuples){
var row = (function (p__58776){
var vec__58777 = p__58776;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58777,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58777,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.views.data_browser.maps_rows = (function athens$views$data_browser$maps_rows(ms){
var hs = athens.views.data_browser.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$views$data_browser$maps_rows_$_iter__58780(s__58781){
return (new cljs.core.LazySeq(null,(function (){
var s__58781__$1 = s__58781;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58781__$1);
if(temp__5735__auto__){
var s__58781__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58781__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58781__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58783 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58782 = (0);
while(true){
if((i__58782 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58782);
cljs.core.chunk_append(b__58783,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__58782,idx,c__4580__auto__,size__4581__auto__,b__58783,s__58781__$2,temp__5735__auto__,hs){
return (function athens$views$data_browser$maps_rows_$_iter__58780_$_iter__58784(s__58785){
return (new cljs.core.LazySeq(null,((function (i__58782,idx,c__4580__auto__,size__4581__auto__,b__58783,s__58781__$2,temp__5735__auto__,hs){
return (function (){
var s__58785__$1 = s__58785;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58785__$1);
if(temp__5735__auto____$1){
var s__58785__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58785__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58785__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58787 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58786 = (0);
while(true){
if((i__58786 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58786);
cljs.core.chunk_append(b__58787,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58831 = (i__58786 + (1));
i__58786 = G__58831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58787),athens$views$data_browser$maps_rows_$_iter__58780_$_iter__58784(cljs.core.chunk_rest(s__58785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58787),null);
}
} else {
var h = cljs.core.first(s__58785__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$views$data_browser$maps_rows_$_iter__58780_$_iter__58784(cljs.core.rest(s__58785__$2)));
}
} else {
return null;
}
break;
}
});})(i__58782,idx,c__4580__auto__,size__4581__auto__,b__58783,s__58781__$2,temp__5735__auto__,hs))
,null,null));
});})(i__58782,idx,c__4580__auto__,size__4581__auto__,b__58783,s__58781__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__58832 = (i__58782 + (1));
i__58782 = G__58832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58783),athens$views$data_browser$maps_rows_$_iter__58780(cljs.core.chunk_rest(s__58781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58783),null);
}
} else {
var idx = cljs.core.first(s__58781__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__58781__$2,temp__5735__auto__,hs){
return (function athens$views$data_browser$maps_rows_$_iter__58780_$_iter__58788(s__58789){
return (new cljs.core.LazySeq(null,(function (){
var s__58789__$1 = s__58789;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58789__$1);
if(temp__5735__auto____$1){
var s__58789__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58789__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58789__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58791 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58790 = (0);
while(true){
if((i__58790 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58790);
cljs.core.chunk_append(b__58791,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58833 = (i__58790 + (1));
i__58790 = G__58833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58791),athens$views$data_browser$maps_rows_$_iter__58780_$_iter__58788(cljs.core.chunk_rest(s__58789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58791),null);
}
} else {
var h = cljs.core.first(s__58789__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$views$data_browser$maps_rows_$_iter__58780_$_iter__58788(cljs.core.rest(s__58789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__58781__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$views$data_browser$maps_rows_$_iter__58780(cljs.core.rest(s__58781__$2)));
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
var G__58792 = mode;
var G__58792__$1 = (((G__58792 instanceof cljs.core.Keyword))?G__58792.fqn:null);
switch (G__58792__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58792__$1)].join('')));

}
});
athens.views.data_browser.cell = (function athens$views$data_browser$cell(p__58793){
var map__58794 = p__58793;
var map__58794__$1 = (((((!((map__58794 == null))))?(((((map__58794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58794):map__58794);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
});
athens.views.data_browser.table_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5rem 0 0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761)))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"0.125rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.125rem 0.125rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),garden.color.opacify(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0.25rem",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0.25rem",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761)))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.data_browser.footer_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5rem 0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null)], null);
athens.views.data_browser.table_view = (function athens$views$data_browser$table_view(data,mode,limit,p__58796){
var map__58797 = p__58796;
var map__58797__$1 = (((((!((map__58797 == null))))?(((((map__58797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58797):map__58797);
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58797__$1,new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.views.data_browser.cell);
var hs = athens.views.data_browser.headings(data,mode);
var rows = athens.views.data_browser.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.data_browser.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$views$data_browser$table_view_$_iter__58799(s__58800){
return (new cljs.core.LazySeq(null,(function (){
var s__58800__$1 = s__58800;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58800__$1);
if(temp__5735__auto__){
var s__58800__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58800__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58800__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58802 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58801 = (0);
while(true){
if((i__58801 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58801);
cljs.core.chunk_append(b__58802,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__58835 = (i__58801 + (1));
i__58801 = G__58835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58802),athens$views$data_browser$table_view_$_iter__58799(cljs.core.chunk_rest(s__58800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58802),null);
}
} else {
var h = cljs.core.first(s__58800__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$views$data_browser$table_view_$_iter__58799(cljs.core.rest(s__58800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$views$data_browser$table_view_$_iter__58803(s__58804){
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
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58805);
cljs.core.chunk_append(b__58806,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__58805,row,c__4580__auto__,size__4581__auto__,b__58806,s__58804__$2,temp__5735__auto__,hs,rows,map__58797,map__58797__$1,cell_fn){
return (function athens$views$data_browser$table_view_$_iter__58803_$_iter__58807(s__58808){
return (new cljs.core.LazySeq(null,((function (i__58805,row,c__4580__auto__,size__4581__auto__,b__58806,s__58804__$2,temp__5735__auto__,hs,rows,map__58797,map__58797__$1,cell_fn){
return (function (){
var s__58808__$1 = s__58808;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58808__$1);
if(temp__5735__auto____$1){
var s__58808__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58808__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58808__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58810 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58809 = (0);
while(true){
if((i__58809 < size__4581__auto____$1)){
var map__58811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58809);
var map__58811__$1 = (((((!((map__58811 == null))))?(((((map__58811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58811):map__58811);
var c = map__58811__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58811__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58811__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58810,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58836 = (i__58809 + (1));
i__58809 = G__58836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58810),athens$views$data_browser$table_view_$_iter__58803_$_iter__58807(cljs.core.chunk_rest(s__58808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58810),null);
}
} else {
var map__58813 = cljs.core.first(s__58808__$2);
var map__58813__$1 = (((((!((map__58813 == null))))?(((((map__58813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58813):map__58813);
var c = map__58813__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58813__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58813__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$views$data_browser$table_view_$_iter__58803_$_iter__58807(cljs.core.rest(s__58808__$2)));
}
} else {
return null;
}
break;
}
});})(i__58805,row,c__4580__auto__,size__4581__auto__,b__58806,s__58804__$2,temp__5735__auto__,hs,rows,map__58797,map__58797__$1,cell_fn))
,null,null));
});})(i__58805,row,c__4580__auto__,size__4581__auto__,b__58806,s__58804__$2,temp__5735__auto__,hs,rows,map__58797,map__58797__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__58837 = (i__58805 + (1));
i__58805 = G__58837;
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
var row = cljs.core.first(s__58804__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__58804__$2,temp__5735__auto__,hs,rows,map__58797,map__58797__$1,cell_fn){
return (function athens$views$data_browser$table_view_$_iter__58803_$_iter__58815(s__58816){
return (new cljs.core.LazySeq(null,(function (){
var s__58816__$1 = s__58816;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58816__$1);
if(temp__5735__auto____$1){
var s__58816__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58816__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58816__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58818 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58817 = (0);
while(true){
if((i__58817 < size__4581__auto__)){
var map__58819 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58817);
var map__58819__$1 = (((((!((map__58819 == null))))?(((((map__58819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58819):map__58819);
var c = map__58819__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58819__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58819__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58818,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58838 = (i__58817 + (1));
i__58817 = G__58838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58818),athens$views$data_browser$table_view_$_iter__58803_$_iter__58815(cljs.core.chunk_rest(s__58816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58818),null);
}
} else {
var map__58821 = cljs.core.first(s__58816__$2);
var map__58821__$1 = (((((!((map__58821 == null))))?(((((map__58821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58821):map__58821);
var c = map__58821__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58821__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58821__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$views$data_browser$table_view_$_iter__58803_$_iter__58815(cljs.core.rest(s__58816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__58804__$2,temp__5735__auto__,hs,rows,map__58797,map__58797__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$views$data_browser$table_view_$_iter__58803(cljs.core.rest(s__58804__$2)));
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
var len__4789__auto___58839 = arguments.length;
var i__4790__auto___58840 = (0);
while(true){
if((i__4790__auto___58840 < len__4789__auto___58839)){
args__4795__auto__.push((arguments[i__4790__auto___58840]));

var G__58841 = (i__4790__auto___58840 + (1));
i__4790__auto___58840 = G__58841;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.views.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.views.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic = (function (_,p__58825){
var vec__58826 = p__58825;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58826,(0),null);
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
var increase_limit = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
});
return (function() { 
var G__58842__delegate = function (result,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.views.data_browser.coll_of_maps_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.deref(limit),opts):((((cljs.core.associative_QMARK_(result)) && ((!(cljs.core.sequential_QMARK_(result))))))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref(limit),opts):((athens.views.data_browser.tuples_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.deref(limit),opts):((cljs.core.coll_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.deref(limit),opts):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.data_browser.footer_style),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((cljs.core.deref(limit) < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(limit))," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increase_limit,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
};
var G__58842 = function (result,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__58843__i = 0, G__58843__a = new Array(arguments.length -  1);
while (G__58843__i < G__58843__a.length) {G__58843__a[G__58843__i] = arguments[G__58843__i + 1]; ++G__58843__i;}
  ___$1 = new cljs.core.IndexedSeq(G__58843__a,0,null);
} 
return G__58842__delegate.call(this,result,___$1);};
G__58842.cljs$lang$maxFixedArity = 1;
G__58842.cljs$lang$applyTo = (function (arglist__58844){
var result = cljs.core.first(arglist__58844);
var ___$1 = cljs.core.rest(arglist__58844);
return G__58842__delegate(result,___$1);
});
G__58842.cljs$core$IFn$_invoke$arity$variadic = G__58842__delegate;
return G__58842;
})()
;
}));

(athens.views.data_browser.browser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.views.data_browser.browser.cljs$lang$applyTo = (function (seq58823){
var G__58824 = cljs.core.first(seq58823);
var seq58823__$1 = cljs.core.next(seq58823);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58824,seq58823__$1);
}));


//# sourceMappingURL=athens.views.data_browser.js.map
