
<template>
  <div>
    <header>
    <TheHeader/>
  </header>
   
  <main class="container">
 <product-list/>
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
   }
 }
</script>

<style >

</style>
