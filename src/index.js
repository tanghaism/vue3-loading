// v-loading 组件
// 使用方法：在需要展示Loading的组件上绑定v-loading指令
// true：显示； false：隐藏
// options:{
//    component: 自定义加载组件
//    theme: 蒙层颜色dark light
// }

import { createApp, h, nextTick } from 'vue'
import Loading from './LoadingContainer.vue'
import DefaultLoading from "./DefaultLoading.vue";

export default {
  install: (app, options) => {
    try{
      const { component = DefaultLoading, theme = 'light' } = options || {}
      const toggleLoading = async (el, binding) => {
        if (binding.value) {
          await nextTick(() => {
            el.originalPosition = getComputedStyle(el, null).position
            insertDom(el, binding)
          })
          el.domInserted = true
        } else {
          el.comp.show = false
          if (el.domInserted) {
            removeDom(el, binding)
          }
        }
      }

      const insertDom = (el, binding) => {
        if (getComputedStyle(el, null).display !== 'none' && getComputedStyle(el, null).visibility !== 'hidden') {
          if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
            el.style.position = 'relative'
          }
          el.appendChild(el.loadingRoot)
          el.comp.show = true
        }
      }

      const removeDom = (el, binding) => {
        el && setTimeout(() => {
          try {
            el.domInserted = false
            el.removeChild(el.loadingRoot)
          } catch (e) {}
        }, 300)
      }

      app.directive('loading', {
        beforeMount (el, binding, vNode, oldVNode) {
          const loading = createApp(h(Loading, { theme }, () => [
            h(component)
          ]))
          el.loading = el
          el.loadingRoot = document.createElement('div')
          el.comp = loading.mount(el.loadingRoot)
          toggleLoading(el, binding)
        },
        updated (el, binding) {
          if (binding.oldValue !== binding.value) {
            toggleLoading(el, binding)
          }
        },
        unmounted (el, binding) {
          if (el.domInserted) {
            removeDom(el, binding)
            toggleLoading(el, { value: false })
          }
          el.comp = null
        }
      })
    }catch (e) {
      console.warn(e)
    }

  }
}
