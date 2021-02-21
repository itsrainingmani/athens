goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__51963 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__51963.cljs$core$IFn$_invoke$arity$1 ? fexpr__51963.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__51963.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51965){
var vec__51966 = p__51965;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51966,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__51970 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__51970)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__51970)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__51970)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__51970)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__51970)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__51970)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51970)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__51972){
var map__51973 = p__51972;
var map__51973__$1 = (((((!((map__51973 == null))))?(((((map__51973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51973):map__51973);
var request = map__51973__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__51976 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__51976,default_headers);

cljs_http.core.apply_response_type_BANG_(G__51976,response_type);

G__51976.setTimeoutInterval(timeout);

G__51976.setWithCredentials(send_credentials);

return G__51976;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__51980){
var map__51981 = p__51980;
var map__51981__$1 = (((((!((map__51981 == null))))?(((((map__51981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51981):map__51981);
var request = map__51981__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__51983 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__51983) : cljs_http.core.error_kw.call(null,G__51983));
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
var listener_52064 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__51984_52065 = xhr;
G__51984_52065.setProgressEventsEnabled(true);

G__51984_52065.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_52064,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__51984_52065.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_52064,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__50418__auto___52067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_51996){
var state_val_51997 = (state_51996[(1)]);
if((state_val_51997 === (1))){
var state_51996__$1 = state_51996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51996__$1,(2),cancel);
} else {
if((state_val_51997 === (2))){
var inst_51986 = (state_51996[(2)]);
var inst_51987 = xhr.isComplete();
var inst_51988 = cljs.core.not(inst_51987);
var state_51996__$1 = (function (){var statearr_52000 = state_51996;
(statearr_52000[(7)] = inst_51986);

return statearr_52000;
})();
if(inst_51988){
var statearr_52002_52070 = state_51996__$1;
(statearr_52002_52070[(1)] = (3));

} else {
var statearr_52003_52071 = state_51996__$1;
(statearr_52003_52071[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51997 === (3))){
var inst_51991 = xhr.abort();
var state_51996__$1 = state_51996;
var statearr_52004_52073 = state_51996__$1;
(statearr_52004_52073[(2)] = inst_51991);

(statearr_52004_52073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51997 === (4))){
var state_51996__$1 = state_51996;
var statearr_52005_52074 = state_51996__$1;
(statearr_52005_52074[(2)] = null);

(statearr_52005_52074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51997 === (5))){
var inst_51994 = (state_51996[(2)]);
var state_51996__$1 = state_51996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51996__$1,inst_51994);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__50383__auto__ = null;
var cljs_http$core$xhr_$_state_machine__50383__auto____0 = (function (){
var statearr_52006 = [null,null,null,null,null,null,null,null];
(statearr_52006[(0)] = cljs_http$core$xhr_$_state_machine__50383__auto__);

(statearr_52006[(1)] = (1));

return statearr_52006;
});
var cljs_http$core$xhr_$_state_machine__50383__auto____1 = (function (state_51996){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_51996);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e52007){var ex__50386__auto__ = e52007;
var statearr_52008_52078 = state_51996;
(statearr_52008_52078[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_51996[(4)]))){
var statearr_52009_52080 = state_51996;
(statearr_52009_52080[(1)] = cljs.core.first((state_51996[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52082 = state_51996;
state_51996 = G__52082;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__50383__auto__ = function(state_51996){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__50383__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__50383__auto____1.call(this,state_51996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__50383__auto____0;
cljs_http$core$xhr_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__50383__auto____1;
return cljs_http$core$xhr_$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_52011 = f__50419__auto__();
(statearr_52011[(6)] = c__50418__auto___52067);

return statearr_52011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__52014){
var map__52016 = p__52014;
var map__52016__$1 = (((((!((map__52016 == null))))?(((((map__52016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52016):map__52016);
var request = map__52016__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52016__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_52085 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_52085], null));

if(cljs.core.truth_(cancel)){
var c__50418__auto___52090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50419__auto__ = (function (){var switch__50382__auto__ = (function (state_52031){
var state_val_52032 = (state_52031[(1)]);
if((state_val_52032 === (1))){
var state_52031__$1 = state_52031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52031__$1,(2),cancel);
} else {
if((state_val_52032 === (2))){
var inst_52027 = (state_52031[(2)]);
var inst_52029 = jsonp.cancel(req_52085);
var state_52031__$1 = (function (){var statearr_52035 = state_52031;
(statearr_52035[(7)] = inst_52027);

return statearr_52035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52031__$1,inst_52029);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__50383__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__50383__auto____0 = (function (){
var statearr_52037 = [null,null,null,null,null,null,null,null];
(statearr_52037[(0)] = cljs_http$core$jsonp_$_state_machine__50383__auto__);

(statearr_52037[(1)] = (1));

return statearr_52037;
});
var cljs_http$core$jsonp_$_state_machine__50383__auto____1 = (function (state_52031){
while(true){
var ret_value__50384__auto__ = (function (){try{while(true){
var result__50385__auto__ = switch__50382__auto__(state_52031);
if(cljs.core.keyword_identical_QMARK_(result__50385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50385__auto__;
}
break;
}
}catch (e52038){var ex__50386__auto__ = e52038;
var statearr_52039_52095 = state_52031;
(statearr_52039_52095[(2)] = ex__50386__auto__);


if(cljs.core.seq((state_52031[(4)]))){
var statearr_52040_52096 = state_52031;
(statearr_52040_52096[(1)] = cljs.core.first((state_52031[(4)])));

} else {
throw ex__50386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52097 = state_52031;
state_52031 = G__52097;
continue;
} else {
return ret_value__50384__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__50383__auto__ = function(state_52031){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__50383__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__50383__auto____1.call(this,state_52031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__50383__auto____0;
cljs_http$core$jsonp_$_state_machine__50383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__50383__auto____1;
return cljs_http$core$jsonp_$_state_machine__50383__auto__;
})()
})();
var state__50420__auto__ = (function (){var statearr_52043 = f__50419__auto__();
(statearr_52043[(6)] = c__50418__auto___52090);

return statearr_52043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50420__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__52045){
var map__52046 = p__52045;
var map__52046__$1 = (((((!((map__52046 == null))))?(((((map__52046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52046):map__52046);
var request = map__52046__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52046__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
