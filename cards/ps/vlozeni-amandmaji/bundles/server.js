module.exports=function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=31)}([function(t,e){t.exports=function(t,e,n,r,s){var i,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var l;if(s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(t,e){return l.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:a,options:c}}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(s(t[n][0],e))return n;return-1}var s=n(15);t.exports=r},function(t,e,n){function r(t,e){return s(t)?t:i(t,e)?[t]:a(o(t))}var s=n(1),i=n(6),a=n(82),o=n(97);t.exports=r},function(t,e,n){function r(t,e){e=s(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[i(e[n++])];return n&&n==r?t:void 0}var s=n(4),i=n(2);t.exports=r},function(t,e,n){function r(t,e){if(s(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(o.test(t)||!a.test(t)||null!=e&&t in Object(e))}var s=n(1),i=n(92),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=r},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var s=n(76),i=n(77),a=n(78),o=n(79),c=n(80);r.prototype.clear=s,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=o,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t,e,n,a,o){return t===e||(null==t||null==e||!i(t)&&!i(e)?t!==t&&e!==e:s(t,e,n,a,r,o))}var s=n(55),i=n(91);t.exports=r},function(t,e,n){function r(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?o(t)?i(t[0],t[1]):s(t):c(t)}var s=n(57),i=n(58),a=n(86),o=n(1),c=n(95);t.exports=r},function(t,e){function n(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,s=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e,n){function r(t){return t===t&&!s(t)}var s=n(7);t.exports=r},function(t,e){function n(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){function r(t,e){return null!=t&&i(t,e,s)}var s=n(53),i=n(75);t.exports=r},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e,n){var r=n(14),s=r(Object.keys,Object);t.exports=s},function(t,e,n){function r(t){var e;e=n(45),e.__inject__&&e.__inject__(t),e=n(44),e.__inject__&&e.__inject__(t)}var s=n(0)(n(39),n(113),r,"data-v-5249a70c","2734f9c8");t.exports=s.exports},function(t,e,n){var r=n(0)(n(40),n(111),null,null,"20e7b423");t.exports=r.exports},function(t,e,n){var r=n(0)(n(41),n(105),null,null,"42a1ca8a");t.exports=r.exports},function(t,e,n){var r=n(0)(n(42),n(112),null,null,"0a404470");t.exports=r.exports},function(t,e){t.exports=require("request")},function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MONTH_NAMES=["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],e.PORTRAIT_ROOT_URL="https://cdn.parlameter.si/v1/parlassets/img/people/square/"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(25);e.default=function(){var t=[];return[2017,2016,2015,2014,2013].forEach(function(e){[12,11,10,9,8,7,6,5,4,3,2,1].forEach(function(n){t.push({id:e+"-"+n,label:r.MONTH_NAMES[n-1]+" "+e,month:n,year:e,selected:!1})})}),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t?function(e,n){if(!Object.prototype.hasOwnProperty.call(t,e))return!1;if(Array.isArray(t[e])){if(!n)throw Error("You must specify an array of full options in order to match IDs");return n.map(function(n){return Object.assign({},n,{selected:t[e].indexOf(n.id)>-1})})}return t[e]}:function(){return!1}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(94),s=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){var e=(0,s.default)(t.results,["tags","text","votes_for","against","abstain","not_present","result"]),n=t.results.votes_for+t.results.against+t.results.abstain+t.results.not_present;return e.date=t.session.date_ts,e.url="https://parlameter.si/seja/glasovanje/"+t.session.id+"/"+t.results.motion_id,e.accepted="accepted "+(t.results.result?"aye":"nay"),e.accepted_glyph="glyphicon glyphicon-"+(t.results.result?"ok":"remove"),e.percent_votes_for=Math.floor(t.results.votes_for/n*100),e.percent_against=Math.floor(t.results.against/n*100),e.percent_abstain=Math.floor(t.results.abstain/n*100),e.percent_not_present=Math.floor(t.results.not_present/n*100),e.is_outlier=t.results.is_outlier||!1,e.has_outliers=t.results.has_outliers||!1,e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(101),i=r(s),a=n(98),o=r(a),c=n(102),l=r(c),u=n(100),d=r(u),f=n(99),v=r(f),p=n(30),h=r(p);e.default={components:{CardInfo:i.default,CardEmbed:o.default,CardShare:l.default,CardHeader:d.default,CardFooter:v.default},mixins:[h.default]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(24),i=r(s),a=n(23),o=r(a),c=n(20),l=r(c),u=n(22),d=r(u),f=n(21),v=r(f),p=n(19),h=r(p);global.$={getJSON:function(t,e){(0,o.default)(t,function(t,n,r){if(t)throw t;e(JSON.parse(r))})}},i.default.component("SearchDropdown",l.default),i.default.component("Tabs",d.default),i.default.component("Tab",v.default),e.default=function(t){var e=new i.default(Object.assign({},h.default,{cardData:t}));return new Promise(function(t){return t(e)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardFooter",props:{link:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardHeader",props:{config:Object}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",props:{url:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SearchField",props:{value:String,placeholder:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"StripedButton",props:{selected:Boolean,smallText:String,text:String,clickHandler:Function,color:String,disabled:Boolean,stripePosition:{type:String,default:"top",validator:function(t){return["top","bottom"].indexOf(t)>-1}}},computed:{className:function(){return["striped-button",{"is-disabled":this.disabled},{"is-selected":this.selected},this.color,"has-stripe-on-"+this.stripePosition]}},methods:{handleClick:function(t){this.disabled||this.clickHandler(t)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(83),i=r(s),a=function(){function t(t,e){var n=[],r=!0,s=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){s=!0,i=t}finally{try{!r&&o.return&&o.return()}finally{if(s)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(116),c=n(28),l=r(c),u=n(27),d=r(u),f=n(26),v=r(f),p=n(29),h=r(p),_=n(103),m=r(_),g=n(104),b=r(g),x=function(t){var e=t.split(". "),n=a(e,3),r=n[0],s=n[1],i=n[2];return(0,o.format)(new Date(i,s-1,r),"YYYY-M")};e.default={components:{SearchField:m.default,StripedButton:b.default},mixins:[h.default],name:"VlozeniAmandmaji",data:function(){var t=(0,d.default)(this.$options.cardData.state),e=[{id:!0,color:"binary-for",label:"sprejeti",selected:!1},{id:!1,color:"binary-against",label:"zavrnjeni",selected:!1}],n=this.$options.cardData.data.results.map(function(t){return{date:t.date,results:t.votes.map(l.default)}}),r=this.$options.cardData.data.all_tags.map(function(t){return{id:t,label:t,selected:!1}}),s=(0,v.default)();return{data:this.$options.cardData.data,slugs:this.$options.cardData.urlsData,shortenedCardUrl:"",headerConfig:{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:"Vloženi amandmaji"},cardMethod:this.$options.cardData.cardData.method,cardGroup:this.$options.cardData.cardData.group,textFilter:t("text")||"",votingDays:n,allTags:t("tags",r)||r,allMonths:t("months",s)||s,voteTypes:t("voteTypes",e)||e}},computed:{generatedCardUrl:function(){var t={};return this.selectedTags.length>0&&(t.tags=this.selectedTags),this.selectedMonths.length>0&&(t.months=this.selectedMonths),this.selectedVoteTypes.length>0&&(t.voteTypes=this.selectedVoteTypes),this.textFilter.length>0&&(t.text=this.textFilter),"https://glej.parlameter.si/"+this.cardGroup+"/"+this.cardMethod+"/"+this.data.party.id+"?state="+encodeURIComponent(JSON.stringify(t))+"&altHeader=true"},filteredVotingDays:function(){return this.getFilteredVotingDays()},tagPlaceholder:function(){return this.selectedTags.length>0?"Izbranih: "+this.selectedTags.length:"Izberi"},monthPlaceholder:function(){return this.selectedMonths.length>0?"Izbranih: "+this.selectedMonths.length:"Izberi"},dropdownItems:function(){var t=[],e=[];return this.getFilteredVotingDays(!0).forEach(function(n){var r=x(n.date);-1===e.indexOf(r)&&e.push(r),n.results.forEach(function(e){e.tags.forEach(function(e){-1===t.indexOf(e)&&t.push(e)})})}),{tags:this.allTags.filter(function(e){return t.indexOf(e.id)>-1||e.selected}),months:this.allMonths.filter(function(t){return e.indexOf(t.id)>-1||t.selected})}},selectedTags:function(){return this.allTags.filter(function(t){return t.selected}).map(function(t){return t.id})},selectedMonths:function(){return this.allMonths.filter(function(t){return t.selected}).map(function(t){return t.id})},selectedVoteTypes:function(){return this.voteTypes.filter(function(t){return t.selected}).map(function(t){return t.id})}},methods:{getFilteredVotingDays:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=function(n){var r=""===t.textFilter||n.text.toLowerCase().indexOf(t.textFilter.toLowerCase())>-1,s=e||0===t.selectedTags.length||n.tags.filter(function(e){return t.selectedTags.indexOf(e)>-1}).length>0,i=e||0===t.selectedVoteTypes.length||t.selectedVoteTypes.indexOf(n.result)>-1;return r&&s&&i};return this.votingDays.map(function(t){return{date:t.date,results:t.results.filter(n)}}).filter(function(n){if(0===n.results.length)return!1;var r=x(n.date);return e||0===t.selectedMonths.length||t.selectedMonths.indexOf(r)>-1})},toggleVoteType:function(t){var e=(0,i.default)(this.voteTypes,{id:t});e.selected=!e.selected},shortenUrl:function(t){var e=this;return new Promise(function(n){$.get("https://parla.me/shortner/generate?url="+window.encodeURIComponent(t+"&frame=true"),function(t){e.$el.querySelector(".card-content-share button").textContent="KOPIRAJ",e.shortenedCardUrl=t,n(t)})})},measurePiwik:function(t,e,n){"function"==typeof measure&&(""!==e?measure("s","session-sort",e+" "+n,""):""!==t&&measure("s","session-filter",t,""))}},watch:{generatedCardUrl:function(t){var e=this;this.shortenUrl(t).then(function(t){return e.shortenedCardUrl=t})}},beforeMount:function(){this.shortenUrl(this.generatedCardUrl)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"SearchDropdown",data:function(){return{filter:"",active:!1,focused:-1}},watch:{filter:function(){this.focus(this.focused)}},computed:{filteredItems:function(){var t=this,e=function(e){return e.filter(function(e){return e.selected||e.label.toLowerCase().indexOf(t.filter.toLowerCase())>-1}).map(function(t,e){return t.sortIndex=e,t}).sort(function(e,n){if(!t.single){if(t.alphabetise&&Boolean(e.selected)===Boolean(n.selected))return e.label.localeCompare(n.label,"sl");if(e.selected&&!n.selected)return-1;if(!e.selected&&n.selected)return 1}return e.sortIndex<n.sortIndex?-1:e.sortIndex>n.sortIndex?1:0}).map(function(t){return delete t.sortIndex,t})};return this.groups?this.groups.map(function(n){var r=e(t.items.filter(function(t){return n.items.indexOf(t.id)>-1}));return r.forEach(function(t,e){t.groupLabel=0===e?n.label:null}),r}).reduce(function(t,e){return t.concat(e)},[]):e(this.items)},selectedIds:function(){return this.filteredItems.filter(function(t){return t.selected}).map(function(t){return t.id})},adjustedPlaceholder:function(){if(!this.single)return this.placeholder;var t=this.filteredItems.filter(function(t){return t.selected})[0];return t?t.label:this.placeholder}},directives:{clickOutside:{bind:function(t,e){var n=function(n){t.contains(n.target)||t===n.target||e.value(n)};t.vueClickOutside=n,document.addEventListener("click",n)},unbind:function(t){document.removeEventListener("click",t.vueClickOutside),t.vueClickOutside=null}}},props:{alphabetise:{type:Boolean,default:!0},groups:Array,items:{type:Array,required:!0},placeholder:{type:String,required:!0},selectCallback:Function,single:{type:Boolean,default:!1},small:{type:Boolean,default:!1}},methods:{selectItem:function(t){this.single?(this.clearSelection(),this.toggleItem(t),this.toggleDropdown(!1)):this.toggleItem(t),this.selectCallback&&this.selectCallback(t)},toggleItem:function(t){var e=this.items.filter(function(e){return e.id===t})[0];this.$set(e,"selected",!e.selected)},toggleDropdown:function(t){!1===t&&(this.filter=""),this.active=t},clearSelection:function(){this.selectedIds.forEach(this.toggleItem)},focus:function(t,e){if(this.focused=Math.max(Math.min(this.filteredItems.length-1,t),-1),e){var n=this.filteredItems.slice(0,this.focused+1).map(function(t){return t.groupLabel?1:0}).reduce(function(t,e){return t+e},0),r=this.$el.lastChild,s=23*(this.focused+n);s<r.scrollTop?r.scrollTop=s:s>r.scrollTop+207&&(r.scrollTop=s-207)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tab",props:{header:{type:String,required:!0}},created:function(){this.$parent.tabs.push(this),this.$parent.headers.push(this.header)},computed:{show:function(){return this.$parent.show===this}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tabs",data:function(){return{tabs:[],headers:[],active:null,show:null}},watch:{active:function(t){this.show=this.tabs[t]}},created:function(){this.active=this.startTab||0},methods:{select:function(t){this.active!==t&&(this.active=t,this.switchCallback&&this.switchCallback(t))}},props:{dark:{type:Boolean,default:!1},switchCallback:Function,startTab:Number}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function r(){if(!arguments.length)return[];var t=arguments[0];return s(t)?t:[t]}var s=n(1);t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}t.exports=n},function(t,e,n){function r(t,e,n){var r=t[e];o.call(t,e)&&i(r,n)&&(void 0!==n||e in t)||s(t,e,n)}var s=n(50),i=n(15),a=Object.prototype,o=a.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n){"__proto__"==e&&s?s(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var s=n(66);t.exports=r},function(t,e){function n(t,e,n,r){for(var s=t.length,i=n+(r?1:-1);r?i--:++i<s;)if(e(t[i],i,t))return i;return-1}t.exports=n},function(t,e){function n(t){return s.call(t)}var r=Object.prototype,s=r.toString;t.exports=n},function(t,e){function n(t,e){return null!=t&&e in Object(t)}t.exports=n},function(t,e){function n(t,e,n){for(var r=n-1,s=t.length;++r<s;)if(t[r]===e)return r;return-1}t.exports=n},function(t,e,n){function r(t,e,n,r,_,g){var b=l(t),x=l(e),C=b?p:c(t),y=x?p:c(e);C=C==v?h:C,y=y==v?h:y;var j=C==h,k=y==h,w=C==y;if(w&&u(t)){if(!u(e))return!1;b=!0,j=!1}if(w&&!j)return g||(g=new s),b||d(t)?i(t,e,n,r,_,g):a(t,e,C,n,r,_,g);if(!(n&f)){var O=j&&m.call(t,"__wrapped__"),M=k&&m.call(e,"__wrapped__");if(O||M){var P=O?t.value():t,T=M?e.value():e;return g||(g=new s),_(P,T,n,r,g)}}return!!w&&(g||(g=new s),o(t,e,n,r,_,g))}var s=n(8),i=n(67),a=n(68),o=n(69),c=n(74),l=n(1),u=n(89),d=n(93),f=1,v="[object Arguments]",p="[object Array]",h="[object Object]",_=Object.prototype,m=_.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n,r){var c=n.length,l=c,u=!r;if(null==t)return!l;for(t=Object(t);c--;){var d=n[c];if(u&&d[2]?d[1]!==t[d[0]]:!(d[0]in t))return!1}for(;++c<l;){d=n[c];var f=d[0],v=t[f],p=d[1];if(u&&d[2]){if(void 0===v&&!(f in t))return!1}else{var h=new s;if(r)var _=r(v,p,f,t,e,h);if(!(void 0===_?i(p,v,a|o,r,h):_))return!1}}return!0}var s=n(8),i=n(9),a=1,o=2;t.exports=r},function(t,e,n){function r(t){var e=i(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||s(n,t,e)}}var s=n(56),i=n(72),a=n(13);t.exports=r},function(t,e,n){function r(t,e){return o(t)&&c(e)?l(u(t),e):function(n){var r=i(n,t);return void 0===r&&r===e?a(n,t):s(e,r,d|f)}}var s=n(9),i=n(85),a=n(16),o=n(6),c=n(12),l=n(13),u=n(2),d=1,f=2;t.exports=r},function(t,e,n){function r(t,e){return s(t,e,function(e,n){return i(t,n)})}var s=n(60),i=n(16);t.exports=r},function(t,e,n){function r(t,e,n){for(var r=-1,o=e.length,c={};++r<o;){var l=e[r],u=s(t,l);n(u,l)&&i(c,a(l,t),u)}return c}var s=n(5),i=n(63),a=n(4);t.exports=r},function(t,e){function n(t){return function(e){return null==e?void 0:e[t]}}t.exports=n},function(t,e,n){function r(t){return function(e){return s(e,t)}}var s=n(5);t.exports=r},function(t,e,n){function r(t,e,n,r){if(!o(t))return t;e=i(e,t);for(var l=-1,u=e.length,d=u-1,f=t;null!=f&&++l<u;){var v=c(e[l]),p=n;if(l!=d){var h=f[v];p=r?r(h,v,f):void 0,void 0===p&&(p=o(h)?h:a(e[l+1])?[]:{})}s(f,v,p),f=f[v]}return t}var s=n(49),i=n(4),a=n(11),o=n(7),c=n(2);t.exports=r},function(t,e,n){function r(t,e){return!!(null==t?0:t.length)&&s(t,e,0)>-1}var s=n(54);t.exports=r},function(t,e,n){function r(t){return function(e,n,r){var o=Object(e);if(!i(e)){var c=s(n,3);e=a(e),n=function(t){return c(o[t],t,o)}}var l=t(e,n,r);return l>-1?o[c?e[l]:l]:void 0}}var s=n(10),i=n(88),a=n(18);t.exports=r},function(t,e,n){var r=n(73),s=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=s},function(t,e,n){function r(t,e,n,r,l,u){var d=n&o,f=t.length,v=e.length;if(f!=v&&!(d&&v>f))return!1;var p=u.get(t);if(p&&u.get(e))return p==e;var h=-1,_=!0,m=n&c?new s:void 0;for(u.set(t,e),u.set(e,t);++h<f;){var g=t[h],b=e[h];if(r)var x=d?r(b,g,h,e,t,u):r(g,b,h,t,e,u);if(void 0!==x){if(x)continue;_=!1;break}if(m){if(!i(e,function(t,e){if(!a(m,e)&&(g===t||l(g,t,n,r,u)))return m.push(e)})){_=!1;break}}else if(g!==b&&!l(g,b,n,r,u)){_=!1;break}}return u.delete(t),u.delete(e),_}var s=n(47),i=n(48),a=n(64),o=1,c=2;t.exports=r},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){function r(t,e,n,r,a,c){var l=n&i,u=s(t),d=u.length;if(d!=s(e).length&&!l)return!1;for(var f=d;f--;){var v=u[f];if(!(l?v in e:o.call(e,v)))return!1}var p=c.get(t);if(p&&c.get(e))return p==e;var h=!0;c.set(t,e),c.set(e,t);for(var _=l;++f<d;){v=u[f];var m=t[v],g=e[v];if(r)var b=l?r(g,m,v,e,t,c):r(m,g,v,t,e,c);if(!(void 0===b?m===g||a(m,g,n,r,c):b)){h=!1;break}_||(_="constructor"==v)}if(h&&!_){var x=t.constructor,C=e.constructor;x!=C&&"constructor"in t&&"constructor"in e&&!("function"==typeof x&&x instanceof x&&"function"==typeof C&&C instanceof C)&&(h=!1)}return c.delete(t),c.delete(e),h}var s=n(71),i=1,a=Object.prototype,o=a.hasOwnProperty;t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r=n(14),s=r(Object.keys,Object);t.exports=s},function(t,e,n){function r(t){for(var e=i(t),n=e.length;n--;){var r=e[n],a=t[r];e[n]=[r,a,s(a)]}return e}var s=n(12),i=n(18);t.exports=r},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e){function n(t){return s.call(t)}var r=Object.prototype,s=r.toString;t.exports=n},function(t,e,n){function r(t,e,n){e=s(e,t);for(var r=-1,u=e.length,d=!1;++r<u;){var f=l(e[r]);if(!(d=null!=t&&n(t,f)))break;t=t[f]}return d||++r!=u?d:!!(u=null==t?0:t.length)&&c(u)&&o(f,u)&&(a(t)||i(t))}var s=n(4),i=n(87),a=n(1),o=n(11),c=n(17),l=n(2);t.exports=r},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=s(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}var s=n(3),i=Array.prototype,a=i.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=s(e,t);return n<0?void 0:e[n][1]}var s=n(3);t.exports=r},function(t,e,n){function r(t){return s(this.__data__,t)>-1}var s=n(3);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=s(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var s=n(3);t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r=n(81),s=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,o=r(function(t){var e=[];return s.test(t)&&e.push(""),t.replace(i,function(t,n,r,s){e.push(r?s.replace(a,"$1"):n||t)}),e});t.exports=o},function(t,e,n){var r=n(65),s=n(84),i=r(s);t.exports=i},function(t,e,n){function r(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var c=null==n?0:a(n);return c<0&&(c=o(r+c,0)),s(t,i(e,3),c)}var s=n(51),i=n(10),a=n(96),o=Math.max;t.exports=r},function(t,e,n){function r(t,e,n){var r=null==t?void 0:s(t,e);return void 0===r?n:r}var s=n(5);t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function r(t){return null!=t&&i(t.length)&&!s(t)}var s=n(90),i=n(17);t.exports=r},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function r(t){if(!i(t))return!1;var e=s(t);return e==o||e==c||e==a||e==l}var s=n(52),i=n(7),a="[object AsyncFunction]",o="[object Function]",c="[object GeneratorFunction]",l="[object Proxy]";t.exports=r},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){var r=n(59),s=n(70),i=s(function(t,e){return null==t?{}:r(t,e)});t.exports=i},function(t,e,n){function r(t){return a(t)?s(o(t)):i(t)}var s=n(61),i=n(62),a=n(6),o=n(2);t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r=n(0)(n(32),n(109),null,null,"f4470a3a");t.exports=r.exports},function(t,e,n){var r=n(0)(n(33),n(110),null,null,"907759fe");t.exports=r.exports},function(t,e,n){var r=n(0)(n(34),n(106),null,null,"4e12921a");t.exports=r.exports},function(t,e,n){var r=n(0)(n(35),n(115),null,null,"718207d8");t.exports=r.exports},function(t,e,n){var r=n(0)(n(36),n(108),null,null,"7b8b88e9");t.exports=r.exports},function(t,e,n){function r(t){var e;e=n(43),e.__inject__&&e.__inject__(t)}var s=n(0)(n(37),n(107),r,"data-v-1989ce77","34c534ce");t.exports=s.exports},function(t,e,n){function r(t){var e;e=n(46),e.__inject__&&e.__inject__(t)}var s=n(0)(n(38),n(114),r,"data-v-c4411164","992c6420");t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tab-content"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[t.config.alternative?[n("div",{staticClass:"alt-header-container"},[n("div",{staticClass:"alt-header"},[t.config.circleText?n("div",{staticClass:"media-object img-circle session-logo",class:t.config.circleClass},[n("b",[t._v(t._s(t.config.circleText))])]):t.config.circleImage?n("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+t.config.circleImage+".png"}}):t.config.circleIcon?n("div",{staticClass:"icon-circle"},[n("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+t.config.circleIcon+".svg"}})]):t._e(),t._v(" "),n("div",{staticClass:"header-info-container"},[n("h1",{domProps:{innerHTML:t._s(t.config.heading)}}),t._v(" "),n("h2",{staticClass:"partyinfo"},[t._v(t._s(t.config.subheading))]),t._v(" "),n("h2",{staticClass:"cardname"},[t._v(t._s(t.config.title))])])]),t._v(" "),n("div",{staticClass:"alt-header-border"})])]:[n("div",{staticClass:"card-header-border"}),t._v(" "),n("h1",[t._v(t._s(t.config.title))])]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"search-field",attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-share hidden"},[n("div",{staticClass:"card-back-content"},[n("div",{staticClass:"share-content"},[n("label",{attrs:{for:"share-url"}},[t._v("Neposredna povezava do kartice")]),t._v(" "),n("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:t.url}}),t._v(" "),n("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[t._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-embed hidden"},[n("div",{staticClass:"card-back-content"},[n("div",{staticClass:"embed-content"},[n("div",{staticClass:"embed-divider"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"embed-divider"}),t._v(" "),n("div",{staticClass:"embed-script"},[n("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":t.url},domProps:{innerHTML:t._s(t.embedCode)}}),t._v(" "),n("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[t._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"embed-switch-container"},[n("div",{staticClass:"embed-label"},[t._v("Podatki naj se vedno osvežujejo")]),t._v(" "),n("div",{staticClass:"embed-switch-big-box"},[n("div",{staticClass:"embed-switch-box"},[n("div",{staticClass:"embed-switch"},[n("div",{staticClass:"embed-switches"},[n("div",{staticClass:"leftswitch"},[t._v("DA")]),t._v(" "),n("div",{staticClass:"rightswitch"},[t._v("NE")])])])]),t._v(" "),n("div",{staticClass:"embed-switch-ball"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-footer"},[n("div",{staticClass:"card-logo hidden"},[n("a",{attrs:{href:t.link}},[n("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),t._v(" "),n("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),t._v(" "),n("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),t._v(" "),n("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[t._v("i")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){t.toggleDropdown(!1)},expression:"function() { toggleDropdown(false) }"}],class:["search-dropdown",{small:t.small}]},[t.selectedIds.length>0?n("div",{staticClass:"search-dropdown-clear",on:{click:t.clearSelection}},[t._v("×")]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"search-dropdown-input",attrs:{type:"text",placeholder:t.adjustedPlaceholder},domProps:{value:t.filter},on:{focus:function(e){t.toggleDropdown(!0)},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;e.preventDefault(),t.selectItem(t.filteredItems[t.focused].id)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.focus(t.focused-1,!0)},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.focus(t.focused+1,!0)}],input:function(e){e.target.composing||(t.filter=e.target.value)}}}),t._v(" "),n("ul",{class:["search-dropdown-options",{visible:this.active}],on:{mouseleave:function(e){t.focus(-1)}}},[t._l(t.filteredItems,function(e,r){return[e.groupLabel?n("li",{staticClass:"search-dropdown-group-label"},[t._v("\n        "+t._s(e.groupLabel)+"\n      ")]):t._e(),t._v(" "),n("li",{class:{selected:e.selected,focused:t.focused===r},on:{click:function(n){t.selectItem(e.id)},mouseenter:function(e){t.focus(r)}}},[n("div",{staticClass:"search-dropdown-label"},[t._v(t._s(e.label))]),t._v(" "),e.count?n("div",[t._v(t._s(e.count))]):t._e()])]})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["tabs",{dark:t.dark}]},[n("ul",{staticClass:"tabs-headers"},t._l(t.headers,function(e,r){return n("li",{class:["tabs-header",{active:r===t.active}],on:{click:function(e){t.select(r)}}},[n("span",[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"tabs-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-container card-halfling card-glasovanja-seja",attrs:{id:t.$options.cardData.cardData._id}},[n("card-header",{attrs:{config:t.headerConfig}}),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"card-content-front"},[n("div",{staticClass:"filters"},[n("div",{staticClass:"filter text-filter"},[n("div",{staticClass:"filter-label"},[t._v("Išči po naslovu glasovanja")]),t._v(" "),n("search-field",{model:{value:t.textFilter,callback:function(e){t.textFilter=e},expression:"textFilter"}})],1),t._v(" "),n("div",{staticClass:"filter tag-dropdown"},[n("div",{staticClass:"filter-label"},[t._v("Matično delovno telo")]),t._v(" "),n("search-dropdown",{attrs:{items:t.dropdownItems.tags,placeholder:t.tagPlaceholder}})],1),t._v(" "),n("div",{staticClass:"filter month-dropdown"},[n("div",{staticClass:"filter-label"},[t._v("Časovno obdobje")]),t._v(" "),n("search-dropdown",{attrs:{items:t.dropdownItems.months,placeholder:t.monthPlaceholder,alphabetise:!1}})],1),t._v(" "),n("div",{staticClass:"filter button-filter"},[n("div",{staticClass:"filter-label"},[t._v("Prikaži")]),t._v(" "),n("div",{staticClass:"filter-content"},t._l(t.voteTypes,function(e){return n("striped-button",{key:e.id,attrs:{color:e.color,selected:t.selectedVoteTypes.indexOf(e.id)>-1,"small-text":e.label,"click-handler":function(){return t.toggleVoteType(e.id)}}})}))])]),t._v(" "),n("div",{staticClass:"date-list",attrs:{id:"votingCard"}},t._l(t.filteredVotingDays,function(e){return n("div",{key:e.date,staticClass:"session_voting"},[n("div",{staticClass:"date"},[t._v(t._s(e.date))]),t._v(" "),t._l(e.results,function(e,r){return n("div",{key:r,staticClass:"clearfix single_voting"},[n("a",{attrs:{href:e.url}},[e.is_outlier?n("div",{staticClass:"fire-badge"}):t._e(),t._v(" "),e.has_outliers&&e.is_outlier?n("div",{staticClass:"lightning-badge"}):t._e(),t._v(" "),e.has_outliers&&!e.is_outlier?n("div",{staticClass:"lightning-badge",staticStyle:{left:"-37px",position:"absolute"}}):t._e(),t._v(" "),n("div",{staticClass:"col-md-1"},[n("div",{class:e.accepted},[n("p",[n("i",{class:e.accepted_glyph})])])]),t._v(" "),n("div",{staticClass:"col-md-11 border-left"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"session_title"},[n("p",[t._v("\n                      "+t._s(e.text.split(" ").length>19?e.text.split(" ").splice(0,19).join(" ")+" ...":e.text)+"\n                    ")])])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"session_votes"},[n("div",{staticClass:"progress smallbar"},[n("div",{staticClass:"progress-bar fontblue",style:{width:e.percent_votes_for+"%"}},[n("span",{staticClass:"sr-only"},[t._v(t._s(e.percent_votes_for)+"% votes for")])]),t._v(" "),n("div",{staticClass:"progress-bar funblue",style:{width:e.percent_against+"%"}},[n("span",{staticClass:"sr-only"},[t._v(t._s(e.percent_against)+"% votes for")])]),t._v(" "),n("div",{staticClass:"progress-bar ignoreblue",style:{width:e.percent_abstain+"%"}},[n("span",{staticClass:"sr-only"},[t._v(t._s(e.percent_abstain)+"% votes for")])]),t._v(" "),n("div",{staticClass:"progress-bar noblue",style:{width:e.percent_not_present+"%"}},[n("span",{staticClass:"sr-only"},[t._v(t._s(e.percent_not_present)+"% votes for")])])]),t._v(" "),n("div",{staticClass:"row "},[n("div",{staticClass:"col-xs-3 "},[t._v("\n                        "+t._s(e.votes_for)+"\n                        "),n("div",{staticClass:"type "},[t._v("Za")]),t._v(" "),n("div",{staticClass:"indicator aye "},[t._v(" ")])]),t._v(" "),n("div",{staticClass:"col-xs-3 "},[t._v("\n                        "+t._s(e.against)+"\n                        "),n("div",{staticClass:"type "},[t._v("Proti")]),t._v(" "),n("div",{staticClass:"indicator ney "},[t._v(" ")])]),t._v(" "),n("div",{staticClass:"col-xs-3 "},[t._v("\n                        "+t._s(e.abstain)+"\n                        "),n("div",{staticClass:"type "},[t._v("Vzdržan")]),t._v(" "),n("div",{staticClass:"indicator abstention "},[t._v(" ")])]),t._v(" "),n("div",{staticClass:"col-xs-3 "},[t._v("\n                        "+t._s(e.not_present)+"\n                        "),n("div",{staticClass:"type "},[t._v("Niso")]),t._v(" "),n("div",{staticClass:"indicator not "},[t._v(" ")])])])])])])])])})],2)}))]),t._v(" "),n("card-info",[n("p",{staticClass:"info-text lead"},[t._v("Pregled vseh glasovanj, ki so se zgodila na seji")]),t._v(" "),n("p",{staticClass:"info-text heading"},[t._v("METODOLOGIJA")]),t._v(" "),n("p",{staticClass:"info-text"},[t._v("Za vsa glasovanja na posamezni seji preštejemo vse glasove (ZA, PROTI, VZDRŽAN/-A) in število poslancev, ki niso glasovali, ter izpišemo rezultate.")]),t._v(" "),n("p",{staticClass:"info-text"},[t._v("Nabor glasovanj pridobimo s spletnega mesta "),n("a",{attrs:{href:"http://www.dz-rs.si"}},[t._v("DZ RS")]),t._v(".")]),t._v(" "),n("p",{staticClass:"info-text"},[t._v("Za označevanje nepričakovanih rezultatov glasovanj uporabljamo probabilistično metodo analize glavnih komponent, "),n("a",{attrs:{href:"http://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html"}},[t._v("kot je implementirana v knjižicah scikit-learn")]),t._v(" in opisana v "),n("a",{attrs:{href:"http://www.miketipping.com/papers/met-mppca.pdf"}},[t._v("M. Tipping and C. Bishop, Probabilistic Principal Component Analysis, Journal of the Royal Statistical Society, Series B, 61, Part 3, pp. 611-622")]),t._v(".")]),t._v(" "),n("p",{staticClass:"info-text"},[t._v("Vsa glasovanja pretvorimo v štiridimenzionalne vektorje, kjer vsaka od komponent pomeni število oddanih glasovnic s specifičnim glasom (ZA, PROTI, NI, VZDRŽAN). PCA model prilagodimo matriki in s funkcijo "),n("a",{attrs:{href:"https://github.com/scikit-learn/scikit-learn/blob/14031f6/sklearn/decomposition/pca.py#L485"}},[t._v("score_samples")]),t._v(' pridobimo "log-likelihood" vsakega glasovanja v našem modelu. Model deluje tako, da skuša pri prilagajanju "log-likelihood" vrednost maksimizirati za čim več glasovanj. Ko smo pridobili vse "log-likelihood" vrednosti jih razvrstimo od najmanjše proti največji in uporabimo četrtino vseh glasovanj, ki se modelu najslabše prilegajo. Ker v primerjavi z našim modelom ta glasovanja najbolj izstopajo, so kot taka najbolj "nepričakovana." V kartici jih označimo z ikono ognja.')])]),t._v(" "),n("card-embed",{attrs:{url:t.generatedCardUrl}}),t._v(" "),n("card-share",{attrs:{url:t.shortenedCardUrl}})],1),t._v(" "),n("card-footer",{attrs:{link:t.slugs.base}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className,on:{click:t.handleClick}},[t.smallText?n("div",{staticClass:"small-text"},[t._v(t._s(t.smallText))]):t._e(),t._v(" "),t.text?n("div",{staticClass:"text"},[t._v(t._s(t.text))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content-info hidden"},[n("div",{staticClass:"card-back-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports=require("date-fns")}]);