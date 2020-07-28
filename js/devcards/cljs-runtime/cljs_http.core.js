goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__45785 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__45785.cljs$core$IFn$_invoke$arity$1 ? fexpr__45785.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__45785.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45786){
var vec__45787 = p__45786;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__45790 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__45790)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__45790)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__45790)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__45790)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__45790)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__45790)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45790)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__45791){
var map__45792 = p__45791;
var map__45792__$1 = (((((!((map__45792 == null))))?(((((map__45792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45792):map__45792);
var request = map__45792__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45792__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45792__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45792__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__45794 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__45794,default_headers);

cljs_http.core.apply_response_type_BANG_(G__45794,response_type);

G__45794.setTimeoutInterval(timeout);

G__45794.setWithCredentials(send_credentials);

return G__45794;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__45795){
var map__45796 = p__45795;
var map__45796__$1 = (((((!((map__45796 == null))))?(((((map__45796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45796):map__45796);
var request = map__45796__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45796__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45796__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45796__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45796__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45796__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45796__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4185__auto__ = request_method;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__45798 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__45798) : cljs_http.core.error_kw.call(null,G__45798));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_45843 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__45799_45844 = xhr;
G__45799_45844.setProgressEventsEnabled(true);

G__45799_45844.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_45843,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__45799_45844.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_45843,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__43452__auto___45845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_45810){
var state_val_45811 = (state_45810[(1)]);
if((state_val_45811 === (1))){
var state_45810__$1 = state_45810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45810__$1,(2),cancel);
} else {
if((state_val_45811 === (2))){
var inst_45801 = (state_45810[(2)]);
var inst_45802 = xhr.isComplete();
var inst_45803 = cljs.core.not(inst_45802);
var state_45810__$1 = (function (){var statearr_45812 = state_45810;
(statearr_45812[(7)] = inst_45801);

return statearr_45812;
})();
if(inst_45803){
var statearr_45813_45846 = state_45810__$1;
(statearr_45813_45846[(1)] = (3));

} else {
var statearr_45814_45847 = state_45810__$1;
(statearr_45814_45847[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (3))){
var inst_45805 = xhr.abort();
var state_45810__$1 = state_45810;
var statearr_45815_45848 = state_45810__$1;
(statearr_45815_45848[(2)] = inst_45805);

(statearr_45815_45848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (4))){
var state_45810__$1 = state_45810;
var statearr_45816_45849 = state_45810__$1;
(statearr_45816_45849[(2)] = null);

(statearr_45816_45849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (5))){
var inst_45808 = (state_45810[(2)]);
var state_45810__$1 = state_45810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45810__$1,inst_45808);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__43385__auto__ = null;
var cljs_http$core$xhr_$_state_machine__43385__auto____0 = (function (){
var statearr_45817 = [null,null,null,null,null,null,null,null];
(statearr_45817[(0)] = cljs_http$core$xhr_$_state_machine__43385__auto__);

(statearr_45817[(1)] = (1));

return statearr_45817;
});
var cljs_http$core$xhr_$_state_machine__43385__auto____1 = (function (state_45810){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_45810);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e45818){if((e45818 instanceof Object)){
var ex__43388__auto__ = e45818;
var statearr_45819_45851 = state_45810;
(statearr_45819_45851[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45852 = state_45810;
state_45810 = G__45852;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__43385__auto__ = function(state_45810){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__43385__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__43385__auto____1.call(this,state_45810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__43385__auto____0;
cljs_http$core$xhr_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__43385__auto____1;
return cljs_http$core$xhr_$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_45820 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_45820[(6)] = c__43452__auto___45845);

return statearr_45820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__45821){
var map__45822 = p__45821;
var map__45822__$1 = (((((!((map__45822 == null))))?(((((map__45822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45822):map__45822);
var request = map__45822__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45822__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_45857 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_45857], null));

if(cljs.core.truth_(cancel)){
var c__43452__auto___45859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43453__auto__ = (function (){var switch__43384__auto__ = (function (state_45828){
var state_val_45829 = (state_45828[(1)]);
if((state_val_45829 === (1))){
var state_45828__$1 = state_45828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45828__$1,(2),cancel);
} else {
if((state_val_45829 === (2))){
var inst_45825 = (state_45828[(2)]);
var inst_45826 = jsonp.cancel(req_45857);
var state_45828__$1 = (function (){var statearr_45830 = state_45828;
(statearr_45830[(7)] = inst_45825);

return statearr_45830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45828__$1,inst_45826);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__43385__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__43385__auto____0 = (function (){
var statearr_45831 = [null,null,null,null,null,null,null,null];
(statearr_45831[(0)] = cljs_http$core$jsonp_$_state_machine__43385__auto__);

(statearr_45831[(1)] = (1));

return statearr_45831;
});
var cljs_http$core$jsonp_$_state_machine__43385__auto____1 = (function (state_45828){
while(true){
var ret_value__43386__auto__ = (function (){try{while(true){
var result__43387__auto__ = switch__43384__auto__(state_45828);
if(cljs.core.keyword_identical_QMARK_(result__43387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43387__auto__;
}
break;
}
}catch (e45832){if((e45832 instanceof Object)){
var ex__43388__auto__ = e45832;
var statearr_45833_45860 = state_45828;
(statearr_45833_45860[(5)] = ex__43388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45861 = state_45828;
state_45828 = G__45861;
continue;
} else {
return ret_value__43386__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__43385__auto__ = function(state_45828){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__43385__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__43385__auto____1.call(this,state_45828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__43385__auto____0;
cljs_http$core$jsonp_$_state_machine__43385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__43385__auto____1;
return cljs_http$core$jsonp_$_state_machine__43385__auto__;
})()
})();
var state__43454__auto__ = (function (){var statearr_45834 = (f__43453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43453__auto__.cljs$core$IFn$_invoke$arity$0() : f__43453__auto__.call(null));
(statearr_45834[(6)] = c__43452__auto___45859);

return statearr_45834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43454__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__45835){
var map__45836 = p__45835;
var map__45836__$1 = (((((!((map__45836 == null))))?(((((map__45836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45836):map__45836);
var request = map__45836__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45836__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
