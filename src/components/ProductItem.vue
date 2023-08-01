<template>
 <div class="card text-left mt-3">
   <img class="card-img-top" :src="ProductItem.image" alt="anh">
   <div class="card-body">
     <h4 class="card-title">{{ ProductItem.name }}</h4>
     <h2 class="card-text text-danger">{{ ProductItem.price }}</h2>
   </div>
   <div class="mb-2 ">
    <button class="btn btn-danger ml-2" @click="handleBy(ProductItem)"> Mua</button>
   <button class="btn btn-info ml-2"> Chi tiết</button>
   </div>
 
 </div>
</template>

<script>
export default {
 props :{
  ProductItem : {
    type:Object
  }
 },
 methods : {
  handleBy(ProductItem){
    console.log(ProductItem)
    this.$emit('handle-buy',ProductItem)
  }
 }
}
</script>

<style>

</style>