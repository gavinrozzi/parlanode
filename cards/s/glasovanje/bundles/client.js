!function(a){function e(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return a[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var t={};e.m=a,e.c=t,e.i=function(a){return a},e.d=function(a,t,r){e.o(a,t)||Object.defineProperty(a,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(t,"a",t),t},e.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},e.p="",e(e.s=18)}([function(a,e){a.exports=function(a,e,t,r){var n,s=a=a||{},o=typeof a.default;"object"!==o&&"function"!==o||(n=a,s=a.default);var i="function"==typeof s?s.options:s;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),t&&(i._scopeId=t),r){var l=Object.create(i.computed||null);Object.keys(r).forEach(function(a){var e=r[a];l[a]=function(){return e}}),i.computed=l}return{esModule:n,exports:s,options:i}}},function(a,e,t){function r(a,e){return n(a)?a:s(a,e)?[a]:o(i(a))}var n=t(3),s=t(52),o=t(55),i=t(67);a.exports=r},function(a,e){function t(a){return a}a.exports=t},function(a,e){var t=Array.isArray;a.exports=t},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPersonPartyLink=e.getPartyLink=e.getPersonPortrait=e.getPersonLink=void 0;var r=t(14),n=function(a){return a&&a.__esModule?a:{default:a}}(r),s=t(15),o=(e.getPersonLink=function(a){return n.default.base+n.default.personLink.base+n.default.person[a.person.id].slug+n.default.personLink.pregled},e.getPersonPortrait=function(a){return""+s.PORTRAIT_ROOT_URL+a.person.gov_id+".png"},e.getPartyLink=function(a){return a.acronym.indexOf("NeP")>-1?"":n.default.base+n.default.partyLink.base+n.default.party[a.id].acronym+n.default.partyLink.pregled});e.getPersonPartyLink=function(a){return o(a.person.party)}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={for:"#00628c",against:"#009cdd",abstain:"#003b54",not_present:"#99e1ff"};e.default=function(a){var e=Object.keys(a),t=e.reduce(function(e,t){return e+a[t]},0);return e.map(function(e){return{percentage:a[e]/t,color:r[e]}})}},function(a,e){function t(a){return a}a.exports=t},function(a,e){function t(a,e){return!!(e=null==e?r:e)&&("number"==typeof a||n.test(a))&&a>-1&&a%1==0&&a<e}var r=9007199254740991,n=/^(?:0|[1-9]\d*)$/;a.exports=t},function(a,e){function t(a){return"number"==typeof a&&a>-1&&a%1==0&&a<=r}var r=9007199254740991;a.exports=t},function(a,e){function t(a){var e=typeof a;return null!=a&&("object"==e||"function"==e)}a.exports=t},function(a,e,t){t(37);var r=t(0)(t(26),t(87),"data-v-c4411164",null);a.exports=r.exports},function(a,e,t){t(36);var r=t(0)(t(29),t(86),"data-v-95bc102e",null);a.exports=r.exports},function(a,e){a.exports={_id:"s_glasovanje",name:"Glasovanje",dataUrl:"https://analize.parlameter.si/v1/s/getMotionAnalize",type:"glasovanje",lastUpdate:"2017-05-11T08:18:17.069Z",method:"glasovanje",group:"s"}},function(a,e,t){t(34),t(33);var r=t(0)(t(30),t(83),"data-v-4ea8f23c",null);a.exports=r.exports},function(a,e){a.exports={partyLink:{govori:"/govori/",base:"/poslanska-skupina/",pregled:"/pregled/",glasovanja:"/glasovanja/"},personLink:{govori:"/govori/",base:"/poslanec/",pregled:"/pregled/",glasovanja:"/glasovanja/"},sessionLink:{prisotnost:"/seja/prisotnost/",glasovanje:"/seja/glasovanje/",transkript:"/seja/transkript/",glasovanja:"/seja/glasovanja/"},person:{2:{slug:"anja-bah-zibert"},3:{slug:"urska-ban"},4:{slug:"roberto-battelli"},5:{slug:"julijana-bizjak-mlakar"},6:{slug:"srecko-blazic"},7:{slug:"mirjam-bon-klanjscek"},8:{slug:"tilen-bozic"},9:{slug:"alenka-bratusek"},10:{slug:"franc-breznik"},11:{slug:"milan-brglez"},12:{slug:"nada-brinovsek"},13:{slug:"miro-cerar"},14:{slug:"tanja-cink"},15:{slug:"andrej-cus"},16:{slug:"erika-dekleva"},17:{slug:"iva-dimic"},18:{slug:"bojan-dobovsek"},19:{slug:"marjan-dolinsek"},20:{slug:"karl-viktor-erjavec"},21:{slug:"marko-ferluga"},22:{slug:"tomaz-gantar"},23:{slug:"jelka-godec"},24:{slug:"laszlo-goncz"},25:{slug:"vinko-gorenak"},26:{slug:"branko-grims"},27:{slug:"irena-groselj-kosnik"},28:{slug:"margareta-gucek-zakosek"},29:{slug:"primoz-hainz"},30:{slug:"matjaz-han"},31:{slug:"matjaz-hanzek"},32:{slug:"jozef-horvat"},33:{slug:"mitja-horvat"},34:{slug:"ivan-hrsak"},35:{slug:"eva-irgl"},36:{slug:"janez-jansa"},37:{slug:"franc-jursa"},38:{slug:"andreja-katic"},39:{slug:"aleksander-kavcic"},40:{slug:"anita-kolesa"},41:{slug:"benedikt-kopmajer"},42:{slug:"miha-kordis"},43:{slug:"ksenija-korenjak-kramar"},44:{slug:"irena-kotnik"},45:{slug:"marjana-kotnik-poropat"},46:{slug:"lilijana-kozlovic"},47:{slug:"danijel-krivec"},48:{slug:"simona-kustec-lipicer"},49:{slug:"zvonko-lah"},50:{slug:"franc-laj"},51:{slug:"suzana-lep-simenko"},52:{slug:"marinka-levicar"},53:{slug:"tomaz-lisec"},54:{slug:"anze-logar"},55:{slug:"zan-mahnic"},56:{slug:"klavdija-markez"},57:{slug:"dragan-matic"},58:{slug:"luka-mesec"},59:{slug:"jani-moderndorfer"},60:{slug:"jasna-murgel"},61:{slug:"bojana-mursic"},62:{slug:"matjaz-nemec"},63:{slug:"ljudmila-novak"},64:{slug:"bojan-podkrajsek"},65:{slug:"marko-pogacnik"},66:{slug:"marijan-pojbic"},67:{slug:"andreja-potocnik"},68:{slug:"ivan-prelog"},69:{slug:"uros-prikl"},70:{slug:"branislav-rajic"},71:{slug:"danilo-anton-ranc"},72:{slug:"kamal-izidor-shaker"},73:{slug:"janja-sluga"},74:{slug:"vojka-sergan"},75:{slug:"andrej-sircelj"},76:{slug:"ivan-skodnik"},77:{slug:"marusa-skopac"},78:{slug:"joze-tanko"},79:{slug:"matej-tasner-vatovec"},80:{slug:"violeta-tomic"},81:{slug:"matej-tonin"},82:{slug:"franc-trcek"},83:{slug:"janko-veber"},84:{slug:"vesna-vervega"},85:{slug:"peter-vilfan"},86:{slug:"jernej-vrtovec"},87:{slug:"simon-zajc"},88:{slug:"igor-zorcic"},89:{slug:"branko-zorman"},90:{slug:"dejan-zidan"},91:{slug:"ljubo-znidar"},92:{slug:"dusan-verbic"},93:{slug:"franc-krizanic"},94:{slug:"jana-jenko"},95:{slug:"marija-bacic"},96:{slug:"marija-antonija-kovacic"},1329:{slug:"mateja-kozuh-novak"},1354:{slug:"bojan-krajnc"},1355:{slug:"sasa-tabakovic"},1356:{slug:"jan-skoberne"},1357:{slug:"dusan-radic"},2933:{slug:"teja-ljubic"},2934:{slug:"vlasta-pockaj"}},base:"https://parlameter.si",party:{1:{acronym:"smc",realAcronym:"SMC",slug:"ps-stranka-modernega-centra"},2:{acronym:"imns",realAcronym:"IMNS",slug:"ps-italijanske-in-madzarske-narodne-skupnosti"},3:{acronym:"desus",realAcronym:"DeSUS",slug:"ps-demokratska-stranka-upokojencev-slovenije"},4:{acronym:"zaab",realAcronym:"ZAAB",slug:"ps-zaveznistvo-alenke-bratusek"},5:{acronym:"sds",realAcronym:"SDS",slug:"ps-slovenska-demokratska-stranka"},6:{acronym:"nsi",realAcronym:"NSI",slug:"ps-nova-slovenija"},7:{acronym:"sd",realAcronym:"SD",slug:"ps-socialni-demokrati"},8:{acronym:"zl",realAcronym:"ZL",slug:"ps-zdruzena-levica"},9:{acronym:"",realAcronym:"",slug:"kolegij-predsednika-drzavnega-zbora"},10:{acronym:"",realAcronym:"",slug:"komisija-za-nadzor-javnih-financ"},11:{acronym:"",realAcronym:"",slug:"komisija-za-narodni-skupnosti"},12:{acronym:"",realAcronym:"",slug:"komisija-za-odnose-s-slovenci-v-zamejstvu-in-po-svetu"},13:{acronym:"",realAcronym:"",slug:"komisija-za-peticije-ter-za-clovekove-pravice-in-enake-moznosti"},14:{acronym:"",realAcronym:"",slug:"komisija-za-poslovnik"},15:{acronym:"",realAcronym:"",slug:"mandatno-volilna-komisija"},16:{acronym:"",realAcronym:"",slug:"odbor-za-delo-druzino-socialne-zadeve-in-invalide"},17:{acronym:"",realAcronym:"",slug:"odbor-za-finance-in-monetarno-politiko"},18:{acronym:"",realAcronym:"",slug:"odbor-za-gospodarstvo"},19:{acronym:"",realAcronym:"",slug:"odbor-za-infrastrukturo-okolje-in-prostor"},20:{acronym:"",realAcronym:"",slug:"odbor-za-izobrazevanje-znanost-sport-in-mladino"},21:{acronym:"",realAcronym:"",slug:"odbor-za-kmetijstvo-gozdarstvo-in-prehrano"},22:{acronym:"",realAcronym:"",slug:"odbor-za-kulturo"},23:{acronym:"",realAcronym:"",slug:"odbor-za-notranje-zadeve-javno-upravo-in-lokalno-samoupravo"},24:{acronym:"",realAcronym:"",slug:"odbor-za-obrambo"},25:{acronym:"",realAcronym:"",slug:"odbor-za-pravosodje"},26:{acronym:"",realAcronym:"",slug:"odbor-za-zadeve-evropske-unije"},27:{acronym:"",realAcronym:"",slug:"odbor-za-zdravstvo"},28:{acronym:"",realAcronym:"",slug:"odbor-za-zunanjo-politiko"},29:{acronym:"",realAcronym:"",slug:"ustavna-komisija"},30:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-sveta-evrope"},31:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-nato"},32:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-organizacije-za-varnost-in-sodelovanje-v-evropi"},33:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-dimenziji-srednjeevropske-pobude"},34:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-unije-za-sredozemlje"},35:{acronym:"",realAcronym:"",slug:"nacionalna-skupina-interparlamentarne-unije-v-drzavnem-zboru"},36:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-seecp"},37:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-argentino"},38:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-albanijo"},39:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-avstralijo"},40:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-avstrijo"},41:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-azerbajdzanom"},42:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-belgijo"},43:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-bolgarijo"},44:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-bosno-in-hercegovino"},45:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-brazilijo"},46:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-cesko"},47:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-crno-goro"},48:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-dansko"},49:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-estonijo"},50:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-finsko"},51:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-francijo"},52:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-grcijo"},53:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-hrvasko"},54:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-indijo"},55:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-italijo"},56:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-irsko"},57:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-izraelom"},58:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-japonsko"},59:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kanado"},60:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kitajsko"},61:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kubo"},62:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-litvo"},63:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-madzarsko"},64:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-makedonijo"},65:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-malto"},66:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-mehiko"},67:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-nemcijo"},68:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-nizozemsko"},69:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-norvesko"},70:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-romunijo"},71:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-rusijo"},72:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-slovasko"},73:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-srbijo"},74:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-spanijo"},75:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-svedsko"},76:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-svico"},77:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-turcijo"},78:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-ukrajino"},79:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-veliko-britanijo"},80:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-zdruzenimi-drzavami-amerike"},81:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-iranom"},82:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-ciprom"},83:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-poljsko"},84:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-marokom"},85:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-islandijo"},86:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-liechtensteinom"},87:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-portugalsko"},88:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-luksemburgom"},89:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-egiptom"},90:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kosovom"},91:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-latvijo"},92:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-gruzijo"},93:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-juzno-korejo"},94:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kuvajtom"},95:{acronym:"dz",realAcronym:"DZ",slug:"drzavni-zbor"},96:{acronym:"",realAcronym:"",slug:"ostali"},97:{acronym:"ps-np",realAcronym:"PS NP",slug:"ps-nepovezanih-poslancev"},98:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-o-ugotavljanju-zlorab-v-slovenskem-bancnem-sistemu-ter-ugotavljanju-vzrokov-in-odgovornosti-za-ze-drugo-sanacijo-bancnega-sistema-v-samostojni-sloveniji"},100:{acronym:"nep-bd",realAcronym:"NeP - BD",slug:"nepovezani-poslanec-bojan-dobovsek"},101:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-za-ugotavljanje-politicne-odgovornosti-nosilcev-javnih-funkcij-pri-investiciji-v-blok-6-termoelektrarne-sostanj"},102:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-savdsko-arabijo"},103:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-turkmenistanom"},104:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-venezuelo"},105:{acronym:"",realAcronym:"",slug:"komisija-za-nadzor-obvescevalnih-in-varnostnih-sluzb"},106:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-o-ugotavljanju-zlorab-v-slovenskem-zdravstvenem-sistemu-na-podrocju-prodaje-in-nakupa-zilnih-opornic"},107:{acronym:"nep-mbk",realAcronym:"NeP - MBK",slug:"nepovezana-poslanka-mirjam-bon-klanjscek"},108:{acronym:"nep-ac",realAcronym:"NeP - AČ",slug:"nepovezani-poslanec-andrej-cus"},109:{acronym:"ps-np",realAcronym:"PS NP",slug:"ps-nepovezanih-poslancev"},110:{acronym:"nep-ab",realAcronym:"NeP - AB",slug:"nepovezana-poslanka-alenka-bratusek"},111:{acronym:"nep-zl",realAcronym:"NeP - ZL",slug:"nepovezani-poslanec-zvonko-lah"},112:{acronym:"nep-jm",realAcronym:"NeP - JM",slug:"nepovezani-poslanec-jani-moderndorfer"},113:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-alzirijo"},114:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-moldavijo"},115:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-armenijo"},116:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-belorusijo"},117:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-cilom"},118:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kazahstanom"},119:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-novo-zelandijo"},120:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-palestino"},121:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-senegalom"},122:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-tunizijo"},123:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-zdruzenimi-arabskimi-emirati"}}}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MONTH_NAMES=["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],e.PORTRAIT_ROOT_URL="https://cdn.parlameter.si/v1/parlassets/img/people/square/"},function(a,e,t){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var n=t(71),s=r(n),o=t(68),i=r(o),l=t(72),c=r(l),u=t(70),d=r(u),p=t(69),m=r(p),v=t(17),g=r(v);e.default={components:{CardInfo:s.default,CardEmbed:i.default,CardShare:c.default,CardHeader:d.default,CardFooter:m.default},mixins:[g.default]}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(a,e,t){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}var n=t(13),s=r(n),o=t(12),i=r(o);new Vue(Object.assign({},s.default,{cardData:window.__INITIAL_STATE__})).$mount("#"+i.default._id)},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardFooter",props:{link:String}}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardHeader",props:{config:Object}}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",props:{url:String}}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DonutChart",data:function(){return{size:100}},props:{sectionData:Array},computed:{sectors:function(){var a=0,e=0,t=0,r=0,n=0,s=0,o=0,i=0,l=0,c=0;return this.sectionData.map(function(u){a=360*u.percentage,360===a&&(a=359.999),t=a>180?360-a:a,e=t*Math.PI/180,n=Math.sqrt(2-2*Math.cos(e)),s=t<=90?Math.sin(e):Math.sin((180-t)*Math.PI/180),o=Math.sqrt(n*n-s*s),l=o,a<=180?(i=1+s,r=0):(i=1-s,r=1);var d=c;return c+=a,{color:u.color,arcSweep:r,L:1,X:i,Y:l,R:d}})}}}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SearchField",props:{value:String,placeholder:String}}},function(a,e,t){"use strict";function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"StripedButton",props:{selected:Boolean,smallText:String,text:{type:String,required:!0},clickHandler:Function,color:String,disabled:Boolean},computed:{className:function(){return["striped-button",{"is-disabled":this.disabled},{"is-selected":this.selected},r({},this.color,["for","against","abstain","not_present"].indexOf(this.color)>-1)]}},methods:{handleClick:function(a){this.disabled||this.clickHandler(a)}}}},function(a,e,t){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var n=t(10),s=r(n),o=t(4),i=t(74),l=r(i),c=t(5),u=r(c),d=t(11),p=r(d);e.default={name:"GlasovanjeSeje_Poslanci",components:{StripedButton:s.default,SearchField:l.default,Result:p.default},data:function(){return{nameFilter:"",columns:[{id:"portrait",label:"",additionalClass:"portrait"},{id:"name",label:"Ime",additionalClass:"wider name"},{id:"party",label:"PS"},{id:"votes",label:"Glasovi",additionalClass:"optional"}],votes:[{id:"for",label:"za",selected:!1},{id:"against",label:"proti",selected:!1},{id:"abstain",label:"vzdržani",selected:!1},{id:"not_present",label:"niso",selected:!1}]}},computed:{selectedVotes:function(){return this.votes.filter(function(a){return a.selected}).map(function(a){return a.id})},filteredMembers:function(){var a=this;return this.members.filter(function(e){var t=!0,r=!0;return a.nameFilter.length>0&&(t=e.person.name.toLowerCase().indexOf(a.nameFilter.toLowerCase())>-1),a.selectedVotes.length>0&&(r=a.selectedVotes.indexOf(e.option)>-1),t&&r})}},props:{members:Array,memberVotes:Object,result:Object},methods:{getPersonLink:o.getPersonLink,getPersonPortrait:o.getPersonPortrait,getPersonPartyLink:o.getPersonPartyLink,mapVotes:u.default,translateOption:function(a,e){return{for:{m:"za",f:"za"},against:{m:"proti",f:"proti"},not_present:{m:"odsoten",f:"odsotna"},abstain:{m:"vzdržan",f:"vzdržana"}}[a][e]},toggleVote:function(a){var e=JSON.parse(JSON.stringify(this.votes));e[a].selected=!e[a].selected,this.votes=e}}}},function(a,e,t){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var n=t(4),s=t(10),o=r(s),i=t(5),l=r(i),c=t(11),u=r(c);e.default={name:"GlasovanjeSeje_PoslanskeSkupine",components:{StripedButton:o.default,Result:u.default},data:function(){return{votes:[{id:"for",label:"za"},{id:"against",label:"proti"},{id:"abstain",label:"vzdržani"},{id:"not_present",label:"niso"}],expandedParty:null,expandedOption:null}},computed:{expandedMembers:function(){var a=this;return this.members.filter(function(e){return["coalition","opposition"].indexOf(a.expandedParty)>-1?e.person.party.is_coalition===("coalition"===a.expandedParty)&&e.option===a.expandedOption:e.person.party.id===a.expandedParty&&e.option===a.expandedOption})}},props:{members:Array,parties:Array},methods:{getPartyLink:n.getPartyLink,getPersonLink:n.getPersonLink,getPersonPartyLink:n.getPersonPartyLink,getPersonPortrait:n.getPersonPortrait,mapVotes:l.default,expandVote:function(a,e){this.expandedParty===a&&this.expandedOption===e?(this.expandedParty=null,this.expandedOption=null):(this.expandedParty=a,this.expandedOption=e)}}}},function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(73),n=function(a){return a&&a.__esModule?a:{default:a}}(r);e.default={name:"GlasovanjeSeje_Result",components:{DonutChart:n.default},data:function(){return{votes:[{id:"for",label:"za"},{id:"against",label:"proti"},{id:"abstain",label:"vzdržani"},{id:"not_present",label:"niso"}]}},computed:{translatedOption:function(){return{for:"za",against:"proti",not_present:"odsotnih",abstain:"vzdržanih",cant_compute:"ni večinskega glasu"}[this.option]}},props:{chartData:Array,option:String,score:Number}}},function(a,e,t){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var n=t(65),s=r(n),o=t(57),i=r(o),l=t(16),c=r(l),u=t(75),d=r(u),p=t(76),m=r(p);e.default={components:{Poslanci:d.default,PoslanskeSkupine:m.default},mixins:[c.default],name:"GlasovanjeSeje",data:function(){var a=this;return{data:this.$options.cardData.data,slugs:this.$options.cardData.urlsData,shortenedCardUrl:"",headerConfig:{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.$options.cardData.cardData.name},mappedDocuments:this.$options.cardData.data.documents.map(function(a,e){return{id:a.name+e,label:" | "===a.name.substring(0,3)?"Dokument brez imena"+a.name:a.name,selected:!1,url:a.url}}),coalitionOpositionParties:["coalition","opposition"].map(function(e){return{party:{id:e,name:"coalition"===e?"KOALICIJA":"OPOZICIJA"},votes:(0,s.default)(a.$options.cardData.data.gov_side[e].votes,["abstain","for","against","not_present"]),max:{maxOptPerc:a.$options.cardData.data.gov_side[e].max.maxOptPerc,max_opt:a.$options.cardData.data.gov_side[e].max.max_opt},outliers:a.$options.cardData.data.gov_side[e].outliers}})}},computed:{generatedCardUrl:function(){return"https://glej.parlameter.si/group/method/"}},methods:{focusTab:function(a){1!==a&&(this.$refs.parties.expandedParty=null,this.$refs.parties.expandedOption=null),2!==a&&(this.$refs.sides.expandedParty=null,this.$refs.sides.expandedOption=null)},openDocument:function(a){var e=(0,i.default)(this.mappedDocuments,{id:a});window.open(e.url)},shortenUrl:function(a){var e=this;return new Promise(function(t){$.get("https://parla.me/shortner/generate?url="+window.encodeURIComponent(a+"&frame=true"),function(a){e.$el.querySelector(".card-content-share button").textContent="KOPIRAJ",t(a)})})},measurePiwik:function(a,e,t){"function"==typeof measure&&(""!==e?measure("s","session-sort",e+" "+t,""):""!==a&&measure("s","session-filter",a,""))}},watch:{generatedCardUrl:function(a){var e=this;this.shortenUrl(a).then(function(a){return e.shortenedCardUrl=a})}},beforeMount:function(){this.shortenUrl(this.generatedCardUrl)}}},function(a,e){},function(a,e){},function(a,e){},function(a,e){},function(a,e){},function(a,e){},function(a,e){},function(a,e,t){function r(a,e,t){var r=a[e];i.call(a,e)&&s(r,t)&&(void 0!==t||e in a)||n(a,e,t)}var n=t(39),s=t(56),o=Object.prototype,i=o.hasOwnProperty;a.exports=r},function(a,e,t){function r(a,e,t){"__proto__"==e&&n?n(a,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):a[e]=t}var n=t(48);a.exports=r},function(a,e){function t(a,e,t,r){for(var n=a.length,s=t+(r?1:-1);r?s--:++s<n;)if(e(a[s],s,a))return s;return-1}a.exports=t},function(a,e,t){function r(a,e){e=n(e,a);for(var t=0,r=e.length;null!=a&&t<r;)a=a[s(e[t++])];return t&&t==r?a:void 0}var n=t(1),s=t(2);a.exports=r},function(a,e){function t(a){return n.call(a)}var r=Object.prototype,n=r.toString;a.exports=t},function(a,e){function t(a,e){return null!=a&&e in Object(a)}a.exports=t},function(a,e,t){function r(a,e){return n(a,e,function(e,t){return s(a,t)})}var n=t(45),s=t(59);a.exports=r},function(a,e,t){function r(a,e,t){for(var r=-1,i=e.length,l={};++r<i;){var c=e[r],u=n(a,c);t(u,c)&&s(l,o(c,a),u)}return l}var n=t(41),s=t(46),o=t(1);a.exports=r},function(a,e,t){function r(a,e,t,r){if(!i(a))return a;e=s(e,a);for(var c=-1,u=e.length,d=u-1,p=a;null!=p&&++c<u;){var m=l(e[c]),v=t;if(c!=d){var g=p[m];v=r?r(g,m,p):void 0,void 0===v&&(v=i(g)?g:o(e[c+1])?[]:{})}n(p,m,v),p=p[m]}return a}var n=t(38),s=t(1),o=t(7),i=t(9),l=t(2);a.exports=r},function(a,e,t){function r(a){return function(e,t,r){var i=Object(e);if(!s(e)){var l=n(t,3);e=o(e),t=function(a){return l(i[a],a,i)}}var c=a(e,t,r);return c>-1?i[l?e[c]:c]:void 0}}var n=t(6),s=t(61),o=t(64);a.exports=r},function(a,e,t){var r=t(50),n=function(){try{var a=r(Object,"defineProperty");return a({},"",{}),a}catch(a){}}();a.exports=n},function(a,e){function t(a){return a}a.exports=t},function(a,e){function t(a,e){return null==a?void 0:a[e]}a.exports=t},function(a,e,t){function r(a,e,t){e=n(e,a);for(var r=-1,u=e.length,d=!1;++r<u;){var p=c(e[r]);if(!(d=null!=a&&t(a,p)))break;a=a[p]}return d||++r!=u?d:!!(u=null==a?0:a.length)&&l(u)&&i(p,u)&&(o(a)||s(a))}var n=t(1),s=t(60),o=t(3),i=t(7),l=t(8),c=t(2);a.exports=r},function(a,e,t){function r(a,e){if(n(a))return!1;var t=typeof a;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=a&&!s(a))||(i.test(a)||!o.test(a)||null!=e&&a in Object(e))}var n=t(3),s=t(63),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;a.exports=r},function(a,e){function t(a){return a}a.exports=t},function(a,e){function t(a,e){return function(t){return a(e(t))}}a.exports=t},function(a,e,t){var r=t(53),n=/^\./,s=r(function(a){var e=[];return n.test(a)&&e.push(""),a.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,function(a,t,r,n){e.push(r?n.replace(/\\(\\)?/g,"$1"):t||a)}),e});a.exports=s},function(a,e){function t(a,e){return a===e||a!==a&&e!==e}a.exports=t},function(a,e,t){var r=t(47),n=t(58),s=r(n);a.exports=s},function(a,e,t){function r(a,e,t){var r=null==a?0:a.length;if(!r)return-1;var l=null==t?0:o(t);return l<0&&(l=i(r+l,0)),n(a,s(e,3),l)}var n=t(40),s=t(6),o=t(66),i=Math.max;a.exports=r},function(a,e,t){function r(a,e){return null!=a&&s(a,e,n)}var n=t(43),s=t(51);a.exports=r},function(a,e){function t(){return!1}a.exports=t},function(a,e,t){function r(a){return null!=a&&s(a.length)&&!n(a)}var n=t(62),s=t(8);a.exports=r},function(a,e,t){function r(a){if(!s(a))return!1;var e=n(a);return e==i||e==l||e==o||e==c}var n=t(42),s=t(9),o="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",c="[object Proxy]";a.exports=r},function(a,e){function t(){return!1}a.exports=t},function(a,e,t){var r=t(54),n=r(Object.keys,Object);a.exports=n},function(a,e,t){var r=t(44),n=t(49),s=n(function(a,e){return null==a?{}:r(a,e)});a.exports=s},function(a,e){function t(a){return a}a.exports=t},function(a,e){function t(a){return a}a.exports=t},function(a,e,t){var r=t(0)(t(19),t(80),null,null);a.exports=r.exports},function(a,e,t){var r=t(0)(t(20),t(82),null,null);a.exports=r.exports},function(a,e,t){var r=t(0)(t(21),t(77),null,null);a.exports=r.exports},function(a,e,t){var r=t(0)(t(22),t(88),null,null);a.exports=r.exports},function(a,e,t){var r=t(0)(t(23),t(79),null,null);a.exports=r.exports},function(a,e,t){var r=t(0)(t(24),t(84),null,null);a.exports=r.exports},function(a,e,t){t(31);var r=t(0)(t(25),t(78),"data-v-1989ce77",null);a.exports=r.exports},function(a,e,t){t(32);var r=t(0)(t(27),t(81),"data-v-252ec9b7",null);a.exports=r.exports},function(a,e,t){t(35);var r=t(0)(t(28),t(85),"data-v-94813cde",null);a.exports=r.exports},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"card-header"},[a.config.alternative?[t("div",{staticClass:"alt-header-container"},[t("div",{staticClass:"alt-header"},[a.config.circleText?t("div",{staticClass:"media-object img-circle session-logo",class:a.config.circleClass},[t("b",[a._v(a._s(a.config.circleText))])]):a.config.circleImage?t("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+a.config.circleImage+".png"}}):a.config.circleIcon?t("div",{staticClass:"icon-circle"},[t("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+a.config.circleIcon+".svg"}})]):a._e(),a._v(" "),t("div",{staticClass:"header-info-container"},[t("h1",{domProps:{innerHTML:a._s(a.config.heading)}}),a._v(" "),t("h2",{staticClass:"partyinfo"},[a._v(a._s(a.config.subheading))]),a._v(" "),t("h2",{staticClass:"cardname"},[a._v(a._s(a.config.title))])])]),a._v(" "),t("div",{staticClass:"alt-header-border"})])]:[t("div",{staticClass:"card-header-border"}),a._v(" "),t("h1",[a._v(a._s(a.config.title))])]],2)},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement;return(a._self._c||e)("input",{staticClass:"search-field",attrs:{placeholder:a.placeholder,type:"text"},domProps:{value:a.value},on:{input:function(e){a.$emit("input",e.target.value)}}})},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"card-content-share hidden"},[t("div",{staticClass:"card-back-content"},[t("div",{staticClass:"share-content"},[t("label",{attrs:{for:"share-url"}},[a._v("Neposredna povezava do kartice")]),a._v(" "),t("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:a.url}}),a._v(" "),t("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[a._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"card-content-embed hidden"},[t("div",{staticClass:"card-back-content"},[t("div",{staticClass:"embed-content"},[t("div",{staticClass:"embed-divider"}),a._v(" "),a._m(0),a._v(" "),t("div",{staticClass:"embed-divider"}),a._v(" "),t("div",{staticClass:"embed-script"},[t("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":a.url},domProps:{innerHTML:a._s(a.embedCode)}}),a._v(" "),t("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[a._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"embed-switch-container"},[t("div",{staticClass:"embed-label"},[a._v("Podatki naj se vedno osvežujejo")]),a._v(" "),t("div",{staticClass:"embed-switch-big-box"},[t("div",{staticClass:"embed-switch-box"},[t("div",{staticClass:"embed-switch"},[t("div",{staticClass:"embed-switches"},[t("div",{staticClass:"leftswitch"},[a._v("DA")]),a._v(" "),t("div",{staticClass:"rightswitch"},[a._v("NE")])])])]),a._v(" "),t("div",{staticClass:"embed-switch-ball"})])])}]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"members"},[t("div",{staticClass:"filters"},[t("search-field",{attrs:{placeholder:"Vsi poslanci"},model:{value:a.nameFilter,callback:function(e){a.nameFilter=e},expression:"nameFilter"}}),a._v(" "),t("div",{staticClass:"vote-filters"},a._l(a.votes,function(e,r){return t("striped-button",{key:e.id,attrs:{color:e.id,selected:e.selected,"small-text":e.label,text:String(a.memberVotes[e.id]),"click-handler":function(){return a.toggleVote(r)},disabled:0===a.memberVotes[e.id]}})})),a._v(" "),t("result",{attrs:{score:a.result.value,option:a.result.max_opt,"chart-data":a.mapVotes(a.memberVotes)}})],1),a._v(" "),t("ul",{staticClass:"person-list"},a._l(a.filteredMembers,function(e){return t("li",{staticClass:"item"},[t("div",{staticClass:"column portrait"},[t("a",{attrs:{href:a.getPersonLink(e)}},[t("img",{attrs:{src:a.getPersonPortrait(e)}})])]),a._v(" "),t("div",{staticClass:"column wider name"},[t("a",{staticClass:"funblue-light-hover",attrs:{href:a.getPersonLink(e)}},[a._v(a._s(e.person.name))]),t("br"),a._v(" "),t("a",{staticClass:"funblue-light-hover",attrs:{href:a.getPersonPartyLink(e)}},[a._v(a._s(e.person.party.acronym))])]),a._v(" "),t("div",{staticClass:"column vote"},[t("div",{class:"option option-"+e.option},[a._v(a._s(a.translateOption(e.option,e.person.gender)))])])])}))])},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-logo hidden"},[t("a",{attrs:{href:a.link}},[t("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),a._v(" "),t("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),a._v(" "),t("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),a._v(" "),t("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[a._v("i")])])},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"card-container card-halfling card-glasovanje",attrs:{id:a.$options.cardData.cardData._id}},[t("card-header",{attrs:{config:a.headerConfig}}),a._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"card-content-front"},[t("div",{class:["summary",{"fire-badge":a.data.result.is_outlier}]},[t("div",{staticClass:"result"},[a.data.result.accepted?[t("i",{staticClass:"accepted glyphicon glyphicon-ok"}),a._v(" "),t("div",{staticClass:"text"},[a._v("sprejet")])]:[t("i",{staticClass:"not-accepted glyphicon glyphicon-remove"}),a._v(" "),t("div",{staticClass:"text"},[a._v("zavrnjen")])]],2),a._v(" "),t("div",{staticClass:"name"},[a._v(a._s(a.data.name))]),a._v(" "),a.data.documents.length>0?t("div",{staticClass:"documents"},[t("div",{staticClass:"dropdown-label"},[a._v("Dokumenti")]),a._v(" "),t("search-dropdown",{attrs:{single:"",small:"",items:a.mappedDocuments,placeholder:"Izberi dokument","select-callback":a.openDocument}})],1):a._e()]),a._v(" "),t("tabs",{attrs:{dark:"","switch-callback":a.focusTab}},[t("tab",{attrs:{header:"Poslanci"}},[t("poslanci",{attrs:{members:a.data.members,"member-votes":a.data.all,result:a.data.result}})],1),a._v(" "),t("tab",{attrs:{header:"Poslanske skupine"}},[t("poslanske-skupine",{ref:"parties",attrs:{members:a.data.members,parties:a.data.parties}})],1),a._v(" "),t("tab",{attrs:{header:"Stran vlade"}},[t("poslanske-skupine",{ref:"sides",attrs:{members:a.data.members,parties:a.coalitionOpositionParties}})],1)],1)],1),a._v(" "),t("card-info",[t("p",{staticClass:"info-text lead"}),a._v(" "),t("p",{staticClass:"info-text heading"},[a._v("METODOLOGIJA")]),a._v(" "),t("p",{staticClass:"info-text"})]),a._v(" "),t("card-embed",{attrs:{url:a.generatedCardUrl}}),a._v(" "),t("card-share",{attrs:{url:a.shortenedCardUrl}})],1),a._v(" "),t("card-footer",{attrs:{link:a.slugs.base}})],1)},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2 2"}},[t("defs",[t("mask",{attrs:{id:"donut-hole"+a._uid}},[t("circle",{attrs:{cx:"1",cy:"1",r:"1",fill:"white"}}),a._v(" "),t("circle",{attrs:{cx:"1",cy:"1",r:"0.7",fill:"black"}})])]),a._v(" "),a._l(a.sectors,function(e){return t("path",{attrs:{fill:e.color,d:"M"+e.L+","+e.L+" L"+e.L+",0 A"+e.L+","+e.L+" 0 "+e.arcSweep+",1 "+e.X+", "+e.Y+" z",transform:"rotate("+e.R+", "+e.L+", "+e.L+")",mask:"url(#donut-hole"+a._uid+")"}})})],2)},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"parties"},a._l(a.parties,function(e){return t("div",{staticClass:"party"},[t("div",{staticClass:"description"},[t("div",{staticClass:"name"},[e.party.acronym?[t("a",{staticClass:"funblue-light-hover",attrs:{href:a.getPartyLink(e.party)}},[a._v("\n            "+a._s(e.party.acronym)+"\n          ")])]:[a._v("\n          "+a._s(e.party.name)+"\n        ")]],2),a._v(" "),t("result",{attrs:{score:e.max.maxOptPerc,option:e.max.max_opt,"chart-data":a.mapVotes(e.votes)}}),a._v(" "),t("div",{staticClass:"votes"},a._l(a.votes,function(r,n){return t("striped-button",{key:r.id,class:{"lightning-badge":e.outliers&&e.outliers.indexOf(r.id)>-1},attrs:{color:r.id,selected:e.party.id===a.expandedParty&&r.id===a.expandedOption,"small-text":r.label,text:String(e.votes[r.id]),"click-handler":function(){return a.expandVote(e.party.id,r.id)},disabled:0===e.votes[r.id]}})}))],1),a._v(" "),e.party.id===a.expandedParty?t("div",{staticClass:"members"},[t("ul",{staticClass:"person-list"},a._l(a.expandedMembers,function(e){return t("li",{staticClass:"item"},[t("div",{staticClass:"column portrait"},[t("a",{attrs:{href:a.getPersonLink(e)}},[t("img",{attrs:{src:a.getPersonPortrait(e)}})])]),a._v(" "),t("div",{staticClass:"column name"},[t("a",{staticClass:"funblue-light-hover",attrs:{href:a.getPersonLink(e)}},[a._v(a._s(e.person.name))]),t("br"),a._v(" "),t("a",{staticClass:"funblue-light-hover",attrs:{href:a.getPersonPartyLink(e)}},[a._v(a._s(e.person.party.acronym))])])])}))]):a._e()])}))},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"result"},[t("donut-chart",{class:["donut-chart","option-"+this.option],attrs:{"section-data":a.chartData}}),a._v(" "),t("div",{staticClass:"percentage"},[a._v(a._s(Math.round(this.score))+" %")]),a._v(" "),t("div",{staticClass:"text"},[a._v(a._s(a.translatedOption))])],1)},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{class:a.className,on:{click:a.handleClick}},[a.smallText?t("div",{staticClass:"small-text"},[a._v(a._s(a.smallText))]):a._e(),a._v(" "),a.text?t("div",{staticClass:"text"},[a._v(a._s(a.text))]):a._e()])},staticRenderFns:[]}},function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"card-content-info hidden"},[t("div",{staticClass:"card-back-content"},[a._t("default")],2)])},staticRenderFns:[]}}]);