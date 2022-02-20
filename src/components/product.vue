<template>
  <div class="product">
    <router-link :to="'/list/' + info.id" class="product-main">
      <img :src="info.image">
      <h4>{{ info.name }}</h4>
      <div class="product-color" :style="{background: colors[info.color]}"></div>
      <div class="product-cost">￥ {{ info.cost }}</div>
      <div class="product-add-card" @click.prevent="handleCart">加入购物车</div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    info: Object
  },
  data(){
    return {
      colors: {
        '白色': '#ffffff',
        '金色': '#dac272',
        '蓝色': '#233472',
        '红色': '#f2352e',
      }
    }
  },
  methods: {
    handleCart(){
      this.$store.commit('addCart', this.info.id);
    }
  },
  mounted(){
    this.$store.dispatch('getProductList');
  }
}
</script>
<style  scoped>
  .product{
    width: 25%;
    float: left;
  }
  .product-main{
    display: block;
    margin: 16px;
    padding: 16px;
    border: 1px solid #dddee1;
    overflow: hidden;
    background-color: #ffffff;
    text-align: center;
    position: relative;
    border-radius: 6px;
  }
  .product-main img{
    width: 100%;
  }
  h4{
    color: #222222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
  .product-main:hover h4{
    color: #0070c9;
  }
  .product-color{
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #dddee1;
    margin: 6px auto;
    border-radius: 50%;
  }
  .product-cost{
    color: #de4037;
    margin-top: 6px;
  }
  .product-add-cart{
    display: none;
    padding: 4px 8px;
    background-color: #2d8cf0;
    color: #ffffff;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .product-main:hover .product-add-cart{
    display: inline-block;
  }
</style>