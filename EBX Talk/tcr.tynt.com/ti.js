//v186 Copyright (c) 2008-2025 33Across Inc. All Rights Reserved

Tynt=window.Tynt||[];
"undefined"==typeof Tynt.TIL&&"undefined"==typeof Tynt.TCL&&"undefined"==typeof Tynt.TICFL&&function(){var e=window,k=document,g={distro:"TI",id:"TI-"+(new Date).getTime()};Tynt.TIL=function(){function m(){}function B(a,b,c,d){var e=function(a,b,c,d,h){a.size=b||"";a.size?(b=b.split("x"),a.width=b[0],a.height=b[1]):(a.width="0",a.height="0");a.targetId=c||"";a.product=d||"inpage";h?a.distro=h:"inview"==a.product&&(a.distro="RCIV");a.iframeId=null;a.sicWindow=null};22==a.length?(this.publisherId=a,
this.options=c||{},e(this,this.options.size||"1x1",this.options.targetId||"",b)):e(this,a,b,c,d)}function v(a,b,c){this.type=a;this.fn=b;this.once=!!c}if(document.body){Date.now||(Date.now=function(){return(new Date).getTime()});var d={_maxRef:600,_idMacro:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",init:function(){this._icUrl=g.protocol+(Tynt.e||"")+"ic.tynt.com";this._debUrl=g.protocol+(Tynt.e||"")+"de.tynt.com/deb/v2";this._sicUrl=g.protocol+(Tynt.e||"")+"cdn-sic.33across.com/1/javascripts/sic.js";
this._apUrl=g.protocol+(Tynt.e||"")+"cdn-ap.33across.com/javascripts/ap.js";this._chmob=this._chua=this._chuav=this._chm=this._chpv=this._chp="";this.init.fbl=function(a,c){if(c)for(var h=0;h<c.length;++h)0<h&&(d[a]+=", "),d[a]+=c[h].brand+";v="+c[h].version};var a=navigator.userAgentData;"undefined"!=typeof a&&("undefined"!=typeof a.getHighEntropyValues&&(this._chpv="pending",a.getHighEntropyValues(["model","platformVersion","fullVersionList"]).then(function(a){d._chm=a.model;d._chpv=a.platformVersion;
d.init.fbl("_chuav",a.fullVersionList)})),this._chp=a.platform,this._chmob=a.mobile,this.init.fbl("_chua",a.brands))},newEle:function(a,b,c,d){d=d||window;a=d.document.createElement(a);b&&this.extend(a,b);c&&this.extend(a.style,c);return a},injectScript:function(a,b,c){b=b||window;a=this.newEle("script",{async:"async",referrerPolicy:"unsafe-url",type:"text/javascript",src:a},null,b);this.insertEle(a,c||b.document.getElementsByTagName("script")[0])},injectSicScript:function(a){this.injectScript(this._sicUrl,
window,a)},injectApolloScript:function(){this.injectScript(this._apUrl)},injectSicIframe:function(a,b,c){var d={width:a.width+"px",height:a.height+"px",border:"0 none",margin:"0"};c&&this.extend(d,c);c=this.newEle("iframe",{referrerPolicy:"unsafe-url",src:"about:blank",frameBorder:"0",frameSpacing:"0",scrolling:"no"},d);this.insertEle(c,b);a.iframeId=this.eleId(c);a.sicWindow=c.contentWindow;a=c.contentWindow.document;a.open();a.write('<!DOCTYPE html><html><head><style type="text/css">*{margin:0;padding:0;}</style></head><body><script type="text/javascript">window.Tynt = window.parent.Tynt;\x3c/script><script type="text/javascript" src="'+
this._sicUrl+'">\x3c/script></body></html>');a.close()},insertEle:function(a,b){b?"script"==b.tagName.toLowerCase()?b.parentNode.insertBefore(a,b):b.appendChild(a):document.body.appendChild(a)},eleId:function(a){var b=a.id;b||(b="x33x"+Date.now(),a.id=b);return b},_imgs:[],injectPixel:function(a,b,c){var d;try{d=k.createElement("img")}catch(e){d=document.createElement("img")}d&&(this._imgs.push(d),b&&(d.onload=b),c&&(d.onerror=c),d.referrerPolicy="unsafe-url",d.src=a)},docUrl:function(){var a=this.getLink("canonical");
a||(a=this.getMeta("property","og:url","name","original-source"));if(a){if(0!=a.indexOf("http")){var b=g.protocol+e.location.host+e.location.pathname,c=k.getElementsByTagName("base")[0];c&&(c=c.getAttribute("href"))&&(b=c);"/"==a.charAt(0)?(c=b.indexOf("/",9),-1<c&&(b=b.slice(0,c))):(c=b.lastIndexOf("/"),b=9<c?b.slice(0,c+1):b+"/");a=b+a}return a}return""},getMeta:function(a,b,c,d){var e,f=null,g=null,l=k.getElementsByTagName("meta");for(e=0;e<l.length;++e)f||l[e].getAttribute(a)!==b?c&&!g&&l[e].getAttribute(c)===
d&&(g=l[e].getAttribute("content")||null):f=l[e].getAttribute("content")||null;return f||g},getLink:function(a,b){var c,d,e=k.getElementsByTagName("link");for(c=0;c<e.length;++c)if(d=e[c].getAttribute("rel"),e[c].getAttribute("href")&&d&&(!b&&0<=d.indexOf(a)||b&&d==a))return e[c].href;return null},extend:function(a,b){var c,d;for(c=1;c<arguments.length;++c)for(d in arguments[c])arguments[c].hasOwnProperty(d)&&(a[d]=arguments[c][d]);return a},isArray:function(a){return"undefined"!=typeof a&&"[object Array]"===
Object.prototype.toString.call(a)},inArray:function(a,b){return 0<=this.indexOf(a,b)},toArray:function(a,b){return Array.prototype.slice.call(a,b||0)},indexOf:function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1},unique:function(a){var b,c={},d=[];for(b=0;b<a.length;++b)c[a[b]]||(c[a[b]]=!0,d.push(a[b]));return d},iframeType:function(){var a=this.iframeEle(),b=w;if(a)b=a.id&&0<=a.id.search(/google_ads?_i?frame/)?6:x;else try{window!=window.top&&(b=
"undefined"!=typeof window.$sf?y:r)}catch(c){b=r,d.clog("iframeType: "+c.message)}return b},iframeEle:function(a){var b=null;a=a||window;try{b=a.frameElement}catch(c){}return b},iframeTop:function(){var a=window,b=null;try{for(;a!=window.top;)b=a,a=a.parent}catch(c){return null}return b?this.iframeEle(b):null},getTopWin:function(){var a=window;try{for(;a.parent!==a&&a.parent.document;)a=a.parent}catch(b){}return a},isolated:function(){var a=!0;try{"function"==typeof window.top.open&&(a=!1)}catch(b){}return a},
tyntIds:function(){return this.unique(Tynt).join("~")},getPubId:function(){for(var a=null,b=0;b<Tynt.length;++b)if("string"==typeof Tynt[b]&&22==Tynt[b].length&&0>Tynt[b].indexOf("!")){a=Tynt[b];break}return a},countIds:function(a){var b,c=0;for(b=0;b<Tynt.length;++b)Tynt[b]===a&&++c;return c},_log:function(a){"undefined"==typeof Tynt.debug&&0<e.location.search.indexOf("__tcdebugmode=1")&&e.console&&e.console.log&&(Tynt.debug=!0);if(!0===Tynt.debug||1===Tynt.debug)a.unshift("[TC]"),e.console.log.apply(e.console,
a)},log:function(){g.inXOIframe()?this.clog.apply(this,arguments):this._log(this.toArray(arguments))},clog:function(){var a=this.toArray(arguments);a.unshift(g.id);this._log(a)},callIcU:function(){e._33Across.state.icDone=z;d.clog("Calling IC/U");this.injectPixel(this._icUrl+"/u",function(){e._33Across.state.icDone=q})},callIcCb:function(){var a,b,c,h,f,n;if(!e._33Across.state.icDone){e._33Across.state.icDone=z;b=this.getCookie(k.cookie,"tracertraffic");a=e.location.hash;a=/tynt=/.test(a)?a.match(/tynt=?([^?&$#]*)/)[1]:
!1;var C=this.getPrivacyParameters();h=c=this._icUrl+"/b/p?id="+this.tyntIds()+(b?"&et="+b:"")+(a?"&a="+a:"")+("string"==typeof Tynt.b?"&b="+Tynt.b:"")+"&lm="+g.type+"&ts="+Date.now()+"&dn="+g.distro+"&iso="+(this.isolated()?"1":"0")+C+"&pu="+encodeURIComponent(this.trunc(this.pageUrl(),d._maxRef));(a=this.getMeta("property","og:title"))&&a!=k.title&&(h+="&ct="+encodeURIComponent(this.trunc(a,200)));f=h;k.referrer&&(a=this.trunc(k.referrer,this._maxRef),f+="&r="+encodeURIComponent(a));n=f;if(a=k.title||
e.location.hostname)a=this.trim(this.trunc(a,200)),n+="&t="+encodeURIComponent(a);b=this.clientHints(n);d.callIcCb.rsp=function(){e._33Across.state.icDone=q};d.clog("Calling IC");this.injectPixel(b,d.callIcCb.rsp,function(){d.injectPixel(n,d.callIcCb.rsp,function(){d.injectPixel(f,d.callIcCb.rsp,function(){d.injectPixel(h,d.callIcCb.rsp,function(){d.injectPixel(c,d.callIcCb.rsp)})})})})}},callIc:function(){this.when(function(){return"pending"!=d._chpv},this.callIcCb,{timeout:300,timeoutCallback:this.callIcCb},
this)},callDeb:function(a,b,c){function h(a,b){d.clog("Calling DEB "+b+(a?"":" on IC timeout"));var c=encodeURIComponent(d.trunc(k.referrer,d._maxRef)),h=this.getPrivacyParameters(),f;f=this.clientHints("");d.injectScript(d._debUrl+"?id="+d.tyntIds()+"&dn="+g.distro+"&cc="+b+f+"&r="+c+h+"&pu="+encodeURIComponent(d.trunc(d.pageUrl(),d._maxRef)),e)}"undefined"==typeof a&&(a=1);e._33Across.state.deDone>=a||(++e._33Across.state.deDone,1!==e._33Across.state.deDone&&!0!==c||this.when(function(){return e._33Across.state.icDone==
q},h,{timeout:300,timeoutCallback:h,callbackData:e._33Across.state.deDone},this),b&&0<b.length&&setTimeout(function(){d.callDeb(a,b,!0)},b.shift()))},callDebX:function(a,b){function c(a,c){d[b?"log":"clog"]("Calling DEBx "+c+(a?"":" on IC timeout"));var f=encodeURIComponent(d.trunc(k.referrer,d._maxRef)),m=this.getPrivacyParameters(),l;l=this.clientHints("");d.injectScript(d._debUrl+"?m=xch&id="+d.tyntIds()+"&dn="+g.distro+"&cc="+c+l+"&r="+f+m+"&pu="+encodeURIComponent(d.trunc(d.pageUrl(),d._maxRef)),
e)}a||(a=10);e._33Across.state.dxDone>=a||(++e._33Across.state.dxDone,this.when(function(){return e._33Across.state.icDone==q},c,{timeout:300,timeoutCallback:c,callbackData:e._33Across.state.dxDone},this))},jsonDecode:function(a){if("function"!=typeof Array.prototype.toJSON)return JSON.stringify(a);var b=Array.prototype.toJSON;delete Array.prototype.toJSON;a=JSON.stringify(a);Array.prototype.toJSON=b;return a},getCookie:function(a,b){for(var c=b+"=",d=a.split(";"),e=0;e<d.length;e++){for(var f=d[e];" "==
f.charAt(0);)f=f.substring(1,f.length);if(0==f.indexOf(c))return f.substring(c.length,f.length)}return null},trim:function(a){return a.replace(/^\s+|\s+$/g,"")},trunc:function(a,b){var c,d;if(!a||a.length<=b)return a;c=a.substring(0,b);for(d=1;3>=d;++d)if("%"==c.charAt(c.length-d))return c.substring(0,c.length-d);return c},when:function(a,b,c,d){var f,g,k,l=null,u=null,p=a();c=c||{};f=c.interval||50;g=c.timeout;k=c.timeoutCallback||function(){};if(p)return b.call(d,p,c.callbackData),!0;l=e.setInterval(function(){if(p=
a())e.clearInterval(l),e.clearTimeout(u),b.call(d,p,c.callbackData)},f);g&&(u=e.setTimeout(function(){e.clearInterval(l);k.call(d,p,c.callbackData)},g));return!1},prob:function(a){a=parseFloat(a)||0;return Math.random()<a},on:function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},off:function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d||!1):a.detachEvent&&a.detachEvent("on"+b,c)},pageUrl:function(){return g.inXOIframe()?k.referrer:
e.location.href},clientHints:function(a){"pending"!=this._chpv&&(this._chm&&(a+="&chm="+encodeURIComponent(this._chm)),this._chpv&&(a+="&chpv="+encodeURIComponent(this._chpv)),this._chuav&&(a+="&chuav="+encodeURIComponent(this._chuav)));this._chp&&(a+="&chp="+encodeURIComponent(this._chp));"boolean"==typeof this._chmob&&(a+="&chmob="+(this._chmob?"1":"0"));this._chua&&(a+="&chua="+encodeURIComponent(this._chua));return a},getPrivacyParameters:function(){return("string"==typeof t.uspString?"&us_privacy="+
t.uspString:"")+("string"==typeof f.gppString?"&gpp="+f.gppString:"")+(Array.isArray(f.gppSid)&&0<f.gppSid.length?"&gpp_sid="+f.gppSid.join(","):"")},getUrlArgs:function(){var a,b,c,d=[];a=location.href.indexOf("?");if(-1!=a)for(b=location.href.substring(a+1,location.href.length).split("&"),a=0;a<b.length;a++)c=b[a].split("="),d[c[0]]=c[1];return d}},t={uspString:null,init:function(){var a=this,b=function(){for(var a=window,b;!b;){try{a.frames.__uspapiLocator&&(b=a)}catch(c){}if(a===window.top)break;
a=a.parent}var f={};e.__uspapi=function(a,c,d){if(b){var e="usp-"+Math.random();a={__uspapiCall:{command:a,callId:e,version:c}};f[e]=d;b.postMessage(a,"*")}else d({msg:"__uspapi not found"},!1)};d.on(window,"message",function(a){var b=a.data;if("string"===typeof a.data)try{b=JSON.parse(a.data)}catch(c){}b.__uspapiReturn&&(a=b.__uspapiReturn,f[a.callId](a.returnValue,a.success),delete f[a.callId])},!1)},c=function(){e.__uspapi("getUSPData",1,function(b,c){c&&(a.uspString=b.uspString)})};e.__uspapi||
b();try{c()}catch(f){b(),c()}Tynt.getUspString=function(){return a.uspString};Tynt.getConsentString=function(){return null}}},f={gppSid:[],gppString:null,gppPromise:null,cmpWindow:null,cmpFound:!1,timeoutMs:1E4,findCmpWindow:function(){for(var a=window,b=null;!b;){try{a.frames.__gppLocator&&(b=a)}catch(c){}if(a===window.top)break;a=a.parent}return f.cmpWindow=b},createCmpProxy:function(){var a={};e.__gpp=function(b,c,d,e){if(f.cmpWindow){var g="33x-gpp-"+Math.random();b={__gppCall:{command:b,parameter:d,
version:e,callId:g}};"function"==typeof c&&(a[g]=c);f.cmpWindow.postMessage(b,"*")}else"function"==typeof c&&c("__gppLocator not found",!1)};d.on(window,"message",function(b){var c=b.data;if("string"===typeof b.data)try{c=JSON.parse(b.data)}catch(e){c=null,d.log("JSON.parse exception:",b.data)}c&&c.__gppReturn&&(b=c.__gppReturn,a[b.callId](b.returnValue,b.success),delete a[b.callId])},!1)},isAppSec:function(a){return a&&Array.isArray(a.applicableSection)&&0<a.applicableSection.length&&0!==a.applicableSection[0]},
isAppSecs:function(a){return a&&Array.isArray(a.applicableSections)&&0<a.applicableSections.length&&0!==a.applicableSections[0]},getApplicableSections:function(a){return f.isAppSecs(a)?a.applicableSections:f.isAppSec(a)?a.applicableSection:[]},startListening:function(){d.log("startListening");var a=e.__gpp("addEventListener",f.handleEvent);a&&d.log("startListening, event returned:",a);a&&a.pingData&&"1.1"!=a.pingData.gppVersion&&f.handleEvent(a)},handleEvent:function(a){if(a&&a.pingData){var b=a.pingData;
d.log("handleEvent",b.gppVersion,a);"loaded"==b.cmpStatus&&("1.1"==b.gppVersion?b.gppString&&b.applicableSections&&f.receiveData(b):f.receiveData(e.__gpp("getGPPData")))}else d.log("handleEvent:",a)},nullData:function(){return{gpp:null,gppSid:[],usp:"function"===typeof Tynt.getUspString?Tynt.getUspString():null,coppa:null,gdpr:null}},init:function(){Tynt.getPrivacySignals=function(){null==f.gppPromise&&(f.gppPromise=new Promise(function(a,c){var e=null;f.cmpFound?e=setTimeout(function(){d.log("_gpp timed-out after "+
f.timeoutMs/1E3+" seconds.");a(f.nullData())},f.timeoutMs):a(f.nullData());f.receiveData=function(c){c&&(f.gppString=c?c.gppString:null,f.gppSid=f.getApplicableSections(c),null!=f.gppString&&(clearTimeout(e),a({gpp:"string"===typeof f.gppString?f.gppString:null,gppSid:f.gppSid,usp:"function"===typeof Tynt.getUspString?Tynt.getUspString():null,coppa:null,gdpr:null})))}}));return f.gppPromise};f.cmpFound="function"===typeof e.__gpp;if(!f.cmpFound){var a=e.location.search;"object"===typeof _gppMock10&&
0<a.indexOf("__tcgppver=1.0")?_gppMock10.init():"object"===typeof _gppMock11&&0<a.indexOf("__tcgppver=1.1")&&_gppMock11.init();f.cmpFound="function"===typeof e.__gpp}Tynt.getPrivacySignals().then(function(a){d.log("getPrivacySignals resolve:",a)},function(a){d.log("getPrivacySignals reject:",a)});"function"===typeof e.__gpp?f.startListening():g.inIframe()&&g.isolated?null==f.findCmpWindow()?d.log("CMP API not found in frame ancestors."):(f.cmpFound=!0,f.createCmpProxy(),f.startListening()):d.log("CMP API not found in _window.")}},
z=1,q=2,w=0,r=3,y=4,x=5;g.type=0;g.inIframe=function(){return this.type>w};g.inSOIframe=function(){return this.type>=x&&6>=this.type};g.inXOIframe=function(){return this.type>=r&&this.type<=y};g.init=function(){this.type=d.iframeType();this.inSOIframe()&&(e=d.getTopWin(),k=e.document);e._33Across||(e._33Across={});e._33Across.state||(e._33Across.state={icDone:0,deDone:0,dxDone:0,ivDone:!1});this.protocol="https://";d.init();this.isolated=d.isolated();t.init();f.init();d.clog("xoi="+this.inXOIframe()+
", soi="+this.inSOIframe()+", iso="+this.isolated);e._33Across.pvTs||(e._33Across.pvTs=Date.now())};Tynt.settings||(Tynt.settings={_error:0,_pending:!1,_pubId:null,_scUrl:"https://"+(Tynt.e||"")+"sc.tynt.com/script/sc/",_settings:{},_copy:null,isReady:function(){return 0===this._error&&null!=this._copy},get:function(){return this._settings},pubId:function(){null==this._pubId&&(this._pubId=d.getPubId());return this._pubId},download:function(){var a,b;m.adapt(Tynt.cmd);this._pending||this.isReady()||
(a=this,Tynt.getConfig=function(){return a.isReady()?a._copy:null},Tynt.sc=function(c){clearTimeout(b);a._error=c.fl||0;0===a._error?(a._init(c),d.log("Settings downloaded",a._copy),Tynt.cmdFlush()):d.log("ERROR: Settings download failed: ",a._error);a._pending=!1},this.pubId()&&(d.log("Downloading settings"),this._pending=!0,d.injectScript(this._scUrl+this.pubId()+".js"),b=setTimeout(function(){Tynt.sc({fl:1})},1E4)))},_init:function(a){a=a||{};!1!==a.d?(Tynt.o&&d.extend(a,Tynt.o),this._ovr(a)):
a=Tynt.i||e.tyntVariables||{};this._def();d.extend(this._settings,a);this._val();this._copy="undefined"!==typeof JSON&&"function"==typeof JSON.parse&&"function"==typeof JSON.stringify?JSON.parse(d.jsonDecode(this._settings)):this._settings},_ovr:function(a){if(d.isArray(Tynt.overrides))for(var b=0;b<Tynt.overrides.length;b++)"object"==typeof Tynt.overrides[b]&&d.extend(a,Tynt.overrides[b])},_def:function(){this._settings.d=!0;this._settings.a=!0;this._settings.ad=!0;this._settings.aw=8;this._settings.cc=
0;this._settings.b=!1;this._settings.ap="Read more:";this._settings.as="";this._settings.st=!1;this._settings.su=!0;this._settings.w=!1;this._settings.f=!1;this._settings.ss=""},_val:function(){this._settings.a||(this._settings.a=!1);6<this._settings.cc&&(this._settings.cc=0);8>this._settings.aw&&(this._settings.aw=8);this._settings.su||(this._settings.su=!1);this._settings.w&&!this._twUser(this._settings.w)&&(this._settings.w=!1);this._settings.f&&!this._fbUser(this._settings.f)&&(this._settings.f=
!1);0<this._error&&(this._settings.a=!1,this._settings.b=!1)},_twUser:function(a){return/^\w{1,15}$/.test(a||"")},_fbUser:function(a){return/^[\w.]{2,}$/.test(a||"")}});"undefined"==typeof Tynt.cmd&&(Tynt.cmd=[]);m.prototype.push=function(){m.adapt(arguments);m.exec(arguments)};m.exec=function(a){d.log("Executing commands",a);try{for(var b=0;b<a.length;++b)if("function"==typeof a[b])a[b]();else"object"==typeof a[b]&&"function"==typeof a[b].fn&&a[b].fn()}catch(c){d.log("ERROR: Tynt.cmd failed: ",c)}};
m.adapt=function(a){var b,c;if(d.isArray(a))for(b=0;b<a.length;++b)"object"==typeof a[b]&&(c=a[b].publisherId,"string"!=typeof c||22!=c.length||d.inArray(Tynt,c)||(Tynt.push(c),d.log("Adapted",c)))};"undefined"==typeof Tynt.cmdFlush&&(Tynt.cmdFlush=function(){var a=Tynt.cmd;if(!a||d.isArray(a))Tynt.cmd=new m,a&&0<a.length&&m.exec(a)});Tynt.ads||(Tynt.ads={_slots:[],display:function(a,b,c,e){"string"==typeof a?this.addSlot(new B(a,b,c,e)):d.log("ERROR: Invalid product")},getSlot:function(a){return(a=
this.getSlots(a))&&0<a.length?a[0]:null},getSlots:function(a){for(var b=[],c=0;c<this._slots.length;++c)this._slots[c].sicWindow===a&&b.push(this._slots[c]);return 0<b.length?b:null},addSlot:function(a){var b=null,c=Tynt.settings.get(),e="Injecting sic/"+a.product;if(c&&c.sic)if(a.sicWindow=window,"inview"==a.product&&this.ivReady(c,a))this.ivDone(!0),this._slots.push(a),d.log(e,a),d.injectSicScript(),d.callDebX(null,!0);else{if("inpage"==a.product&&this.ipReady(c)||"infeed"==a.product&&this.ifReady(c))a.targetId&&
(b=document.getElementById(a.targetId)),g.inIframe()?(this._setIframeId(a),this._slots.push(a),d.log(e,a),d.injectSicScript(b)):(this._slots.push(a),d.log(e+" into iframe",a),d.injectSicIframe(a,b,"infeed"==a.product?{position:"absolute"}:null))}else d.log("ERROR: settings or .sic undefined",c)},_setIframeId:function(a){var b=d.iframeTop();b&&(a.iframeId=d.eleId(b))},ivDone:function(a){!0===a&&(e._33Across.state.ivDone=!0);return e._33Across.state.ivDone},ivReady:function(a,b){var c=!1,e;!this.ivDone()&&
d.isArray(a.p)&&d.inArray(a.p,"sic_v1")&&a.sic.products&&a.sic.products.inview&&(e=a.sic.products.inview.install_method||a.sic.install_method,"TI"==b.distro?"On Page"==e&&(c=!0):"On Page"!=e&&(c=!0));return c},ipReady:function(a){return a.sic.products&&a.sic.products.siab},ifReady:function(a){return a.sic.products&&a.sic.products.infeed},_events:[],on:function(a,b){this._events.push(new v(a,b,!1))},once:function(a,b){this._events.push(new v(a,b,!0))},off:function(a,b){for(var c=0;c<this._events.length;++c)this._events[c]&&
this._events[c].type===a&&this._events[c].fn===b&&(this._events[c]=null)},emit:function(a){var b,c;for(b=0;b<this._events.length;++b)this._events[b]&&this._events[b].type===a&&(c=this._events[b],c.once&&(this._events[b]=null),c.fn.apply(c,Array.prototype.slice.call(arguments,1)))},_targeting:{},setTargeting:function(a,b){this._targeting[a]=b},getTargeting:function(a){return this._targeting[a]},getTargetingKeys:function(){return Object.keys(this._targeting)}});g.init();Tynt.cmd.push(function(){Tynt.ads.display("",
"","inview",g.distro)});d.callIc();Tynt.settings.download();var A=[15E3,15E3,15E3,15E3];"function"===typeof Tynt.TIL?d.callDeb(3,A,!0):d.callDeb(5,A,!0)}else setTimeout(function(){Tynt.TIL()},50)};Tynt.TIL()}();
