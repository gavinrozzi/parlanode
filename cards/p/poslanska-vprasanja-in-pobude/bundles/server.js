module.exports=function(e){function a(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}var r={};return a.m=e,a.c=r,a.d=function(e,r,n){a.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a(a.s=3)}([function(e,a){e.exports=function(e,a,r,n,s){var t,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(t=e,o=e.default);var l="function"==typeof o?o.options:o;a&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns),n&&(l._scopeId=n);var c;if(s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=r),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(e,a){return c.call(a),d(e,a)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:t,exports:o,options:l}}},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.MONTH_NAMES=["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],a.PORTRAIT_ROOT_URL="https://cdn.parlameter.si/v1/parlassets/img/people/square/",a.ICONS_ROOT_URL="https://cdn.parlameter.si/v1/parlassets/icons/",a.ORGS_ROOT_URL="https://glej.parlameter.si/wb/getWorkingBodies/",a.RIPPLE_DURATION=600},function(e,a){e.exports={partyLink:{govori:"/govori/",base:"/poslanska-skupina/",pregled:"/pregled/",glasovanja:"/glasovanja/"},personLink:{govori:"/govori/",base:"/poslanec/",pregled:"/pregled/",glasovanja:"/glasovanja/"},sessionLink:{prisotnost:"/seja/prisotnost/",glasovanje:"/seja/glasovanje/",transkript:"/seja/transkript/",glasovanja:"/seja/glasovanja/"},person:{2:{slug:"anja-bah-zibert"},3:{slug:"urska-ban"},4:{slug:"roberto-battelli"},5:{slug:"julijana-bizjak-mlakar"},6:{slug:"srecko-blazic"},7:{slug:"mirjam-bon-klanjscek"},8:{slug:"tilen-bozic"},9:{slug:"alenka-bratusek"},10:{slug:"franc-breznik"},11:{slug:"milan-brglez"},12:{slug:"nada-brinovsek"},13:{slug:"miro-cerar"},14:{slug:"tanja-cink"},15:{slug:"andrej-cus"},16:{slug:"erika-dekleva"},17:{slug:"iva-dimic"},18:{slug:"bojan-dobovsek"},19:{slug:"marjan-dolinsek"},20:{slug:"karl-viktor-erjavec"},21:{slug:"marko-ferluga"},22:{slug:"tomaz-gantar"},23:{slug:"jelka-godec"},24:{slug:"laszlo-goncz"},25:{slug:"vinko-gorenak"},26:{slug:"branko-grims"},27:{slug:"irena-groselj-kosnik"},28:{slug:"margareta-gucek-zakosek"},29:{slug:"primoz-hainz"},30:{slug:"matjaz-han"},31:{slug:"matjaz-hanzek"},32:{slug:"jozef-horvat"},33:{slug:"mitja-horvat"},34:{slug:"ivan-hrsak"},35:{slug:"eva-irgl"},36:{slug:"janez-jansa"},37:{slug:"franc-jursa"},38:{slug:"andreja-katic"},39:{slug:"aleksander-kavcic"},40:{slug:"anita-kolesa"},41:{slug:"benedikt-kopmajer"},42:{slug:"miha-kordis"},43:{slug:"ksenija-korenjak-kramar"},44:{slug:"irena-kotnik"},45:{slug:"marjana-kotnik-poropat"},46:{slug:"lilijana-kozlovic"},47:{slug:"danijel-krivec"},48:{slug:"simona-kustec-lipicer"},49:{slug:"zvonko-lah"},50:{slug:"franc-laj"},51:{slug:"suzana-lep-simenko"},52:{slug:"marinka-levicar"},53:{slug:"tomaz-lisec"},54:{slug:"anze-logar"},55:{slug:"zan-mahnic"},56:{slug:"klavdija-markez"},57:{slug:"dragan-matic"},58:{slug:"luka-mesec"},59:{slug:"jani-moderndorfer"},60:{slug:"jasna-murgel"},61:{slug:"bojana-mursic"},62:{slug:"matjaz-nemec"},63:{slug:"ljudmila-novak"},64:{slug:"bojan-podkrajsek"},65:{slug:"marko-pogacnik"},66:{slug:"marijan-pojbic"},67:{slug:"andreja-potocnik"},68:{slug:"ivan-prelog"},69:{slug:"uros-prikl"},70:{slug:"branislav-rajic"},71:{slug:"danilo-anton-ranc"},72:{slug:"kamal-izidor-shaker"},73:{slug:"janja-sluga"},74:{slug:"vojka-sergan"},75:{slug:"andrej-sircelj"},76:{slug:"ivan-skodnik"},77:{slug:"marusa-skopac"},78:{slug:"joze-tanko"},79:{slug:"matej-tasner-vatovec"},80:{slug:"violeta-tomic"},81:{slug:"matej-tonin"},82:{slug:"franc-trcek"},83:{slug:"janko-veber"},84:{slug:"vesna-vervega"},85:{slug:"peter-vilfan"},86:{slug:"jernej-vrtovec"},87:{slug:"simon-zajc"},88:{slug:"igor-zorcic"},89:{slug:"branko-zorman"},90:{slug:"dejan-zidan"},91:{slug:"ljubo-znidar"},92:{slug:"dusan-verbic"},93:{slug:"franc-krizanic"},94:{slug:"jana-jenko"},95:{slug:"marija-bacic"},96:{slug:"marija-antonija-kovacic"},1329:{slug:"mateja-kozuh-novak"},1354:{slug:"bojan-krajnc"},1355:{slug:"sasa-tabakovic"},1356:{slug:"jan-skoberne"},1357:{slug:"dusan-radic"},2933:{slug:"teja-ljubic"},2934:{slug:"vlasta-pockaj"}},base:"https://parlameter.si",party:{1:{acronym:"smc",realAcronym:"SMC",slug:"ps-stranka-modernega-centra"},2:{acronym:"imns",realAcronym:"IMNS",slug:"ps-italijanske-in-madzarske-narodne-skupnosti"},3:{acronym:"desus",realAcronym:"DeSUS",slug:"ps-demokratska-stranka-upokojencev-slovenije"},4:{acronym:"zaab",realAcronym:"ZAAB",slug:"ps-zaveznistvo-alenke-bratusek"},5:{acronym:"sds",realAcronym:"SDS",slug:"ps-slovenska-demokratska-stranka"},6:{acronym:"nsi",realAcronym:"NSI",slug:"ps-nova-slovenija"},7:{acronym:"sd",realAcronym:"SD",slug:"ps-socialni-demokrati"},8:{acronym:"levica",realAcronym:"Levica",slug:"ps-zdruzena-levica"},9:{acronym:"",realAcronym:"",slug:"kolegij-predsednika-drzavnega-zbora"},10:{acronym:"",realAcronym:"",slug:"komisija-za-nadzor-javnih-financ"},11:{acronym:"",realAcronym:"",slug:"komisija-za-narodni-skupnosti"},12:{acronym:"",realAcronym:"",slug:"komisija-za-odnose-s-slovenci-v-zamejstvu-in-po-svetu"},13:{acronym:"",realAcronym:"",slug:"komisija-za-peticije-ter-za-clovekove-pravice-in-enake-moznosti"},14:{acronym:"",realAcronym:"",slug:"komisija-za-poslovnik"},15:{acronym:"",realAcronym:"",slug:"mandatno-volilna-komisija"},16:{acronym:"",realAcronym:"",slug:"odbor-za-delo-druzino-socialne-zadeve-in-invalide"},17:{acronym:"",realAcronym:"",slug:"odbor-za-finance-in-monetarno-politiko"},18:{acronym:"",realAcronym:"",slug:"odbor-za-gospodarstvo"},19:{acronym:"",realAcronym:"",slug:"odbor-za-infrastrukturo-okolje-in-prostor"},20:{acronym:"",realAcronym:"",slug:"odbor-za-izobrazevanje-znanost-sport-in-mladino"},21:{acronym:"",realAcronym:"",slug:"odbor-za-kmetijstvo-gozdarstvo-in-prehrano"},22:{acronym:"",realAcronym:"",slug:"odbor-za-kulturo"},23:{acronym:"",realAcronym:"",slug:"odbor-za-notranje-zadeve-javno-upravo-in-lokalno-samoupravo"},24:{acronym:"",realAcronym:"",slug:"odbor-za-obrambo"},25:{acronym:"",realAcronym:"",slug:"odbor-za-pravosodje"},26:{acronym:"",realAcronym:"",slug:"odbor-za-zadeve-evropske-unije"},27:{acronym:"",realAcronym:"",slug:"odbor-za-zdravstvo"},28:{acronym:"",realAcronym:"",slug:"odbor-za-zunanjo-politiko"},29:{acronym:"",realAcronym:"",slug:"ustavna-komisija"},30:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-sveta-evrope"},31:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-nato"},32:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-organizacije-za-varnost-in-sodelovanje-v-evropi"},33:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-dimenziji-srednjeevropske-pobude"},34:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-unije-za-sredozemlje"},35:{acronym:"",realAcronym:"",slug:"nacionalna-skupina-interparlamentarne-unije-v-drzavnem-zboru"},36:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-seecp"},37:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-argentino"},38:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-albanijo"},39:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-avstralijo"},40:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-avstrijo"},41:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-azerbajdzanom"},42:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-belgijo"},43:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-bolgarijo"},44:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-bosno-in-hercegovino"},45:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-brazilijo"},46:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-cesko"},47:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-crno-goro"},48:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-dansko"},49:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-estonijo"},50:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-finsko"},51:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-francijo"},52:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-grcijo"},53:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-hrvasko"},54:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-indijo"},55:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-italijo"},56:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-irsko"},57:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-izraelom"},58:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-japonsko"},59:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kanado"},60:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kitajsko"},61:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kubo"},62:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-litvo"},63:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-madzarsko"},64:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-makedonijo"},65:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-malto"},66:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-mehiko"},67:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-nemcijo"},68:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-nizozemsko"},69:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-norvesko"},70:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-romunijo"},71:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-rusijo"},72:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-slovasko"},73:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-srbijo"},74:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-spanijo"},75:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-svedsko"},76:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-svico"},77:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-turcijo"},78:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-ukrajino"},79:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-veliko-britanijo"},80:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-zdruzenimi-drzavami-amerike"},81:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-iranom"},82:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-ciprom"},83:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-poljsko"},84:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-marokom"},85:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-islandijo"},86:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-liechtensteinom"},87:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-portugalsko"},88:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-luksemburgom"},89:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-egiptom"},90:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kosovom"},91:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-latvijo"},92:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-gruzijo"},93:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-juzno-korejo"},94:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kuvajtom"},95:{acronym:"dz",realAcronym:"DZ",slug:"drzavni-zbor"},96:{acronym:"",realAcronym:"",slug:"ostali"},97:{acronym:"ps-np",realAcronym:"PS NP",slug:"ps-nepovezanih-poslancev"},98:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-o-ugotavljanju-zlorab-v-slovenskem-bancnem-sistemu-ter-ugotavljanju-vzrokov-in-odgovornosti-za-ze-drugo-sanacijo-bancnega-sistema-v-samostojni-sloveniji"},100:{acronym:"nep-bd",realAcronym:"NeP - BD",slug:"nepovezani-poslanec-bojan-dobovsek"},101:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-za-ugotavljanje-politicne-odgovornosti-nosilcev-javnih-funkcij-pri-investiciji-v-blok-6-termoelektrarne-sostanj"},102:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-savdsko-arabijo"},103:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-turkmenistanom"},104:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-venezuelo"},105:{acronym:"",realAcronym:"",slug:"komisija-za-nadzor-obvescevalnih-in-varnostnih-sluzb"},106:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-o-ugotavljanju-zlorab-v-slovenskem-zdravstvenem-sistemu-na-podrocju-prodaje-in-nakupa-zilnih-opornic"},107:{acronym:"nep-mbk",realAcronym:"NeP - MBK",slug:"nepovezana-poslanka-mirjam-bon-klanjscek"},108:{acronym:"nep-ac",realAcronym:"NeP - AČ",slug:"nepovezani-poslanec-andrej-cus"},109:{acronym:"ps-np",realAcronym:"PS NP",slug:"ps-nepovezanih-poslancev"},110:{acronym:"nep-ab",realAcronym:"NeP - AB",slug:"nepovezana-poslanka-alenka-bratusek"},111:{acronym:"nep-zl",realAcronym:"NeP - ZL",slug:"nepovezani-poslanec-zvonko-lah"},112:{acronym:"nep-jm",realAcronym:"NeP - JM",slug:"nepovezani-poslanec-jani-moderndorfer"},113:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-alzirijo"},114:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-moldavijo"},115:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-armenijo"},116:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-belorusijo"},117:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-cilom"},118:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kazahstanom"},119:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-novo-zelandijo"},120:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-palestino"},121:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-senegalom"},122:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-tunizijo"},123:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-zdruzenimi-arabskimi-emirati"}}}},function(e,a,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var s=r(4),t=n(s),o=r(5),i=n(o),l=r(6),c=n(l),u=r(9),d=n(u),m=r(12),p=n(m),v=r(15),g=n(v);global.$={getJSON:function(e,a){(0,i.default)(e,function(e,r,n){if(e)throw e;a(JSON.parse(n))})},get:function(e,a){(0,i.default)(e,function(e,r,n){if(e)throw e;a(n)})}},t.default.component("SearchDropdown",c.default),t.default.component("Tabs",d.default),t.default.component("Tab",p.default),a.default=function(e){var a=new t.default(Object.assign({},g.default,{cardData:e}));return new Promise(function(e){return e(a)})}},function(e,a){e.exports=require("vue")},function(e,a){e.exports=require("request")},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(7),s=r(8),t=r(0),o=t(n.a,s.a,null,null,"20e7b423");a.default=o.exports},function(e,a,r){"use strict";a.a={name:"SearchDropdown",data:function(){return{filter:"",active:!1,focused:-1}},watch:{filter:function(){this.focus(this.focused)}},computed:{filteredItems:function(){var e=this,a=function(a){return a.filter(function(a){return a.selected||a.label.toLowerCase().indexOf(e.filter.toLowerCase())>-1}).map(function(e,a){return e.sortIndex=a,e}).sort(function(a,r){if(!e.single){if(e.alphabetise&&Boolean(a.selected)===Boolean(r.selected))return a.label.localeCompare(r.label,"sl");if(a.selected&&!r.selected)return-1;if(!a.selected&&r.selected)return 1}return a.sortIndex<r.sortIndex?-1:a.sortIndex>r.sortIndex?1:0}).map(function(e){return delete e.sortIndex,e})};return this.groups?this.groups.map(function(r){var n=a(e.items.filter(function(e){return r.items.indexOf(e.id)>-1}));return n.forEach(function(e,a){e.groupLabel=0===a?r.label:null}),n}).reduce(function(e,a){return e.concat(a)},[]):a(this.items)},selectedIds:function(){return this.filteredItems.filter(function(e){return e.selected}).map(function(e){return e.id})},adjustedPlaceholder:function(){if(!this.single)return this.placeholder;var e=this.filteredItems.filter(function(e){return e.selected})[0];return e?e.label:this.placeholder}},directives:{clickOutside:{bind:function(e,a){var r=function(r){e.contains(r.target)||e===r.target||a.value(r)};e.vueClickOutside=r,document.addEventListener("click",r)},unbind:function(e){document.removeEventListener("click",e.vueClickOutside),e.vueClickOutside=null}}},props:{alphabetise:{type:Boolean,default:!0},groups:Array,items:{type:Array,required:!0},placeholder:{type:String,required:!0},selectCallback:Function,single:{type:Boolean,default:!1},small:{type:Boolean,default:!1}},methods:{selectItem:function(e){this.single?(this.clearSelection(),this.toggleItem(e),this.toggleDropdown(!1)):this.toggleItem(e),this.selectCallback&&this.selectCallback(e)},toggleItem:function(e){var a=this.items.filter(function(a){return a.id===e})[0];this.$set(a,"selected",!a.selected)},toggleDropdown:function(e){!1===e&&(this.filter=""),this.active=e},clearSelection:function(){this.selectedIds.forEach(this.toggleItem)},focus:function(e,a){if(this.focused=Math.max(Math.min(this.filteredItems.length-1,e),-1),a){var r=this.filteredItems.slice(0,this.focused+1).map(function(e){return e.groupLabel?1:0}).reduce(function(e,a){return e+a},0),n=this.$el.lastChild,s=23*(this.focused+r);s<n.scrollTop?n.scrollTop=s:s>n.scrollTop+207&&(n.scrollTop=s-207)}}}}},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){e.toggleDropdown(!1)},expression:"function() { toggleDropdown(false) }"}],class:["search-dropdown",{small:e.small}]},[e._ssrNode((e.selectedIds.length>0?'<div class="search-dropdown-clear">×</div>':"\x3c!----\x3e")+' <input type="text"'+e._ssrAttr("placeholder",e.adjustedPlaceholder)+e._ssrAttr("value",e.filter)+' class="search-dropdown-input"> <ul'+e._ssrClass(null,["search-dropdown-options",{visible:this.active}])+">"+e._ssrList(e.filteredItems,function(a,r){return(a.groupLabel?'<li class="search-dropdown-group-label">'+e._ssrEscape("\n        "+e._s(a.groupLabel)+"\n      ")+"</li>":"\x3c!----\x3e")+" <li"+e._ssrClass(null,{selected:a.selected,focused:e.focused===r})+'><div class="search-dropdown-label">'+e._ssrEscape(e._s(a.label))+"</div> "+(a.count?"<div>"+e._ssrEscape(e._s(a.count))+"</div>":"\x3c!----\x3e")+"</li>"})+"</ul>")])},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(10),s=r(11),t=r(0),o=t(n.a,s.a,null,null,"0a404470");a.default=o.exports},function(e,a,r){"use strict";a.a={name:"Tabs",data:function(){return{tabs:[],headers:[],active:null,show:null}},watch:{active:function(e){this.show=this.tabs[e]}},created:function(){this.active=this.startTab||0},methods:{select:function(e){this.active!==e&&(this.active=e,this.switchCallback&&this.switchCallback(e))}},props:{dark:{type:Boolean,default:!1},switchCallback:Function,startTab:Number}}},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{class:["tabs",{dark:e.dark}]},[e._ssrNode('<ul class="tabs-headers">'+e._ssrList(e.headers,function(a,r){return"<li"+e._ssrClass(null,["tabs-header",{active:r===e.active}])+"><span>"+e._ssrEscape(e._s(a))+"</span></li>"})+"</ul> "),e._ssrNode('<div class="tabs-content">',"</div>",[e._t("default")],2)],2)},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(13),s=r(14),t=r(0),o=t(n.a,s.a,null,null,"42a1ca8a");a.default=o.exports},function(e,a,r){"use strict";a.a={name:"Tab",props:{header:{type:String,required:!0}},created:function(){this.$parent.tabs.push(this),this.$parent.headers.push(this.header)},computed:{show:function(){return this.$parent.show===this}}}},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"tab-content"},[e._t("default")],2)},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(16),s=r.n(n),t=r(47),o=r(0),i=o(s.a,t.a,null,null,"f7f2748c");a.default=i.exports},function(e,a,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var s=r(17),t=n(s),o=r(40),i=n(o);a.default={name:"PoslanskaVprasanjaInPobudePoslanca",mixins:[t.default],components:{QuestionList:i.default},data:function(){return{data:this.$options.cardData.data,headerConfig:{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.$options.cardData.cardData.name}}}}},function(e,a,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var s=r(18),t=n(s),o=r(39),i=n(o),l=r(2),c=n(l);a.default={data:function(){return{slugs:c.default}},components:{CardWrapper:t.default},mixins:[i.default]}},function(e,a,r){"use strict";function n(e){var a;a=r(19),a.__inject__&&a.__inject__(e)}Object.defineProperty(a,"__esModule",{value:!0});var s=r(20),t=r.n(s),o=r(38),i=r(0),l=n,c=i(t.a,o.a,l,"data-v-7af97c02","78e28f1d");a.default=c.exports},function(e,a){},function(e,a,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var s=r(1),t=r(21),o=n(t),i=r(24),l=n(i),c=r(28),u=n(c),d=r(31),m=n(d),p=r(34),v=n(p);a.default={name:"CardWrapper",components:{CardInfo:o.default,CardEmbed:l.default,CardShare:u.default,CardHeader:m.default,CardFooter:v.default},data:function(){return{currentBack:null,transitionClass:null}},props:{contentClass:[String,Object],contentFrontClass:[String,Object],cardUrl:String,headerConfig:Object},methods:{toggleBack:function(e){var a=this,r=this.$el.querySelector(".card-content");this.currentBack!==e?(this.transitionClass=["covered","clicked-"+e],window.setTimeout(function(){r.style.height=r.offsetHeight+"px",a.currentBack=e},s.RIPPLE_DURATION/2),window.setTimeout(function(){a.transitionClass=null},s.RIPPLE_DURATION)):(this.transitionClass=["revealed","clicked-"+e],window.setTimeout(function(){a.currentBack=null,r.style.height=null},s.RIPPLE_DURATION/2),window.setTimeout(function(){a.transitionClass=null},s.RIPPLE_DURATION))}},watch:{currentBack:function(e){this.$emit("backChange",e)}}}},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(22),s=r.n(n),t=r(23),o=r(0),i=o(s.a,t.a,null,null,"718207d8");a.default=i.exports},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"CardInfo"}},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{staticClass:"card-content-info"},[e._ssrNode('<div class="card-back-content">',"</div>",[e._t("default")],2)])},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(25),s=r.n(n),t=r(27),o=r(0),i=o(s.a,t.a,null,null,"f4470a3a");a.default=i.exports},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(26);a.default={name:"CardEmbed",computed:{embedCode:function(){var e=this.url;return this.refresh||(e=""+this.url.split("?")[0]+(0,n.format)(new Date,"D. M. YYYY")+"?"+this.url.split("?")[1]),"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+e+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String},data:function(){return{refresh:!0,copied:!1}},methods:{toggleEmbedSwitch:function(){this.refresh=!this.refresh},copyEmbedCode:function(){this.$refs.embedInput.select();var e=!1;try{e=document.execCommand("copy")}catch(e){return e}this.$refs.embedInput.blur(),this.copied=e}}}},function(e,a){e.exports=require("date-fns")},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{staticClass:"card-content-embed"},[e._ssrNode('<div class="card-back-content"><div class="embed-content"><div class="embed-divider"></div> <div class="embed-switch-container"><div class="embed-label">Podatki naj se vedno osvežujejo</div> <div class="embed-switch-big-box"><div'+e._ssrClass(null,["embed-switch-box",{off:!this.refresh}])+'><div class="embed-switch"><div class="embed-switches"><div class="leftswitch">DA</div> <div class="rightswitch">NE</div></div></div></div> <div class="embed-switch-ball"></div></div></div> <div class="embed-divider"></div> <div class="embed-script"><textarea data-id'+e._ssrAttr("data-url",e.url)+' class="form-control">'+e.embedCode+'</textarea> <button class="btn-parlameter btn-full-width btn-blue btn-copy-embed">'+e._ssrEscape(e._s(e.copied?"SKOPIRANO!":"KOPIRAJ"))+"</button></div></div></div>")])},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(29),s=r.n(n),t=r(30),o=r(0),i=o(s.a,t.a,null,null,"7b8b88e9");a.default=i.exports},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"CardShare",data:function(){return{shortenedUrl:"",copied:!1}},props:{url:String},methods:{shortenUrl:function(){var e=this;return new Promise(function(){$.get("https://parla.me/shortner/generate?url="+encodeURIComponent(e.url+"&frame=true"),function(a){e.shortenedUrl=a,e.copied=!1,e.$nextTick(function(){e.$refs.urlInput.select()})})})},copyLink:function(){this.$refs.urlInput.focus(),this.$refs.urlInput.setSelectionRange(0,this.$refs.urlInput.value.length);var e=!1;try{e=document.execCommand("copy")}catch(e){return e}this.copied=e}},watch:{url:function(){this.shortenUrl()}},mounted:function(){this.shortenUrl()}}},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{staticClass:"card-content-share"},[e._ssrNode('<div class="card-back-content"><div class="share-content"><label for="share-url">Neposredna povezava do kartice</label> <input type="url" id="share-url"'+e._ssrAttr("value",e.shortenedUrl)+' class="form-control share-url"> <button class="btn-parlameter btn-full-width btn-blue">'+e._ssrEscape(e._s(e.copied?"SKOPIRANO!":"KOPIRAJ"))+"</button></div></div>")])},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(32),s=r.n(n),t=r(33),o=r(0),i=o(s.a,t.a,null,null,"4e12921a");a.default=i.exports},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={share:"Deli",embed:"Vdelaj",info:"Info"};a.default={name:"CardHeader",props:{config:Object,currentBack:String},computed:{title:function(){return null===this.currentBack?this.config.title:n[this.currentBack]}}}},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{staticClass:"card-header"},[e._ssrNode(e.config.alternative?'<div class="alt-header-container"><div class="alt-header">'+(e.config.circleText?"<div"+e._ssrClass("media-object img-circle session-logo",e.config.circleClass)+"><b>"+e._ssrEscape(e._s(e.config.circleText))+"</b></div>":e.config.circleImage?"<img"+e._ssrAttr("src","https://cdn.parlameter.si/v1/parlassets/img/people/square/"+e.config.circleImage+".png")+' class="portrait column">':e.config.circleIcon?'<div class="icon-circle"><img'+e._ssrAttr("src","https://cdn.parlameter.si/v1/parlassets/icons/"+e.config.circleIcon+".svg")+"></div>":"\x3c!----\x3e")+' <div class="header-info-container"><h1>'+e.config.heading+'</h1> <h2 class="partyinfo">'+e._ssrEscape(e._s(e.config.subheading))+'</h2> <h2 class="cardname">'+e._ssrEscape(e._s(e.config.title))+'</h2></div></div> <div class="alt-header-border"></div></div>':'<div class="card-header-border"></div> <h1>'+e._ssrEscape(e._s(e.title))+"</h1>")])},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";function n(e){var a;a=r(35),a.__inject__&&a.__inject__(e)}Object.defineProperty(a,"__esModule",{value:!0});var s=r(36),t=r.n(s),o=r(37),i=r(0),l=n,c=i(t.a,o.a,l,"data-v-289e8842","907759fe");a.default=c.exports},function(e,a){},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(2),s=function(e){return e&&e.__esModule?e:{default:e}}(n),t=r(1);a.default={name:"CardFooter",data:function(){return{clicksDisabled:!1,currentBack:null,slugs:s.default,buttons:["share","embed","info"]}},methods:{toggleBack:function(e){var a=this;this.clicksDisabled||(this.$emit("toggleBack",e),this.currentBack=this.currentBack===e?null:e,this.clicksDisabled=!0,window.setTimeout(function(){a.clicksDisabled=!1},t.RIPPLE_DURATION))}}}},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{staticClass:"card-footer"},[e._ssrNode('<div class="card-logo hidden" data-v-289e8842><a'+e._ssrAttr("href",e.slugs.base)+' data-v-289e8842><img src="https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg" alt="parlameter logo" data-v-289e8842></a></div> '+e._ssrList(e.buttons,function(a){return"<div"+e._ssrClass(null,["card-circle-button","card-"+a,{"card-exit":e.currentBack===a}])+" data-v-289e8842></div>"}))])},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{class:["card-container",e.transitionClass]},[r("card-header",{attrs:{config:e.headerConfig,"current-back":e.currentBack}}),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,["card-content",e.contentClass])+" data-v-7af97c02>","</div>",["info"===e.currentBack?r("card-info",[e._t("info")],2):"embed"===e.currentBack?r("card-embed",{attrs:{url:e.cardUrl}}):"share"===e.currentBack?r("card-share",{attrs:{url:e.cardUrl}}):r("div",{staticClass:"card-content-front",class:e.contentFrontClass},[e._t("default")],2)],1),e._ssrNode(" "),r("card-footer",{on:{toggleBack:e.toggleBack}})],2)},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={computed:{url:function(){var e=this.$options.cardData.cardData;return"https://glej.parlameter.si/"+e.group+"/"+e.method+"/"}}}},function(e,a,r){"use strict";function n(e){var a;a=r(41),a.__inject__&&a.__inject__(e)}Object.defineProperty(a,"__esModule",{value:!0});var s=r(42),t=r.n(s),o=r(46),i=r(0),l=n,c=i(t.a,o.a,l,null,"d5ee9f66");a.default=c.exports},function(e,a){},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(43),s=function(e){return e&&e.__esModule?e:{default:e}}(n),t=r(45);a.default={name:"QuestionList",props:{questionDays:{type:Array,required:!0},showAuthor:Boolean},methods:{getPersonLink:t.getPersonLink,getRecipient:function(e){return e.recipient_text.split(", ").map(function(e){return(0,s.default)(e,"minister")?"ministru "+e.split("minister ")[1]:(0,s.default)(e,"ministrica")?"ministrici "+e.split("ministrica ")[1]:"Vladi"}).join(", ")}}}},function(e,a,r){function n(e,a){return!!(null==e?0:e.length)&&s(e,a,0)>-1}var s=r(44);e.exports=n},function(e,a){function r(e,a,r){for(var n=r-1,s=e.length;++n<s;)if(e[n]===a)return n;return-1}e.exports=r},function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getMemberPartyLink=a.getMemberPortrait=a.getMemberLink=a.getPersonPartyLink=a.getPartyLink=a.getPersonPortrait=a.getPersonLink=void 0;var n=r(2),s=function(e){return e&&e.__esModule?e:{default:e}}(n),t=r(1),o=a.getPersonLink=function(e){return s.default.base+s.default.personLink.base+s.default.person[e.id].slug+s.default.personLink.pregled},i=a.getPersonPortrait=function(e){return""+t.PORTRAIT_ROOT_URL+e.gov_id+".png"},l=a.getPartyLink=function(e){return e.acronym.indexOf("NeP")>-1?"":s.default.base+s.default.partyLink.base+s.default.party[e.id].acronym+s.default.partyLink.pregled},c=a.getPersonPartyLink=function(e){return l(e.party)};a.getMemberLink=function(e){return o(e.person)},a.getMemberPortrait=function(e){return i(e.person)},a.getMemberPartyLink=function(e){return c(e.person)}},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{staticClass:"votes stickinme date-list"},[e._ssrNode(e._ssrList(e.questionDays,function(a){return'<div><div class="date">'+e._ssrEscape(e._s(a.date))+"</div> <ul>"+e._ssrList(a.questions,function(a){return'<li><div class="parlaicon parlaicon-vprasanje"></div> <div class="motion">'+(e.showAuthor?"<a"+e._ssrAttr("href",e.getPersonLink(a.person))+' class="funblue-light-hover">'+e._ssrEscape("\n            "+e._s(a.person.name)+"\n          ")+"</a>":"\x3c!----\x3e")+e._ssrEscape("\n          "+e._s(e.getRecipient(a))+"\n          ")+'<a target="_blank"'+e._ssrAttr("href",a.url)+' class="funblue-light-hover">'+e._ssrEscape("\n            "+e._s(a.title)+"\n          ")+"</a></div></li>"})+"</ul></div>"}))])},s=[],t={render:n,staticRenderFns:s};a.a=t},function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("card-wrapper",{attrs:{id:e.$options.cardData.cardData._id,"content-class":"full",cardUrl:e.url,"header-config":e.headerConfig}},[r("div",{slot:"info"},[r("p",{staticClass:"info-text lead"},[e._v("Pregled osnovnih informacij poslanske skupine.")]),e._v(" "),r("p",{staticClass:"info-text heading"},[e._v("METODOLOGIJA")]),e._v(" "),r("p",{staticClass:"info-text"},[e._v("Vsebine za to kartico smo pridobili s spletnega mesta DZ RS (poslanska skupina, starost, članstva v delovnih telesih) in s spletnega mesta DVK (število prejetih glasov). Za ostale vsebine smo se obrnili na PR službe poslanskih skupin. Podatke so nam posredovali iz NSi, SD, (takrat še) ZaAB in ZL. SMC so nas usmerili na svoje spletno mesto, SDS pa na spletno mesto državnega zbora. Manjkajoče podatke smo pridobili s pomočjo iskalnika Google in jih za morebitne popravke pred objavo ponudili vsem poslanskim skupinam.")])]),e._v(" "),r("question-list",{attrs:{questionDays:e.data.results}})],1)},s=[],t={render:n,staticRenderFns:s};a.a=t}]);