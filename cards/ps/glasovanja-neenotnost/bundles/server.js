module.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=23)}([function(t,e){t.exports=function(t,e,n,r,i){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var u;if(i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,d=l?c.render:c.beforeCreate;l?c.render=function(t,e){return u.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:a,options:c}}},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(i(t[n][0],e))return n;return-1}var i=n(11);t.exports=r},function(t,e,n){function r(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?s(t)?o(t[0],t[1]):i(t):c(t)}var i=n(55),o=n(56),a=n(4),s=n(3),c=n(97);t.exports=r},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var i=n(77),o=n(78),a=n(79),s=n(80),c=n(81);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=s,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var i=n(67);t.exports=r},function(t,e,n){function r(t,e,n,a,s){return t===e||(null==t||null==e||!o(t)&&!o(e)?t!==t&&e!==e:i(t,e,n,a,r,s))}var i=n(52),o=n(94);t.exports=r},function(t,e,n){function r(t){return t===t&&!i(t)}var i=n(12);t.exports=r},function(t,e){function n(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){var r=n(10),i=r(Object.keys,Object);t.exports=i},function(t,e,n){function r(t){var e;e=n(37),e.__inject__&&e.__inject__(t)}var i=n(0)(n(32),n(115),r,"data-v-2a8753d0","1fd2e88c");t.exports=i.exports},function(t,e,n){var r=n(0)(n(33),n(116),null,null,"20e7b423");t.exports=r.exports},function(t,e,n){var r=n(0)(n(34),n(109),null,null,"42a1ca8a");t.exports=r.exports},function(t,e,n){var r=n(0)(n(35),n(117),null,null,"0a404470");t.exports=r.exports},function(t,e){t.exports=require("request")},function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MONTH_NAMES=["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],e.PORTRAIT_ROOT_URL="https://cdn.parlameter.si/v1/parlassets/img/people/square/"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(104),o=r(i),a=n(101),s=r(a),c=n(105),u=r(c),l=n(103),d=r(l),f=n(102),p=r(f),v=n(22),h=r(v);e.default={components:{CardInfo:o.default,CardEmbed:s.default,CardShare:u.default,CardHeader:d.default,CardFooter:p.default},mixins:[h.default]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(19),o=r(i),a=n(18),s=r(a),c=n(15),u=r(c),l=n(17),d=r(l),f=n(16),p=r(f),v=n(14),h=r(v);global.$={getJSON:function(t,e){(0,s.default)(t,function(t,n,r){if(t)throw t;e(JSON.parse(r))})}},o.default.component("SearchDropdown",u.default),o.default.component("Tabs",d.default),o.default.component("Tab",p.default),e.default=function(t){var e=new o.default(Object.assign({},h.default,{cardData:t}));return new Promise(function(t){return t(e)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardFooter",props:{link:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardHeader",props:{config:Object}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",props:{url:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DateRow",props:{date:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"StripedButton",props:{selected:Boolean,smallText:String,text:String,clickHandler:Function,color:String,disabled:Boolean},computed:{className:function(){return["striped-button",{"is-disabled":this.disabled},{"is-selected":this.selected},this.color]}},methods:{handleClick:function(t){this.disabled||this.clickHandler(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DateRow",props:{clickHandler:Function,options:Array,selected:String}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(85),o=r(i),a=n(100),s=r(a),c=n(98),u=r(c),l=n(88),d=r(l),f=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=n(121),v=n(20),h=n(106),_=r(h),m=n(107),g=r(m),x=n(108),b=r(x),C=n(21),y=r(C);e.default={components:{DateRow:_.default,StripedButton:g.default,Toggle:b.default},mixins:[y.default],name:"GlasovanjaNeenotnost",data:function(){var t=this,e=[{id:95,color:"dz",acronym:"DZ",name:"Vsi"},{id:144,color:"koal",acronym:"koal",name:"Koalicija"}],n=[];return Object.keys(this.$options.cardData.data).forEach(function(e){var r=t.$options.cardData.data[e];r.disbanded||n.push({id:e,acronym:r.acronym,color:r.acronym.toLowerCase().replace(/ /g,"_"),name:r.acronym})}),n=(0,u.default)(n,"name"),e=e.concat(n),{voteData:[],loading:!0,slugs:this.$options.cardData.urlsData,shortenedCardUrl:"",selectedSort:"maximum",sortOptions:[{label:"Neenotnosti",id:"maximum"},{label:"Datumu",id:"date"}],textFilter:"",url:"https://glej.parlameter.si/group/method/",allTags:[],allMonths:[2017,2016,2015,2014,2013].map(function(t){return[1,2,3,4,5,6,7,8,9,10,11,12].map(function(e){return{id:t+"-"+e,label:v.MONTH_NAMES[e-1]+" "+t,month:e,year:t,selected:!1}})}).reduce(function(t,e){return t.concat(e)},[]),selectedGroup:"DZ",groups:e}},computed:{tagPlaceholder:function(){return this.selectedTags.length>0?"Izbranih: "+this.selectedTags.length:"Izberi"},monthPlaceholder:function(){return this.selectedMonths.length>0?"Izbranih: "+this.selectedMonths.length:"Izberi"},dropdownItems:function(){var t=[],e=[];return this.getFilteredVotingDays(!0).forEach(function(n){var r=n.date.split("-").map(function(t){return parseInt(t,10)}),i=f(r,2),o=i[0],a=i[1],s=o+"-"+a;-1===e.indexOf(s)&&e.push(s),n.ballots.forEach(function(e){e.tag.forEach(function(e){-1===t.indexOf(e)&&t.push(e)})})}),{tags:this.allTags.filter(function(e){return t.indexOf(e.id)>-1}),months:this.allMonths.filter(function(t){return e.indexOf(t.id)>-1})}},selectedTags:function(){return this.allTags.filter(function(t){return t.selected}).map(function(t){return t.id})},selectedMonths:function(){return this.allMonths.filter(function(t){return t.selected})},filteredVotingDays:function(){return this.getFilteredVotingDays()},headerConfig:function(){return{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.dynamicTitle}},dynamicTitle:function(){return this.$options.cardData.cardData.name+("date"===this.selectedSort?"datumu":"neenotnosti")}},methods:{getFilteredVotingDays:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.voteData||0===this.voteData.length)return[];var n=function(n){var r=e||0===t.selectedTags.length||n.tag.filter(function(e){return t.selectedTags.indexOf(e)>-1}).length>0,i=""===t.textFilter||n.text.toLowerCase().indexOf(t.textFilter.toLowerCase())>-1;return r&&i},r=function(n){if(e||0===t.selectedMonths.length)return!0;var r=n.date.split("-").map(function(t){return parseInt(t,10)}),i=f(r,2),o=i[0],a=i[1];return t.selectedMonths.filter(function(t){return t.month===a&&t.year===o}).length>0},i=(0,u.default)(this.voteData,this.selectedSort).reverse(),o=function(t){return t.date?(0,p.format)((0,p.parse)(t.date),"D. M. YYYY"):null},a=void 0;a="date"===this.selectedSort?(0,d.default)(i,o):(0,s.default)(i.map(function(t,e){return o(t)+"-"+e}),i.map(function(t){return[t]}));var c=[];return Object.keys(a).forEach(function(t){c.push({date:t,ballots:a[t].filter(n)})}),c.filter(function(t){return t.ballots.length>0}).filter(r)},selectGroup:function(t){this.selectedGroup=this.selectedGroup!==t?t:"DZ"},selectSort:function(t){this.selectedSort=t},shortenUrl:function(){var t=this;$.get("https://parla.me/shortner/generate?url="+window.encodeURIComponent(this.url+"&frame=true"),function(e){t.shortenedCardUrl=e})},fetchVotesForGroup:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"DZ";this.loading=!0;var n=(0,o.default)(this.groups,{acronym:e}).id;$.get("https://analize.parlameter.si/v1/pg/getIntraDisunionOrg/"+n,function(n){0===t.allTags.length&&(t.allTags=n.all_tags.map(function(t){return{id:t,label:t,selected:!1}})),t.voteData=n[e],t.loading=!1})},measurePiwik:function(t,e,n){"function"==typeof measure&&(""!==e?measure("s","session-sort",e+" "+n,""):""!==t&&measure("s","session-filter",t,""))}},watch:{selectedGroup:function(t){this.fetchVotesForGroup(t)}},beforeMount:function(){this.shortenUrl(),this.fetchVotesForGroup()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"SearchDropdown",data:function(){return{filter:"",active:!1,focused:-1}},watch:{filter:function(){this.focus(this.focused)}},computed:{filteredItems:function(){var t=this,e=function(e){return e.filter(function(e){return e.selected||e.label.toLowerCase().indexOf(t.filter.toLowerCase())>-1}).map(function(t,e){return t.sortIndex=e,t}).sort(function(e,n){if(!t.single){if(t.alphabetise&&Boolean(e.selected)===Boolean(n.selected))return e.label.localeCompare(n.label,"sl");if(e.selected&&!n.selected)return-1;if(!e.selected&&n.selected)return 1}return e.sortIndex<n.sortIndex?-1:e.sortIndex>n.sortIndex?1:0}).map(function(t){return delete t.sortIndex,t})};return this.groups?this.groups.map(function(n){var r=e(t.items.filter(function(t){return n.items.indexOf(t.id)>-1}));return r.forEach(function(t,e){t.groupLabel=0===e?n.label:null}),r}).reduce(function(t,e){return t.concat(e)},[]):e(this.items)},selectedIds:function(){return this.filteredItems.filter(function(t){return t.selected}).map(function(t){return t.id})},adjustedPlaceholder:function(){if(!this.single)return this.placeholder;var t=this.filteredItems.filter(function(t){return t.selected})[0];return t?t.label:this.placeholder}},directives:{clickOutside:{bind:function(t,e){var n=function(n){t.contains(n.target)||t===n.target||e.value(n)};t.vueClickOutside=n,document.addEventListener("click",n)},unbind:function(t){document.removeEventListener("click",t.vueClickOutside),t.vueClickOutside=null}}},props:{alphabetise:{type:Boolean,default:!0},groups:Array,items:{type:Array,required:!0},placeholder:{type:String,required:!0},selectCallback:Function,single:{type:Boolean,default:!1},small:{type:Boolean,default:!1}},methods:{selectItem:function(t){this.single?(this.clearSelection(),this.toggleItem(t),this.toggleDropdown(!1)):this.toggleItem(t),this.selectCallback&&this.selectCallback(t)},toggleItem:function(t){var e=this.items.filter(function(e){return e.id===t})[0];this.$set(e,"selected",!e.selected)},toggleDropdown:function(t){!1===t&&(this.filter=""),this.active=t},clearSelection:function(){this.selectedIds.forEach(this.toggleItem)},focus:function(t,e){if(this.focused=Math.max(Math.min(this.filteredItems.length-1,t),-1),e){var n=this.filteredItems.slice(0,this.focused+1).map(function(t){return t.groupLabel?1:0}).reduce(function(t,e){return t+e},0),r=this.$el.lastChild,i=23*(this.focused+n);i<r.scrollTop?r.scrollTop=i:i>r.scrollTop+207&&(r.scrollTop=i-207)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tab",props:{header:{type:String,required:!0}},created:function(){this.$parent.tabs.push(this),this.$parent.headers.push(this.header)},computed:{show:function(){return this.$parent.show===this}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tabs",data:function(){return{tabs:[],headers:[],active:null,show:null}},watch:{active:function(t){this.show=this.tabs[t]}},mounted:function(){this.active=0},methods:{select:function(t){this.active!==t&&(this.active=t,this.switchCallback&&this.switchCallback(t))}},props:{dark:{type:Boolean,default:!1},switchCallback:Function}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function r(){if(!arguments.length)return[];var t=arguments[0];return i(t)?t:[t]}var i=n(3);t.exports=r},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e){function n(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i];e(r,a,n(a),t)}return r}t.exports=n},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}t.exports=n},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}t.exports=n},function(t,e,n){function r(t,e,n){var r=t[e];s.call(t,e)&&o(r,n)&&(void 0!==n||e in t)||i(t,e,n)}var i=n(6),o=n(11),a=Object.prototype,s=a.hasOwnProperty;t.exports=r},function(t,e){function n(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i];e(r,a,n(a),t)}return r}t.exports=n},function(t,e){function n(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}t.exports=n},function(t,e){function n(t){return t&&t.length?t[0]:void 0}t.exports=n},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e){function n(t){return i.call(t)}var r=Object.prototype,i=r.toString;t.exports=n},function(t,e){function n(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}t.exports=n},function(t,e,n){function r(t,e,n,r,_,g){var x=u(t),b=u(e),C=x?v:c(t),y=b?v:c(e);C=C==p?h:C,y=y==p?h:y;var w=C==h,j=y==h,O=C==y;if(O&&l(t)){if(!l(e))return!1;x=!0,w=!1}if(O&&!w)return g||(g=new i),x||d(t)?o(t,e,n,r,_,g):a(t,e,C,n,r,_,g);if(!(n&f)){var k=w&&m.call(t,"__wrapped__"),I=j&&m.call(e,"__wrapped__");if(k||I){var M=k?t.value():t,D=I?e.value():e;return g||(g=new i),_(M,D,n,r,g)}}return!!O&&(g||(g=new i),s(t,e,n,r,_,g))}var i=n(5),o=n(68),a=n(69),s=n(70),c=n(74),u=n(3),l=n(91),d=n(96),f=1,p="[object Arguments]",v="[object Array]",h="[object Object]",_=Object.prototype,m=_.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n,r){var c=n.length,u=c,l=!r;if(null==t)return!u;for(t=Object(t);c--;){var d=n[c];if(l&&d[2]?d[1]!==t[d[0]]:!(d[0]in t))return!1}for(;++c<u;){d=n[c];var f=d[0],p=t[f],v=d[1];if(l&&d[2]){if(void 0===p&&!(f in t))return!1}else{var h=new i;if(r)var _=r(p,v,f,t,e,h);if(!(void 0===_?o(v,p,a|s,r,h):_))return!1}}return!0}var i=n(5),o=n(7),a=1,s=2;t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}t.exports=n},function(t,e,n){function r(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||i(n,t,e)}}var i=n(53),o=n(72),a=n(9);t.exports=r},function(t,e,n){function r(t,e){return s(t)&&c(e)?u(l(t),e):function(n){var r=o(n,t);return void 0===r&&r===e?a(n,t):i(e,r,d|f)}}var i=n(7),o=n(87),a=n(89),s=n(76),c=n(8),u=n(9),l=n(84),d=1,f=2;t.exports=r},function(t,e,n){function r(t,e,n){var r=-1;e=i(e.length?e:[l],c(o));var d=a(t,function(t,n,o){return{criteria:i(e,function(e){return e(t)}),index:++r,value:t}});return s(d,function(t,e){return u(t,e,n)})}var i=n(43),o=n(2),a=n(54),s=n(59),c=n(60),u=n(64),l=n(4);t.exports=r},function(t,e,n){function r(t,e){return a(o(t,e,i),t+"")}var i=n(4),o=n(82),a=n(83);t.exports=r},function(t,e){function n(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}t.exports=n},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e){function n(t,e,n){for(var r=-1,i=t.length,o=e.length,a={};++r<i;){var s=r<o?e[r]:void 0;n(a,t[r],s)}return a}t.exports=n},function(t,e,n){function r(t,e){return!!(null==t?0:t.length)&&i(t,e,0)>-1}var i=n(51);t.exports=r},function(t,e,n){function r(t,e){if(t!==e){var n=void 0!==t,r=null===t,o=t===t,a=i(t),s=void 0!==e,c=null===e,u=e===e,l=i(e);if(!c&&!l&&!a&&t>e||a&&s&&u&&!c&&!l||r&&s&&u||!n&&u||!o)return 1;if(!r&&!a&&!l&&t<e||l&&n&&o&&!r&&!a||c&&n&&o||!s&&o||!u)return-1}return 0}var i=n(95);t.exports=r},function(t,e,n){function r(t,e,n){for(var r=-1,o=t.criteria,a=e.criteria,s=o.length,c=n.length;++r<s;){var u=i(o[r],a[r]);if(u){if(r>=c)return u;return u*("desc"==n[r]?-1:1)}}return t.index-e.index}var i=n(63);t.exports=r},function(t,e,n){function r(t,e){return function(n,r){var c=s(n)?i:o,u=e?e():{};return c(n,t,a(r,2),u)}}var i=n(42),o=n(46),a=n(2),s=n(3);t.exports=r},function(t,e,n){function r(t){return function(e,n,r){var s=Object(e);if(!o(e)){var c=i(n,3);e=a(e),n=function(t){return c(s[t],t,s)}}var u=t(e,n,r);return u>-1?s[c?e[u]:u]:void 0}}var i=n(2),o=n(90),a=n(13);t.exports=r},function(t,e,n){var r=n(73),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},function(t,e,n){function r(t,e,n,r,u,l){var d=n&s,f=t.length,p=e.length;if(f!=p&&!(d&&p>f))return!1;var v=l.get(t);if(v&&l.get(e))return v==e;var h=-1,_=!0,m=n&c?new i:void 0;for(l.set(t,e),l.set(e,t);++h<f;){var g=t[h],x=e[h];if(r)var b=d?r(x,g,h,e,t,l):r(g,x,h,t,e,l);if(void 0!==b){if(b)continue;_=!1;break}if(m){if(!o(e,function(t,e){if(!a(m,e)&&(g===t||u(g,t,n,r,l)))return m.push(e)})){_=!1;break}}else if(g!==x&&!u(g,x,n,r,l)){_=!1;break}}return l.delete(t),l.delete(e),_}var i=n(40),o=n(44),a=n(62),s=1,c=2;t.exports=r},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){function r(t,e,n,r,a,c){var u=n&o,l=i(t),d=l.length;if(d!=i(e).length&&!u)return!1;for(var f=d;f--;){var p=l[f];if(!(u?p in e:s.call(e,p)))return!1}var v=c.get(t);if(v&&c.get(e))return v==e;var h=!0;c.set(t,e),c.set(e,t);for(var _=u;++f<d;){p=l[f];var m=t[p],g=e[p];if(r)var x=u?r(g,m,p,e,t,c):r(m,g,p,t,e,c);if(!(void 0===x?m===g||a(m,g,n,r,c):x)){h=!1;break}_||(_="constructor"==p)}if(h&&!_){var b=t.constructor,C=e.constructor;b!=C&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof C&&C instanceof C)&&(h=!1)}return c.delete(t),c.delete(e),h}var i=n(71),o=1,a=Object.prototype,s=a.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(10),i=r(Object.keys,Object);t.exports=i},function(t,e,n){function r(t){for(var e=o(t),n=e.length;n--;){var r=e[n],a=t[r];e[n]=[r,a,i(a)]}return e}var i=n(8),o=n(13);t.exports=r},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e){function n(t){return i.call(t)}var r=Object.prototype,i=r.toString;t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=i(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}var i=n(1),o=Array.prototype,a=o.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]}var i=n(1);t.exports=r},function(t,e,n){function r(t){return i(this.__data__,t)>-1}var i=n(1);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var i=n(1);t.exports=r},function(t,e,n){function r(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var r=arguments,a=-1,s=o(r.length-e,0),c=Array(s);++a<s;)c[a]=r[e+a];a=-1;for(var u=Array(e+1);++a<e;)u[a]=r[a];return u[e]=n(c),i(t,this,u)}}var i=n(41),o=Math.max;t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r=n(66),i=n(86),o=r(i);t.exports=o},function(t,e,n){function r(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var c=null==n?0:a(n);return c<0&&(c=s(r+c,0)),i(t,o(e,3),c)}var i=n(47),o=n(2),a=n(99),s=Math.max;t.exports=r},function(t,e,n){function r(t,e,n){var r=null==t?void 0:i(t,e);return void 0===r?n:r}var i=n(49);t.exports=r},function(t,e,n){var r=n(6),i=n(65),o=Object.prototype,a=o.hasOwnProperty,s=i(function(t,e,n){a.call(t,n)?t[n].push(e):r(t,n,[e])});t.exports=s},function(t,e){function n(t,e){return null!=t&&e in Object(t)}t.exports=n},function(t,e,n){function r(t){return null!=t&&o(t.length)&&!i(t)}var i=n(92),o=n(93);t.exports=r},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function r(t){if(!o(t))return!1;var e=i(t);return e==s||e==c||e==a||e==u}var i=n(50),o=n(12),a="[object AsyncFunction]",s="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";t.exports=r},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(t){return function(e){return null==e?void 0:e[t]}}t.exports=n},function(t,e,n){var r=n(48),i=n(57),o=n(58),a=n(75),s=o(function(t,e){if(null==t)return[];var n=e.length;return n>1&&a(t,e[0],e[1])?e=[]:n>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),i(t,r(e,1),[])});t.exports=s},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t,e){return o(t||[],e||[],i)}var i=n(45),o=n(61);t.exports=r},function(t,e,n){var r=n(0)(n(24),n(112),null,null,"f4470a3a");t.exports=r.exports},function(t,e,n){var r=n(0)(n(25),n(113),null,null,"907759fe");t.exports=r.exports},function(t,e,n){var r=n(0)(n(26),n(110),null,null,"4e12921a");t.exports=r.exports},function(t,e,n){var r=n(0)(n(27),n(120),null,null,"718207d8");t.exports=r.exports},function(t,e,n){var r=n(0)(n(28),n(111),null,null,"7b8b88e9");t.exports=r.exports},function(t,e,n){function r(t){var e;e=n(36),e.__inject__&&e.__inject__(t)}var i=n(0)(n(29),n(114),r,"data-v-293a8711","706aff33");t.exports=i.exports},function(t,e,n){function r(t){var e;e=n(39),e.__inject__&&e.__inject__(t)}var i=n(0)(n(30),n(119),r,"data-v-c4411164","992c6420");t.exports=i.exports},function(t,e,n){function r(t){var e;e=n(38),e.__inject__&&e.__inject__(t)}var i=n(0)(n(31),n(118),r,"data-v-6ea73b1f","05539286");t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tab-content"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[t.config.alternative?[n("div",{staticClass:"alt-header-container"},[n("div",{staticClass:"alt-header"},[t.config.circleText?n("div",{staticClass:"media-object img-circle session-logo",class:t.config.circleClass},[n("b",[t._v(t._s(t.config.circleText))])]):t.config.circleImage?n("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+t.config.circleImage+".png"}}):t.config.circleIcon?n("div",{staticClass:"icon-circle"},[n("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+t.config.circleIcon+".svg"}})]):t._e(),t._v(" "),n("div",{staticClass:"header-info-container"},[n("h1",{domProps:{innerHTML:t._s(t.config.heading)}}),t._v(" "),n("h2",{staticClass:"partyinfo"},[t._v(t._s(t.config.subheading))]),t._v(" "),n("h2",{staticClass:"cardname"},[t._v(t._s(t.config.title))])])]),t._v(" "),n("div",{staticClass:"alt-header-border"})])]:[n("div",{staticClass:"card-header-border"}),t._v(" "),n("h1",[t._v(t._s(t.config.title))])]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-share hidden"},[n("div",{staticClass:"card-back-content"},[n("div",{staticClass:"share-content"},[n("label",{attrs:{for:"share-url"}},[t._v("Neposredna povezava do kartice")]),t._v(" "),n("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:t.url}}),t._v(" "),n("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[t._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-embed hidden"},[n("div",{staticClass:"card-back-content"},[n("div",{staticClass:"embed-content"},[n("div",{staticClass:"embed-divider"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"embed-divider"}),t._v(" "),n("div",{staticClass:"embed-script"},[n("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":t.url},domProps:{innerHTML:t._s(t.embedCode)}}),t._v(" "),n("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[t._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"embed-switch-container"},[n("div",{staticClass:"embed-label"},[t._v("Podatki naj se vedno osvežujejo")]),t._v(" "),n("div",{staticClass:"embed-switch-big-box"},[n("div",{staticClass:"embed-switch-box"},[n("div",{staticClass:"embed-switch"},[n("div",{staticClass:"embed-switches"},[n("div",{staticClass:"leftswitch"},[t._v("DA")]),t._v(" "),n("div",{staticClass:"rightswitch"},[t._v("NE")])])])]),t._v(" "),n("div",{staticClass:"embed-switch-ball"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-footer"},[n("div",{staticClass:"card-logo hidden"},[n("a",{attrs:{href:t.link}},[n("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),t._v(" "),n("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),t._v(" "),n("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),t._v(" "),n("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[t._v("i")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"date-row"},[t._v(t._s(t.date))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-container card-halfling card-glasovanja-neenotnost",attrs:{id:t.$options.cardData.cardData._id}},[n("card-header",{attrs:{config:t.headerConfig}}),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"card-content-front"},[n("div",{staticClass:"groups"},t._l(t.groups,function(e){return n("striped-button",{key:e.acronym,attrs:{color:e.color,selected:e.acronym===t.selectedGroup,"small-text":e.name,"click-handler":function(){return t.selectGroup(e.acronym)}}})})),t._v(" "),n("div",{staticClass:"filters"},[n("div",{staticClass:"filter text-filter"},[n("div",{staticClass:"filter-label"},[t._v("Išči po naslovu glasovanja")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textFilter,expression:"textFilter"}],staticClass:"text-filter-input",attrs:{type:"text"},domProps:{value:t.textFilter},on:{input:function(e){e.target.composing||(t.textFilter=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"filter tag-dropdown"},[n("div",{staticClass:"filter-label"},[t._v("Matično delovno telo")]),t._v(" "),n("search-dropdown",{attrs:{items:t.dropdownItems.tags,placeholder:t.tagPlaceholder}})],1),t._v(" "),n("div",{staticClass:"filter month-dropdown"},[n("div",{staticClass:"filter-label"},[t._v("Časovno obdobje")]),t._v(" "),n("search-dropdown",{attrs:{items:t.dropdownItems.months,placeholder:t.monthPlaceholder,alphabetise:!1}})],1),t._v(" "),n("div",{staticClass:"filter text-filter"},[n("div",{staticClass:"filter-label"},[t._v("Razvrsti po")]),t._v(" "),n("toggle",{attrs:{selected:t.selectedSort,options:t.sortOptions,"click-handler":t.selectSort}})],1)]),t._v(" "),n("div",{class:["results",{"is-loading":t.loading}]},[t._l(t.filteredVotingDays,function(e){return["date"===t.selectedSort?n("date-row",{attrs:{date:e.date}}):t._e(),t._v(" "),t._l(e.ballots,function(e){return n("a",{staticClass:"ballot",attrs:{target:"_blank",href:"https://glej.parlameter.si/s/glasovanje/"+e.id_parladata+"?frame=true"}},[n("div",{staticClass:"disunion"},[n("div",{staticClass:"percentage"},[t._v(t._s(Math.round(e.maximum))+" %")]),t._v(" "),n("div",{staticClass:"text"},[t._v("neenotnost")])]),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(e.text))]),t._v(" "),n("div",{staticClass:"result"},[e.result?[n("i",{staticClass:"accepted glyphicon glyphicon-ok"}),t._v(" "),n("div",{staticClass:"text"},[t._v("sprejet")])]:[n("i",{staticClass:"not-accepted glyphicon glyphicon-remove"}),t._v(" "),n("div",{staticClass:"text"},[t._v("zavrnjen")])]],2)])})]})],2)]),t._v(" "),n("card-info",[n("p",{staticClass:"info-text lead"}),t._v(" "),n("p",{staticClass:"info-text heading"},[t._v("METODOLOGIJA")]),t._v(" "),n("p",{staticClass:"info-text"})]),t._v(" "),n("card-embed",{attrs:{url:t.url}}),t._v(" "),n("card-share",{attrs:{url:t.shortenedCardUrl}})],1),t._v(" "),n("card-footer",{attrs:{link:t.slugs.base}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){t.toggleDropdown(!1)},expression:"function() { toggleDropdown(false) }"}],class:["search-dropdown",{small:t.small}]},[t.selectedIds.length>0?n("div",{staticClass:"search-dropdown-clear",on:{click:t.clearSelection}},[t._v("×")]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"search-dropdown-input",attrs:{type:"text",placeholder:t.adjustedPlaceholder},domProps:{value:t.filter},on:{focus:function(e){t.toggleDropdown(!0)},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;e.preventDefault(),t.selectItem(t.filteredItems[t.focused].id)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.focus(t.focused-1,!0)},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.focus(t.focused+1,!0)}],input:function(e){e.target.composing||(t.filter=e.target.value)}}}),t._v(" "),n("ul",{class:["search-dropdown-options",{visible:this.active}],on:{mouseleave:function(e){t.focus(-1)}}},[t._l(t.filteredItems,function(e,r){return[e.groupLabel?n("li",{staticClass:"search-dropdown-group-label"},[t._v("\n        "+t._s(e.groupLabel)+"\n      ")]):t._e(),t._v(" "),n("li",{class:{selected:e.selected,focused:t.focused===r},on:{click:function(n){t.selectItem(e.id)},mouseenter:function(e){t.focus(r)}}},[n("div",{staticClass:"search-dropdown-label"},[t._v(t._s(e.label))]),t._v(" "),e.count?n("div",[t._v(t._s(e.count))]):t._e()])]})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["tabs",{dark:t.dark}]},[n("ul",{staticClass:"tabs-headers"},t._l(t.headers,function(e,r){return n("li",{class:["tabs-header",{active:r===t.active}],on:{click:function(e){t.select(r)}}},[n("span",[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"tabs-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toggle"},t._l(t.options,function(e){return n("div",{class:["option",{"is-selected":e.id===t.selected}],on:{click:function(n){t.clickHandler(e.id)}}},[t._v("\n    "+t._s(e.label)+"\n  ")])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className,on:{click:t.handleClick}},[t.smallText?n("div",{staticClass:"small-text"},[t._v(t._s(t.smallText))]):t._e(),t._v(" "),t.text?n("div",{staticClass:"text"},[t._v(t._s(t.text))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-info hidden"},[n("div",{staticClass:"card-back-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports=require("date-fns")}]);