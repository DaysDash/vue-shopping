(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-036a4170"],{"146f":function(t,c,d){"use strict";d.r(c);var s=function(){var t=this,c=t.$createElement,d=t._self._c||c;return t.product?d("div",[d("div",{staticClass:"product"},[d("div",{staticClass:"product-image"},[d("img",{attrs:{src:t.product.image}})]),d("div",{staticClass:"product-info"},[d("h1",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),d("div",{staticClass:"product-cost"},[t._v("￥ "+t._s(t.product.cost))]),d("div",{staticClass:"product-add-cart",on:{click:t.handleAddToCart}},[t._v("加入购物车")])])]),d("div",{staticClass:"product-desc"},[d("h2",[t._v("产品介绍")]),t._l(10,(function(t){return d("img",{key:t,attrs:{src:"http://192.168.1.3:8000/"+t+".jpg"}})}))],2)]):t._e()},i=[],a=(d("7db0"),d("94bd")),n={data:function(){return{id:parseInt(this.$route.params.id),product:null}},methods:{getProduct:function(){var t=this;setTimeout((function(){t.product=a["a"].find((function(c){return c.id===t.id}))}),500)},handleAddToCart:function(){this.$store.commit("addCart",this.id)}},mounted:function(){this.getProduct()}},r=n,o=(d("91c3"),d("2877")),u=Object(o["a"])(r,s,i,!1,null,"6ad0e8c4",null);c["default"]=u.exports},"8e7d":function(t,c,d){},"91c3":function(t,c,d){"use strict";var s=d("8e7d"),i=d.n(s);i.a}}]);
//# sourceMappingURL=chunk-036a4170.3768508e.js.map