<template>
  <selection class="product-list">
   <h2 class="text-center text-danger font-weight-bold">Danh sách sản phẩm </h2>
   <div class="pro-list row">
   
    <!-- <div >
       <product-item/>
    </div> -->
    <div v-for="(ProductItem,index) in prodctList" class="col-lg-3" :key="index">
       <product-item :ProductItem="ProductItem" @handle-buy="handleBy"/>
    </div>

   </div>
  </selection>
</template>

<script>
import ProductItem from './ProductItem.vue'
import prodctList from  '../Data/productList.json'
export default {
   data(){
   return {
      prodctList
   }
   },
 components:{
  ProductItem
 },
 methods:{
   handleBy(ProductItem){
   console.log("!2",ProductItem)
   this.$emit('handle-buy',ProductItem)
   }
 }
}
</script>

<style>

</style>