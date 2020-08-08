import { installRenderHelpers } from './render-helpers/index'
import { createElement } from '../vdom/create-element'

export function initRender (vm) {
  vm._vnode = null
  // render函数的_c方法
  vm._c = (a, b, ...c) => createElement(vm, a, b, ...c)
}

export function renderMixin (Vue) {
  // render函数的_v、_s等方法添加
  installRenderHelpers(Vue.prototype)

  Vue.prototype.$nextTick = function () {
    // $nextTick方法
  }

  Vue.prototype._render = function () {
    const vm = this
    const { render } = vm.$options
    let vnode = render.call(vm)
    return vnode
  }
}