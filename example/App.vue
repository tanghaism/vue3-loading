<template>
  <div>
    <div class="test" v-loading="loading">
      <h1>这是content</h1>
    </div>
    <button type="button" @click="setLoading">显示/隐藏Loading</button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'example',
    setup (props) {
      const loading = ref(false)
      return {
        loading,
        setLoading(){
          loading.value = !loading.value
        }
      }
    }
  }
</script>

<style>
.test{
  width: 100%;
  height: 300px;
  line-height: 300px;
  text-align: center;
}
</style>
