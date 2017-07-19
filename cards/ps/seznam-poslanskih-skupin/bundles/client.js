!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=16)}([function(t,e){t.exports=function(t,e,n,r,a){var s,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,i=t.default);var c="function"==typeof i?i.options:i;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(t,e){return l.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:s,exports:i,options:c}}},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(a(t[n][0],e))return n;return-1}var a=n(51);t.exports=r},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var a=n(45),s=n(46),i=n(47),o=n(48),c=n(49);r.prototype.clear=a,r.prototype.delete=s,r.prototype.get=i,r.prototype.has=o,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t,e,n,i,o){return t===e||(null==t||null==e||!s(t)&&!s(e)?t!==t&&e!==e:a(t,e,n,i,r,o))}var a=n(32),s=n(61);t.exports=r},function(t,e,n){function r(t){return"function"==typeof t?t:null==t?i:"object"==typeof t?o(t)?s(t[0],t[1]):a(t):c(t)}var a=n(34),s=n(35),i=n(56),o=n(2),c=n(63);t.exports=r},function(t,e,n){function r(t){return t===t&&!a(t)}var a=n(9);t.exports=r},function(t,e){function n(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){var r=n(8),a=r(Object.keys,Object);t.exports=a},function(t,e){t.exports={_id:"ps_seznam_poslanskih_skupin",name:"Seznam poslanskih skupin",dataUrl:"https://analize.parlameter.si/v1/pg/getListOfPGs",type:"seznam_poslanskih_skupin",lastUpdate:"2017-07-19T13:45:41.751Z",method:"seznam-poslanskih-skupin",group:"ps"}},function(t,e,n){function r(t){n(25)}var a=n(0)(n(23),n(76),r,"data-v-7d474416",null);t.exports=a.exports},function(t,e){t.exports=[{id:"seat_count",label:"Število sedežev",titleSuffix:"po številu sedežev",explanation:'Število sedežev posamezne poslanske skupine dobimo tako, da preštejemo vse njihove trenutno aktivne člane. Podatke pridobivamo s <a href="http://www.dz-rs.si/wps/portal/Home/ODrzavnemZboru/KdoJeKdo/PoslanskeSkupine" class="funblue-light-hover">spletnega mesta DZ</a>.'},{id:"presence_votes",label:"Prisotnost na glasovanjih sej DZ",titleSuffix:"s prisotnostjo na glasovanjih sej DZ",explanation:"Preštejemo vsa glasovanja, nato pa še, koliko poslancev poslanske skupine (PS) je bilo prisotnih na posameznem glasovanju. Seštevek vseh oddanih glasovnic poslancev PS delimo s številom poslancev v PS, ta rezultat pa delimo s številom glasovanj in normaliziramo (min 1 - max 100).",unit:"percent"},{id:"intra_disunion",label:"Neenotnost glasovanj",titleSuffix:"z neenotnostjo glasovanj",explanation:"!!TEKST MANJKA!!",unit:"percent"},{id:"number_of_amendments",label:"Število vloženih amandmajev",titleSuffix:"s številom vloženih amandmajev",explanation:"!!TEKST MANJKA!!"},{id:"number_of_questions",titleSuffix:" po št. poslanskih vprašanj in pobud",explanation:'Preštejemo vsa poslanska vprašanja in pobude, ki so jih postavili poslanci izbrane poslanske skupine v tem sklicu DZ.Podatke pridobivamo s spletnega mesta DZ RS: <a href="https://www.dz-rs.si/wps/portal/Home/deloDZ/poslanskaVprasanjaInPobude/">https://www.dz-rs.si/wps/portal/Home/deloDZ/poslanskaVprasanjaInPobude/</a>.',label:"Št. poslanskih vprašanj in pobud",round:!0,roundingPrecision:0},{id:"vocabulary_size",label:"Raznolikost besedišča",titleSuffix:"z raznolikostjo besedišča",explanation:'Iz vseh poslančevih govorov preštejemo unikatne besede ter število vseh izgovorjenih besed. Potem preštejemo, kolikokrat se vsaka unikatna beseda pojavi. Razdelimo jih v kategorije, tako da združimo vse besede, ki se ponovijo enkrat, dvakrat, trikrat itn. Na koncu izračunamo koeficient, kjer nad ulomkovo črto postavimo število vseh unikatnih izgovorjenih besed, pod ulomkovo črto pa število besed, ki se ponovijo z neko frekvenco (enkrat, dvakrat, trikrat ...) in množimo s frekvenco na kvadrat (ena na kvadrat, dva na kvadrat, tri na kvadrat ...). Za poved "Danes je nov dan in danes je dan za Parlameter" je rezultat: 7 / ((3*2^2) + (4*1^2)) = 0,4375<br><br>Za vsako poslansko skupino seštejemo rezultate poslancev in delimo s številom poslancev v njej. Posamezne seštevke delimo s skupnim seštevkom in normaliziramo (min 1 - max 100).'}]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(68),s=r(a),i=n(65),o=r(i),c=n(69),l=r(c),u=n(67),d=r(u),f=n(66),p=r(f),v=n(15),h=r(v);e.default={components:{CardInfo:s.default,CardEmbed:o.default,CardShare:l.default,CardHeader:d.default,CardFooter:p.default},mixins:[h.default]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(12),s=r(a),i=n(11),o=r(i);new Vue(Object.assign({},s.default,{cardData:window.__INITIAL_STATE__})).$mount("#"+o.default._id)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardFooter",props:{link:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardHeader",props:{config:Object}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",props:{url:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={components:{},mixins:[a.default],name:"SeznamPoslanskihSkupinInnerCard",props:{processedPartyData:Array,getPartyUrl:Function,headerConfig:Object,generatedCardUrl:String,shortenedCardUrl:String,slugs:Object,currentAnalysisData:Object}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(52),s=r(a),i=n(13),o=r(i),c=n(70),l=r(c);e.default={name:"SeznamPoslanskihSkupin",components:{InnerCard:l.default},data:function(){return{data:this.$options.cardData.data.data,slugs:this.$options.cardData.urlsData,shortenedCardUrl:"",url:"https://glej.parlameter.si/ps/seznam-poslanskih-skupin/?state=%7B%7D",currentAnalysis:this.$options.cardData.state.analysis||"seat_count",analyses:o.default}},computed:{headerConfig:function(){return{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.$options.cardData.cardData.name+" "+this.currentAnalysisData.titleSuffix}},currentAnalysisData:function(){return(0,s.default)(this.analyses,{id:this.currentAnalysis})},processedPartyData:function(){var t=this,e=this.data.reduce(function(e,n){return Math.max(e,n.results[t.currentAnalysis])},0);return this.data.map(function(n){var r=n.results[t.currentAnalysis];return n.displayValue=(t.round(r,t.currentAnalysisData.roundingPrecision||1)+("percent"===t.currentAnalysisData.unit?"%":"")).replace(".",","),n.chartWidth=r?r/e*80+"%":"1px",n})},generatedCardUrl:function(){var t={};return"seat_count"!==this.currentAnalysis&&(t.analysis=this.currentAnalysis),"https://glej.parlameter.si/ps/seznam-poslanskih-skupin/?customUrl="+encodeURIComponent("https://analize.parlameter.si/v1/pg/getListOfPGs")+(Object.keys(t).length>0?"&state="+encodeURIComponent(JSON.stringify(t)):"")}},methods:{selectAnalysis:function(t){this.currentAnalysis=t,this.measurePiwik(t)},round:function(t,e){var n=Math.pow(10,e||0);return Math.round(t*n)/n},getPartyUrl:function(t){return this.slugs?this.slugs.base+this.slugs.partyLink.base+this.slugs.party[t.id].acronym+this.slugs.partyLink.pregled:"/poslanska-skupina/"+t.acronym+"/pregled"},shortenUrl:function(t){var e=this;return new Promise(function(n){$.get("https://parla.me/shortner/generate?url="+window.encodeURIComponent(t+"&frame=true"),function(t){e.$el.querySelector(".card-content-share button").textContent="KOPIRAJ",n(t)})})},measurePiwik:function(t,e,n){"function"==typeof measure&&(""!==e?measure("s","session-sort",e+" "+n,""):""!==t&&measure("s","session-filter",t,""))}},mounted:function(){var t=this;this.shortenUrl(this.generatedCardUrl).then(function(e){t.shortenedCardUrl=e})},watch:{generatedCardUrl:function(t){var e=this;this.shortenUrl(t).then(function(t){e.shortenedCardUrl=t})}}}},function(t,e){},function(t,e){},function(t,e,n){function r(){if(!arguments.length)return[];var t=arguments[0];return a(t)?t:[t]}var a=n(2);t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}t.exports=n},function(t,e){function n(t,e,n,r){for(var a=t.length,s=n+(r?1:-1);r?s--:++s<a;)if(e(t[s],s,t))return s;return-1}t.exports=n},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e){function n(t){return a.call(t)}var r=Object.prototype,a=r.toString;t.exports=n},function(t,e){function n(t,e,n){for(var r=n-1,a=t.length;++r<a;)if(t[r]===e)return r;return-1}t.exports=n},function(t,e,n){function r(t,e,n,r,m,b){var g=l(t),x=l(e),y=g?v:c(t),C=x?v:c(e);y=y==p?h:y,C=C==p?h:C;var k=y==h,j=C==h,P=y==C;if(P&&u(t)){if(!u(e))return!1;g=!0,k=!1}if(P&&!k)return b||(b=new a),g||d(t)?s(t,e,n,r,m,b):i(t,e,y,n,r,m,b);if(!(n&f)){var w=k&&_.call(t,"__wrapped__"),z=j&&_.call(e,"__wrapped__");if(w||z){var O=w?t.value():t,A=z?e.value():e;return b||(b=new a),m(O,A,n,r,b)}}return!!P&&(b||(b=new a),o(t,e,n,r,m,b))}var a=n(3),s=n(38),i=n(39),o=n(40),c=n(43),l=n(2),u=n(58),d=n(62),f=1,p="[object Arguments]",v="[object Array]",h="[object Object]",m=Object.prototype,_=m.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n,r){var c=n.length,l=c,u=!r;if(null==t)return!l;for(t=Object(t);c--;){var d=n[c];if(u&&d[2]?d[1]!==t[d[0]]:!(d[0]in t))return!1}for(;++c<l;){d=n[c];var f=d[0],p=t[f],v=d[1];if(u&&d[2]){if(void 0===p&&!(f in t))return!1}else{var h=new a;if(r)var m=r(p,v,f,t,e,h);if(!(void 0===m?s(v,p,i|o,r,h):m))return!1}}return!0}var a=n(3),s=n(4),i=1,o=2;t.exports=r},function(t,e,n){function r(t){var e=s(t);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(n){return n===t||a(n,t,e)}}var a=n(33),s=n(42),i=n(7);t.exports=r},function(t,e,n){function r(t,e){return o(t)&&c(e)?l(u(t),e):function(n){var r=s(n,t);return void 0===r&&r===e?i(n,t):a(e,r,d|f)}}var a=n(4),s=n(54),i=n(55),o=n(44),c=n(6),l=n(7),u=n(50),d=1,f=2;t.exports=r},function(t,e,n){function r(t,e){return!!(null==t?0:t.length)&&a(t,e,0)>-1}var a=n(31);t.exports=r},function(t,e,n){function r(t){return function(e,n,r){var o=Object(e);if(!s(e)){var c=a(n,3);e=i(e),n=function(t){return c(o[t],t,o)}}var l=t(e,n,r);return l>-1?o[c?e[l]:l]:void 0}}var a=n(5),s=n(57),i=n(10);t.exports=r},function(t,e,n){function r(t,e,n,r,l,u){var d=n&o,f=t.length,p=e.length;if(f!=p&&!(d&&p>f))return!1;var v=u.get(t);if(v&&u.get(e))return v==e;var h=-1,m=!0,_=n&c?new a:void 0;for(u.set(t,e),u.set(e,t);++h<f;){var b=t[h],g=e[h];if(r)var x=d?r(g,b,h,e,t,u):r(b,g,h,t,e,u);if(void 0!==x){if(x)continue;m=!1;break}if(_){if(!s(e,function(t,e){if(!i(_,e)&&(b===t||l(b,t,n,r,u)))return _.push(e)})){m=!1;break}}else if(b!==g&&!l(b,g,n,r,u)){m=!1;break}}return u.delete(t),u.delete(e),m}var a=n(26),s=n(27),i=n(36),o=1,c=2;t.exports=r},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){function r(t,e,n,r,i,c){var l=n&s,u=a(t),d=u.length;if(d!=a(e).length&&!l)return!1;for(var f=d;f--;){var p=u[f];if(!(l?p in e:o.call(e,p)))return!1}var v=c.get(t);if(v&&c.get(e))return v==e;var h=!0;c.set(t,e),c.set(e,t);for(var m=l;++f<d;){p=u[f];var _=t[p],b=e[p];if(r)var g=l?r(b,_,p,e,t,c):r(_,b,p,t,e,c);if(!(void 0===g?_===b||i(_,b,n,r,c):g)){h=!1;break}m||(m="constructor"==p)}if(h&&!m){var x=t.constructor,y=e.constructor;x!=y&&"constructor"in t&&"constructor"in e&&!("function"==typeof x&&x instanceof x&&"function"==typeof y&&y instanceof y)&&(h=!1)}return c.delete(t),c.delete(e),h}var a=n(41),s=1,i=Object.prototype,o=i.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(8),a=r(Object.keys,Object);t.exports=a},function(t,e,n){function r(t){for(var e=s(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,a(i)]}return e}var a=n(6),s=n(10);t.exports=r},function(t,e){function n(t){return a.call(t)}var r=Object.prototype,a=r.toString;t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=a(e,t);return!(n<0)&&(n==e.length-1?e.pop():i.call(e,n,1),--this.size,!0)}var a=n(1),s=Array.prototype,i=s.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=a(e,t);return n<0?void 0:e[n][1]}var a=n(1);t.exports=r},function(t,e,n){function r(t){return a(this.__data__,t)>-1}var a=n(1);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=a(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var a=n(1);t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){var r=n(37),a=n(53),s=r(a);t.exports=s},function(t,e,n){function r(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var c=null==n?0:i(n);return c<0&&(c=o(r+c,0)),a(t,s(e,3),c)}var a=n(28),s=n(5),i=n(64),o=Math.max;t.exports=r},function(t,e,n){function r(t,e,n){var r=null==t?void 0:a(t,e);return void 0===r?n:r}var a=n(29);t.exports=r},function(t,e){function n(t,e){return null!=t&&e in Object(t)}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t){return null!=t&&s(t.length)&&!a(t)}var a=n(59),s=n(60);t.exports=r},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function r(t){if(!s(t))return!1;var e=a(t);return e==o||e==c||e==i||e==l}var a=n(30),s=n(9),i="[object AsyncFunction]",o="[object Function]",c="[object GeneratorFunction]",l="[object Proxy]";t.exports=r},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(t){return function(e){return null==e?void 0:e[t]}}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r=n(0)(n(17),n(73),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(18),n(74),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(19),n(71),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(20),n(77),null,null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(21),n(72),null,null,null);t.exports=r.exports},function(t,e,n){function r(t){n(24)}var a=n(0)(n(22),n(75),r,"data-v-5bb70850",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[t.config.alternative?[n("div",{staticClass:"alt-header-container"},[n("div",{staticClass:"alt-header"},[t.config.circleText?n("div",{staticClass:"media-object img-circle session-logo",class:t.config.circleClass},[n("b",[t._v(t._s(t.config.circleText))])]):t.config.circleImage?n("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+t.config.circleImage+".png"}}):t.config.circleIcon?n("div",{staticClass:"icon-circle"},[n("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+t.config.circleIcon+".svg"}})]):t._e(),t._v(" "),n("div",{staticClass:"header-info-container"},[n("h1",{domProps:{innerHTML:t._s(t.config.heading)}}),t._v(" "),n("h2",{staticClass:"partyinfo"},[t._v(t._s(t.config.subheading))]),t._v(" "),n("h2",{staticClass:"cardname"},[t._v(t._s(t.config.title))])])]),t._v(" "),n("div",{staticClass:"alt-header-border"})])]:[n("div",{staticClass:"card-header-border"}),t._v(" "),n("h1",[t._v(t._s(t.config.title))])]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-share hidden"},[n("div",{staticClass:"card-back-content"},[n("div",{staticClass:"share-content"},[n("label",{attrs:{for:"share-url"}},[t._v("Neposredna povezava do kartice")]),t._v(" "),n("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:t.url}}),t._v(" "),n("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[t._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-embed hidden"},[n("div",{staticClass:"card-back-content"},[n("div",{staticClass:"embed-content"},[n("div",{staticClass:"embed-divider"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"embed-divider"}),t._v(" "),n("div",{staticClass:"embed-script"},[n("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":t.url},domProps:{innerHTML:t._s(t.embedCode)}}),t._v(" "),n("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[t._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"embed-switch-container"},[n("div",{staticClass:"embed-label"},[t._v("Podatki naj se vedno osvežujejo")]),t._v(" "),n("div",{staticClass:"embed-switch-big-box"},[n("div",{staticClass:"embed-switch-box"},[n("div",{staticClass:"embed-switch"},[n("div",{staticClass:"embed-switches"},[n("div",{staticClass:"leftswitch"},[t._v("DA")]),t._v(" "),n("div",{staticClass:"rightswitch"},[t._v("NE")])])])]),t._v(" "),n("div",{staticClass:"embed-switch-ball"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-footer"},[n("div",{staticClass:"card-logo hidden"},[n("a",{attrs:{href:t.link}},[n("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),t._v(" "),n("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),t._v(" "),n("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),t._v(" "),n("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[t._v("i")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-container card-halfling card-seznam-poslanskih-skupin"},[n("card-header",{attrs:{config:t.headerConfig}}),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"card-content-front"},[n("ul",{staticClass:"party-list"},[0===t.processedPartyData.length?n("li",{staticClass:"loader"},[n("div",{staticClass:"nalagalnik"})]):t._e(),t._v(" "),t._l(t.processedPartyData,function(e,r){return n("li",{key:r,staticClass:"labeled-chart"},[n("div",{staticClass:"column chart-label"},[n("a",{staticClass:"funblue-light-hover",attrs:{href:t.getPartyUrl(e.party)}},[t._v(t._s(e.party.acronym))])]),t._v(" "),n("div",{staticClass:"column chart"},[n("div",{staticClass:"progress hugebar"},[n("div",{staticClass:"progress-bar funblue",style:{width:e.chartWidth},attrs:{role:"progressbar"}}),t._v(" "),n("div",{staticClass:"progress_number"},[t._v(t._s(e.displayValue))])])])])})],2)]),t._v(" "),n("card-info",[n("p",{staticClass:"info-text lead"},[t._v("Seznam poslanskih skupin glede na rezultate analize "+t._s(t.currentAnalysisData.titleSuffix))]),t._v(" "),n("p",{staticClass:"info-text heading"},[t._v("METODOLOGIJA")]),t._v(" "),n("p",{staticClass:"info-text",domProps:{innerHTML:t._s(t.currentAnalysisData.explanation)}})]),t._v(" "),n("card-embed",{attrs:{url:t.generatedCardUrl}}),t._v(" "),n("card-share",{attrs:{url:t.shortenedCardUrl}})],1),t._v(" "),n("card-footer",{attrs:{link:t.slugs.base}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$options.cardData.state.generator?n("div",{attrs:{id:t.$options.cardData.cardData._id}},[n("div",{staticClass:"party-list-generator"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",{staticClass:"analyses"},t._l(t.analyses,function(e,r){return n("li",{key:r,class:{selected:e.id===t.currentAnalysis},on:{click:function(n){t.selectAnalysis(e.id)}}},[n("span",[t._v(t._s(e.label))])])})),t._v(" "),n("div",{staticClass:"mobile-analyses"},[n("label",{attrs:{for:"analysis"}},[t._v("Izberi analizo")]),t._v(" "),n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentAnalysis,expression:"currentAnalysis"}],attrs:{name:"analysis",id:"analysis"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentAnalysis=e.target.multiple?n:n[0]},function(e){t.selectAnalysis(t.currentAnalysis)}]}},t._l(t.analyses,function(e,r){return n("option",{key:r,domProps:{value:e.id}},[t._v("\n                "+t._s(e.label)+"\n              ")])}))])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("inner-card",t._b({},"inner-card",{processedPartyData:t.processedPartyData,getPartyUrl:t.getPartyUrl,headerConfig:t.headerConfig,generatedCardUrl:t.generatedCardUrl,slugs:t.slugs,shortenedCardUrl:t.shortenedCardUrl,currentAnalysisData:t.currentAnalysisData}))],1)])])]):n("inner-card",t._b({},"inner-card",{processedPartyData:t.processedPartyData,getPartyUrl:t.getPartyUrl,headerConfig:t.headerConfig,generatedCardUrl:t.generatedCardUrl,slugs:t.slugs,shortenedCardUrl:t.shortenedCardUrl,currentAnalysisData:t.currentAnalysisData}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-info hidden"},[n("div",{staticClass:"card-back-content"},[t._t("default")],2)])},staticRenderFns:[]}}]);