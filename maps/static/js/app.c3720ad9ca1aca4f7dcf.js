webpackJsonp([1,2],{155:function(t,e){},156:function(t,e){},157:function(t,e){},182:function(t,e,n){var o=n(5)(n(95),n(192),null,null);t.exports=o.exports},183:function(t,e,n){var o=n(5)(n(96),n(200),null,null);t.exports=o.exports},184:function(t,e,n){var o=n(5)(n(97),n(196),null,null);t.exports=o.exports},185:function(t,e,n){var o=n(5)(n(98),n(199),null,null);t.exports=o.exports},186:function(t,e,n){n(157);var o=n(5)(n(93),n(197),null,null);t.exports=o.exports},187:function(t,e,n){var o=n(5)(n(99),n(201),null,null);t.exports=o.exports},188:function(t,e,n){var o=n(5)(n(100),n(195),null,null);t.exports=o.exports},189:function(t,e,n){var o=n(5)(n(102),n(194),null,null);t.exports=o.exports},190:function(t,e,n){n(156);var o=n(5)(n(103),n(193),null,null);t.exports=o.exports},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-map-container"},[n("div",{ref:"vue-map",staticClass:"vue-map"}),t._v(" "),n("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._v(" "),t._t("visible")],2)},staticRenderFns:[]}},192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",{attrs:{id:"main-content"}},[n("section",{attrs:{id:"intro"}},[n("header",{staticClass:"header"},[n("div",{attrs:{id:"logo"}},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:"/static/img/logo.svg",alt:"Logo"}})])]),t._v(" "),n("div",{attrs:{id:"search-box"}}),t._v(" "),n("a",{staticClass:"menu-trigger",attrs:{href:"javascript:void(0)"}},[t._v("Menu"),n("span")])])]),t._v(" "),n("div",{staticClass:"content"},[n("h1",[t._v("About")])])])])}]}},193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-street-view-pano-container"},[n("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},194:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("span",{domProps:{textContent:t._s(t.label)}}),t._v(" "),n("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},staticRenderFns:[]}},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"flyaway"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2)])},staticRenderFns:[]}},196:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",{attrs:{id:"main-content"}},[n("section",{attrs:{id:"intro"}},[n("header",{staticClass:"header"},[t._m(0),t._v(" "),n("div",{attrs:{id:"search-box"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Maem Yuk"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),t._m(1)]),t._v(" "),n("gmap-map",{ref:"gmap",staticStyle:{width:"100%",height:"100%"},attrs:{center:t.defaultMarker.position,zoom:t.zoom}},[n("gmap-marker",{attrs:{icon:"/static/img/male.png",clickable:!0,position:t.defaultMarker.position,animation:t.animation},on:{click:function(e){t.showInfo(t.defaultMarker)}}}),t._v(" "),n("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen,content:t.infoContent},on:{closeclick:function(e){t.infoWinOpen=!1}}}),t._v(" "),n("gmap-cluster",t._l(t.markers,function(e,o){return n("gmap-marker",{key:"m",attrs:{icon:"/static/img/marker.png",position:e.position,clickable:!0,animation:t.animation},on:{click:function(n){t.toggleInfoWindow(e,o)}}})}))],1)],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"logo"}},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:"/static/img/logo.svg",alt:"Logo"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"menu-trigger",attrs:{href:"javascript:void(0)"}},[t._v("Menu"),n("span")])}]}},197:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"__cov-progress",style:t.style})},staticRenderFns:[]}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("vue-progress-bar"),t._v(" "),n("Navigation")],1)},staticRenderFns:[]}},199:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("div",{staticClass:"shadow-layer"}),t._v(" "),n("nav",{attrs:{id:"main-nav"}},[n("ul",[n("li",[n("router-link",{staticClass:"menu",attrs:{to:"/"}},[n("span",[t._v("Home")])])],1),t._v(" "),n("li",[n("router-link",{staticClass:"menu",attrs:{to:"/about"}},[n("span",[t._v("About")])])],1),t._v(" "),n("li",[n("router-link",{staticClass:"menu",attrs:{to:"/contact"}},[n("span",[t._v("Contact")])])],1)]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"close-menu",attrs:{href:"#"}},[t._v("Close"),n("span")])}]}},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",{attrs:{id:"main-content"}},[n("section",{attrs:{id:"intro"}},[n("header",{staticClass:"header"},[n("div",{attrs:{id:"logo"}},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:"/static/img/logo.svg",alt:"Logo"}})])]),t._v(" "),n("div",{attrs:{id:"search-box"}}),t._v(" "),n("a",{staticClass:"menu-trigger",attrs:{href:"javascript:void(0)"}},[t._v("Menu"),n("span")])])]),t._v(" "),n("div",{staticClass:"content"},[n("h1",[t._v("Contact")])])])])}]}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value}})},staticRenderFns:[]}},209:function(t,e){},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(60),s=n(89),i=n.n(s),r=n(87),a=n(91),c=(n.n(a),n(86)),u=n(88),l=(n.n(u),n(90)),p=n.n(l);o.a.config.productionTip=!1,o.a.use(p.a,{color:"#DF1A22",failedColor:"yellow",height:"5px"}),o.a.use(a,{load:{key:c.a.api_key}}),new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},80:function(t,e,n){n(155);var o=n(5)(n(101),n(191),null,null);t.exports=o.exports},86:function(t,e,n){"use strict";e.a={api_key:"AIzaSyCUACqVaw9UVWvXTnXo3Q20aYR_kAUZQT8"}},87:function(t,e,n){"use strict";var o=n(60),s=n(202),i=n(184),r=n.n(i),a=n(182),c=n.n(a),u=n(183),l=n.n(u);o.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/about",name:"AboutUs",component:c.a},{path:"/contact",name:"Contact",component:l.a}]})},88:function(t,e){},89:function(t,e,n){var o=n(5)(n(94),n(198),null,null);t.exports=o.exports},92:function(t,e,n){"use strict";e.a={appId:"AZTRNBBLEBOX0LMJF3TS4XE5RBRNFDZH5UE23XZAVMCYB43W",secretKey:"ARAZ3TDW320OGLZVQ3GHIZ4TMDVSI51KAVQRHQLQUO2MXANH"}},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="undefined"!=typeof window;e.default={name:"VueProgress",serverCacheKey:function(){return"Progress"},computed:{style:function t(){var e=this.progress.options.location,t={"background-color":this.progress.options.canSuccess?this.progress.options.color:this.progress.options.failedColor,opacity:this.progress.options.show?1:0};return"top"==e||"bottom"==e?("top"===e?t.top="0px":t.bottom="0px",this.progress.options.inverse?t.right="0px":t.left="0px",t.width=this.progress.percent+"%",t.height=this.progress.options.thickness,t.transition="width "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity):"left"!=e&&"right"!=e||("left"===e?t.left="0px":t.right="0px",this.progress.options.inverse?t.top="0px":t.bottom="0px",t.height=this.progress.percent+"%",t.width=this.progress.options.thickness,t.transition="height "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity),t},progress:function(){return o?window.VueProgressBarEventBus.RADON_LOADING_BAR:{percent:0,options:{canSuccess:!0,show:!1,color:"rgb(19, 91, 55)",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s"},location:"top",autoRevert:!0,inverse:!1}}}}}},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(185),s=n.n(o);e.default={name:"app",components:{Navigation:s.a}}},95:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"About",data:function(){return{msg:"About"}}}},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact",data:function(){return{msg:"Contact"}}}},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(106),s=n.n(o),i=n(23),r=n.n(i),a=n(0),c=n.n(a),u=n(92),l=n(161),p=n.n(l),f=p()(u.a.appId,u.a.secretKey);e.default={name:"home",mounted:function(){this.getCurrentLocation()},watch:{search:c.a.debounce(function(t){this.fetchData(t)},500)},data:function(){return{search:"",zoom:15,animation:4,defaultMarker:{position:{lat:-7.7713527000000004,lng:110.3459022},infoText:"You Are Here"},infoContent:"",infoWinOpen:!1,infoOptions:{pixelOffset:{width:0,height:-35}},infoWindowPos:{lat:0,lng:0},markers:[]}},methods:{getCurrentLocation:function(){if(navigator.geolocation){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.defaultMarker.position.lat=e.coords.latitude,t.defaultMarker.position.lng=e.coords.longitude})}},toggleInfoWindow:function(t,e){this.infoWindowPos=t.position,this.infoContent=t.infoText,this.infoWinOpen=this.currentMidx!==e||!this.infoWinOpen,this.currentMidx=e},showInfo:function(t){this.infoWindowPos=t.position,this.infoContent=t.infoText,this.infoWinOpen=!0},resetPosition:function(){var t=this;this.$refs.gmap.panTo(this.defaultMarker.position),this.infoWinOpen=!1,this.markers=[],setTimeout(function(){t.zoom=14},1e3)},fetchData:function(t){var e=this;if(!t.length)return this.resetPosition(),!1;var n=this.defaultMarker.position,o={ll:n.lat+","+n.lng,query:t,radius:3e3};this.$Progress.start(),this.markers=[],new r.a(function(t,e){f.venues.explore(o,function(n,o){n?e(n):t(o)})}).then(function(t){var o=t.response.groups[0].items,i=[];e.infoWinOpen=!1,o.forEach(function(t){var o=t.venue.location.formattedAddress,r=t.hasOwnProperty("tips")?c.a.first(t.tips):s()({}),a=r.hasOwnProperty("photourl")?r.photourl:"/static/img/default.png",u=t.venue.hasOwnProperty("hours")&&t.venue.hours.isOpen?"Open":"Close",l=t.venue.hasOwnProperty("rating")?t.venue.rating:"-",p="http://maps.google.com/maps?&z=10&q="+t.venue.name.replace(" ","+")+"&ll="+n.lat+"+"+n.lng,f=t.venue.name.toLowerCase();i.push({position:{lat:t.venue.location.lat,lng:t.venue.location.lng},infoText:e.templateInfo(f,o.join(","),u,a,l,p)}),e.markers=i,e.$Progress.finish()})})},templateInfo:function(t,e,n,o,s,i){return'<img class="venue-photo" src='+o+'>\n        <div class="venue-wrapper">\n          <div class="venue-title">\n            '+t+'\n            <span class="rating">'+s+'</span>\n          </div>\n          <p class="venue-description">'+e+'</p>\n          <div class="venue-open">\n            (Currently '+n+')\n            <a href="'+i+'" class="venue-detail" target="_blank">Details...</a>\n          </div>\n        </div>'}}}},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Navigation"}}},[210]);
//# sourceMappingURL=app.c3720ad9ca1aca4f7dcf.js.map