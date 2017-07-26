module.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(e,t){e.exports=function(e,t,n,r,a){var s,i=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(s=e,i=e.default);var l="function"==typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r);var c;if(a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(e,t){return c.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:s,exports:i,options:l}}},function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(a(e[n][0],t))return n;return-1}var a=n(58);e.exports=r},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var a=n(52),s=n(53),i=n(54),o=n(55),l=n(56);r.prototype.clear=a,r.prototype.delete=s,r.prototype.get=i,r.prototype.has=o,r.prototype.set=l,e.exports=r},function(e,t,n){function r(e,t,n,i,o){return e===t||(null==e||null==t||!s(e)&&!s(t)?e!==e&&t!==t:a(e,t,n,i,r,o))}var a=n(39),s=n(68);e.exports=r},function(e,t,n){function r(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?o(e)?s(e[0],e[1]):a(e):l(e)}var a=n(41),s=n(42),i=n(63),o=n(2),l=n(70);e.exports=r},function(e,t,n){function r(e){return e===e&&!a(e)}var a=n(9);e.exports=r},function(e,t){function n(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){var r=n(8),a=r(Object.keys,Object);e.exports=a},function(e,t,n){function r(e){var t;t=n(32),t.__inject__&&t.__inject__(e)}var a=n(0)(n(27),n(86),r,"data-v-7d474416","2b86e2c4");e.exports=a.exports},function(e,t,n){var r=n(0)(n(28),n(83),null,null,"5a650a93");e.exports=r.exports},function(e,t,n){var r=n(0)(n(29),n(78),null,null,"9fb12b6a");e.exports=r.exports},function(e,t,n){var r=n(0)(n(30),n(84),null,null,"58718038");e.exports=r.exports},function(e,t){e.exports=require("request")},function(e,t){e.exports=require("vue")},function(e,t){e.exports=[{id:"seat_count",label:"Število sedežev",titleSuffix:"po številu sedežev",explanation:'Število sedežev posamezne poslanske skupine dobimo tako, da preštejemo vse njihove trenutno aktivne člane. Podatke pridobivamo s <a href="http://www.dz-rs.si/wps/portal/Home/ODrzavnemZboru/KdoJeKdo/PoslanskeSkupine" class="funblue-light-hover">spletnega mesta DZ</a>.'},{id:"presence_votes",label:"Prisotnost na glasovanjih sej DZ",titleSuffix:"s prisotnostjo na glasovanjih sej DZ",explanation:"Preštejemo vsa glasovanja, nato pa še, koliko poslancev poslanske skupine (PS) je bilo prisotnih na posameznem glasovanju. Seštevek vseh oddanih glasovnic poslancev PS delimo s številom poslancev v PS, ta rezultat pa delimo s številom glasovanj in normaliziramo (min 1 - max 100).",unit:"percent"},{id:"intra_disunion",label:"Neenotnost glasovanj",titleSuffix:"z neenotnostjo glasovanj",explanation:"Za vsako glasovanje za vsako poslansko skupino preštejemo, koliko poslancev je oddalo katero glasovnico (ZA, PROTI, NI, VZDRŽAN). Izračunamo odstotek tistih, ki so glasovali za najbolj popularno opcijo. Ta odstotek odštejemo do 100 in dobimo stopnjo neenotnosti oz. odstotek poslank in poslancev, ki se z večinskim glasom niso strinjali.",unit:"percent"},{id:"number_of_amendments",label:"Število vloženih amandmajev",titleSuffix:"s številom vloženih amandmajev",explanation:'<p class="info-text">Glasovanja o amandmajih objavljena na spletnem mestu <a href="http://www.dz-rs.si/">DZ RS</a> imajo ime zapisano po vnaprej določeni strukturi:</p><div class="info-text"><pre>&#123;ime zakona&#125; - Amandma: &#123;K X. členu&#125; &#123;datum&#125; [&#123;kratica poslanske skupine&#125; - &#123;ime poslanske skupine&#125;]</pre></div><p class="info-text">Število amandmajev, ki jih vložila posamezna poslanska skupina dobimo tako, da preštejemo vsa glasovanja, v imenu katerih se pojavi beseda amandma. Med preštetimi glasovanji poiščemo tista, katerih ime vsebije kratico poslanske skupine. Ta amandma prištejemo k tej poslanski skupini.</p>'},{id:"number_of_questions",titleSuffix:" po št. poslanskih vprašanj in pobud",explanation:'Preštejemo vsa poslanska vprašanja in pobude, ki so jih postavili poslanci izbrane poslanske skupine v tem sklicu DZ.Podatke pridobivamo s spletnega mesta DZ RS: <a href="https://www.dz-rs.si/wps/portal/Home/deloDZ/poslanskaVprasanjaInPobude/">https://www.dz-rs.si/wps/portal/Home/deloDZ/poslanskaVprasanjaInPobude/</a>.',label:"Št. poslanskih vprašanj in pobud",round:!0,roundingPrecision:0},{id:"vocabulary_size",label:"Raznolikost besedišča",titleSuffix:"z raznolikostjo besedišča",explanation:'Iz vseh poslančevih govorov preštejemo unikatne besede ter število vseh izgovorjenih besed. Potem preštejemo, kolikokrat se vsaka unikatna beseda pojavi. Razdelimo jih v kategorije, tako da združimo vse besede, ki se ponovijo enkrat, dvakrat, trikrat itn. Na koncu izračunamo koeficient, kjer nad ulomkovo črto postavimo število vseh unikatnih izgovorjenih besed, pod ulomkovo črto pa število besed, ki se ponovijo z neko frekvenco (enkrat, dvakrat, trikrat ...) in množimo s frekvenco na kvadrat (ena na kvadrat, dva na kvadrat, tri na kvadrat ...). Za poved "Danes je nov dan in danes je dan za Parlameter" je rezultat: 7 / ((3*2^2) + (4*1^2)) = 0,4375<br><br>Za vsako poslansko skupino seštejemo rezultate poslancev in delimo s številom poslancev v njej. Posamezne seštevke delimo s skupnim seštevkom in normaliziramo (min 1 - max 100).'}]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(75),s=r(a),i=n(72),o=r(i),l=n(76),c=r(l),u=n(74),d=r(u),f=n(73),p=r(f),v=n(19),h=r(v);t.default={components:{CardInfo:s.default,CardEmbed:o.default,CardShare:c.default,CardHeader:d.default,CardFooter:p.default},mixins:[h.default]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),s=r(a),i=n(15),o=r(i),l=n(12),c=r(l),u=n(14),d=r(u),f=n(13),p=r(f),v=n(11),h=r(v);global.$={getJSON:function(e,t){(0,o.default)(e,function(e,n,r){if(e)throw e;t(JSON.parse(r))})}},s.default.component("SearchDropdown",c.default),s.default.component("Tabs",d.default),s.default.component("Tab",p.default),t.default=function(e){var t=new s.default(Object.assign({},h.default,{cardData:e}));return new Promise(function(e){return e(t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"CardFooter",props:{link:String}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"CardHeader",props:{config:Object}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"CardInfo"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"CardShare",props:{url:String}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={components:{},mixins:[a.default],name:"SeznamPoslanskihSkupinInnerCard",props:{processedPartyData:Array,getPartyUrl:Function,headerConfig:Object,generatedCardUrl:String,shortenedCardUrl:String,slugs:Object,currentAnalysisData:Object}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(59),s=r(a),i=n(17),o=r(i),l=n(77),c=r(l);t.default={name:"SeznamPoslanskihSkupin",components:{InnerCard:c.default},data:function(){return{data:this.$options.cardData.data.data,slugs:this.$options.cardData.urlsData,shortenedCardUrl:"",url:"https://glej.parlameter.si/ps/seznam-poslanskih-skupin/?state=%7B%7D",currentAnalysis:this.$options.cardData.state.analysis||"seat_count",analyses:o.default}},computed:{headerConfig:function(){return{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.$options.cardData.cardData.name+" "+this.currentAnalysisData.titleSuffix}},currentAnalysisData:function(){return(0,s.default)(this.analyses,{id:this.currentAnalysis})},processedPartyData:function(){var e=this,t=this.data.reduce(function(t,n){return Math.max(t,n.results[e.currentAnalysis])},0);return this.data.map(function(n){var r=n.results[e.currentAnalysis];return n.displayValue=(e.round(r,e.currentAnalysisData.roundingPrecision||1)+("percent"===e.currentAnalysisData.unit?"%":"")).replace(".",","),n.chartWidth=r?r/t*80+"%":"1px",n})},generatedCardUrl:function(){var e={};return"seat_count"!==this.currentAnalysis&&(e.analysis=this.currentAnalysis),"https://glej.parlameter.si/ps/seznam-poslanskih-skupin/?customUrl="+encodeURIComponent("https://analize.parlameter.si/v1/pg/getListOfPGs")+(Object.keys(e).length>0?"&state="+encodeURIComponent(JSON.stringify(e)):"")}},methods:{selectAnalysis:function(e){this.currentAnalysis=e,this.measurePiwik(e)},round:function(e,t){var n=Math.pow(10,t||0);return Math.round(e*n)/n},getPartyUrl:function(e){return this.slugs?this.slugs.base+this.slugs.partyLink.base+this.slugs.party[e.id].acronym+this.slugs.partyLink.pregled:"/poslanska-skupina/"+e.acronym+"/pregled"},shortenUrl:function(e){var t=this;return new Promise(function(n){$.get("https://parla.me/shortner/generate?url="+window.encodeURIComponent(e+"&frame=true"),function(e){t.$el.querySelector(".card-content-share button").textContent="KOPIRAJ",n(e)})})},measurePiwik:function(e,t,n){"function"==typeof measure&&(""!==t?measure("s","session-sort",t+" "+n,""):""!==e&&measure("s","session-filter",e,""))}},mounted:function(){var e=this;this.shortenUrl(this.generatedCardUrl).then(function(t){e.shortenedCardUrl=t})},watch:{generatedCardUrl:function(e){var t=this;this.shortenUrl(e).then(function(e){t.shortenedCardUrl=e})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"SearchDropdown",data:function(){return{filter:"",active:!1,focused:-1}},watch:{filter:function(){this.focus(this.focused)}},computed:{filteredItems:function(){var e=this,t=function(t){return t.filter(function(t){return t.selected||t.label.toLowerCase().indexOf(e.filter.toLowerCase())>-1}).map(function(e,t){return e.sortIndex=t,e}).sort(function(t,n){if(!e.single){if(e.alphabetise&&Boolean(t.selected)===Boolean(n.selected))return t.label.localeCompare(n.label,"sl");if(t.selected&&!n.selected)return-1;if(!t.selected&&n.selected)return 1}return t.sortIndex<n.sortIndex?-1:t.sortIndex>n.sortIndex?1:0}).map(function(e){return delete e.sortIndex,e})};return this.groups?this.groups.map(function(n){var r=t(e.items.filter(function(e){return n.items.indexOf(e.id)>-1}));return r.forEach(function(e,t){e.groupLabel=0===t?n.label:null}),r}).reduce(function(e,t){return e.concat(t)},[]):t(this.items)},selectedIds:function(){return this.filteredItems.filter(function(e){return e.selected}).map(function(e){return e.id})},adjustedPlaceholder:function(){if(!this.single)return this.placeholder;var e=this.filteredItems.filter(function(e){return e.selected})[0];return e?e.label:this.placeholder}},directives:{clickOutside:{bind:function(e,t){var n=function(n){e.contains(n.target)||e===n.target||t.value(n)};e.vueClickOutside=n,document.addEventListener("click",n)},unbind:function(e){document.removeEventListener("click",e.vueClickOutside),e.vueClickOutside=null}}},props:{alphabetise:{type:Boolean,default:!0},groups:Array,items:{type:Array,required:!0},placeholder:{type:String,required:!0},selectCallback:Function,single:{type:Boolean,default:!1},small:{type:Boolean,default:!1}},methods:{selectItem:function(e){this.single?(this.clearSelection(),this.toggleItem(e),this.toggleDropdown(!1)):this.toggleItem(e),this.selectCallback&&this.selectCallback(e)},toggleItem:function(e){var t=this.items.filter(function(t){return t.id===e})[0];this.$set(t,"selected",!t.selected)},toggleDropdown:function(e){!1===e&&(this.filter=""),this.active=e},clearSelection:function(){this.selectedIds.forEach(this.toggleItem)},focus:function(e,t){if(this.focused=Math.max(Math.min(this.filteredItems.length-1,e),-1),t){var n=this.filteredItems.slice(0,this.focused+1).map(function(e){return e.groupLabel?1:0}).reduce(function(e,t){return e+t},0),r=this.$el.lastChild,a=23*(this.focused+n);a<r.scrollTop?r.scrollTop=a:a>r.scrollTop+207&&(r.scrollTop=a-207)}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Tab",props:{header:{type:String,required:!0}},created:function(){this.$parent.tabs.push(this),this.$parent.headers.push(this.header)},computed:{show:function(){return this.$parent.show===this}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Tabs",data:function(){return{tabs:[],headers:[],active:null,show:null}},watch:{active:function(e){this.show=this.tabs[e]}},created:function(){this.active=this.startTab||0},methods:{select:function(e){this.active!==e&&(this.active=e,this.switchCallback&&this.switchCallback(e))}},props:{dark:{type:Boolean,default:!1},switchCallback:Function,startTab:Number}}},function(e,t){},function(e,t){},function(e,t,n){function r(){if(!arguments.length)return[];var e=arguments[0];return a(e)?e:[e]}var a=n(2);e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}e.exports=n},function(e,t){function n(e,t,n,r){for(var a=e.length,s=n+(r?1:-1);r?s--:++s<a;)if(t(e[s],s,e))return s;return-1}e.exports=n},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t){function n(e){return a.call(e)}var r=Object.prototype,a=r.toString;e.exports=n},function(e,t){function n(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}e.exports=n},function(e,t,n){function r(e,t,n,r,m,b){var g=c(e),x=c(t),k=g?v:l(e),C=x?v:l(t);k=k==p?h:k,C=C==p?h:C;var y=k==h,j=C==h,w=k==C;if(w&&u(e)){if(!u(t))return!1;g=!0,y=!1}if(w&&!y)return b||(b=new a),g||d(e)?s(e,t,n,r,m,b):i(e,t,k,n,r,m,b);if(!(n&f)){var P=y&&_.call(e,"__wrapped__"),O=j&&_.call(t,"__wrapped__");if(P||O){var D=P?e.value():e,z=O?t.value():t;return b||(b=new a),m(D,z,n,r,b)}}return!!w&&(b||(b=new a),o(e,t,n,r,m,b))}var a=n(3),s=n(45),i=n(46),o=n(47),l=n(50),c=n(2),u=n(65),d=n(69),f=1,p="[object Arguments]",v="[object Array]",h="[object Object]",m=Object.prototype,_=m.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t,n,r){var l=n.length,c=l,u=!r;if(null==e)return!c;for(e=Object(e);l--;){var d=n[l];if(u&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++l<c;){d=n[l];var f=d[0],p=e[f],v=d[1];if(u&&d[2]){if(void 0===p&&!(f in e))return!1}else{var h=new a;if(r)var m=r(p,v,f,e,t,h);if(!(void 0===m?s(v,p,i|o,r,h):m))return!1}}return!0}var a=n(3),s=n(4),i=1,o=2;e.exports=r},function(e,t,n){function r(e){var t=s(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(n){return n===e||a(n,e,t)}}var a=n(40),s=n(49),i=n(7);e.exports=r},function(e,t,n){function r(e,t){return o(e)&&l(t)?c(u(e),t):function(n){var r=s(n,e);return void 0===r&&r===t?i(n,e):a(t,r,d|f)}}var a=n(4),s=n(61),i=n(62),o=n(51),l=n(6),c=n(7),u=n(57),d=1,f=2;e.exports=r},function(e,t,n){function r(e,t){return!!(null==e?0:e.length)&&a(e,t,0)>-1}var a=n(38);e.exports=r},function(e,t,n){function r(e){return function(t,n,r){var o=Object(t);if(!s(t)){var l=a(n,3);t=i(t),n=function(e){return l(o[e],e,o)}}var c=e(t,n,r);return c>-1?o[l?t[c]:c]:void 0}}var a=n(5),s=n(64),i=n(10);e.exports=r},function(e,t,n){function r(e,t,n,r,c,u){var d=n&o,f=e.length,p=t.length;if(f!=p&&!(d&&p>f))return!1;var v=u.get(e);if(v&&u.get(t))return v==t;var h=-1,m=!0,_=n&l?new a:void 0;for(u.set(e,t),u.set(t,e);++h<f;){var b=e[h],g=t[h];if(r)var x=d?r(g,b,h,t,e,u):r(b,g,h,e,t,u);if(void 0!==x){if(x)continue;m=!1;break}if(_){if(!s(t,function(e,t){if(!i(_,t)&&(b===e||c(b,e,n,r,u)))return _.push(t)})){m=!1;break}}else if(b!==g&&!c(b,g,n,r,u)){m=!1;break}}return u.delete(e),u.delete(t),m}var a=n(33),s=n(34),i=n(43),o=1,l=2;e.exports=r},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){function r(e,t,n,r,i,l){var c=n&s,u=a(e),d=u.length;if(d!=a(t).length&&!c)return!1;for(var f=d;f--;){var p=u[f];if(!(c?p in t:o.call(t,p)))return!1}var v=l.get(e);if(v&&l.get(t))return v==t;var h=!0;l.set(e,t),l.set(t,e);for(var m=c;++f<d;){p=u[f];var _=e[p],b=t[p];if(r)var g=c?r(b,_,p,t,e,l):r(_,b,p,e,t,l);if(!(void 0===g?_===b||i(_,b,n,r,l):g)){h=!1;break}m||(m="constructor"==p)}if(h&&!m){var x=e.constructor,k=t.constructor;x!=k&&"constructor"in e&&"constructor"in t&&!("function"==typeof x&&x instanceof x&&"function"==typeof k&&k instanceof k)&&(h=!1)}return l.delete(e),l.delete(t),h}var a=n(48),s=1,i=Object.prototype,o=i.hasOwnProperty;e.exports=r},function(e,t,n){var r=n(8),a=r(Object.keys,Object);e.exports=a},function(e,t,n){function r(e){for(var t=s(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,a(i)]}return t}var a=n(6),s=n(10);e.exports=r},function(e,t){function n(e){return a.call(e)}var r=Object.prototype,a=r.toString;e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=a(t,e);return!(n<0)&&(n==t.length-1?t.pop():i.call(t,n,1),--this.size,!0)}var a=n(1),s=Array.prototype,i=s.splice;e.exports=r},function(e,t,n){function r(e){var t=this.__data__,n=a(t,e);return n<0?void 0:t[n][1]}var a=n(1);e.exports=r},function(e,t,n){function r(e){return a(this.__data__,e)>-1}var a=n(1);e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__,r=a(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var a=n(1);e.exports=r},function(e,t){function n(e){return e}e.exports=n},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){var r=n(44),a=n(60),s=r(a);e.exports=s},function(e,t,n){function r(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var l=null==n?0:i(n);return l<0&&(l=o(r+l,0)),a(e,s(t,3),l)}var a=n(35),s=n(5),i=n(71),o=Math.max;e.exports=r},function(e,t,n){function r(e,t,n){var r=null==e?void 0:a(e,t);return void 0===r?n:r}var a=n(36);e.exports=r},function(e,t){function n(e,t){return null!=e&&t in Object(e)}e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t,n){function r(e){return null!=e&&s(e.length)&&!a(e)}var a=n(66),s=n(67);e.exports=r},function(e,t){function n(){return!1}e.exports=n},function(e,t,n){function r(e){if(!s(e))return!1;var t=a(e);return t==o||t==l||t==i||t==c}var a=n(37),s=n(9),i="[object AsyncFunction]",o="[object Function]",l="[object GeneratorFunction]",c="[object Proxy]";e.exports=r},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t){function n(){return!1}e.exports=n},function(e,t){function n(e){return function(t){return null==t?void 0:t[e]}}e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t,n){var r=n(0)(n(21),n(81),null,null,"74f7fe73");e.exports=r.exports},function(e,t,n){var r=n(0)(n(22),n(82),null,null,"a7cd7d1e");e.exports=r.exports},function(e,t,n){var r=n(0)(n(23),n(79),null,null,"6568b53a");e.exports=r.exports},function(e,t,n){var r=n(0)(n(24),n(87),null,null,"6bdcc684");e.exports=r.exports},function(e,t,n){var r=n(0)(n(25),n(80),null,null,"6aa70c79");e.exports=r.exports},function(e,t,n){function r(e){var t;t=n(31),t.__inject__&&t.__inject__(e)}var a=n(0)(n(26),n(85),r,"data-v-5bb70850","f915333c");e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"tab-content"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header"},[e.config.alternative?[n("div",{staticClass:"alt-header-container"},[n("div",{staticClass:"alt-header"},[e.config.circleText?n("div",{staticClass:"media-object img-circle session-logo",class:e.config.circleClass},[n("b",[e._v(e._s(e.config.circleText))])]):e.config.circleImage?n("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+e.config.circleImage+".png"}}):e.config.circleIcon?n("div",{staticClass:"icon-circle"},[n("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+e.config.circleIcon+".svg"}})]):e._e(),e._v(" "),n("div",{staticClass:"header-info-container"},[n("h1",{domProps:{innerHTML:e._s(e.config.heading)}}),e._v(" "),n("h2",{staticClass:"partyinfo"},[e._v(e._s(e.config.subheading))]),e._v(" "),n("h2",{staticClass:"cardname"},[e._v(e._s(e.config.title))])])]),e._v(" "),n("div",{staticClass:"alt-header-border"})])]:[n("div",{staticClass:"card-header-border"}),e._v(" "),n("h1",[e._v(e._s(e.config.title))])]],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-content-share hidden"},[n("div",{staticClass:"card-back-content"},[n("div",{staticClass:"share-content"},[n("label",{attrs:{for:"share-url"}},[e._v("Neposredna povezava do kartice")]),e._v(" "),n("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:e.url}}),e._v(" "),n("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[e._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-content-embed hidden"},[n("div",{staticClass:"card-back-content"},[n("div",{staticClass:"embed-content"},[n("div",{staticClass:"embed-divider"}),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"embed-divider"}),e._v(" "),n("div",{staticClass:"embed-script"},[n("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":e.url},domProps:{innerHTML:e._s(e.embedCode)}}),e._v(" "),n("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[e._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"embed-switch-container"},[n("div",{staticClass:"embed-label"},[e._v("Podatki naj se vedno osvežujejo")]),e._v(" "),n("div",{staticClass:"embed-switch-big-box"},[n("div",{staticClass:"embed-switch-box"},[n("div",{staticClass:"embed-switch"},[n("div",{staticClass:"embed-switches"},[n("div",{staticClass:"leftswitch"},[e._v("DA")]),e._v(" "),n("div",{staticClass:"rightswitch"},[e._v("NE")])])])]),e._v(" "),n("div",{staticClass:"embed-switch-ball"})])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-footer"},[n("div",{staticClass:"card-logo hidden"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),e._v(" "),n("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),e._v(" "),n("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),e._v(" "),n("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[e._v("i")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){e.toggleDropdown(!1)},expression:"function() { toggleDropdown(false) }"}],class:["search-dropdown",{small:e.small}]},[e.selectedIds.length>0?n("div",{staticClass:"search-dropdown-clear",on:{click:e.clearSelection}},[e._v("×")]):e._e(),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"search-dropdown-input",attrs:{type:"text",placeholder:e.adjustedPlaceholder},domProps:{value:e.filter},on:{focus:function(t){e.toggleDropdown(!0)},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;t.preventDefault(),e.selectItem(e.filteredItems[e.focused].id)},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38))return null;t.preventDefault(),e.focus(e.focused-1,!0)},function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40))return null;t.preventDefault(),e.focus(e.focused+1,!0)}],input:function(t){t.target.composing||(e.filter=t.target.value)}}}),e._v(" "),n("ul",{class:["search-dropdown-options",{visible:this.active}],on:{mouseleave:function(t){e.focus(-1)}}},[e._l(e.filteredItems,function(t,r){return[t.groupLabel?n("li",{staticClass:"search-dropdown-group-label"},[e._v("\n        "+e._s(t.groupLabel)+"\n      ")]):e._e(),e._v(" "),n("li",{class:{selected:t.selected,focused:e.focused===r},on:{click:function(n){e.selectItem(t.id)},mouseenter:function(t){e.focus(r)}}},[n("div",{staticClass:"search-dropdown-label"},[e._v(e._s(t.label))]),e._v(" "),t.count?n("div",[e._v(e._s(t.count))]):e._e()])]})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["tabs",{dark:e.dark}]},[n("ul",{staticClass:"tabs-headers"},e._l(e.headers,function(t,r){return n("li",{class:["tabs-header",{active:r===e.active}],on:{click:function(t){e.select(r)}}},[n("span",[e._v(e._s(t))])])})),e._v(" "),n("div",{staticClass:"tabs-content"},[e._t("default")],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container card-halfling card-seznam-poslanskih-skupin"},[n("card-header",{attrs:{config:e.headerConfig}}),e._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"card-content-front"},[n("ul",{staticClass:"party-list"},[0===e.processedPartyData.length?n("li",{staticClass:"loader"},[n("div",{staticClass:"nalagalnik"})]):e._e(),e._v(" "),e._l(e.processedPartyData,function(t,r){return n("li",{key:r,staticClass:"labeled-chart"},[n("div",{staticClass:"column chart-label"},[n("a",{staticClass:"funblue-light-hover",attrs:{href:e.getPartyUrl(t.party)}},[e._v(e._s(t.party.acronym))])]),e._v(" "),n("div",{staticClass:"column chart"},[n("div",{staticClass:"progress hugebar"},[n("div",{staticClass:"progress-bar funblue",style:{width:t.chartWidth},attrs:{role:"progressbar"}}),e._v(" "),n("div",{staticClass:"progress_number"},[e._v(e._s(t.displayValue))])])])])})],2)]),e._v(" "),n("card-info",[n("p",{staticClass:"info-text lead"},[e._v("Seznam poslanskih skupin glede na rezultate analize "+e._s(e.currentAnalysisData.titleSuffix))]),e._v(" "),n("p",{staticClass:"info-text heading"},[e._v("METODOLOGIJA")]),e._v(" "),n("p",{staticClass:"info-text",domProps:{innerHTML:e._s(e.currentAnalysisData.explanation)}})]),e._v(" "),n("card-embed",{attrs:{url:e.generatedCardUrl}}),e._v(" "),n("card-share",{attrs:{url:e.shortenedCardUrl}})],1),e._v(" "),n("card-footer",{attrs:{link:e.slugs.base}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$options.cardData.state.generator?n("div",{attrs:{id:e.$options.cardData.cardData._id}},[n("div",{staticClass:"party-list-generator"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",{staticClass:"analyses"},e._l(e.analyses,function(t,r){return n("li",{key:r,class:{selected:t.id===e.currentAnalysis},on:{click:function(n){e.selectAnalysis(t.id)}}},[n("span",[e._v(e._s(t.label))])])})),e._v(" "),n("div",{staticClass:"mobile-analyses"},[n("label",{attrs:{for:"analysis"}},[e._v("Izberi analizo")]),e._v(" "),n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.currentAnalysis,expression:"currentAnalysis"}],attrs:{name:"analysis",id:"analysis"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentAnalysis=t.target.multiple?n:n[0]},function(t){e.selectAnalysis(e.currentAnalysis)}]}},e._l(e.analyses,function(t,r){return n("option",{key:r,domProps:{value:t.id}},[e._v("\n                "+e._s(t.label)+"\n              ")])}))])])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("inner-card",e._b({},"inner-card",{processedPartyData:e.processedPartyData,getPartyUrl:e.getPartyUrl,headerConfig:e.headerConfig,generatedCardUrl:e.generatedCardUrl,slugs:e.slugs,shortenedCardUrl:e.shortenedCardUrl,currentAnalysisData:e.currentAnalysisData}))],1)])])]):n("inner-card",e._b({},"inner-card",{processedPartyData:e.processedPartyData,getPartyUrl:e.getPartyUrl,headerConfig:e.headerConfig,generatedCardUrl:e.generatedCardUrl,slugs:e.slugs,shortenedCardUrl:e.shortenedCardUrl,currentAnalysisData:e.currentAnalysisData}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-content-info hidden"},[n("div",{staticClass:"card-back-content"},[e._t("default")],2)])},staticRenderFns:[]}}]);