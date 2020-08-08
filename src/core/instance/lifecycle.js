import Watcher from '../observer/watcher'

export function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode) {
    const vm = this
    vm.$el = vm.__patch__(vm.$el, vnode)
  }
}

export function mountComponent (vm, el) {
  vm.$el = el

  let updateComponent
  // 初始化渲染和后期更新都是使用当前的方法
  updateComponent = () => {
    vm._update(vm._render())
  }

  new Watcher(vm, updateComponent, () => {}, {}, true)
}