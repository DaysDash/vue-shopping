<template>
  <div v-show="list.length">
    <div class="list-control">
      <div class="list-control-filter">
        <span>品牌: </span>
        <span
          v-for="item in brands"
          :key = "item"
          class="list-control-filter-item"
          :class="{on: filterBrand.includes(item)}"
          @click="handleFilterBrand(item)"
        >{{ item }}</span>
        <span class="list-control-refresh" @click="refreshFilterBrand">清空</span>
      </div>
      <div class="list-control-filter">
        <span>颜色: </span>
        <span
          v-for="item in colors"
          :key = "item"
          class="list-control-filter-item"
          :class="{on: filterColor.includes(item)}"
          @click="handleFilterColor(item)"
        >{{ item }}</span>
        <span class="list-control-refresh" @click="refreshFilterColor">清空</span>
      </div>
      <div class="list-control-order">
        <span>排序: </span>
        <span 
          :class="{on: order === ''}"
          @click="handleOrderDefault"
          class="list-control-order-item">默认</span>
        <span 
          :class="{on: order.indexOf('sales') > -1}"
          @click="handleOrderSales"
          class="list-control-order-item">
          销量
          <template v-if="order === 'sales-asc'">↑</template>
          <template v-if="order === 'sales-desc'">↓</template>
        </span>
        <span 
          :class="{on: order.indexOf('cost') > -1}"
          @click="handleOrderCost"
          class="list-control-order-item">
          价格
          <template v-if="order === 'cost-asc'">↑</template>
          <template v-if="order === 'cost-desc'">↓</template>
        </span>
      </div>
    </div>
    <Product v-for="item in filteredAndOrederdList" :info="item" :key="item.id"></Product>
    <div class="product-not-found" v-show="!filteredAndOrederdList.length">暂无相关商品</div>
  </div>

</template>
<script>
import Product from '../components/product'

export default {
  components: { Product },
  data(){
    return{
      filterBrand: [],
      filterColor: [],
      order: ''
    }
  },
  computed: {
    list(){
      return this.$store.state.productList;
    },
    brands(){
      return this.$store.getters.brands;
    },
    colors(){
      return this.$store.getters.colors;
    },
    filteredAndOrederdList(){
      // 复制原始数据
      let list = [...this.list];
      //按品牌过滤
      if( this.filterBrand.length){
        list = list.filter( item => this.filterBrand.includes(item.brand));
      }
      // 按颜色过滤
      if( this.filterColor.length){
        list = list.filter( item => this.filterColor.includes(item.color));
      }
      // 排序
      if(this.order !== ''){
        if(this.order === 'sales-desc'){
          list = list.sort((a, b) => b.sales - a.sales);
        } else if (this. order === 'sales-asc'){
          list = list.sort((a,b) => a.sales - b.sales)
        } else if ( this.order === 'cost-desc' ){
          list = list.sort((a,b) => b.cost - a.cost);
        } else if (this.order === 'cost-asc') {
          list = list.sort((a,b) => a.cost - b.cost);
        }
      }
      return list;
    }
  },
  methods: {
    handleFilterBrand(brand){
      if(this.filterBrand.includes(brand)){
        this.filterBrand.splice(this.filterBrand.indexOf(brand),1)
      } else {
        this.filterBrand.push(brand);
      }
    },
    handleFilterColor(color){
      if(this.filterColor.includes(color)){
        this.filterColor.splice(this.filterColor.indexOf(color),1)
      } else {
      this.filterColor.push(color);
      }
    },
    handleOrderDefault(){
      this.order = '';
    },
    handleOrderSales(){
      if(this.order === 'sales-desc'){
        this.order = 'sales-asc'
      } else {
      this.order = 'sales-desc';
      }
    },
    handleOrderCost(){
      if( this.order === 'cost-desc'){
        this.order = 'cost-asc';
      } else {
        this.order = 'cost-desc';
      }
    },
    refreshFilterBrand(){
      this.filterBrand = [];
    },
    refreshFilterColor(){
      this.filterColor = [];
    }
  },
  mounted(){
    this.$store.dispatch('getProductList');
  },
}
</script>
<style scoped>
span{
  user-select: none;
}
.list-control{
  background-color: #ffffff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0,0,0,.2);
}
.list-control-filter{
  margin-bottom: 16px;
}
.list-control-refresh{
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  color: grey;
}
.list-control-filter-item,
.list-control-order-item{
  cursor: pointer;
  display: inline-block;
  border: 1px solid #e9eaec;
  border-radius: 4px;
  margin-right: 6px;
  padding: 2px 6px;
}
.list-control-filter-item.on,
.list-control-order-item.on{
  background-color: #f2352e;
  border: 1px solid #f2352e;
  color: #ffffff;
}

.product-not-found{
  text-align: center;
  padding: 32px;
}

</style>

