<template>
    <transition name="fade" mode="out-in">
        <div class="custom-loading" :class="theme" v-if="show">
            <div class="loading">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'loading',
  props:{
    theme: {
        type: String,
        default: 'light' // or dark
    }
  },
  setup(){
     const show = ref(true)
     return { show }
  }
}
</script>

<style scoped>
    .custom-loading{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1150;
    }
    .custom-loading.light{
        background: rgba(255,255,255, .8);
    }
    .custom-loading.dark{
        background: rgba(0,0,0, .8);
    }
    .loading{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
    }
</style>
