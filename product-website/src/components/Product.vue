<template>
  <div class="product-container">
    <img :src="href" :alt="productData.alt" @click="showCarousel"/>
    <div class="product-name">{{productData.name.toUpperCase()}}</div>
    <div class="product-price">$ {{price}}</div>
  </div>
</template>

<script>
export default {
    name: 'Product',
    data() {
        return {
            href: '',
            price: null
        }
    },
    props: {
        productData: {}
    },
    created() {
        this.href = this.productData.thumbnail ? this.productData.thumbnail.href : '';
        this.price = this.productData.price ? this.productData.price.regular : 'N/A'
    },
    methods: {
        showCarousel() {
            this.$emit("show-carousel", this.productData.id)
        }
    }
}
</script>
<style>
img {
    width: 400px;
    height: 400px;
}

.product-name {
    position: absolute;
    top: 0px;
    left: 115px;
    width: 385px;
    height: 30px;
    text-align: left;
    font-weight: bold;
    padding-top: 15px;
    padding-left: 15px;
    background-color: rgba(240, 221, 218, 0.5) 
}

.product-price {
    position: absolute;
    bottom: 10px;
    font-weight: bold;
    left: 120px;
    background-color: teal;
    color: white;
    padding: 5px
}

.product-container {
    position: relative;
    width: 100%;
}


@media only screen and (max-width: 411px) {
  .product-name {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 385px;
        height: 30px;
        text-align: left;
        font-weight: bold;
        padding-top: 15px;
        padding-left: 15px;
        background-color: rgba(240, 221, 218, 0.5) 
    }

    .product-container {
        position: relative;
    }

    img {
        width: 400px;
        height: 400px;
        margin: 0px;
    }

    .product-price {
        position: absolute;
        bottom: 10px;
        font-weight: bold;
        left: 2%;
        background-color: teal;
        color: white;
        padding: 5px
    }
}
</style>