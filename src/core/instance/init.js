import { initState } from './state'
import { initRender } from './render'

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    let vm = this
    vm.$options = options

    initState(vm)
    initRender(vm)
    
    // 挂载
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
