<template>
  <button class="close" @click.prevent="this.$emit('close-carousel'); indexReset();">X</button>
  <div class="carousel-container">
    <div v-for="(image,index) in images" :key="image.href">
        <img :src="image.href" :alt="image.alt" :id="index" :class="[index == currentIndex ? 'active' : 'inactive']">
    </div>
    <!-- <img :src="currentHref" :alt="alt"> -->
  </div>
  <button class="right" @click="next">&gt;</button>
  <button class="left" @click="prev">&lt;</button>
  <div class="circle-container">
    <p v-for="(image,index) in images.length" :key="image" :class="[index == currentIndex ? 'active-circle' : 'inactive-circle']">o</p>
  </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() { 
        return {
            href: '',
            currentIndex: 0,
            displayValue: 'none'
        }
    },
    emits: ["close-carousel"],
    props: {
        images: {},
        resetindex: Number
    },
    created() {
        this.currentIndex = this.resetindex
    },
    computed: {

    },
    methods: {
        indexReset() {
            this.currentIndex = 0
        },
        next() {
            this.currentIndex + 1 < this.images.length ? this.currentIndex++ : this.currentIndex
        },
        prev() {
            this.currentIndex - 1 > -1 ? this.currentIndex-- : this.currentIndex
        },
        isActive(index) {
            if(index === this.currentIndex) {
                return true
            }
            return false
        }
    }
}
</script>

<style>
.inactive {
    display: none;
}

.close {
    font-size: 30px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    position: absolute;
    top: 0px;
    right: 0px;
}

.active {
    height: 600px;
    width: 600px;
}

.right {
    position: absolute;
    top: 50%;
    right: 0%;
    font-size: 50px;
    width: 60px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
}

.left {
    position: absolute;
    top: 50%;
    left: 0%;
    font-size: 50px;
    width: 60px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
}

p {
    display: inline;
    font-size: 20px;
    margin: 10px
}
.circle-container {
    position: absolute;
    bottom: 0%;
    width: 600px;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.5);
}

.active-circle {
    color: blue;
}
.inactive-circle {
    color: rgb(179, 179, 187);
}

@media only screen and (max-width: 411px) {
  .close {
    font-size: 30px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    position: absolute;
    top: 0px;
    right: 0px;
    }

    .active {
        height: 400px;
        width: 400px;
    }

    .right {
        position: absolute;
        top: 50%;
        right: 5px;
        font-size: 50px;
        width: 60px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
    }

    .left {
        position: absolute;
        top: 50%;
        left: 0%;
        font-size: 50px;
        width: 60px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        border: none;
    }

    p {
        display: inline;
        font-size: 20px;
        margin: 10px
    }

    .circle-container {
        position: absolute;
        bottom: 0%;
        width: 400px;
        height: 25px;
        background-color: rgba(255, 255, 255, 0.5);
    }
}
</style>