<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand logo" href="#">Demo Test</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div>
        <button class="btn btn-danger" @click="handleOpenModalCartList">
          <i class="fa fa-shopping-cart"></i>
          <span class="badge badge-light ml-1">0</span>
        </button>
      </div>
    </div>
  </nav>
  <!--  đóng hay mở phụ thuộc vào isOpen là true or False -->
   
  <teleport to="#app">
    <app-modal :issOpen="issOpenModalCartList" :handlecloseModal="handleCloseModalCartList">
       <section>
         Nội dung danh sách giỏi hàng
       </section>
  
  </app-modal>
  </teleport>



 
</template>

<script>
// import AppModal from './AppModal.vue'
// export default {
//   components: { AppModal },}
export default{
  data(){
     return {
      issOpenModalCartList:false, // đóng modal 
     }
  },
  methods: {
    handleOpenModalCartList() {
      this.issOpenModalCartList = true;//  mở modal
    },
    handleCloseModalCartList() {
      this.issOpenModalCartList = false;//  Tắt modal
    },
  }
}
</script>

<style>
.logo {
  font-size: 30px;
  background: -webkit-linear-gradient(#41b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
