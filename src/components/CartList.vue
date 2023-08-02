<template>

 <table class="table">
    <thead>
        <tr>
            <th>SST</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng trong kho</th>
            <th>Số lượng </th>
            <th>Thành tiền</th>
            <th>Xóa</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(cart,index) in cartList" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ cart.name }}</td>
            <td>{{ cart.price }}</td>
            <td>{{ cart.quantityInStock }}</td>
            <td>

                <button class="btn btn-success"> <i class="fa fa-arrow-up"></i></button>
                  <span class="mx-2">{{ cart.amout }}</span>
                <button class="btn btn-success"> <i class="fa fa-arrow-down"></i></button>
            </td>
            <td>{{ cart.amout * cart.price  }}</td>
            <td>
                <button class="btn btn-danger" @click="handleDelete(cart)"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
        <tr>
            <td scope="row" class="btn ">Tổng tiền </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{{ sumMoney }}</td>
            <td></td>
        </tr>
    </tbody>
 </table>
</template>

<script>
export default {
    props:{
    cartList:{
      type:Array
    }
  },
  computed:{
    sumMoney() {
       return this.cartList.reduce((sum,cart)=> sum += cart.amout * cart.price , 0)
    }
  },
  methods : {
    handleDelete(cart){
      this.$emit("handle-delete-cart",cart)
    }
  }
}
</script>

<style>

</style>