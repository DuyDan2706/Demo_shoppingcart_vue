
<template>
  <div>
    <header>
    <TheHeader :cartList="cartList"/>
  </header>
   
  <main class="container">
 <product-list @handle-buy="handleBy"/>
  </main>
  </div>
 
</template>

<script >
import TheHeader from './components/TheHeader.vue';
import ProductList from './components/ProductList.vue';
 export default {
  name : "app",
   components :{
    TheHeader,
    ProductList,
   },
   data (){
    return {
      cartList:[],

    }
   },
   methods:{
   handleBy(ProductItem){
   console.log("!2",ProductItem)
  //  this.$emit('handle-buy',ProductItem)
  //this.cartList.push(ProductItem)
  this.cartList = [...this.cartList,ProductItem]
   }
 }
 }
</script>

<style >

</style>
