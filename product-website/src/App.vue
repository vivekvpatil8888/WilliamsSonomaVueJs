<template>
  <div class='container'>
    <div v-for="item in AllProducts.groups" :key="item.id">
      <Product :productData="item" @show-carousel="showCarousel"/>
    </div>
  </div>
  <div v-show="displaySlides" class="slider"><Carousel :images="images" @close-carousel="closeCarousel" :resetindex="resetIndex"/></div>
</template>

<script>
import Product from './components/Product.vue'
import Carousel from './components/Carousel.vue'
import ProductData from './assets/productData.json'

export default {
  name: 'App',
  components: {
    Product,
    Carousel
  },
  data() {
    return {
      AllProducts: ProductData,
      displaySlides: false,
      images: [],
      resetIndex: 0
    }
  },
  mounted() {
    // fetch('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json')
    // .then((response) => {
    //   if (response.ok) {
    //     return response.json()
    //   }
    // })
    // .then((response) => {
    //   const data = response
    //   this.AllProducts = data
    //   console.log(this.AllProducts)
    // })
    // .catch((error) => {
    //   console.log("SOME ERROR: ", error)
      
    // })
    // fetch('./assets/productData.json').then((response) => {
    //     this.AllProducts = response.json()
    //     console.log(this.AllProducts)
      // })
  },
  methods: {
    showCarousel(id) {
      this.displaySlides = true
      const imagesForCarousel = this.AllProducts.groups.find((item) => item.id === id)
      this.images = imagesForCarousel.images
    },
    closeCarousel() {
      this.displaySlides = false
      this.image = []
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  top: 0%;
}

.slider {
  position: fixed;
  top: 20%;
  left: 35%;
  background-color: red;
  width: 600px;
  height: 600px;
}

@media only screen and (max-width: 411px) {
  .container {
    display: grid;
    grid-template-columns: auto;
  }
  .slider {
    position: fixed;
    top: 30%;
    left: 0%;
    background-color: red;
    width: 370px;
    height: 400px;
  }
}
</style>
