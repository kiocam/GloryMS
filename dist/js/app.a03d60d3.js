(function(t){function e(e){for(var r,i,o=e[0],u=e[1],c=e[2],l=0,p=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var u=a[i];0!==n[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9838a693"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(t);var c=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}n[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"09a4":function(t,e,a){"use strict";a("665f")},"10b6":function(t,e,a){t.exports=a.p+"img/maple-leaf.ffff264f.png"},"1ee8":function(t,e,a){},"31e8":function(t,e,a){"use strict";a("7da1")},"370a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-container-expand",attrs:{id:"app"}},[a("router-view")],1)},s=[],i=(a("034f"),a("2877")),o={},u=Object(i["a"])(o,n,s,!1,null,null,null),c=u.exports,l=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("Hero"),a("StatusBar"),a("section",{staticClass:"main-content uk-section uk-padding-large"},[a("div",{staticClass:"uk-container"},[a("article",{staticClass:"uk-article"},[a("h1",{staticClass:"uk-article-title"},[t._v(" "+t._s(t.pageData.name)+" ")]),a("hr",{staticClass:"uk-divider-icon"}),a("p",{staticClass:"uk-text-lead"},[t._v(t._s(t.pageData.mainContent))])])])]),a("section",{staticClass:"feats-sec uk-section"},[a("div",{staticClass:"feats uk-container"},[a("h2",{staticClass:"uk-article-title"},[t._v("Our Features")]),a("hr",{staticClass:"uk-divider-icon"}),a("div",{staticClass:"uk-column-1-2"},[a("ul",{staticClass:"uk-list uk-list-disc uk-list-primary"},t._l(t.features,(function(e){return a("li",{key:e,staticClass:"feats-list"},[t._v(" "+t._s(e)+" ")])})),0)])])]),t._m(0),a("Footer")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"uk-section",attrs:{id:"downloads"}},[a("div",{staticClass:"uk-child-width-1-2@s uk-grid-collapse uk-text-center",attrs:{"uk-grid":""}},[a("div",[a("div",{staticClass:"uk-tile uk-tile-primary"},[a("p",{staticClass:"uk-h2"},[t._v("Glory Maple v0.2")]),a("p",[a("a",{staticClass:"uk-link-muted",attrs:{href:"https://mega.nz/file/yPgwBRRZ#PTmFxcBGDToA8Z1dnJs_uSn5_vk8eqV3BicQc4hdtmM"}},[t._v("Current Version")])])])]),a("div",[a("div",{staticClass:"uk-tile uk-tile-secondary"},[a("p",{staticClass:"uk-h2"},[t._v("Instructions")]),a("p",[t._v("Download unzip and play!")])])])])])}],d=(a("96cf"),a("1da1")),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"uk-position-top"},[r("nav",{staticClass:"uk-navbar-container uk-navbar-transparent uk-padding-large",attrs:{"uk-navbar":""}},[r("div",{staticClass:"uk-navbar-center"},[r("div",{staticClass:"uk-navbar-center-left"},[r("div",[r("ul",{staticClass:"uk-navbar-nav"},[r("li",{},[r("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)])])]),r("img",{staticClass:"image",attrs:{src:a("10b6"),alt:"logo img"}}),r("a",{staticClass:"uk-navbar-item uk-logo",attrs:{href:"#"}},[t._v("GloryMS")]),t._m(0)])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-navbar-center-right"},[a("div",[a("ul",{staticClass:"uk-navbar-nav"},[a("li",[a("a",{attrs:{href:"#downloads","uk-scroll":""}},[t._v("Downloads")])])])])])}],h={},_=h,k=(a("9455"),Object(i["a"])(_,v,m,!1,null,"6513206a",null)),b=k.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"site-footer"},[a("div",{staticClass:"uk-container"},[a("p",{staticClass:"copyright-text"},[t._v("Copyright © 2021 All Rights Reserved by "),a("a",{attrs:{href:"#"}},[t._v("GloryMS")]),t._v(". ")])])])}],y={},w=y,x=(a("31e8"),Object(i["a"])(w,g,C,!1,null,"295bffe4",null)),O=x.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"uk-cover-container",attrs:{"uk-height-viewport":""}},[a("video",{attrs:{src:"https://res.cloudinary.com/connexmedia/video/upload/v1610139212/MapleStory_-_Red_-_First_Impact_Animation_Video_HD_-ywFY30jv0a0.mp4#t=21",autoplay:"",loop:"",muted:"","uk-cover":""},domProps:{muted:!0}}),a("div",{staticClass:"uk-overlay-primary uk-position-cover"}),t._m(0)])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overlay-text uk-overlay uk-position-bottom uk-dark"},[a("p",{staticClass:"uk-text-bold"})])}],S={},P=S,$=(a("b247"),Object(i["a"])(P,j,E,!1,null,"506f7ffe",null)),M=$.exports,D=a("bc3a"),H=a.n(D),R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stats-bar uk-padding-small"},[a("ul",{staticClass:"uk-subnav",attrs:{"uk-margin":""}},[a("li",[t._v("Server Status: "),a("span",{staticClass:"green-txt"},[t._v("Online")])]),a("li",[a("a",{attrs:{href:"https://gtop100.com/topsites/MapleStory/sitedetails/Glory-Maple-99084"}},[t._v("Vote Here")])])])])}],F={},A=F,B=(a("09a4"),Object(i["a"])(A,R,T,!1,null,"5222fc37",null)),G=B.exports,V={components:{Header:b,Footer:O,Hero:M,StatusBar:G},data:function(){return{pageData:{},features:{}}},created:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("http://161.35.134.233/pages?id_eq=1");case 2:a=e.sent,r=a.data,t.pageData=r[0],t.features=r[0].feats.offers;case 6:case"end":return e.stop()}}),e)})))()}},q=V,J=(a("c221"),Object(i["a"])(q,f,p,!1,null,"bb2374f6",null)),z=J.exports;r["a"].use(l["a"]);var I=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],L=new l["a"]({routes:I}),Z=L;r["a"].config.productionTip=!1,new r["a"]({router:Z,render:function(t){return t(c)}}).$mount("#app")},"665f":function(t,e,a){},"79f2":function(t,e,a){},"7da1":function(t,e,a){},"85ec":function(t,e,a){},9455:function(t,e,a){"use strict";a("1ee8")},b247:function(t,e,a){"use strict";a("79f2")},c221:function(t,e,a){"use strict";a("370a")}});
//# sourceMappingURL=app.a03d60d3.js.map