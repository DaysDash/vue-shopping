(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-036a4170":"3768508e","chunk-24cbd114":"9ed3bdbc","chunk-5f2cfaee":"5571c4ee"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-036a4170":1,"chunk-24cbd114":1,"chunk-5f2cfaee":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-036a4170":"20185083","chunk-24cbd114":"f1845868","chunk-5f2cfaee":"3e881f9a"}[t]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"38c8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("router-link",{staticClass:"header-title",attrs:{to:"/list"}},[t._v("电商网站示例")]),n("div",{staticClass:"header-menu"},[n("router-link",{staticClass:"header-menu-cart",attrs:{to:"/cart"}},[t._v(" 购物车 "),t.cartList.length?n("span",[t._v(t._s(t.cartList.length))]):t._e()])],1)],1),n("router-view")],1)},i=[],o={computed:{cartList:function(){return this.$store.state.cartList}},mounted:function(){this.$store.commit("setCart")}},c=o,s=n("2877"),u=Object(s["a"])(c,a,i,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f"));r["a"].use(d["a"]);var f=[{path:"/list",meta:{title:"商品列表"},component:function(){return n.e("chunk-5f2cfaee").then(n.bind(null,"6be2"))}},{path:"/list/:id",meta:{title:"商品详情"},component:function(){return n.e("chunk-036a4170").then(n.bind(null,"146f"))}},{path:"/cart",meta:{title:"购物车"},component:function(){return n.e("chunk-24cbd114").then(n.bind(null,"da83"))}},{path:"*",redirect:"/list"}],m=new d["a"]({mode:"history",routes:f});m.beforeEach((function(t,e,n){window.document.title=t.meta.title,n()})),m.afterEach((function(t,e){window.scrollTo(0,0)}));var p=m,g=(n("7db0"),n("c740"),n("4160"),n("d81d"),n("a434"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),h=n("2f62"),b=n("94bd");r["a"].use(h["a"]);var v=window.localStorage,y=new h["a"].Store({state:{productList:[],cartList:[]},getters:{brands:function(t){var e=new Set(t.productList.map((function(t){return t.brand})));return Object(g["a"])(e)},colors:function(t){var e=new Set(t.productList.map((function(t){return t.color})));return Object(g["a"])(e)}},mutations:{setProductList:function(t,e){t.productList=e},setCart:function(t){var e=v.getItem("cart"),n=JSON.parse(e);n.forEach((function(e){return t.cartList.push(e)}))},addCart:function(t,e){var n=t.cartList.find((function(t){return t.id===e}));n?n.count++:t.cartList.push({id:e,count:1});var r=JSON.stringify(t.cartList);v.setItem("cart",r)},editCartCount:function(t,e){var n=t.cartList.find((function(t){return t.id===e.id}));n.count+=e.count;var r=JSON.stringify(t.cartList);v.setItem("cart",r)},deleteCart:function(t,e){var n=t.cartList.findIndex((function(t){return t.id===e}));t.cartList.splice(n,1);var r=JSON.stringify(t.cartList);v.setItem("cart",r)},emptyCart:function(t){t.cartList=[];var e=JSON.stringify(t.cartList);v.setItem("cart",e)}},actions:{getProductList:function(t){setTimeout((function(){t.commit("setProductList",b["a"])}),500)},buy:function(t){return new Promise((function(e){setTimeout((function(){t.commit("emptyCart"),e()}),500)}))}},modules:{}});n("38c8");r["a"].config.productionTip=!1,new r["a"]({router:p,store:y,render:function(t){return t(l)}}).$mount("#app")},"94bd":function(t,e,n){"use strict";e["a"]=[{id:1,name:"AirPods",brand:"Apple",image:"http://img.alicdn.com/imgextra/i2/2616970884/O1CN01xnPIys1IOud8LUYok_!!2616970884.jpg_430x430q90.jpg",sales:1e4,cost:1288,color:"白色"},{id:2,name:"BeatsX 入耳式耳机",brand:"Beats",image:"http://img.alicdn.com/imgextra/i4/2549841410/O1CN01KCVdrC1MHowBOGCmb_!!2549841410.jpg_430x430q90.jpg",sales:11e3,cost:1188,color:"白色"},{id:3,name:"Beats Solo3 Wireless 头戴式式耳机",brand:"Beats",image:"http://img.alicdn.com/imgextra/i2/1809177149/O1CN01Tz0xPh22gI2tPDSod_!!1809177149.jpg_430x430q90.jpg",sales:5e3,cost:2288,color:"金色"},{id:4,name:"Beats Pill+ 便携式扬声器",brand:"Beats",image:"http://img.alicdn.com/imgextra/i1/1917047079/TB2Ksj_ktrJ8KJjSspaXXXuKpXa_!!1917047079.jpg_430x430q90.jpg",sales:3e3,cost:1888,color:"红色"},{id:5,name:"Sonos PLAY:1 无线扬声器",brand:"Sonos",image:"http://img.alicdn.com/imgextra/i1/2131648629/O1CN018Hfty92Dc8FtwNfBr_!!2131648629.jpg_430x430q90.jpg",sales:8e3,cost:1578,color:"白色"},{id:6,name:"Powerbeats3 by Dr. Dre Wireless 入耳式耳机",brand:"Beats",image:"http://imgservice.suning.cn/uimg1/b2c/image/7-DpHMsWka04NZdv5_HbFQ==.jpg_800w_800h_4e",sales:12e3,cost:1488,color:"金色"},{id:7,name:"Beats EP 头戴式耳机",brand:"Beats",image:"http://imgservice.suning.cn/uimg1/b2c/image/4cKy7b3q-JedHsLB3pbmug==.jpg_800w_800h_4e",sales:25e3,cost:788,color:"蓝色"},{id:8,name:"B&O PLAY BeoPlay A1 便携式蓝牙扬声器",brand:"B&O",image:"http://imgservice4.suning.cn/uimg1/b2c/image/NpVWQDUfQwLhquqz0E7SYg.jpg_400w_400h_4e",sales:15e3,cost:1898,color:"金色"},{id:9,name:"Bose® QuietComfort® 35 无线耳机",brand:"Bose",image:"http://www.sundan.com/public/images/23/9e/9a/55242873abe07fcea6be450fcba0b5e240c15331.jpg?1537700238#h",sales:14e3,cost:2878,color:"蓝色"},{id:10,name:"B&O PLAY Beoplay H4 无线头戴式耳机",brand:"B&O",image:"http://imgservice4.suning.cn/uimg1/b2c/image/7L7wI4LmJ_Eol11sl7h0wg.jpg_400w_400h_4e",sales:9e3,cost:2298,color:"金色"}]}});
//# sourceMappingURL=app.93c416df.js.map