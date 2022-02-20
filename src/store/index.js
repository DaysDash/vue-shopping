import Vue from 'vue'
import Vuex from 'vuex'
import product_data from '../product.js'


Vue.use(Vuex)
// 本地存储
const storge = window.localStorage;

export default new Vuex.Store({
  state: {
    // 商品数据列表
    productList: [],
    // 购物车数据
    cartList: [],
  },
  getters: {
    brands: state => {
      const brands = new Set( state.productList.map( obj => obj.brand ));
      return [...brands]
    },
    colors: state => {
      const colors = new Set( state.productList.map( obj => obj.color ));
      return [...colors]
    },
  },
  mutations: {
    // 添加商品列表
    setProductList(state, data){
      state.productList = data;
    },
    // 初始化购物车
    setCart(state){
      let json = storge.getItem('cart');
      let localCart = JSON.parse(json);
      localCart.forEach(value => state.cartList.push(value));
    },
    // 添加购物车
    addCart(state, id){
      // 先判断购物车是否已有,如果有,数量加一
      const isAdded = state.cartList.find(item => item.id === id);
      if(isAdded){
        isAdded.count ++
      } else {
        state.cartList.push({
          id:id,
          count: 1
        })
      } 
      let a = JSON.stringify(state.cartList);
      storge.setItem('cart', a)
    },
    // 修改物品数量
    editCartCount(state, payload){
      const product = state.cartList.find( item => item.id === payload.id);
      product.count += payload.count;
      let a = JSON.stringify(state.cartList);
      storge.setItem('cart', a)
    },
    // 删除商品
    deleteCart(state, id){
      const index = state.cartList.findIndex(item => item.id === id);
      state.cartList.splice(index, 1);
      let a = JSON.stringify(state.cartList);
      storge.setItem('cart', a)
    },
    // 清空购物车
    emptyCart(state){
      state.cartList = [];
      let a = JSON.stringify(state.cartList);
      storge.setItem('cart', a)
    },
  },
  actions: {
    // 请求商品列表
    getProductList(context){
      // 真实环境通过Ajax获取,这里用异步模拟
      setTimeout(() => {
        context.commit('setProductList', product_data);
      }, 500)
    },
    // 购买
    buy(context){
      // 真实环境应通过Ajax提交购买请求后再清空购物列表
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('emptyCart');
          resolve();
        }, 500)
      });
    }
  },
  modules: {
  }
})
