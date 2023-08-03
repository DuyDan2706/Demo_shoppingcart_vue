<template>
  <div>
    <header>
      <TheHeader
        :cartList="cartList"
        @handle-delete-cart="handleDelete"
        @handle-up-or-down-amount-cart="handleupOrdowAmount"
      />
    </header>

    <main class="container">
      <product-list @handle-buy="handleBy" />
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ProductList from './components/ProductList.vue'
export default {
  name: 'app',
  components: {
    TheHeader,
    ProductList
  },
  data() {
    return {
      cartList: []
    }
  },
  methods: {
    handleBy(ProductItem) {
      console.log('!2', ProductItem)
      //  this.$emit('handle-buy',ProductItem)
      //this.cartList.push(ProductItem)

      const index = this.cartList.findIndex((cart) => cart.id === ProductItem.id) //kiểm trả đã tồn tại
      if (index !== -1) {
        // tìm thấy product itwem trong cartList
        this.cartList[index].amout += 1
      } else {
        //ko tìm thấy

        const newProductItem = { ...ProductItem, amout: 1 }

        this.cartList = [...this.cartList, newProductItem]
      }
    },
    handleDelete(cart) {
      this.cartList = this.cartList.filter((cartItem) => cartItem.id !== cart.id)
    },
    handleupOrdowAmount(params) {
      const { status, cart } = params
      console.log('Dan111', params)
      const index = this.cartList.findIndex((cartItem) => cartItem.id === cart.id)
      if (index !== -1) {
        if (status) {
          //tăng
          //kiểm trả đã tồn tại
          this.cartList[index].amount += 1
        } else {
          // giảm
          if (this.cartList[index].amount > 1) {
            this.cartList[index].amount -= 1
          } else alert('không được giảm nữa')
        }
      }
    }
  }
}
</script>

<style></style>
